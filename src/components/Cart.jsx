// Importing react
import React from "react";
// Importing useSelector and useDispatch to dispatch Redux actions
import { useSelector, useDispatch } from "react-redux";
// Importing useNavigate for redirection
import { useNavigate } from "react-router-dom";
// Importing the CartItem component to display each item in the cart
import CartItem from "./CartItem";
// Importing Redux actions to modify cart state
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../utils/cartSlice";
// Importing a shopping cart icon from react-icons
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculating the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h1>
        Cart <FaCartShopping />
      </h1>

      {/* Checking if the cart is empty */}
      {cartItems.length === 0 ? (
        // Display message if no items are in the cart
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Looping through each cart item and rendering the CartItem component */}
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              // Dispatch action to remove item from cart
              onRemove={() => dispatch(removeFromCart(item.id))}
              // Dispatch action to increase item quantity
              onIncrement={() => dispatch(incrementQuantity(item.id))}
              // Dispatch action to decrease item quantity
              onDecrement={() => dispatch(decrementQuantity(item.id))}
            />
          ))}
          {/* Displaying the total price of items in the cart */}
          <p>Total: ${totalPrice.toFixed(2)}</p>

          {/* Button to proceed to the checkout page */}
          <button onClick={() => navigate("/checkout")}>Proceed to Pay</button>
        </>
      )}
    </div>
  );
};

// Exporting the Cart component
export default Cart;
