import React from "react";
import "./service.css";
import StarRatings from "react-star-ratings"; // Import react-star-ratings
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description, price, rating, btnText,link }) => {
  return (
    <div className="service-card">
      <div className="icon-and-title">
        <span className="icon">{icon}</span>
        <h3 className="title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
      <Link to={link}>
        <button className="btn">{btnText}</button>
      </Link>
      <div className="price-and-rating">
        <span className="price">Starting at {price}</span>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          starHoverColor="yellow"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
