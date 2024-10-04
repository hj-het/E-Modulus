import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Buyview.css";
import $ from "jquery";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import YouTubeCampaign from "./YouTubeCampaign";
import GuaranteeSection from "../../Gurrenty/GuaranteeSection";
import Testimonials from "../../Testimonial/Testimonials";
import FaqPage from "../../FaqPage/QuestionPage";

const BuyYouTubeLikes = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTab, setCurrentTab] = useState("youtube");
  const [currentSubscriptionType, setCurrentSubscriptionType] =
    useState("real-active");
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  console.log("boxes-->", boxes, loading, setCurrentTab);

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const response = await axios.post(
          "https://www.thebrainmoney.com/v1/plans",
          {
            type: "youtube",
          }
        );
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
        .filter((box) => box.subtype === "likes") // Conditional filtering for "views"
        .map((box) => box.subscription_type)
    ),
  ];

  // Filter boxes based on currentTab (either "youtube", "facebook", etc.) and currentSubscriptionType
  const filteredBoxes = boxes.filter(
    (box) =>
      box.type === currentTab &&
      box.subtype === "likes" &&
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
      <div className="boxsection1">
        <div className="section1">
          <h1>
            Buy YouTube <br />
            Likes <span className="label-red">Now</span>
          </h1>
          <p>
            Give wings to your YouTube videos with high quality YouTube likes
            that no YouTube algorithm can suspect. Because, they are from real
            people! Experience the doping effect of the right audience with a
            reasonable price. with Views4You. Read what is written about us in
            the press.
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
              {currentSubscriptionType === "Slow-Likes" ? (
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
      </div>
      <YouTubeCampaign />
      <GuaranteeSection />
      <Testimonials />
      <FaqPage />
    </div>
  );
};

export default BuyYouTubeLikes;
