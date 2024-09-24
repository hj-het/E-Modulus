import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import "../Style/getstart.css";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(10),
  flexDirection: 'column',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: '20px',
}));

const GetStart = () => {
  const location = useLocation();
  const initialViews = location.state?.views || '';
  const initialSubtype = location.state?.subtype || '';
  const [formData, setFormData] = useState({
    youtubeUrl: '',
    email: '',
    views: initialViews,
    subtype: initialSubtype
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const validateForm = () => {
    const { youtubeUrl, email, views } = formData;


    const urlPattern = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

    if (!urlPattern.test(youtubeUrl)) {
      toast.error('Please enter a valid YouTube URL.');
      return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    
    if (!views || isNaN(views) || Number(views) <= 0) {
      toast.error('Please enter a valid number of views.');
      return false;
    }

    return true;
  };

  const handlePayment = (amount) => {
    const options = {
      key: "rzp_test_VQLOJcsFJtVFzO", 
      amount: amount,
      currency: "INR",
      name: "Modulus Fintech",
      description: "Test Transaction",
      image: "https://yourlogo.com/logo.png",
      handler: function (response) {
        toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`); // Show success toast
      },
      prefill: {
        name: "het chunara",
        email: formData.email,
      },
      notes: {
        address: "Some Address"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before submitting
    if (!validateForm()) {
      return;
    }
console.log("formData.views",formData)
    const payload = {
      views: formData.views,
      url: formData.youtubeUrl,
    };

    try {
      const response = await axios.post('/v1/orderDetails', JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Response from API:", response.data);

      handlePayment(response.data.amount);
      toast.success('Order details submitted successfully!'); // Show success toast

      setFormData({
        youtubeUrl: '',
        email: '',
        views: '',
      });
    } catch (error) {
      console.error("Error posting data:", error.response?.data || error.message);
      
      const message = error.response?.data?.message || 'An unexpected error occurred.';
      toast.error(`Error: ${message}`); // Show error toast
    }
  };

  return (
    <Container maxWidth="sm" className="form-container">
      <StyledPaper elevation={3} className="styled-paper">
        <Typography variant="h4" component="h2" gutterBottom className="title">
          Get Started
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="YouTube Video URL"
            variant="outlined"
            margin="normal"
            fullWidth
            name="youtubeUrl"
            value={formData.youtubeUrl}
            onChange={handleChange}
            className="text-field"
            InputProps={{
              sx: {
                borderRadius: '30px',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'darkred',
                },
              },
            }} />
          <TextField
            label="Email Address"
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-field"
            InputProps={{
              sx: {
                borderRadius: '30px',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'darkred',
                },
              },
            }} />
          <TextField
            label="Views"
            variant="outlined"
            margin="normal"
            fullWidth
            name="views"
            value={`${formData.views} ${formData.subtype}`}
            onChange={handleChange}
            className="text-field"
            disabled 
            InputProps={{
              sx: {
                borderRadius: '30px',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'darkred',
                },
              },
            }} />
          <Button
            type="submit"
            variant="contained"
            className="submit-button"
            sx={{ backgroundColor: '#0b0c0c', color: 'white', mt: 4 }}
          >
            Continue
          </Button>
        </form>
      </StyledPaper>
      <ToastContainer /> {/* Add ToastContainer to render the toasts */}
    </Container>
  );
};

export default GetStart;
