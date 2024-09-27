import React, { useEffect } from 'react';

const Razorpay = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;

    script.onload = () => {
      console.log('Razorpay script loaded successfully');
    };

    script.onerror = () => {
      console.error('Failed to load Razorpay script');
    };

    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (window.Razorpay) {
      const options = {
        key: 'your_razorpay_key_here', // Replace with your Razorpay key
        amount: 50000, // Amount in paise (50000 paise = 500 INR)
        currency: 'INR',
        name: 'Your Business Name',
        description: 'Test Transaction',
        image: 'https://your-logo-url.com/logo.png',
        handler: function (response) {
          console.log('Payment Successful!', response.razorpay_payment_id);
        },
        prefill: {
          name: 'Your Name',
          email: 'email@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Corporate Office Address',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      console.error('Razorpay SDK not loaded yet.');
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Razorpay;
