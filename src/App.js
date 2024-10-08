// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
// import BuyYouTubeViews from './Components/BuyYouTubeViews';
import Home from "./Home";
import GetStart from "./Pages/GetStart";
import Footer from "./Components/Footer";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./TermsCondition/TermsCondition";
import RefundPolicy from "./RefundPolicy/RefundPolicy";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import NotFound from "./Components/NotFound";
import SliderComponent from "./Components/SliderComponent";
import BuyYouTubeViews from "./Components/YouTube/BuyYouTubeViews";
import BuyYouTubeSubscribers from "./Components/YouTube/BuyYouTubeSubscribers";
import BuyYouTubeLikes from "./Components/YouTube/BuyYouTubeLikes";
import BuyYtWatchHours from "./Components/YouTube/BuyYtWatchHours";
import BuyYouTubeAutoView from "./Components/YouTube/BuyYouTubeAutoView";
import BuyYouTubeStreamViews from "./Components/YouTube/BuyYouTubeStreamViews";
import BuyInstaViews from "./Components/Instagram/BuyInstaViews";
import BuyInstaReelsViews from "./Components/Instagram/BuyInstaReelsViews";
import BuyInstaLikes from "./Components/Instagram/BuyInstaLikes";
import BuyInstaAutoLikes from "./Components/Instagram/BuyInstaAutoLikes";
import BuyInstaFollowers from "./Components/Instagram/BuyInstaFollowers";
import BuyFbFollowers from "./Components/Facebook/BuyFbFollowers";
import BuyFbLikes from "./Components/Facebook/BuyFbLikes" 
import BuyFbViews from './Components/Facebook/BuyFbViews'
import BuyTwitterFollwers from './Components/Twitter/BuyTwitterFollwers'
import BuyTwitterLikes from './Components/Twitter/BuyTwitterLikes'
import BuyWebsiteSignUps from './Components/Website/BuyWebsiteSignUps'
import BuyGooglereviews from './Components/GoogleBusiness/BuyGooglereviews'
import BuyTelegramMember from './Components/Telegram/BuyTelegramMember'
import Blog from "./Blog/Blog";
import BlogDetail from "./Blog/BlogDetail";
import BuyLinkdnFollers from "./Components/LinkedIn/BuyLinkdnFollwers";
import FooterBanner from "./FooterBanner/FooterBanner";
import ThankYouPage from "./Thankyou/ThankYouPage";
import OrderTrack from "./Track/OrderTrack";

const App = () => {
  return (
    <Router>
      <Header />
      <SliderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ordertrack" element={<OrderTrack />} />
       
 
        {/* youtube/////// */}
        <Route path="/get-start" element={<GetStart />} />
        <Route path="/buy-youtube-views" element={<BuyYouTubeViews />} />
        <Route
          path="/buy-youtube-subscribers"
          element={<BuyYouTubeSubscribers />}
        />
        <Route path="/buy-youtube-autolikes" element={<BuyYouTubeAutoView />} />
        <Route
          path="/buy-youtube-Streamviews"
          element={<BuyYouTubeStreamViews />}
        />
        <Route path="/buy-youtube-likes" element={<BuyYouTubeLikes />} />
        <Route path="/buy-youtube-watchhours" element={<BuyYtWatchHours />} />

        {/* Instagram//// */}
        <Route path="/buy-instagram-views" element={<BuyInstaViews />} />
        <Route path="/buy-instagram-reelviews" element={<BuyInstaReelsViews />} />
        <Route path="/buy-instagram-likes" element={<BuyInstaLikes />} />
        <Route path="/buy-instagram-followers" element={<BuyInstaFollowers />} />
        <Route path="/buy-instagram-autolikes" element={<BuyInstaAutoLikes />} />

        {/* Facebook//// */}
        <Route path="/buy-facebook-followers" element={<BuyFbFollowers />} />
        <Route path="/buy-facebook-likes" element={<BuyFbLikes />} />
        <Route path="/buy-facebook-views" element={<BuyFbViews />} />

        {/* Twitter//// */}
        <Route path="/buy-twitter-followers" element={<BuyTwitterFollwers />} />
        <Route path="/buy-twitter-likes" element={<BuyTwitterLikes />} />

       {/* website//// */}
       <Route path="/buy-website-signup" element={<BuyWebsiteSignUps />} />
     
       {/* Google Reviews/// */}
       <Route path="/buy-google-review" element={<BuyGooglereviews />} />

      {/* Telegram//// */}
       <Route path="/buy-telegram-members" element={<BuyTelegramMember />} />

       {/* LinkedIn//// */}
       <Route path="/buy-linkedin-followers" element={<BuyLinkdnFollers />} />
       <Route path="/thankyou" element={<ThankYouPage />} />


      </Routes>
      <FooterBanner/>
      <Footer />
    </Router>
  );
};

export default App;
