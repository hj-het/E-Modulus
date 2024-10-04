import React from 'react';
import '../Steps/Steps.css'

// import arrowDown from '../../public/Group 15.webp'; 
// import arrowUp from '../../public/Group 16.webp'; 

const Steps = () => {
  return (
    <div className="steps-container">
      <div className="steps-item">
        <div className="steps-icon">
          <img src='./images/user-plus-bottom.webp' alt=''></img>
        </div>
        <h3 className="steps-title">1. Register Yourself</h3>
        <p className="steps-text">
          We offer a variety of packages to fit your needs and budget. Now it’s time to decide how many subscribers, likes, or views you need. You can buy as few as 500 subscribers or up to 50,000 views and 2,500 likes. The best quality, real, active, and organic YouTube services are waiting to be sent to your account.
        </p>
      </div>

      <div className="steps-arrow">
        <img src='./images/Group15.webp'  alt="Arrow up" className="arrow-img arrow-up" />
      </div>
      
      <div className="steps-item">
        <div className="steps-icon">
          <img src='./images/Group6.webp' alt=''></img>
        </div>
        <h3 className="steps-title">2. Choose Plan</h3>
        <p className="steps-text">
          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.
        </p>
      </div>

      <div className="steps-arrow">
        <img src='./images/Group16.webp' alt="Arrow down" className="arrow-img arrow-down" />
      </div>

      <div className="steps-item">
        <div className="steps-icon">
          <img src='./images/Group.webp' alt=''></img>
        </div>
        <h3 className="steps-title">3. Wait for the Magic</h3>
        <p className="steps-text">
          No worries, Views4You offers a money-back guarantee if you’re not satisfied with the service. Also, we have flexible delivery time – you can choose to get your subscribers delivered gradually or all at once.
        </p>
      </div>
    </div>
  );
};

export default Steps;