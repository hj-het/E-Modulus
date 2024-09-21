import React from "react";
import "./Style/Home.css";
import Services from "./Service/Service";
import Reasons from "./Reasons/Reason";
import Steps from "./Steps/Step";
import Testimonials from "./Testimonial/Testimonials";

const Home = () => {
  return (
    <div>
    <div className="homepage">
      <div className="mainpage">
        <h1>
          Organic YouTube <br />
          Growth Service
        </h1>
        <p>
          Lights, camera, and action! You're live on the best social media
          channel for views—YouTube. But you may require some backup to quickly
          gain a huge amount of views in a short time. Of course, this is where
          the highly-recommended YouTube growth service, Views4You, comes on the
          stage!
        </p>
      </div>
      <div className="mainimage">
        <img src="image-8.jpg" alt=""></img>
      </div>
    </div>
    <Services/>
    <Reasons/>
    <Steps/>
    <Testimonials/>
    </div>
  );
};

export default Home;
