// Importing product model
const Product = require("../models/productModel");

// Getting all products
exports.getAllProducts = async (req, res) => {
  try {
    // Fetching all products from the database
    const products = await Product.find();
    // Sending list of products as JSON response
    res.status(200).json(products);
  } catch (error) {
    // handling errors
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Getting a product by ID
exports.getProductById = async (req, res) => {
  try {
    // Finding product by its ID
    const product = await Product.findById(req.params.id);
    if (!product) {
      // Returning 404 if cart not found
      return res.status(404).json({ message: "Product not found" });
    }
    // Sending product info as JSON response
    res.status(200).json(product);
  } catch (error) {
    // Handling errors
    res.status(500).json({ message: "Error fetching product", error });
  }
};

// Creating a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, stock, image } = req.body;

    // Validating that all required fields are provided
    if (!name || !price || !description || stock === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Creating new product
    const newProduct = new Product({ name, price, description, stock, image });
    // Saving new product in db
    await newProduct.save();
    // Sending 201 response
    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    // Handling error
    res.status(500).json({ message: "Error creating product", error });
  }
};

// Updating existing product
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, description, stock, image } = req.body;
    // Finding and updating product by its ID
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, stock, image },
      { new: true, runValidators: true }
    );

    // Returning 404 if product not found
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Sending success response with updated product
    res.json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    // hanlding error
    res.status(500).json({ message: "Error updating product", error });
  }
};

// Deleting a product
exports.deleteProduct = async (req, res) => {
  try {
    // Finding and deleting product by its id
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      // Returning 404 if product not found
      return res.status(404).json({ message: "Product not found" });
    }
    // Sending msg confirming deletion
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    // handling error
    res.status(500).json({ message: "Error deleting product", error });
  }
};
