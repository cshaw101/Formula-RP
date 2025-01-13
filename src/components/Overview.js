import React from "react";
import { Box, Typography } from "@mui/material";

const Overview = () => {
  return (
    <Box
      id="overview"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'F1-Wide', sans-serif",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Welcome to the F1 Roleplay League
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: "18px",
          lineHeight: "1.8",
          marginBottom: "20px",
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
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        Are you ready to make your mark on the F1 Roleplay League? This is your
        chance to live the world of Formula 1, from strategy meetings to
        high-stakes races. Take the wheel, make bold decisions, and create
        unforgettable moments in this roleplay experience.
      </Typography>
    </Box>
  );
};

export default Overview;
