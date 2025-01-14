import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { WiDayCloudy, WiDayLightning, WiDaySunny } from "react-icons/wi";

const WeatherSection = () => {
  return (
    <Box
      id="weather-section"
      sx={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "#2e2e2e", // Matching the dark background color
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        marginBottom: "60px",
        width: "100%", // Make the box stretch to the full width of the page
        maxWidth: "100%", // Ensure it doesn't get constrained by maxWidth
        position: "relative", // To maintain its relative position in the page
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px", // Set the maximum width for the content inside the box
          margin: "0 auto", // Center the content horizontally
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            marginBottom: "30px",
            fontWeight: "bold",
            color: "#fff", // White text for better contrast on dark background
            fontSize: "2rem", // Larger font size for better visibility
          }}
        >
          Weather Forecast and Accuracy
        </Typography>

        {/* Icons Section */}
        <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: "40px" }}>
          <Grid item xs={4} sm={2} md={2}>
            <WiDaySunny
              size={80}
              color="#FF9800"
              sx={{
                "&:hover": {
                  transform: "scale(1.1)", // Hover effect to make the icon larger
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            />
          </Grid>
          <Grid item xs={4} sm={2} md={2}>
            <WiDayCloudy
              size={80}
              color="#FF9800"
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            />
          </Grid>
          <Grid item xs={4} sm={2} md={2}>
            <WiDayLightning
              size={80}
              color="#FF9800"
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Description Section */}
        <Box sx={{ marginBottom: "40px", maxWidth: "800px", margin: "0 auto" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#fff", // White text for contrast on dark background
              marginBottom: "25px",
              textAlign: "left",
            }}
          >
            The weather in our league is just like real life—unpredictable! While we have a dedicated Weather Channel in the Discord for all race-related forecasts, keep in mind that these predictions are not always perfect. Races can be impacted by sudden changes, making strategy decisions tricky for teams.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#fff", // White text for contrast on dark background
              marginTop: "15px",
              textAlign: "left",
            }}
          >
            Teams with enough funds can purchase an Enhanced Weather Monitor to get more accurate and reliable weather predictions. This will help your team make better-informed decisions about tire choices and race strategy.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherSection;
