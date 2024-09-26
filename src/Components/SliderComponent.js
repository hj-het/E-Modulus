import React from 'react';
// import Slider from 'react-slick';
import { FaYoutube,  FaFacebook, FaGlobe, FaGoogle, FaTelegram,FaLinkedin } from 'react-icons/fa';
import { FaXTwitter,FaSquareInstagram } from "react-icons/fa6";


import './SliderComponents.css';  // External CSS for styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderComponent = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />
  // };

  return (
    <div style={{ width: '80%', margin: '0 auto', marginBottom: '4%' }} className="header2main">
      {/* <Slider {...settings}> */}
        {/* YouTube Dropdown */}
        <div className='main-contain-icons'>
        <div className="icon-item">
            {/* <div className='textwithicon'> */}
          <FaYoutube style={{ fontSize: '2rem', color: '#FF0000' }} />
          <p>YouTube</p>
          <div className="dropdown-content">
            <ul>
              <li> <a href='/buy-youtube-views'> Buy YouTube Views </a></li>
              <li> <a href='/buy-youtube-subscribers'>Buy YouTube Subscribers</a></li>
              <li> <a href='/buy-youtube-likes'>Buy YouTube Likes </a></li>
              <li> <a href='/buy-youtube-watchhours'>Buy YouTube Watch Hours </a></li>
              <li> <a href='/buy-youtube-autolikes'>Buy YouTube Auto Likes </a></li>
              <li> <a href='/buy-youtube-Streamviews'>Buy YouTube Stream Views </a></li>

            </ul>
          </div>
        </div>

        {/* Instagram Dropdown */}
        <div className="icon-item">
          <FaSquareInstagram  style={{ fontSize: '2rem',color: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',WebkitBackgroundClip: 'text'  }} />
          {/* <div style={{
      display: 'inline-block',
      background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: '2rem',
    }}>
      <FaSquareInstagram />
    </div> */}
          <p>Instagram</p>
          <div className="dropdown-content">
            <ul>
              <li> <a href='/buy-insta-views'> Buy Instagram Views</a></li>
              <li><a href='/buy-insta-likes'> Buy Instagram Likes</a></li>
              <li><a href='/buy-insta-followers'>Buy Instagram Followers</a> </li>
              <li> <a href='/buy-insta-reelviews'> Buy Instagram Reels Views</a></li>
              <li> <a href='/buy-insta-autolikes'> Buy Instagram Auto Likes</a></li>
            </ul>
          </div>
        </div>

        {/* Facebook Dropdown */}
        <div className="icon-item">
          <FaFacebook style={{ fontSize: '2rem', color: '#4267B2' }} />
          <p>Facebook</p>
          <div className="dropdown-content">
            <ul>
              <li> <a href='/buy-fb-likes'>Buy Facebook Likes </a></li>
              <li> <a href='/buy-fb-followers'>Buy Facebook Followers </a></li>
              <li> <a href='/buy-fb-views'>Buy Facebook View </a></li>

              
            </ul>
          </div>
        </div>

        {/* Twitter Dropdown */}
        <div className="icon-item">
          <FaXTwitter  style={{ fontSize: '2rem', color: '#000' }} />
          
          <p>Twitter</p>
          <div className="dropdown-content">
            <ul>
              <li><a href='/buy-twitter-likes'>Buy Twitter Likes </a></li>
              <li><a href='/buy-twitter-followers'>Buy Twitter Followers</a></li>
            </ul>
          </div>
        </div>


        {/* Website Dropdown */}
        <div className="icon-item">
          <FaGlobe style={{ fontSize: '2rem', color: '#00A1E4' }} />
          <p>Website</p>
          <div className="dropdown-content">
            <ul>
              <li> <a href='/buy-wb-signup'> Buy Website Signups </a></li>
            
            </ul>
          </div>
        </div>


        {/* Google Business Dropdown */}
        <div className="icon-item">
          <FaGoogle style={{ fontSize: '2rem', color: '#4285F4' }} />
          <p>Google Business</p>
          <div className="dropdown-content">
            <ul>
              <li> <a href='/buy-google-review'>Google Business Reviews </a></li>
             
            </ul>
          </div>
        </div>

        {/* Telegram Dropdown */}
        <div className="icon-item">
          <FaTelegram style={{ fontSize: '2rem', color: '#0088cc' }} />
          <p>Telegram</p>
          <div className="dropdown-content">
            <ul>
              
              <li><a href='/buy-telegram-mmb'>Buy Telegram Members </a></li>
            </ul>
          </div>
        </div>

        <div className="icon-item">
          <FaLinkedin style={{ fontSize: '2rem', color: '#0088cc' }} />
          <p>Linkedin</p>
          <div className="dropdown-content">
            <ul>
              
              <li><a href='/buy-telegram-mmb'>Buy Linkedin Follwers</a></li>
            </ul>
          </div>
        </div>


        </div>



      {/* </Slider> */}
    </div>
  );
};

// // Custom Next Arrow
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', borderRadius: '50%' }}
//       onClick={onClick}
//     />
//   );
// }

// // Custom Prev Arrow
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', borderRadius: '50%' }}
//       onClick={onClick}
//     />
//   );
// }

export default SliderComponent;
