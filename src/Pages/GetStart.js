import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/getstart.css";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(10),
  flexDirection: "column",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderRadius: "20px",
}));

const GetStart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Set initial values from location.state or fallback to empty string/0
  const initialViews = location.state?.views || "";
  const initialSubtype = location.state?.subtype || "";
  const initialPrice = location.state?.original_price || 0; // Fallback to 0 if undefined
  const platform = location.state?.platform || "youtube"; 

  const [formData, setFormData] = useState({
    platformInput: "",
    email: "",
    views: initialViews,
    subtype: initialSubtype,
    original_price: initialPrice,
  });

  // Load Razorpay script once when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    const { platformInput, email, views } = formData;

    // URL validation only for YouTube
    if (platform === "youtube") {
      const urlPattern = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
      if (!urlPattern.test(platformInput)) {
        toast.error("Please enter a valid YouTube URL.");
        return false;
      }
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!views || isNaN(views) || Number(views) <= 0) {
      toast.error("Please enter a valid number of views.");
      return false;
    }

    return true;
  };

  // Razorpay payment handler
  const handlePayment = (initialPrice) => {
    const amountInPaise = initialPrice * 100; 
     console.log("amountInPaise-->",amountInPaise)
    const options = {
      key: "rzp_test_VQLOJcsFJtVFzO", 
      amount: amountInPaise, 
      currency: "INR",
      name: "Modulus Fintech",
      description: "Test Transaction",
      image: "./images/mainlogo.webp",
      handler: function (response) {
        toast.success(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );
        navigate("/thankyou");
      },
      prefill: {
        name: "E-Modulus",
        email: formData.email,
      },
      notes: {
        address: "Some Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload = {
      views: formData.views,
      url: formData.platformInput,
      original_price: formData.original_price, // Ensure it's passed here
    };

    try {
      const response = await axios.post(
        "/v1/orderDetails",
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response)
      console.log("original_price:", formData.original_price);

      // Pass the original_price to handlePayment function
      if (formData.original_price) {
        const amountInPaise = initialPrice * 100; 
        handlePayment(amountInPaise); // Razorpay expects amount in paise
      } else {
        toast.error("Original price is not defined.");
      }

      setFormData({
        platformInput: "",
        email: "",
        views: "",
      });
    } catch (error) {
      const message =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(`Error: ${message}`);
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
            label={
              platform === "youtube"
                ? "YouTube Video URL"
                : platform === "instagram"
                ? "Instagram URL"
                : platform === "facebook"
                ? "Facebook Page URL"
                : platform === "twitter"
                ? "Twitter URL"
                : platform === "website"
                ? "Website URL"
                : platform === "google-business"
                ? "Google-Business URL"
                : platform === "telegram"
                ? "Telegram URL"
                : platform === "linkedin"
                ? "Linkedin URL"
                : "Platform URL"
            }
            variant="outlined"
            margin="normal"
            fullWidth
            name="platformInput"
            value={formData.platformInput}
            onChange={handleChange}
            className="text-field"
            InputProps={{
              sx: {
                borderRadius: "30px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "darkred",
                },
              },
            }}
          />
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
                borderRadius: "30px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "darkred",
                },
              },
            }}
          />
          <TextField
            label="Views"
            variant="outlined"
            margin="normal"
            fullWidth
            name="views"
            value={`${formData.views} ${formData.subtype} $ ${formData.original_price}`}
            onChange={handleChange}
            className="text-field"
            disabled
            InputProps={{
              sx: {
                borderRadius: "30px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "darkred",
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            className="submit-button"
            sx={{ backgroundColor: "#0b0c0c", color: "white", mt: 4 }}
          >
            Continue
          </Button>
        </form>
      </StyledPaper>
      <ToastContainer />
    </Container>
  );
};

export default GetStart;
