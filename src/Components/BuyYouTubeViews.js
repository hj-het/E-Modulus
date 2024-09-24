import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Buyview.css";
import $ from "jquery";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import YouTubeCampaign from "./YouTube/YouTubeCampaign";

const BuyYouTubeViews = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTab, setCurrentTab] = useState("regular"); // State for managing the active tab
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

        // Store all boxes fetched from API
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
      navigate("/get-start", {
        state: { views: selectedBox.views_count, subtype: selectedBox.subtype },
      });
    } else {
      alert("Please select a box before proceeding.");
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage < filteredBoxes.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  // Filter boxes based on currentTab (either "regular" or "ads")
  const filteredBoxes = boxes.filter(
    (box) => box.subscription_type === currentTab
  );

  // Get the current boxes to display based on the pagination
  const currentBoxes = filteredBoxes.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="viewpage">
      <div className="section1">
        <h1>
          Buy YouTube <br />
          Views <span className="label-red">Instantly</span>
        </h1>
        {/* <p>
          E-Modulus is the safest way to buy YouTube Views with delivery in just
          a few minutes. We offer multiple packages with real users for all
          different needs - choose wisely!
        </p> */}
      </div>

      <div className="section2">
        <div className="rectangle">
          <div className="tabs">
            <div className="Regular">
              <button
                className={`tab ${currentTab === "regular" ? "active" : ""}`}
                onClick={() => {
                  setCurrentTab("regular");
                  setCurrentIndex(0);
                  setSelectedBox(null);
                }}
              >
                Regular Views
              </button>
            </div>
            <div className="Ads">
              <button
                className={`tab ${currentTab === "ads" ? "active" : ""}`}
                onClick={() => {
                  setCurrentTab("ads");
                  setCurrentIndex(0);
                  setSelectedBox(null);
                }}
              >
                Ads Views
              </button>
            </div>
          </div>
          <div className="grey-title">
            {currentTab === "regular" ? (
              <p>
                <span>Limited-time discounts on YouTube views packages!</span>
              </p>
            ) : (
              <p>
                <span>
                  The daily speed of the YouTube views service is up to 5,000
                  views per day.
                </span>
              </p>
            )}
          </div>
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
                  <span className="views">{box.subtype}</span>
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
              <GrCaretPrevious />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= filteredBoxes.length}
            >
              <GrCaretNext />
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
          <div className="6-points">
            <div className="features-points">
              <div className="feature-item">
                <span className="checkmark">✔</span> Real & Organic Views
              </div>
              <div className="feature-item">
                <span className="checkmark">✔</span> Refill Guaranteed
              </div>
              <div className="feature-item">
                <span className="checkmark">✔</span> High Quality
              </div>
              <div className="feature-item">
                <span className="checkmark">✔</span> No Drops
              </div>
              <div className="feature-item">
                <span className="checkmark">✔</span> Instant Start
              </div>
              <div className="feature-item">
                <span className="checkmark">✔</span> Privacy and Safety
              </div>
            </div>
          </div>
        </div>
      </div>
      <YouTubeCampaign/>
    </div>
  );
};

export default BuyYouTubeViews;
