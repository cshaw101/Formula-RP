import React from "react";
import { Box, Typography } from "@mui/material";
import { WiDayCloudy, WiDayLightning, WiDaySunny } from "react-icons/wi";

const WeatherSection = () => {
  return (
    <Box
      id="weather-section"
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#e0f7fa",
        borderRadius: "12px",
        boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
        marginBottom: "50px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#0288d1",
        }}
      >
        Weather Forecast and Accuracy
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <WiDaySunny size={70} color="#FF9800" />
        <WiDayCloudy size={70} color="#FF9800" />
        <WiDayLightning size={70} color="#FF9800" />
      </Box>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.8", color: "#555" }}>
        The weather in our league is just like real life—unpredictable! While we have a dedicated Weather Channel in the Discord for all race-related forecasts, keep in mind that these predictions are not always perfect. Races can be impacted by sudden changes, making strategy decisions tricky for teams.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginTop: "15px" }}>
        Teams with enough funds can purchase an Enhanced Weather Monitor to get more accurate and reliable weather predictions. This will help your team make better-informed decisions about tire choices and race strategy.
      </Typography>
    </Box>
  );
};

export default WeatherSection;
