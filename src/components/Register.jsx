// Importing react, useState, UseNavigate
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // State avr to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State var to handle error messages
  const [error, setError] = useState(null);
  // Hook for redirecting user after successful reg
  const navigate = useNavigate();

  // Handling form input changes and updating state dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission and send registration request to backend
  const handleSubmit = async (e) => {
    // Preventing default form submission
    e.preventDefault();

    try {
      // Sending registration request to backend API
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Parsing json response
      const data = await response.json();

      // Notifying user to login
      if (response.ok) {
        alert("Registration successful! Please login.");
        navigate("/login");
      } else {
        // Returning error msg if login went wrong
        setError(data.message || "Something went wrong!");
      }
    } catch (error) {
      // Handling error
      setError("Failed to register. Try again later.");
    }
  };

  return (
    // Registration form
    <div className="auth-container">
      <h2>Register</h2>
      {/* returns error msh if there is any error */}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Register</button>
      </form>
      <p>
        {/* Link to login page for existing users */}
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </div>
  );
};

// Exporting Register component
export default Register;
