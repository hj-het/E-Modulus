import React from "react";
import "./footerbanner.css"
const FooterBanner = () => {
  return (
    <div>
      <div className="banner">
        <p>
          Connect with E-modulus on
          <br />
          social media to get All Updates
        </p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/e_modulus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCe8t_b3725q68Y93s15_77g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/e-modulus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=917984990000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.facebook.com/emodulus.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://in.pinterest.com/emodulus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
