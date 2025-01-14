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
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'F1-Wide', sans-serif",
          fontSize: { xs: "2.5rem", sm: "3.5rem" },
          fontWeight: "bold",
          color: "#FFD700", // F1 gold color for the header
          marginBottom: "30px",
        }}
      >
        Your Journey Starts Here
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: { xs: "1.2rem", sm: "1.4rem" },
          lineHeight: "1.8",
          marginBottom: "30px",
          color: "#FFFFFF", // Keeping the text white for contrast
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
          fontSize: { xs: "1.2rem", sm: "1.4rem" },
          lineHeight: "1.8",
          color: "#FFFFFF", // Keeping the text white for contrast
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
          },
        }}
        href="#signup" // Button link for sign-up
      >
        Join the League Now
      </Button>
    </Box>
  );
};

export default Overview;
