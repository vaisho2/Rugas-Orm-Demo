// Importing React, useEffect, and useState
import React, { useEffect, useState } from "react";
// Importing useParams to get route parameters and useNavigate for redirection
import { useParams, useNavigate } from "react-router-dom";
// Importing useDispatch to dispatch Redux actions
import { useDispatch } from "react-redux";
// Importing addToCart action from the Redux cart slice
import { addToCart } from "../utils/cartSlice";

const ProductDetail = () => {
  // Hook to dispatch Redux actions
  const dispatch = useDispatch();
  // Extracting the product ID from the URL parameters
  const { id } = useParams();
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // State to store product details
  const [product, setProduct] = useState(null);
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Fetch product details when component mounts or ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetching product data from the dummy API using the product ID
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        // Error handling for invalid responses
        if (!response.ok) throw new Error("Product not found");
        // Parsing the JSON response
        const result = await response.json();
        // Updating product state with fetched data
        setProduct(result);
      } catch (error) {
        // If an error occurs then redirected to the NotFound page
        navigate("/not-found", { replace: true }); // Redirect to NotFound page
      } finally {
        // Set loading to false after fetching completes
        setLoading(false);
      }
    };

    // Call the async function
    fetchProduct();
  }, [id, navigate]); // Dependency array: Runs effect when `id` or `navigate` changes

  // Display loading message while data is being fetched
  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail">
      {/* Displaying product details */}
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Button to add product to cart using Redux */}
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

// Exporting the ProductDetail component
export default ProductDetail;
