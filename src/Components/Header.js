import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container-header mx-auto flex justify-between items-center">
        <h1 className="logo">
          <Link to="/"> <img src='./mainlogo.png' alt='Logo' /></Link>
        </h1>
        <nav>
          <ul className="menu">
            {/* Conditionally render the menu item */}
            {location.pathname !== '/buy-youtube-views' && (
              <li className="menu-item">
                <Link to="/buy-youtube-views">Buy YouTube Views</Link>
              </li>
            )}
              {location.pathname !== '/get-start' && (
              <li className="menu-item">
                <Link to="/get-start">Get Start</Link>
              </li>
            )}

          
            {/* Uncomment if needed */}
            {/* 
            <li className="menu-item">
              <Link to="/buy-youtube-likes">Buy YouTube Likes</Link>
            </li>
            <li className="menu-item">
              <Link to="/buy-instagram-followers">Buy Instagram Followers</Link>
            </li> 
            */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
