// Loading env variables from .env file
require("dotenv").config();
// Importing express, mongoose,cors
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Importing errorHandler
const { errorHandler } = require("./middleware/errorMiddleware");

// Getting server port,mongodb uri and token from env variables
const PORT = process.env.PORT || 5000; 
const MONGO_URI = process.env.MONGO_URI; 
const JWT_SECRET = process.env.JWT_SECRET; 

// Importing route for diff APIs
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const userRoutes = require("./routes/userRoutes");

// Creating express app
const app = express();

// app.use(cors());
// Configuring cors to allow frontend access from port 5173
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);

// Json parsing for requests 
app.use(express.json());

// MongoDB Connection uning mongoose
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Database connection error:", err.message));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/users", userRoutes);

// Using customised error handler 
app.use(errorHandler);

// Default route
app.get("/", (req, res) => {
  res.send("ShoppyGlobe Backend is running...");
});

// Starting server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
