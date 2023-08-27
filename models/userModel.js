const mongoose = require("mongoose");

// Define User schema for MongoDB
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create User model based on schema
const User = mongoose.model("User", schema);

module.exports = User;