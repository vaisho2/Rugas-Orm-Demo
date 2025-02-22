// Importing createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Creating a Redux slice for managing cart state
const cartSlice = createSlice({
  // Slice name
  name: "cart",
  // Setting initial state to an empty array for cart items
  initialState: {
    items: [],
  },
  reducers: {
    // Reducer to add an item to the cart
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      // If item already exists in cart, increase its quantity
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        // If item is new, add it to the cart with quantity set to 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Reducer to remove an item from the cart
    removeFromCart: (state, action) => {
      // Filters out the item with the matching ID, keeping all other items
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Reducer to increase the quantity of an item in the cart
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },
    // Reducer to decrease the quantity of an item in the cart
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        // Ensuring the quantity never goes below 1
        item.quantity = 1;
      } else {
        // Decrease quantity by 1
        item.quantity--;
      }
    },
  },
});

// Exporting the actions to be used in components
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

// Exporting the reducer to be used in store configuration
export default cartSlice.reducer;
