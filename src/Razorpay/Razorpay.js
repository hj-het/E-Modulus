// import React, { useState } from 'react';

// const Razorpayreact = ({ email, amount }) => {
//   const [paymentId, setPaymentId] = useState('');

//   // Function to load Razorpay script dynamically
//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   // Function to display Razorpay payment gateway
//   const displayRazorpay = async () => {
//     const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    
//     if (!res) {
//       alert('Razorpay SDK failed to load. Are you online?');
//       return;
//     }

//     const options = {
//       key: 'rzp_test_YOUR_KEY_HERE', // Replace with your Razorpay key
//       amount: amount * 100, // Razorpay needs the amount in paise (smallest currency unit)
//       currency: 'INR',
//       name: 'Your Company Name',
//       description: 'Test Transaction',
//       image: 'https://your-logo-url.com/logo.png',
//       handler: function (response) {
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//         setPaymentId(response.razorpay_payment_id);
//       },
//       prefill: {
//         name: 'Your Name',
//         email: email,
//       },
//       theme: {
//         color: '#F37254',
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div>
//       <button onClick={displayRazorpay}>Pay Now</button>
//       {paymentId && <p>Payment ID: {paymentId}</p>}
//     </div>
//   );
// };

// export default Razorpayreact;
