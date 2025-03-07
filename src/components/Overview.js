import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
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
          color: "#F79535", // Match the text color (Orange)
          marginBottom: "10px",
          marginRight: "8px", // Move icon to the left (increased space between icon and text)
          position: "relative", // Allow precise positioning
          top: "4px", // Adjust vertically to align with text
          left: "-15px", // Move icon further to the left
          display: "inline", // Align with text
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Bebas Neue', sans-serif", // F1-style font for header
          fontSize: { xs: "2.5rem", sm: "4rem" }, // Reduced font size
          fontWeight: "bold",
          color: "#F79535", // Orange color for the header text
          marginBottom: "15px", // Reduced margin
          maxWidth: "80%",
          margin: "0 auto",
          letterSpacing: "2px",
          display: "inline", // To make the border wrap each letter
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6), 0 0 25px rgba(125, 53, 105, 0.8)", // Purple glow effect
          wordBreak: "break-word", // Allow text to wrap correctly
        }}
      >
        Your Journey Starts Here
      </Typography>

      {/* Card for body text */}
      <Card
        sx={{
          maxWidth: "80%",
          margin: "20px auto", // Center card horizontally and add margin on top/bottom
          backgroundColor: "#3d3d3d", // Slightly lighter background for the card
          borderRadius: "8px", // Rounded corners for card
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Adding a shadow for depth
          minHeight: "250px", // Increased min-height for vertical centering
          display: "flex", // Flexbox to center content
          justifyContent: "center", // Center the content vertically
          alignItems: "center", // Center the content vertically
          padding: "20px", // Padding inside the card
        }}
      >
        <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Roboto', sans-serif", // Fallback font for body text
              fontSize: { xs: "1.2rem", sm: "1.4rem" }, // Reduced font size
              lineHeight: "1.8", // Increased line height for better readability
              color: "#FFFFFF",
              letterSpacing: "1px",
              wordBreak: "break-word", // Ensure body text wraps properly
              maxWidth: "90%", // Add a max width to prevent text from going too wide
              margin: "0 auto", // Center the text horizontally
            }}
          >
            Experience the thrill of Formula 1 like never before! Join a dynamic league where every player takes on a unique role: Owners manage budgets and teams, Principals strategize for success, Drivers race for glory, and FIA members enforce the rules.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Roboto', sans-serif", // Fallback font for body text
              fontSize: { xs: "1.2rem", sm: "1.4rem" }, // Reduced font size
              lineHeight: "1.8", // Increased line height for better readability
              marginTop: "20px", // Add space between paragraphs
              color: "#FFFFFF",
              letterSpacing: "1px",
              wordBreak: "break-word", // Ensure body text wraps properly
              maxWidth: "90%", // Add a max width to prevent text from going too wide
              margin: "0 auto", // Center the text horizontally
            }}
          >
            Take the wheel, make bold decisions, and create unforgettable moments in this immersive roleplay experience.
          </Typography>
        </CardContent>
      </Card>

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
            backgroundColor: "#7D3569", // Purple color for the button
            color: "#F79535", // Orange font color for the button
            fontWeight: "bold",
            fontSize: "0.9rem", // Reduced font size
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px", // Reduced gap between icon and text
            "&:hover": {
              backgroundColor: "#F79535", // Orange background on hover
              color: "#7D3569", // Purple text color on hover
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Adding hover shadow effect
            },
            maxWidth: "200px", // Reduced max width
            margin: "0 auto",
          }}
        >
          <ArrowForwardIcon /> Join the Discord
        </Button>
      </Link>
    </Box>
  );
};

export default Overview;
