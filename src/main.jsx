// Import Reactlibrary
import React from "react";
// Import ReactDOM for rendering the React app in the browser
import ReactDOM from "react-dom/client";
// Import the main App component
import App from "./App";
// Import global styles
import "./index.css";
// Import additional styles for the App component
import "./App.css";

// Create a root container for rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Enables additional checks and warnings in development mode
  <React.StrictMode>
    {/* Renders the main App component */}
    <App />
  </React.StrictMode>
);
