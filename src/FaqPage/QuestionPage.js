import React from "react";
import Faq from "react-faq-component";
import "./Faqpage.css";

const faqData = {
  rows: [
    {
      title: "Why buy YouTube views from E-Modulus?",
      content: `
                Since the start of our company, we have always ensured that every one of your needs is met with unrivaled quality.
                As a manual team who manually checks all products for authenticity before they are delivered to you – there’s no better option than us!
                We are the only company that offers a complete package of products for publishers, including high-quality views for YouTube ads and high retention views.
                E-Modulus cares about our customer satisfaction, so our customer support team provides solutions on the payment process a few hours after you make the purchase.
                We also care about your pocket; our services come at rock-bottom prices so that you can afford them! We offer a refill package money-back guarantee on all of our products, so there’s nothing you can lose when you give us a try.
                Other packages we have include premium-quality views for 1000 views or less!
            `,
    },
    {
      title: "Do E-Modulus's YouTube views affect YouTube ranking?",
      content: `
                We know that many factors affect YouTube ranking. When these elements come together, YouTube automatically sends you more viewers.
                The title of your video, your video description, and the thumbnail pictures you use for your videos are some factors that directly affect your ranking.
                In addition to these factors, buying high-quality views can also be among the factors that affect your ranking positively.
            `,
    },
    {
      title: "Does it take a long time, and how do YouTube views increase?",
      content: `
                First, you go to our YouTube views service and send your video link to our system. Right after you buy views for your YouTube video, you can see the incoming views on the video statistics page within an average of 10 minutes!
                For slow viewings, the daily rate is around 2000 views on average, but for immediate viewings, this can be up to 10,000+ views per day.
                The reflection of the views just below your YouTube video may take up to three hours, depending on YouTube.
            `,
    },
    {
      title: "Is it legal to buy YouTube Views?",
      content: `
                Yes, of course, buying YouTube views is legal in all countries. However, buying views is not in line with YouTube’s terms.
                YouTube works every day to make this and similar services impossible. E-Modulus, on the other hand, is trying to do the service it provides in line with YouTube’s terms to fulfill the demands of its customers.
                As long as you buy real video plays from real YouTube accounts, the number of views of your YouTube videos will continue to grow organically.
            `,
    },
    {
      title: "Why do people need to buy real YouTube views?",
      content: `
                Standing out from the crowd on YouTube is not easy, and it’s even more challenging to appear on the search results when you have a small following or no one.
                That’s why purchasing YouTube views increases your Social Media engagement; as a result, your YouTube video views impact your ranking on YouTube’s search engine.
            `,
    },
    {
      title:
        "1 million YouTube views is how much in costs, and is it possible to buy it?",
      content: `
                E-Modulus is the best place to get as many views as you like without any limits. We will help you increase your views to up to 1 million YouTube video views and more, if you like, with our service!
            `,
    },
    {
      title: "Will others know that I bought views?",
      content: `
                The great thing about purchasing YouTube views from E-Modulus is that they make your video views look authentic.
                Our packages also work to bring more organic traffic since when users see popular content such as yours, it’s hard not to check in!
            `,
    },
  ],
};

const faqConfig = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

const FaqPage = () => {
  return (
    <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
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
    </div>
  );
};

export default FaqPage;
