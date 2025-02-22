// Importing configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importing the cart reducer
import cartReducer from "./cartSlice";

// Creating the Redux store and configuring reducers
export const store = configureStore({
  reducer: {
    // Adding cartReducer to handle cart-related state
    cart: cartReducer,
  },
});
