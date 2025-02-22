// Importing express
const express = require("express");
// Importing crud functions for cart
const { getCart, addToCart, updateCartQuantity, removeFromCart } = require("../controllers/cartController");
// Creating express router
const router = express.Router();
// Importing authMiddleware
const { authMiddleware } = require("../middleware/authMiddleware");

// routes for CRUD operations on cart
router.get("/:userId", authMiddleware, getCart);
router.post("/:userId", authMiddleware, addToCart);
router.put("/:userId/:itemId", authMiddleware, updateCartQuantity);
router.delete("/:userId/:itemId", authMiddleware, removeFromCart);

// Exporting router
module.exports = router;
