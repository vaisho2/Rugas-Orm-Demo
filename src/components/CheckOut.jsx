// Importing React
import React from "react";

const Checkout = () => {
  return (
    <div className="checkout">
      {/* Heading for the checkout page */}
      <h2>Checkout</h2>
      <div className="checkout-div">
        <img
          src="./images/checkout.png"
          alt="ChechOut"
          width="500px"
          height="500px"
        />
        {/* Checkout message */}
        <p>Proceed with your purchase.</p>
      </div>
    </div>
  );
};

// Exporting the Checkout component
export default Checkout;
