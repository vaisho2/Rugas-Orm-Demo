// Importing express
const express = require("express");
// Importing CRUD operation functions for products
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

// Creating express router
const router = express.Router();

// Routes for all CRUD operations on products
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// Exporting router
module.exports = router;
