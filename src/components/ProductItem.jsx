// Importing React for component creation
import React from "react";
// Importing Link to navigate to the product details page
import { Link } from "react-router-dom";
// Importing useDispatch to dispatch Redux actions
import { useDispatch } from "react-redux";
// Importing addToCart action from Redux slice
import { addToCart } from "../utils/cartSlice";

const ProductItem = ({ product }) => {
  // Hook to dispatch Redux actions
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      {/* Clicking on the product image or title redirects to the product details page */}
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h3 className="product">{product.title}</h3>
        <p className="product">${product.price}</p>
      </Link>
      {/* Button to add the product to the cart using Redux */}
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

// Exporting the ProductItem component
export default ProductItem;
