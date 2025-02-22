// importing jsonwebtoken
const jwt = require("jsonwebtoken");

// Middleware func to protect routes by verifying JWT tokens
exports.authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  // Checking if authorization header is missing or does not start with Bearer
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // Returning 404 if there is no token provided
    return res.status(403).json({ message: "Access denied, token missing" });
  }

  // Extracting token after "Bearer"
  const token = authHeader.split(" ")[1];

  try {
    // Verifying token using secret key stored in environment variables
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // If verification is successful, storing decoded user data in req.user
    req.user = verified;
    // moving to next middleware
    next();
  } catch (error) {
    // If the token is invalid or expired, returning error
    res.status(401).json({ message: "Invalid token" });
  }
};
