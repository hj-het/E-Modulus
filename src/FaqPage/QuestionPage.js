import React, { useState, useEffect } from "react";
import Faq from "react-faq-component";
import axios from "axios"; 
import "./Faqpage.css";

const FaqPage = () => {
  const [faqData, setFaqData] = useState({ rows: [] }); 
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("/v1/getFaqs");
        const faqItems = response.data.data.map((faq) => ({
          title: faq.question,
          content: faq.answer.replace(/<br\s*\/?>/gi, "\n"), 
        }));
        
        setFaqData({ rows: faqItems });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching FAQ data: ", error);
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []); 

  const faqConfig = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {loading ? (
        <p>Loading FAQs...</p>
      ) : (
        <Faq
          data={faqData}
          styles={{
            titleTextColor: "#d32f2f",
            rowTitleColor: "#d32f2f",
            rowTitleTextSize: "25px",
            rowContentColor: "grey",
            rowContentTextSize: "20px",
            arrowColor: "red",
          }}
          config={faqConfig}
        />
      )}
    </div>
  );
};

export default FaqPage;
