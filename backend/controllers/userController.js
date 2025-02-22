// importing bcryptjs, jsonwebtoken
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
// Importing user model
const User = require("../models/userModel");

// Registering User
exports.registerUser = [
  // Input validating using express-validator
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  async (req, res) => {
    // Validating input fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, email, password } = req.body;
      // Hashing password before saving in db
      const hashedPassword = await bcrypt.hash(password, 10);

      // Creating new user object
      const newUser = new User({ name, email, password: hashedPassword });
      // saving user to db
      await newUser.save();

      // Generating JWT token for authentication which time limit of 1 hr
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      // returning msg if user registred
      res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
      // handling error
      res.status(500).json({ message: error.message });
    }
  },
];

// Logging in User
exports.loginUser = [
  // Input validating using express-validator
  body("email").isEmail().withMessage("Invalid email"),
  body("password").notEmpty().withMessage("Password is required"),
  async (req, res) => {
    // Validing input fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // returing validation error
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      // Checking if user exists in db
      const user = await User.findOne({ email });
      if (!user) {
        // Returning 404 error if user not found in db
        return res.status(404).json({ message: "User not found" });
      }
      // Comparing input password with hashed password in db
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        // retuning error if password is not correct
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generating JWT token for authenticated user
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      // Returning success msg and also token
      res.json({ message: "Login successful", token });
      // console.log("Generated Token:", token);
    } catch (error) {
      // Handling error
      res.status(500).json({ message: error.message });
    }
  },
];
