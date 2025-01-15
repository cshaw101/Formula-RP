import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports"; // Icon for F1 theme
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Icon for button
import { Link } from "react-scroll"; // Import Link from react-scroll

const Overview = () => {
  return (
    <Box
      id="overview"
      sx={{
        padding: { xs: "20px 10px", sm: "40px 20px" }, // Further reduced padding
        textAlign: "center",
        backgroundColor: "#2e2e2e", // Dark grey background
        backgroundImage: "url('/assets/overview-bg.jpg')", // Optional background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFFFFF", // Keeping text light for readability
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px", // Rounded corners
        marginTop: "100px", // Further reduced space above
        marginBottom: "100px", // Further reduced space below
      }}
    >
      <SportsMotorsportsIcon
        sx={{
          fontSize: { xs: "3rem", sm: "4rem" }, // Reduced icon size further
          color: "#FFD700", // Gold color for F1 theme
          marginBottom: "10px",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Bebas Neue', sans-serif", // F1-style font for header
          fontSize: { xs: "2.5rem", sm: "4rem" }, // Reduced font size
          fontWeight: "bold",
          color: "#FFD700", // F1 gold color for the header
          marginBottom: "15px", // Reduced margin
          maxWidth: "80%",
          margin: "0 auto",
          letterSpacing: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px", // Reduced gap between text and icon
          wordBreak: "break-word", // Allow text to wrap correctly
        }}
      >
        Your Journey Starts Here
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Roboto', sans-serif", // Fallback font for body text
          fontSize: { xs: "1.2rem", sm: "1.4rem" }, // Reduced font size
          lineHeight: "1.6", // Reduced line height
          marginBottom: "15px", // Reduced space
          color: "#FFFFFF",
          maxWidth: "80%",
          margin: "0 auto",
          letterSpacing: "1px",
          wordBreak: "break-word", // Ensure body text wraps properly
        }}
      >
        Experience the thrill of Formula 1 like never before! Join a dynamic league where every player takes on a unique role: Owners manage budgets and teams, Principals strategize for success, Drivers race for glory, and FIA members enforce the rules.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Roboto', sans-serif", // Fallback font for body text
          fontSize: { xs: "1.2rem", sm: "1.4rem" }, // Reduced font size
          lineHeight: "1.6", // Reduced line height
          marginBottom: "30px", // Reduced space
          color: "#FFFFFF",
          maxWidth: "80%",
          margin: "0 auto",
          letterSpacing: "1px",
          wordBreak: "break-word", // Ensure body text wraps properly
        }}
      >
        Take the wheel, make bold decisions, and create unforgettable moments in this immersive roleplay experience.
      </Typography>

      {/* Smooth Scroll to Sign-Up Section */}
      <Link
        to="signUp"
        smooth={true}
        duration={500}
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          sx={{
            marginTop: "20px", // Reduced margin
            padding: "8px 16px", // Reduced padding
            backgroundColor: "#FFD700", // F1 gold theme
            color: "#212121",
            fontWeight: "bold",
            fontSize: "0.9rem", // Reduced font size
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px", // Reduced gap between icon and text
            "&:hover": {
              backgroundColor: "#FFB300",
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Adding hover shadow effect
            },
            maxWidth: "200px", // Reduced max width
            margin: "0 auto",
          }}
        >
          <ArrowForwardIcon /> Join the League
        </Button>
      </Link>
    </Box>
  );
};

export default Overview;
