import React from "react";
import Slider from "react-slick";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaGoogle,
  FaTelegram,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./SliderComponents.css"; // External CSS for styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 321, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div
      style={{ width: "90%", margin: "0 auto", marginBottom: "4%" }}
      className="header2main"
    >
      <Slider {...settings}>
        {/* YouTube Dropdown */}
        <div className="main-contain-icons">
          <div className="icon-item">
            <div className="textandicon">
            <FaYoutube style={{ fontSize: "2rem", color: "#FF0000" }} />
            <p>YouTube</p> </div>
            <div className="dropdown-content">
              <ul>
                <li>
                  {" "}
                  <a href="/buy-youtube-views"> Buy YouTube Views </a>
                </li>
                <li>
                  {" "}
                  <a href="/buy-youtube-subscribers">Buy YouTube Subscribers</a>
                </li>
                <li>
                  {" "}
                  <a href="/buy-youtube-likes">Buy YouTube Likes </a>
                </li>
                <li>
                  {" "}
                  <a href="/buy-youtube-watchhours">Buy YouTube Watch Hours </a>
                </li>
                <li>
                  {" "}
                  <a href="/buy-youtube-autolikes">Buy YouTube Auto Likes </a>
                </li>
                <li>
                  {" "}
                  <a href="/buy-youtube-Streamviews">
                    Buy YouTube Stream Views{" "}
                  </a>
                </li>
              </ul>
             
            </div>
          </div>
        </div>

        {/* Instagram Dropdown */}
        <div className="main-contain-icons">
          <div className="icon-item">
          <div className="textandicon">
            <FaInstagram size={"2rem"} color="#E4405F" />
            <p>Instagram</p></div>
            <div className="dropdown-content">
              <ul>
                <li>
                  {" "}
                  <a href="/buy-instagram-views"> Buy Instagram Views</a>
                </li>
                <li>
                  <a href="/buy-instagram-likes"> Buy Instagram Likes</a>
                </li>
                <li>
                  <a href="/buy-instagram-followers">Buy Instagram Followers</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/buy-instagram-reelviews"> Buy Instagram Reels Views</a>
                </li>
                <li>
                  {" "}
                  <a href="/buy-instagram-autolikes"> Buy Instagram Auto Likes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Facebook Dropdown */}
        <div className="main-contain-icons">
          <div className="icon-item">
          <div className="textandicon">
            <FaFacebook style={{ fontSize: "2rem", color: "#4267B2" }} />
            <p>Facebook</p></div>
            <div className="dropdown-content">
              <ul>
                <li>
                  {" "}
                  <a href="/buy-facebook-likes">Buy Facebook Likes </a>
                </li>
                <li>
                  {" "}
                  <a href="/buy-facebook-followers">Buy Facebook Followers </a>
                </li>
                <li>
                  {" "}
                  <a href="/buy-facebook-views">Buy Facebook View </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Twitter Dropdown */}
        <div className="main-contain-icons">
          <div className="icon-item">
          <div className="textandicon">
            <FaXTwitter style={{ fontSize: "2rem", color: "#000" }} />
            <p>Twitter</p></div>
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="/buy-twitter-likes">Buy Twitter Likes</a>
                </li>
                <li>
                  <a href="/buy-twitter-followers">Buy Twitter Followers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Website Dropdown */}
        <div className="main-contain-icons">
          <div className="icon-item">
          <div className="textandicon">
            <FaGlobe style={{ fontSize: "2rem", color: "#00A1E4" }} />
            <p>Website</p></div>
            <div className="dropdown-content">
              <ul>
                <li>
                  {" "}
                  <a href="/buy-website-signup"> Buy Website Signups </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Google Business Dropdown */}
        <div className="main-contain-icons">
          <div className="icon-item">
          <div className="textandicon">
            <FaGoogle style={{ fontSize: "2rem", color: "#4285F4" }} />
            <p>Google Business</p></div>
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="/buy-google-review">Google Business Reviews</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Telegram Dropdown */}
        <div className="main-contain-icons">
          <div className="icon-item">
          <div className="textandicon">
            <FaTelegram style={{ fontSize: "2rem", color: "#0088cc" }} />
            <p>Telegram</p></div>
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="/buy-telegram-mmb">Buy Telegram Members</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* LinkedIn Dropdown */}
        <div className="main-contain-icons">
          <div className="icon-item">
          <div className="textandicon">
            <FaLinkedin style={{ fontSize: "2rem", color: "#0088cc" }} />
            <p>LinkedIn</p></div>
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="/buy-linkedin-followers">Buy LinkedIn Followers</a>
                </li>
              </ul>
            </div>
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
      style={{ ...style, display: "block", borderRadius: "50%" }}
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
      style={{ ...style, display: "block", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

export default SliderComponent;
