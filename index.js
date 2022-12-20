const express = require("express");
const app = express();
const { connect } = require("./config/connection");
require("dotenv").config();
const cors = require("cors");
const logger = require("morgan");
const userRoutes = require("./routes/user");

// middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

// routes
app.use("/",userRoutes)
// database connection
connect();

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})
