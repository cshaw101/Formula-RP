import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const SignupPage = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc45oeqC6Zi1h2fIFxR5Q2rr_Tyd-lwiKN9lac66u-r3COzQw/viewform";

  return (
    <Box
      sx={{
        padding: "80px 20px", // Increased padding for more spacing
        backgroundColor: '#2e2e2e',
        borderRadius: '15px',
        maxWidth: 800,
        margin: '0 auto',
        marginBottom: '100px', // Extra space to emphasize section
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Added shadow for depth
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#F79535', // Consistent accent color
          marginBottom: 3,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: "48px", // Larger text for impact
        }}
      >
        Sign Up for Intrepid Racing
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: '#fff',
          marginBottom: 4,
          textAlign: 'center',
          fontSize: "20px", // Adjusted font size for readability
          lineHeight: "1.8", // Increased line height for better spacing
        }}
      >
        To join the Intrepid Racing League, click the button below to sign up and complete the form.
      </Typography>

      {/* Sign-Up Button */}
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#F79535', // Using accent color
            color: '#fff',
            fontSize: '20px',
            padding: '18px 36px',
            fontWeight: 'bold',
            borderRadius: '10px',
            width: '100%',
            "&:hover": {
              backgroundColor: '#e67d29', // Darker hover effect
              transform: "scale(1.05)", // Hover animation
            },
            transition: "all 0.3s ease",
          }}
          onClick={() => window.location.href = googleFormUrl} // Redirect to Google Form
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignupPage;
