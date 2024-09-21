import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Buyview.css";
import $ from 'jquery';
import Loader from "../Loader/Loader";


const BuyYouTubeViews = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const response = await axios.get("/v1/plans");
        console.log("API Response:", response);
        
        // Assuming the data is in response.data.data
        setBoxes(response.data.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load plans.");
      } finally {
        setLoading(false);
      }
    };

    fetchBoxes();
  }, []);

  useEffect(() => {
    $('.box').click(function() {
      $('.box').removeClass("box-border"); 
      $(this).addClass("box-border"); 
    });

    return () => {
      $('.box').off('click'); 
    };
  }, []);

  const handleBuyNow = () => {
    if (selectedBox) {
      navigate("/get-start", { state: { views: selectedBox.views_count } });
    } else {
      alert("Please select a box before proceeding.");
    }
  };

  if (loading) {
    return <div><Loader/></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="viewpage">
      <div className="section1">
        <h1>
          Buy YouTube <br />
          Views <span className="label-red">Instantly </span>
        </h1>
      </div>
      <div className="section2">
        <div className="rectangle">
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            {boxes.slice(0, 2).map((box) => (
              <div
                key={box.id} // Use box id as key
                className={`box ${selectedBox?.id === box.id ? "selected" : ""}`} // Check if selected
                onClick={() => handleBoxClick(box)}
              >
                <div className="left-col">
                  <span className="number">{box.views_count}</span>
                  <span className="views">views</span>
                </div>
                <div className="right-col">
                  <div className="price">${box.original_price.toFixed(2)}</div>
                  {box.discount_price > 0 && (
                    <span className="save">Discounted</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {boxes.slice(2).map((box) => (
              <div
                key={box.id} // Use box id as key
                className={`box ${selectedBox?.id === box.id ? "selected" : ""}`} // Check if selected
                onClick={() => handleBoxClick(box)}
              >
                <div className="left-col">
                  <span className="number">{box.views_count}</span>
                  <span className="views">views</span>
                </div>
                <div className="right-col">
                  <div className="price">${box.original_price.toFixed(2)}</div>
                  {box.discount_price > 0 && (
                    <span className="save">Discounted</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="button-container" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <button className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyYouTubeViews;
