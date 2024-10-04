import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../YouTube/Buyview.css";
import $ from "jquery";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import YouTubeCampaign from "../YouTube/YouTubeCampaign";

const BuyLinkdnFollers = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTab, setCurrentTab] = useState("linkedin");
  const [currentSubscriptionType, setCurrentSubscriptionType] =
    useState("real-active");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 4;

  console.log("boxes-->", boxes, loading, setCurrentTab);

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const response = await axios.post("https://www.thebrainmoney.com/v1/plans", {
          type: "linkedin",
        });
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
  }, [currentTab]);

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
        state: {
          views: selectedBox.views_count,
          subtype: selectedBox.subtype,
          original_price: selectedBox.original_price,
          platform: currentTab, // currentTab holds the platform type, e.g., 'youtube', 'instagram', etc.
        },
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
  const uniqueSubscriptionTypes = [
    ...new Set(
      boxes
        .filter((box) => box.subtype === "followers")
        .map((box) => box.subscription_type)
    ),
  ];

  // Filter boxes based on currentTab (either "youtube", "facebook", etc.) and currentSubscriptionType
  const filteredBoxes = boxes.filter(
    (box) =>
      box.type === currentTab &&
      box.subtype === "followers" &&
      box.subscription_type === currentSubscriptionType
  );

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
          Buy Linkedin <br />
          Followers <span className="label-red">Fast</span>
        </h1>
        <p>
          E-Modulus now offers your LinkedIn presence with our "Buy
          LinkedIn Followers" service. Instantly grow your professional network,
          increase credibility, and attract organic connections. Watch your
          profile stand out with more followers, boosting your influence and
          opportunities in your industry.
        </p>
      </div>

      <div className="section2">
        <div className="rectangle">
          {/* Filter for Subscription Type */}
          <div className="subscription-filter">
            <ul className="tabs">
              {uniqueSubscriptionTypes.map((type) => (
                <li
                  key={type}
                  className={`tab ${
                    currentSubscriptionType === type ? "active" : ""
                  }`}
                  onClick={() => {
                    setCurrentSubscriptionType(type);
                    setCurrentIndex(0);
                    setSelectedBox(null);
                  }}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <div className="grey-title">
            {currentSubscriptionType === "real-active" ? (
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
            className="grid-container"
            // style={{
            //   display: "grid",
            //   gridTemplateColumns: "repeat(2, 1fr)",
            //   gap: "20px",
            //   marginBottom: "20px",
            // }}
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
                  <div className="price-section">
                    {box.original_price > 0 && (
                      <div className="original-price">
                        <del>${box.original_price.toFixed(2)}</del>
                      </div>
                    )}
                    <div className="discounted-price">
                      ${box.discount_price.toFixed(2)}
                    </div>
                  </div>
                  {box.discount_price > 0 && (
                    <span className="save">
                      Save{" "}
                      {Math.round(
                        ((box.original_price - box.discount_price) /
                          box.original_price) *
                          100
                      )}
                      %
                    </span>
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
      <YouTubeCampaign />
    </div>
  );
};

export default BuyLinkdnFollers;
