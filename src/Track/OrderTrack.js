import React from 'react';
import './ordertrack.css';

const OrderTrack = () => {
  return (
    <div className="form-container">
      <h2>Enter your info</h2>
      <div className="input-wrapper">
        <input 
          type="text" 
          placeholder="Order Code" 
          className="input-field" 
        />
        <input 
          type="email" 
          placeholder="The given e-mail" 
          className="input-field" 
        />
      </div>
      <button className="send-button">Send</button>
    </div>
  );
}

export default OrderTrack;
