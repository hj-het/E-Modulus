import React, { useState, useEffect } from "react";
import axios from "axios"; 

const BuyYouTubeViews = () => {
  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const response = await axios.get("/v1/plans"); // Your API endpoint

        // Log the full API response
        console.log("API Response:", response);

        // Log just the data portion of the response
        console.log("API Data:", response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBoxes();
  }, []);

  return (
    <div>
      <h1>Check the console for the API response.</h1>
    </div>
  );
};

export default BuyYouTubeViews;