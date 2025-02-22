// Importing mongoose
const mongoose = require("mongoose");

// Creating schema for product
const productSchema = new mongoose.Schema({
  // Name,description,image props have string type while price and stock has number datatype
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
  image: { type: String },
});

// exporting Product model
module.exports = mongoose.model("Product", productSchema);
