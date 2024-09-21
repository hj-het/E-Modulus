import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useLocation } from 'react-router-dom'; // Import useLocation
import "../Style/getstart.css"
// import FetchDataComponent from './Api';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(10),
  flexDirection: 'column',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: '20px',
}));

const GetStart = () => {
  const location = useLocation(); // Get location object
  const initialViews = location.state?.views || ''; // Get views from state

  // Initialize state for the form fields
  const [formData, setFormData] = useState({
    youtubeUrl: '',
    email: '',
    views: initialViews // Set initial value for views
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData->", formData);
    setFormData({
      youtubeUrl: '',
      email: '',
      views: ''
    });
  };

  return (
    // <><FetchDataComponent />
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
