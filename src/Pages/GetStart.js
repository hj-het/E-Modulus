import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useLocation } from 'react-router-dom';
import axios from "axios";
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

  const [formData, setFormData] = useState({
    youtubeUrl: '',
    email: '',
    views: initialViews,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = (amount) => {
    const options = {
      key: "rzp_test_gZomuVOWGW9UYC", 
      amount: amount,
      currency: "INR",
      name: "Your Company",
      description: "Test Transaction",
      image: "https://yourlogo.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

      },
      prefill: {
        name: formData.email, 
        email: formData.email,
        contact: "9999999999" 
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

    
      setFormData({
        youtubeUrl: '',
        email: '',
        views: '',
      });
    } catch (error) {
      console.error("Error posting data:", error.response?.data || error.message);
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
            value={formData.views}
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
    </Container>
  );
};

export default GetStart;
