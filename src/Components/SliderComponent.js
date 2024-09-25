import React from 'react';
import Slider from 'react-slick';
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaGlobe, FaGoogle, FaTelegram } from 'react-icons/fa';
import './SliderComponents.css';  // External CSS for styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', marginBottom: '4%' }} className="header2main">
      <Slider {...settings}>
        {/* YouTube Dropdown */}
        <div className="icon-item">
            <div className='textwithicon'>
          <FaYoutube style={{ fontSize: '2rem', color: '#FF0000' }} />
          <p>YouTube</p></div>
          <div className="dropdown-content">
            <ul>
              <li> <a href='/buy-youtube-views'> Buy YouTube Views </a></li>
              <li> <a href='/buy-youtube-subscribers'>Buy YouTube Subscribers  </a></li>
              <li> <a href='/buy-youtube-likes'>Buy YouTube Likes </a></li>
              <li> <a href='/buy-youtube-watchhours'>Buy YouTube Watch Hours </a></li>
            </ul>
          </div>
        </div>

        {/* Instagram Dropdown */}
        <div className="icon-item">
          <FaInstagram style={{ fontSize: '2rem', color: '#E1306C' }} />
          <p>Instagram</p>
          <div className="dropdown-content">
            <ul>
              <li>Buy Instagram Followers</li>
              <li>Buy Instagram Likes</li>
              <li>Buy Instagram Comments</li>
            </ul>
          </div>
        </div>

        {/* Facebook Dropdown */}
        <div className="icon-item">
          <FaFacebook style={{ fontSize: '2rem', color: '#4267B2' }} />
          <p>Facebook</p>
          <div className="dropdown-content">
            <ul>
              <li>Buy Facebook Likes</li>
              <li>Buy Facebook Followers</li>
            </ul>
          </div>
        </div>

        {/* Website Dropdown */}
        <div className="icon-item">
          <FaGlobe style={{ fontSize: '2rem', color: '#00A1E4' }} />
          <p>Website</p>
          <div className="dropdown-content">
            <ul>
              <li>Website Development</li>
              <li>SEO Services</li>
            </ul>
          </div>
        </div>

        {/* Twitter Dropdown */}
        <div className="icon-item">
          <FaTwitter style={{ fontSize: '2rem', color: '#1DA1F2' }} />
          <p>Twitter</p>
          <div className="dropdown-content">
            <ul>
              <li>Buy Twitter Followers</li>
              <li>Buy Twitter Retweets</li>
            </ul>
          </div>
        </div>

        {/* Google Business Dropdown */}
        <div className="icon-item">
          <FaGoogle style={{ fontSize: '2rem', color: '#4285F4' }} />
          <p>Google Business</p>
          <div className="dropdown-content">
            <ul>
              <li>Google Business Setup</li>
              <li>Google Business Reviews</li>
            </ul>
          </div>
        </div>

        {/* Telegram Dropdown */}
        <div className="icon-item">
          <FaTelegram style={{ fontSize: '2rem', color: '#0088cc' }} />
          <p>Telegram</p>
          <div className="dropdown-content">
            <ul>
              <li>Join Telegram Group</li>
              <li>Buy Telegram Members</li>
            </ul>
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Custom Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

export default SliderComponent;
