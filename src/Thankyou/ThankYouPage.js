import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <Container 
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '-8%'
      }}
    >
      <Box 
        sx={{
          backgroundColor: '#f5f5f5',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src="/paymentsucces.png" 
          alt="Success"
          style={{ marginBottom: '20px' }}
        />
        <Typography variant="h3" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your payment has been successfully processed.
        </Typography>
        <Typography variant="body2" gutterBottom>
          We have sent you an email with the details of your transaction.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, backgroundColor: '#007bff', color: 'white' }}
          onClick={() => navigate('/')} 
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ThankYouPage;
