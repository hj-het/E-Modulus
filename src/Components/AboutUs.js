import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css"
import Steps from "../Steps/Step";
import Testimonials from "../Testimonial/Testimonials";
const AboutUs = () => {
  return (
    <div>
      <div className="about-main">
        <div className="about-content">
          <h1>About Us</h1>
          <Link to="/">
            {" "}
            <p>Home / About Us</p>
          </Link>
        </div>
      </div>
      <div className="agency-container">
      <div className="left-section">
        {/* <div className="experience-badge">
          <span>15+</span>
          <p>Years Of Experience</p>
        </div> */}
        <div className="image-wrapper">
          <img src="./images/about-image2.webp" alt="Agency Team" className="main-image" />
          
        </div>
      </div>

      <div className="right-section">
        {/* <h3>About Us</h3> */}
        <h1>
          Everything starts with a <span>marketing agency.</span>
        </h1>
        <p>
          Learn how our talented designers combine creativity and functionality to deliver captivating user experiences for your audience.
        </p>

        <div className="features">
          <div className="feature-item">
            <i className="check-icon">✔</i> Proven Results
          </div>
          <div className="feature-item">
            <i className="check-icon">✔</i> Expertise And Experience
          </div>
          <div className="feature-item">
            <i className="check-icon">✔</i> Transparent Reporting
          </div>
          <div className="feature-item">
            <i className="check-icon">✔</i> Customized Strategies
          </div>
          <div className="feature-item">
            <i className="check-icon">✔</i> Dedicated Support
          </div>
          <div className="feature-item">
            <i className="check-icon">✔</i> Continuous Improvement
          </div>
        </div>
        <div className="trusted">
          <p>Trusted By 500+ Companies Around The World</p>
          <div className="logos">
            <img src="./images/icon-company-logo-2.webp" alt="Logo 1" />
            <img src="./images/icon-company-logo-2.webp" alt="Logo 2" />
            <img src="./images/icon-company-logo-2.webp" alt="Logo 3" />
            <img src="./images/icon-company-logo-2.webp" alt="Logo 4" />
          </div>
        </div>
      </div>
    </div>
    <Steps/>
    <Testimonials/>
    </div>
  );
};

export default AboutUs;
