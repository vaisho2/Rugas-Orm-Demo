// Importing cart and product models
const Cart = require("../models/cartModel.js");
const Product = require("../models/productModel.js");

// Getting users cart
exports.getCart = async (req, res) => {
  try {
    // Finding cart associated with the user and populate product info
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      "items.productId"
    );
    // If no cart exists for the user, returning error
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    // Sending cart data as JSON response
    res.json(cart);
  } catch (error) {
    // Handling errors
    res.status(500).json({ message: error.message });
  }
};

// Adding to Cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Validating quantity
    if (quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than zero" });
    }

    // Fetching product from db
    const product = await Product.findById(productId);
    if (!product) {
      // if product not found, returning error
      return res.status(404).json({ message: "Product not found" });
    }

    // Checking if there is enough stock available
    if (product.stock < quantity) {
      return res.status(400).json({ message: "Insufficient stock available" });
    }

    // Finding cart associated with the logged-in user
    let cart = await Cart.findOne({ userId: req.user.id });
    // If the user has no cart, creating new one
    if (!cart) {
      cart = new Cart({
        userId: req.user.id,
        items: [{ productId, quantity }],
      });
    } else {
      // Checking if product already exists in cart
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );
      if (existingItemIndex >= 0) {
        // Updating quantity if the product is already in the cart
        const newQuantity = cart.items[existingItemIndex].quantity + quantity;
        // Returning message if there is insufficient stock
        if (newQuantity > product.stock) {
          return res
            .status(400)
            .json({ message: "Insufficient stock available" });
        }
        cart.items[existingItemIndex].quantity = newQuantity;
      } else {
        // Adding product as a new item in the cart
        cart.items.push({ productId, quantity });
      }
    }

    // Saving updated cart
    await cart.save();
    // Returning updated cart as response
    res.status(201).json(cart);
  } catch (error) {
    // Handling errors
    res.status(500).json({ message: error.message });
  }
};

// Updating Cart Quantity
exports.updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    // Validating that the quantity is greater than zero
    if (quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than zero" });
    }

    // Finding cart for the logged-in user
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Finding item in the cart
    const item = cart.items.find(
      (item) => item._id.toString() === req.params.itemId
    );
    // If the item doesn't exist, returning a 404 response
    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    const product = await Product.findById(item.productId);
    // Checking if there is enough stock available
    if (product.stock < quantity) {
      return res.status(400).json({ message: "Insufficient stock available" });
    }

    // Updating quantity of the item in the cart
    item.quantity = quantity;
    // Saving updated cart
    await cart.save();

    // Returning updated cart
    res.json(cart);
  } catch (error) {
    // Handling errors
    res.status(500).json({ message: error.message });
  }
};

// Removing item fromcart
exports.removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.params;
    console.log("Removing item:", itemId, "from user:", userId);

    // Finding user's cart
    const cart = await Cart.findOne({ userId });
    // Returning 404 if cart not found
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    console.log("Before removing, cart items:", cart.items);

    // Finding item in the cart
    const itemIndex = cart.items.findIndex(
      (item) => item._id.toString() === itemId
    );
    if (itemIndex === -1) {
      // Returning 404 if cart not found
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Removing the item
    cart.items.splice(itemIndex, 1);
    // saving updated cart
    await cart.save();

    console.log("After removing, cart items:", cart.items);

    // Returning updated cart
    res.json(cart);
  } catch (error) {
    // Handling errors
    res.status(500).json({ message: error.message });
  }
};
