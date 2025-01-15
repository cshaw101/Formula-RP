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
        padding: { xs: "40px 20px", sm: "80px 40px" },
        textAlign: "center",
        backgroundColor: "#2e2e2e", // Dark grey background
        backgroundImage: "url('/assets/overview-bg.jpg')", // Optional background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFFFFF", // Keeping text light for readability
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px", // Add some rounded corners for a softer look
        marginTop: "250px", // Space above this component
        marginBottom: "250px", // Space below this component
      }}
    >
      <SportsMotorsportsIcon
        sx={{
          fontSize: { xs: "4rem", sm: "5rem" },
          color: "#FFD700", // Gold color for F1 theme
          marginBottom: "20px",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Bebas Neue', sans-serif", // F1-style font for header
          fontSize: { xs: "3.5rem", sm: "5rem" },
          fontWeight: "bold",
          color: "#FFD700", // F1 gold color for the header
          marginBottom: "30px",
          maxWidth: "80%",
          margin: "0 auto",
          letterSpacing: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          wordBreak: "break-word", // Allow text to wrap correctly
        }}
      >
        <span>Your Journey Starts Here</span>
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Roboto', sans-serif", // Fallback font for body text
          fontSize: { xs: "1.6rem", sm: "1.8rem" },
          lineHeight: "2",
          marginBottom: "30px",
          color: "#FFFFFF",
          maxWidth: "80%",
          margin: "0 auto",
          letterSpacing: "1px",
          wordBreak: "break-word", // Ensure body text wraps properly
        }}
      >
        Experience the thrill of Formula 1 like never before! Join a dynamic
        league where every player takes on a unique role: Owners manage budgets
        and teams, Principals strategize for success, Drivers race for glory,
        and FIA members enforce the rules.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Roboto', sans-serif", // Fallback font for body text
          fontSize: { xs: "1.6rem", sm: "1.8rem" },
          lineHeight: "2",
          marginBottom: "50px",
          color: "#FFFFFF",
          maxWidth: "80%",
          margin: "0 auto",
          letterSpacing: "1px",
          wordBreak: "break-word", // Ensure body text wraps properly
        }}
      >
        Take the wheel, make bold decisions, and create unforgettable moments in
        this immersive roleplay experience.
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
            marginTop: "40px",
            padding: "12px 24px",
            backgroundColor: "#FFD700", // F1 gold theme
            color: "#212121",
            fontWeight: "bold",
            fontSize: "1.1rem",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            "&:hover": {
              backgroundColor: "#FFB300",
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Adding hover shadow effect
            },
            maxWidth: "240px",
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
