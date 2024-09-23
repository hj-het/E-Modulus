import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <p className="footer-text">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about-us" className="footer-link">About Us</a>
          <a href="/terms-of-service" className="footer-link">Services</a>
          <a href="/contact-us" className="footer-link">Contact</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

