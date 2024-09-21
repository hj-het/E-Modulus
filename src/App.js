// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import BuyYouTubeViews from './Components/BuyYouTubeViews';
import Home from './Home';
import GetStart from './Pages/GetStart';
// import BuyYouTubeSubscribers from './BuyYouTubeSubscribers';
// import BuyYouTubeLikes from './BuyYouTubeLikes';
// import BuyInstagramFollowers from './BuyInstagramFollowers';

const App = () => {
  return (
    <Router>
      
      <Header />
      
      <Routes>
        <Route path="/buy-youtube-views" element={<BuyYouTubeViews />} />
        <Route path="/get-start" element={ <GetStart/>} />
        
        {/* <Route path="/buy-youtube-subscribers" element={<BuyYouTubeSubscribers />} />
        <Route path="/buy-youtube-likes" element={<BuyYouTubeLikes />} />
        <Route path="/buy-instagram-followers" element={<BuyInstagramFollowers />} /> */}
        {/* Add a fallback route for any unknown URLs */}
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
