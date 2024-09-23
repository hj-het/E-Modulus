import React from 'react';
import '../Style/RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <h1>Refund Policy</h1>
      <p>
        At <span className="roman-bold">E Modulus</span>, we strive to deliver quality services to help grow your YouTube channel.
        Due to the nature of our services, once an order is placed and the service has commenced, we are unable to offer a refund after two hours of the purchase.
        This is because the processes involved in delivering our service, such as increasing video views and engagement, begin immediately.
        We encourage you to review your order carefully before making a purchase.
      </p>
      <p>
        If you experience any technical issues or have concerns about the services you have received,
        please contact our <a href="mailto:support@emodulus.com">support team</a> within two hours of your purchase.
        We are committed to resolving any issues you may have and ensuring your satisfaction with E Modulus.
        However, after the two-hour window, all sales are final, and no refunds will be issued.
      </p>
    </div>
  );
};

export default RefundPolicy;