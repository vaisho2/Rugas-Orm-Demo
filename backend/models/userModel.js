// Importing mongoose
const mongoose = require("mongoose");

// Creating schema for user
const userSchema = new mongoose.Schema({
  // All properties are string type and email has to be unique
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Exporting User Model
module.exports = mongoose.model("User", userSchema);
