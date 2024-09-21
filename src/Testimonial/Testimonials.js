import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'; 

const testimonials = [
  {
    name: "Elizabeth",
    followers: "840k followers",
    image: "./user.png", 
    text: "Well, the site is terrific!!! I got my services in a moment! They gave me more confidence to work harder and monetize my channel."
  },
  {
    name: "Lucy",
    followers: "100k followers",
    image: "./user.png",
    text: "One of my friends sent the link to a video on YouTube about this site. It has been just 1 month since I started my page. It was difficult at first but now, thanks to the helpful videos, it's easy!"
  },
  {
    name: "John",
    followers: "560k followers",
    image: "./user.png",
    text: "Wow! What a service. I've been following them for a while, thinking they might be fake, but they are not! Thank you."
  }
];

const Testimonials = () => {
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
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div>
                <p className="author-name">{testimonial.name}</p>
                <p className="author-followers">{testimonial.followers}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;