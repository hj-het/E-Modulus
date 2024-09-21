import React from "react";
import "./Reason.css";

const Reasons = () => {
  const reasons = [
    "grow your YouTube channel",
    "find targeted subscribers",
    "have YouTube likes",
    "have video ads traffic",
    "show your videos on other sites",
    "increase watch time of your post",
    "promote YouTube marketing",
    "have fastest first month strategy",
    "give links to your website",
    "have the best results on real growth",
    "find a service with a refund policy",
    "find more viewers",
    "find new subscribers",
    "boost your YouTube channel",
    "deliver more leads",
    "have real YouTube growth",
    "be the richest YouTuber",
    "be most watched creator",
    "have audience engagement",
    "have engaging content",
    "have the best experience",
    "boost your site visibility",
    "reach the target audience",
    "be most liked fame?",
  ];

  return (
    <div className="why-views4you-container">
      <div className="content-wrapper">
        <h2 className="main-title">Why Views4You Is The Best Of The Best?</h2>
        <p className="sub-title">24 reasons to choose Views4You</p>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item">
              <span className="bullet">•</span>
              <p className="reason-text">{reason}</p>
            </div>
          ))}
        </div>
        <div className="reason-description">
          <p>
            Views4You is the perfect solution for you! Indeed, hundreds of
            thousands of people already get what they expect from a YouTube
            growth service, although we have provided these services since the
            beginning of 2022.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
