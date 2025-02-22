// Importing raect
import React from "react";

// CartItem component receives props
const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
  return (
    <div className="cart-item">
      {/* Displaying the product image */}
      <img src={item.thumbnail} alt={item.title} />
      {/* Displaying the product title */}
      <h3>{item.title}</h3>
      {/* Displaying the product price */}
      <p>${item.price}</p>
      <div>
        {/* Button to decrease item quantity */}
        <button className="class-item-btn" onClick={onDecrement}>
          {" "}
          -{" "}
        </button>
        {/* Displaying the current quantity of the item */}
        <span>{item.quantity}</span>
        {/* Button to increase item quantity */}
        <button className="class-item-btn" onClick={onIncrement}>
          {" "}
          +{" "}
        </button>
      </div>
      {/* Button to remove the item from the cart */}
      <button className="class-item-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

// Exporting the CartItem component
export default CartItem;
