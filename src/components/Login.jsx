// Importing react,useState & useNavigate
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State var to store form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State var to handle error messages
  const [error, setError] = useState(null);
  // Hook for navigation after successful login
  const navigate = useNavigate();

  // Handling input changes and updating state dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission and sending login request to backend
  const handleSubmit = async (e) => {
    // Preventing default form submission
    e.preventDefault();

    try {
      // Sending login request to backend API
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Parsing json response
      const data = await response.json();

      if (response.ok) {
        // Notifying user of successful login
        alert("Login successful!");
        // Storing token
        localStorage.setItem("token", data.token);
        // Redirecting after login
        navigate("/home"); 
      } else {
        // Handling auth errors
        setError(data.message || "Invalid credentials!");
      }
    } catch (error) {
      // Handling errors
      setError("Failed to login. Try again later.");
    }
  };

  return (
    // Login form
    <div className="auth-container">
      <h2>Login</h2>
      {/* displaying error msg if there happens to be any error */}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>.
      </p>
    </div>
  );
};

// Exporting Login component
export default Login;
