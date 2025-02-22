// Importing React
import React from "react";
// Importing Link from React Router for navigation
import { Link } from "react-router-dom";
// Importing useSelector to access the Redux store
import { useSelector } from "react-redux";
// Importing icons from react-icons
import { FaShopify } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  // Accessing cart items from redux store to display the cart count
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="header">
      {/* Website title with icon */}
      <h1>
        {" "}
        <FaShopify /> Shoppy Globe
      </h1>
      {/* Navigation bar */}
      <nav>
        <Link to="/register">LOGIN</Link>
        <Link to="/">HOME</Link>
        <Link to="/cart">
          {/* Displaying the number of items in the cart */}
          <FaCartShopping /> {cartItems.length}
        </Link>
      </nav>
    </header>
  );
};

// Exporting the Header component
export default Header;
