import React from 'react';
import './service.css';

const ServiceCard = ({ icon, title, description, price, rating, btnText }) => {
  return (
    <div className="service-card">
      <div className="icon-and-title">
        <span className="icon">{icon}</span>
        <h3 className="title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
      <button className="btn">{btnText}</button>
      <div className="price-and-rating">
        <span className="price">Starting at {price}</span>
        <span className="rating">{'⭐'.repeat(rating)}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
