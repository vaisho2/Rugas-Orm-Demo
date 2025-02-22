// Importing React and useState for managing component state
import React, { useState } from "react";
// Importing the ProductItem component to display individual products
import ProductItem from "./ProductItem";
// Importing the custom hook for fetching product data
import useFetchProducts from "../hooks/useFetchProducts";

const ProductList = () => {
  // Using the custom hook to fetch products
  const {
    data: products,
    loading,
    error,
  } = useFetchProducts("https://dummyjson.com/products");

  // State for managing the search term input
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering products based on the search term (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Display a loading message while fetching data
  if (loading) return <div className="loading">Loading...</div>;
  // Display an error message if fetching fails
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Message Section */}
      <div className="msg">
        <h1>Your One-Stop Online Shop for Everything!</h1>
        <img
          src="/images/shopping.png"
          alt="Shopping"
          width="200px"
          height="200px"
        />
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        // Updates searchTerm state on user input
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Product List or No Products Message */}
      {filteredProducts.length === 0 ? (
        // Displayed when no products match the search
        <div className="no-products">No products available.</div>
      ) : (
        <div className="product-list">
          {/* Mapping through the filtered products and displaying each using ProductItem */}
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

// Exporting the ProductList component
export default ProductList;
