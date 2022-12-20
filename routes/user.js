const express = require("express");
const {register, login,changePassword, getUser, deleteUser,getAllUsers} = require("../controllers/userController");
const { authUser } = require("../middlewares/auth");
const router = express.Router();

// all user routes

router.post("/register", register);
router.post("/login", login);
router.put("/changePassword",authUser, changePassword);
router.get("/getUser/:id",authUser,getUser)
router.get("/getAllUsers",authUser,getAllUsers)
router.delete("/deleteUser/:id",authUser,deleteUser)

module.exports = router;