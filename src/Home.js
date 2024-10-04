import React from "react";
import "./Style/Home.css";
import Services from "./Service/Service";
import Reasons from "./Reasons/Reason";
import Steps from "./Steps/Step";
import Testimonials from "./Testimonial/Testimonials";
// import FooterBanner from "./FooterBanner/FooterBanner";
// import YouTubeCampaign from "./Components/YouTube/YouTubeCampaign";
import ReviewForm from "./Review/ReviewForm";
import FaqPage from "./FaqPage/QuestionPage";
import GuaranteeSection from "./Gurrenty/GuaranteeSection";
import Blog from "./Blog/Blog";

const Home = () => {
  return (
    <div>
      <div className="homepage">
        <div className="mainpage">
          <h1>
            Organic YouTube <br />
            <span className="growth">Growth Service</span> <br/>
            <span className="label-red">E-Modulus </span>
          </h1>
          <p>
            Lights, camera, and action! You're live on the best social media
            channel for views—YouTube. But you may require some backup to
            quickly gain a huge amount of views in a short time. Of course, this
            is where the highly-recommended YouTube growth service, E-Modulus,
            comes on the stage!
          </p>
        </div>
        <div className="mainimage">
          <img src="./images/Home-page_1.webp" alt=""></img>
        </div>
      </div>
      <Services />
      <Reasons />
      <Steps />
      <GuaranteeSection/>
      <FaqPage/>
      <ReviewForm/>
      <Testimonials />
      <Blog/>
      {/* <FooterBanner/> */}
    </div>
  );
};

export default Home;
