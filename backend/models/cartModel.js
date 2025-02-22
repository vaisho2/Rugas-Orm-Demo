// Importing Mongoose
const mongoose = require("mongoose");

// Schema for cart
const cartSchema = new mongoose.Schema({
  // Every cart is associated with particular user
  userId: { type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: "User" },
  // array of items with product id and quantity
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
});

// Exporting Cart model
module.exports = mongoose.model("Cart", cartSchema);
