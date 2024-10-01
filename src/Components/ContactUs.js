import React, { useState } from "react";
import "./contactUs.css";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Link } from "react-router-dom";
// import { IoCall } from "react-icons/io5";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    website: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here (API call or other action)
  };

  return (
    <div>
     
     <div className="contact-main">
      <div className="contact-content">
       <h1>Contact Us</h1>
      <Link to="/"> <p>Home / Contact Us</p></Link>
      </div>
    </div>

      <div className="contact-container">
        <div className="contact-left">
          {/* <h2>Chat With Us</h2>
          <ul>
            <li>Start A Live Chat</li>
            <li>Shoot Us An Email</li>
            <li>Message Us On X</li>
          </ul> */}
           <h2> Call Us</h2>
          <p>+91 9913951731</p>
          <p>Call our team Mon-Fri from 8am to 5pm.</p>

          <h3>Address 1:</h3>
          <p>11827 NC-226, Spruce Pine, NC 28777, United States
         </p>
          {/* <p>S.G High Way, Ahmedabad - 454545</p> */}

          <h3>Address 2:</h3>
          <p>489, Ghoghamba, Panchmahals, Gujarat - 389365</p>
        </div>

        <div className="contact-right">
          <h2>
            Ready to get started? <span>Let's chat.</span>
          </h2>
          <form onSubmit={handleSubmit} className="contactFrom">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="url"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            /><div>
            <button type="submit" className="contact-submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
