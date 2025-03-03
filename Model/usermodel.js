const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  }
});

// User Model
module.exports = mongoose.model("User", userSchema);
