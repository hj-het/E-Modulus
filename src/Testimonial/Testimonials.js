import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'; 
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
console.log("testimonials===>",testimonials)
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://www.thebrainmoney.com/v1/getReviews');
        console.log("response.data",response.data)
        setTestimonials(response.data.data); 
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }

    };
    fetchTestimonials();
  }, []); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025, // Tablet and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770, // Tablets in portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  
  return (
    <div className="testimonial-container">
      <h2>Reviews</h2>
      {testimonials.length > 0 ? (
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="testimonial-text">{testimonial.review}</p>
              <div className="testimonial-author">
                <img src={testimonial.profile_photo || './images/user.webp'} alt={testimonial.name} className="testimonial-image" />
                <div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-followers">{testimonial.followers} followers</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading testimonials...</p>
      )}
    </div>
  );
};
// Custom Next Arrow
function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
    // className={`next-arrow`}
    style={{ 
      ...style, 
      display: "block", 
      borderRadius: "50%", 
      position: "absolute", 
      right: "0", 
      top: "50%" 
    }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
    className={`prev-arrow`}
    style={{ 
      ...style, 
      display: "block", 
      borderRadius: "50%", 
      position: "absolute", 
      left: "0", 
      top: "50%", 
      zIndex: 99 
    }}
      onClick={onClick}
    />
  );
}
export default Testimonials;
