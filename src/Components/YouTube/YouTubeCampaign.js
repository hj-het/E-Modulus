import React from "react";
import "./../YouTube/youtubecampaign.css";

const YouTubeCampaign = () => {
  return (
    <div className="campaign-container">
      <div className="main2campaign">
      <div className="campaign-left">
        <h2>All In One YouTube Views Campaign</h2>
        <div className="price-button">
          <span className="price">$43.00</span>
          <button className="buy-now-btn">
            <strong>Buy now</strong>
          </button>
        </div>
        <p>
          With E-Modulus’s all-inclusive package, you can{" "}
          <strong>buy YouTube subscribers</strong>, and views simultaneously.
          Moreover, you may order <strong>YouTube likes</strong> service and add
          it to the package for the best price.
        </p>
      </div>

      <div className="campaign-right">
        <div className="info-item">
          <h3>5000</h3>
          <p>Views for chosen video</p>
        </div>
        <div className="info-item">
          <h3>1000</h3>
          <p>Likes for chosen video</p>
        </div>
        <div className="info-item">
          <h3>50</h3>
          <p>New active subscribers at once</p>
        </div>
        <div className="info-item">
          <h3>24/7</h3>
          <p>Customers Support</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default YouTubeCampaign;
