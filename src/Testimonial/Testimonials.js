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
        const response = await axios.get('/v1/getReviews');
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
    slidesToScroll: 0.5, 
    swipeToSlide: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0.5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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
                <img src={testimonial.profile_photo || './user.png'} alt={testimonial.name} className="testimonial-image" />
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

export default Testimonials;
