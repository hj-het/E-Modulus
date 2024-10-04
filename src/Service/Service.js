import React from 'react';
import ServiceCard from './ServiceCard';
import "./service.css"

const Services = () => {
  return (
    <div className="services-section py-12">
      <h2 className="serviceheading">
        Buy YouTube Views, Subscribers, And Likes
      </h2>
      <div className="container-service">
        <ServiceCard
          icon="👁️"
          title="YouTube Views"
          description="It's the views that will help you boost your YouTube channel. They'll give your videos a significant recognition in the YouTube algorithm, leading you to more and more organic views soon."
          price="$4.80"
          rating={5}
          btnText="Buy YouTube views"
          link="/buy-youtube-views"
        />
        <ServiceCard
          icon="👍"
          title="YouTube Likes"
          description="When YouTube visitors see that your videos have a lot of likes, they will be more likely to watch them. Likes will help you grow your channel quicker."
          price="$3.50"
          rating={5}
          btnText="Buy likes"
          link="/buy-youtube-likes"
        />
        <ServiceCard
          icon="👥"
          title="YouTube Subscribers"
          description="Subscribers are the main drivers of YouTube's algorithm. Once you have a good number of subscribers, it means you're someone worth following."
          price="$3.90"
          rating={5}
          btnText="Buy subscribers"
          link="/buy-youtube-subscribers"
        />
      </div>
    </div>
  );
};

export default Services;
