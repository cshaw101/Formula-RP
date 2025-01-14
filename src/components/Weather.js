import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { WiDayCloudy, WiDayLightning, WiDaySunny } from "react-icons/wi";

const WeatherSection = () => {
  return (
    <Box
      id="weather-section"
      sx={{
        padding: "120px 20px", // Increased padding for a larger section
        textAlign: "center",
        backgroundColor: "#2e2e2e", // Matching the dark background color
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        marginBottom: "120px", // Increased margin for better spacing
        width: "100%", // Make the box stretch to the full width of the page
        maxWidth: "100%", // Ensure it doesn't get constrained by maxWidth
        position: "relative", // To maintain its relative position in the page
        overflow: "hidden", // Ensures content stays within boundaries
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px", // Set the maximum width for the content inside the box
          margin: "0 auto", // Center the content horizontally
        }}
      >
        {/* Title */}
        <Typography
          variant="h2" // Increased title size
          sx={{
            fontFamily: "'F1-Wide', sans-serif", // Updated font to match the rest of the page
            marginBottom: "60px", // Increased margin for better spacing
            fontWeight: "bold",
            color: "#FFD700", // Gold color for the title
            fontSize: { xs: "3.5rem", sm: "5rem" }, // Header size similar to Overview
            textAlign: "center", // Ensure title is centered
            letterSpacing: "2px", // Adding letter spacing for clarity
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add subtle shadow for depth
          }}
        >
          Weather Forecast and Accuracy
        </Typography>

        {/* Icons Section */}
        <Grid container spacing={6} justifyContent="center" sx={{ marginBottom: "80px" }}>
          <Grid item xs={4} sm={2} md={2}>
            <WiDaySunny
              size={120} // Increased icon size
              color="#FF9800"
              sx={{
                "&:hover": {
                  transform: "scale(1.2)", // Slightly bigger hover effect
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            />
          </Grid>
          <Grid item xs={4} sm={2} md={2}>
            <WiDayCloudy
              size={120} // Increased icon size
              color="#FF9800"
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            />
          </Grid>
          <Grid item xs={4} sm={2} md={2}>
            <WiDayLightning
              size={120} // Increased icon size
              color="#FF9800"
              sx={{
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Description Section */}
        <Box sx={{ marginBottom: "80px", maxWidth: "900px", margin: "0 auto" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.6rem", sm: "1.8rem" }, // Larger font size for better readability
              lineHeight: "2", // Increased line height for readability
              color: "#fff", // White text for contrast on dark background
              marginBottom: "60px", // Increased margin for more space between paragraphs
              textAlign: "left",
              letterSpacing: "1px", // Add letter spacing for readability
            }}
          >
            The weather in our league is just like real life—unpredictable! While we have a dedicated Weather Channel in the Discord for all race-related forecasts, keep in mind that these predictions are not always perfect. Races can be impacted by sudden changes, making strategy decisions tricky for teams.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.6rem", sm: "1.8rem" }, // Larger font size for better readability
              lineHeight: "2",
              color: "#fff", // White text for contrast on dark background
              marginTop: "60px", // Increased margin for spacing
              textAlign: "left",
              letterSpacing: "1px", // Add letter spacing for readability
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
