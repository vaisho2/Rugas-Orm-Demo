// Importing react
import React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      {/* Displaying msg if given url is not defined */}
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

// Exporting NotFound component
export default NotFound;
