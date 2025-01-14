import React from "react";
import { Box, Typography } from "@mui/material";
import { WiDayCloudy, WiDayLightning, WiDaySunny } from "react-icons/wi"; // Importing a weather icon from react-icons

const WeatherSection = () => {
  return (
    <Box
      id="weather-section"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#e0f7fa",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "40px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          marginBottom: "15px",
          fontWeight: "bold",
        }}
      >
        Weather Forecast and Accuracy
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <WiDaySunny size={60} color="#FF9800" /> {/* Weather icon */}
        <WiDayCloudy size={60} color="#FF9800" />
        <WiDayLightning size={60} color="#FF9800" />
      </Box>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.6" }}>
      The weather in our league is just like real life—unpredictable! While we have a dedicated Weather Channel in the Discord for all race-related forecasts, keep in mind that these predictions are not always perfect. Races can be impacted by sudden changes, making strategy decisions tricky for teams.
      But don't worry! Teams with enough funds can purchase an Enhanced Weather Monitor to get more accurate and reliable weather predictions. This will help your team make better-informed decisions about tire choices and race strategy.
      Just remember: even the best weather systems can't always predict everything, so expect a bit of drama, surprises, and the potential for wild changes in conditions—just like a real race weekend!
      </Typography>
     
    </Box>
  );
};

export default WeatherSection;
