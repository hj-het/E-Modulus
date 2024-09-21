import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Buyview.css";
import $ from "jquery";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

const BuyYouTubeViews = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };
  console.log(loading);
  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const response = await axios.get("/v1/plans");
        console.log("API Response:", response);
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
    $(".box").click(function () {
      $(".box").removeClass("box-border");
      $(this).addClass("box-border");
    });

    return () => {
      $(".box").off("click");
    };
  }, []);

  const handleBuyNow = () => {
    if (selectedBox) {
      navigate("/get-start", { state: { views: selectedBox.views_count } });
    } else {
      alert("Please select a box before proceeding.");
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < boxes.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  const currentBoxes = boxes.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="viewpage">
      <div className="section1">
        <h1>
          Buy YouTube <br />
          Views <span className="label-red">Instantly</span>
        </h1>
      </div>
      <div className="section2">
        <div className="rectangle">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {currentBoxes.map((box) => (
              <div
                key={box.id}
                className={`box ${
                  selectedBox?.id === box.id ? "selected" : ""
                }`}
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
          <div className="next-container">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              <GrCaretPrevious/>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= boxes.length}
            >
              <GrCaretNext/> 
            </button>
          </div>

          <div
            className="button-container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
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
