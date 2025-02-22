// Importing express
const express = require("express");
// importing registerUser, loginUser function
const { registerUser, loginUser } = require("../controllers/userController");
// Creating express router
const router = express.Router();

// Routes for user registration and user login
router.post("/register", registerUser);
router.post("/login", loginUser);

// exporting router
module.exports = router;
