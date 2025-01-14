import React from "react";
import { Box, Typography, Button } from "@mui/material";

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
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Adding a subtle shadow for depth
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'F1-Wide', sans-serif",
          fontSize: { xs: "3.5rem", sm: "5rem" }, // Larger font size
          fontWeight: "bold",
          color: "#FFD700", // F1 gold color for the header
          marginBottom: "50px", // Increased margin for more space between title and text
          maxWidth: "80%", // Ensure the title doesn’t stretch too wide on large screens
          margin: "0 auto", // Center the title
          letterSpacing: "2px", // Add letter spacing for clarity
        }}
      >
        Your Journey Starts Here
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: { xs: "1.6rem", sm: "1.8rem" }, // Increased font size for better readability
          lineHeight: "2", // Increased line height for better spacing between lines
          marginBottom: "30px", // Added space between paragraphs
          color: "#FFFFFF", // Keeping the text white for contrast
          maxWidth: "80%", // Prevent text from going too wide on large screens
          margin: "0 auto", // Center text
          letterSpacing: "1px", // Add letter spacing for improved readability
          textAlign: "center", // Ensure the text is centered
        }}
      >
        Experience the thrill of Formula 1 like never before! Join a dynamic
        league where every player takes on a unique role: Owners manage budgets
        and teams, Principals strategize for success, Drivers race for glory,
        and FIA members enforce the rules. Whether you're building your empire
        or chasing the podium, every decision matters.
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: { xs: "1.6rem", sm: "1.8rem" }, // Increased font size
          lineHeight: "2", // Increased line height
          marginBottom: "50px", // Added more space after the last paragraph
          color: "#FFFFFF", // Keeping the text white for contrast
          maxWidth: "80%", // Prevent text from going too wide on large screens
          margin: "0 auto", // Center text
          letterSpacing: "1px", // Add letter spacing
          textAlign: "center", // Center the text
        }}
      >
        Are you ready to make your mark on the F1 Roleplay League? This is your
        chance to live the world of Formula 1, from strategy meetings to
        high-stakes races. Take the wheel, make bold decisions, and create
        unforgettable moments in this immersive roleplay experience.
      </Typography>
      
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
          "&:hover": {
            backgroundColor: "#FFB300",
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Adding hover shadow effect
          },
          maxWidth: "200px", // Restrict the button size for better responsiveness
          marginLeft: "auto", // Align button to the center
          marginRight: "auto", // Align button to the center
        }}
        href="#signup" // Button link for sign-up
      >
        Join the League
      </Button>
    </Box>
  );
};

export default Overview;
