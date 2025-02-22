// React core library with Suspense (for fallback UI) and lazy (for dynamic imports)
import React, { Suspense, lazy } from "react";
// Enables client-side routing with Router, Routes, and Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Connects Redux store to the entire React app for global state management
import { Provider } from "react-redux";
// Importing Redux store
import { store } from "./utils/store";
// Importing header
import Header from "./components/Header";
// Importing styles
import "./App.css";

// Lazy loading components
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/CheckOut"));
const NotFound = lazy(() => import("./components/NotFound"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login")); 

const App = () => {
  return (
    // Providing the Redux store to the entire application
    <Provider store={store}>
      <Router>
        {/* Persistent Header: Will be visible on all pages */}
        <Header />
        {/* Suspense wraps lazy-loaded components to show a fallback UI while they load */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Route for the home page displaying product list */}
            <Route path="/" element={<ProductList />} />
            {/* Route for displaying details of a selected product */}
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Route for the cart page */}
            <Route path="/cart" element={<Cart />} />
            {/* Route for checkout page */}
            <Route path="/checkout" element={<Checkout />} />
            {/* Route for user registration */}
            <Route path="/register" element={<Register />} />
            {/* Route for user login */}
            <Route path="/login" element={<Login />} />
            {/* Catch-all route for 404 page when no other route matches */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

// Exporting App
export default App;
