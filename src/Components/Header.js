import React, { useState } from 'react';
import "./header.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from 'react-icons/fa';  // Import hamburger icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container-header mx-auto flex justify-between items-center">
        <a className="main_logo" href="/">
          <img src="./images/mainlogo.webp" alt="Logo" />
        </a>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Navigation menu */}
        <div className={`left_nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About US</a></li>
            <li><a href="/contact-us">Contact US</a></li>
            <li><a href="/ordertrack">Order Track</a></li>
            <li><a href="/tools">Tools</a></li>
          </ul>

          {/* Language dropdown */}
          <div className="language">
            <p>USD</p>
            <IoMdArrowDropdown />
            <ul className="language_list">
              <li>USD</li>
              <li>INR</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
