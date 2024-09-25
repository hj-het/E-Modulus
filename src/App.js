// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
// import BuyYouTubeViews from './Components/BuyYouTubeViews';
import Home from './Home';
import GetStart from './Pages/GetStart';
import Footer from './Components/Footer';
import TermsOfService from './Pages/TermsOfService';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './TermsCondition/TermsCondition';
import RefundPolicy from './RefundPolicy/RefundPolicy';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound';
import SliderComponent from './Components/SliderComponent';
import BuyYouTubeViews from './Components/YouTube/BuyYouTubeViews';
import BuyYouTubeSubscribers from './Components/YouTube/BuyYouTubeSubscribers'
// import BuyYouTubeLikes from './../../'
// import BuyInstagramFollowers from './BuyInstagramFollowers';
import BuyYouTubeLikes from './Components/YouTube/BuyYouTubeLikes'
import BuyYtWatchHours from './Components/YouTube/BuyYtWatchHours';

const App = () => {
  return (
    <Router>
      
      <Header />
      <SliderComponent/>
      <Routes>

        {/* youtube/////// */}
        <Route path="/buy-youtube-views" element={<BuyYouTubeViews />} />
        <Route path="/get-start" element={ <GetStart/>} />
        <Route path="/buy-youtube-subscribers" element={<BuyYouTubeSubscribers />} />
         {/* <Route path="/buy-youtube-likes" element={<BuyYouTubeLikes />} /> */}
        {/* <Route path="/buy-instagram-followers" element={<BuyInstagramFollowers />} /> */}  
        <Route path="/buy-youtube-likes" element={<BuyYouTubeLikes/>} />
        <Route path="/buy-youtube-watchhours" element={<BuyYtWatchHours />} />

        <Route path="/" element={<Home/>} />
        <Route path="/terms-of-service" element={<TermsOfService/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-condition" element={<TermsCondition/>} />
        <Route path="/refund-policy" element={<RefundPolicy/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/SliderComponent" element={<SliderComponent />} /> */}
        



        

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
