import React from "react";

import "./Footer.css"; 

const Footer = () => {
  return (
    <div className="footerr">
      <div className="pages">
        <ul>
          <li>
            <a href="/terms-condition">Terms Condition</a>
          </li>
          <li>
            <a href="/refund-policy">Refund Policy</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
        </ul>
      </div>
      <p>
        All the materials offered by Views4You are safeguarded by copyright laws.
        Unlawful reproduction or distribution of our materials, encompassing videos,
        graphics, and text, is strictly forbidden. Any utilization of our materials
        without explicit authorization could lead to legal measures. It’s important
        to understand that Views4You operates independently and is not associated
        with any social media platforms.
      </p>
      <div className="payment_icon">
        <div className="pay_icon_left">
          <img src='./dmca_premi_badge_4.png' alt="DMCA badge" />
        </div>
        <div className="pay_icon_right">
          <img src= "./visa.png" alt="Visa" />
          <img src='./master.png' alt="Mastercard" />
          <img src="./american.png" alt="american"/>
        </div>
      </div>
      <div className="site-info">
        <p>
          Copyright 2024 E-MODULUS | Designed and developed by{" "}
          <a href="https://hjsysweb.com/">
            <img src='./icon.png' alt="hjlogo" style={{ height: "20px" }} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
