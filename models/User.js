const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
    text: true,
  },
  last_name: {
    type: String,
    required: [true, "last name is required"],
    trim: true,
    text: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
  },
  phone:{
    type:Number,
    required:[true,"phone is required"]
  },
  occupation: {
    type: String,
  },
  company: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

module.exports = mongoose.model("User", userSchema);
