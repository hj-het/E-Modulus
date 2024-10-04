
import React from "react";
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="Not-found-container">
      <div className="error-box">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="home-btn">Go Back Home</a>
      </div>
      <div className="animation-box">
        {/* <img src="./404-status.webp" alt="404 Error Image" /> */}
      </div>
    </div>
  );
};

export default NotFound;
