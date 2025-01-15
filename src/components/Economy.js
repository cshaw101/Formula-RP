import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";

const EconomySection = () => {
  return (
    <Box
      id="economy-section"
      sx={{
        padding: { xs: "20px 10px", sm: "40px 20px" }, // Further reduced padding
        textAlign: "center",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px", // Smaller border radius
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'F1-Wide', sans-serif",
          fontSize: { xs: "2rem", sm: "2.5rem" }, // Reduced font size
          fontWeight: "bold",
          color: "#ffd700",
          marginBottom: "20px", // Reduced margin
          letterSpacing: "0.5px", // Smaller letter spacing
        }}
      >
        💰 The Economy: The Heart of the League
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: { xs: "1rem", sm: "1.2rem" }, // Reduced font size
          lineHeight: "1.4",
          marginBottom: "20px", // Reduced margin
          maxWidth: "600px", // Smaller max width
          textAlign: "center",
          color: "#f0f0f0",
        }}
      >
        Money makes the world—and our league—go round! The economy is a core
        part of our F1 roleplaying experience, adding layers of strategy and
        competition. Managing finances wisely could determine victory or defeat.
        Here’s how it works:
      </Typography>

      <Divider sx={{ width: "70%", marginBottom: "20px", borderColor: "#ffd700" }} /> {/* Reduced margin */}

      <Grid
        container
        justifyContent="center"
        spacing={1} // Reduced spacing
        sx={{
          maxWidth: "700px", // Smaller max width
          width: "100%",
        }}
      >
        {[
          {
            title: "For Drivers",
            content: (
              <>
                <strong>Earning Money:</strong> Drivers earn funds through race performance and contracts. <br />
                <strong>Expenses:</strong> Be prepared for fines, repair fees, and recovery costs.
              </>
            ),
          },
          {
            title: "For Team Owners",
            content: (
              <>
                <strong>Sponsorship Deals:</strong> Secure sponsors, but poor performance may cause sponsors to drop out. <br />
                <strong>Supporting the Team:</strong> Owners balance spending with strategy to support their team.
              </>
            ),
          },
          {
            title: "For Team Principals",
            content: (
              <>
                <strong>Strategic Spending:</strong> Principals advise on how to spend team funds effectively.
              </>
            ),
          },
          {
            title: "For FIA Members",
            content: (
              <>
                <strong>Fines & Penalties:</strong> FIA members issue financial penalties for rule violations.
              </>
            ),
          },
        ].map((section, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <SectionBox title={section.title}>{section.content}</SectionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SectionBox = ({ title, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#242424",
        padding: "15px", // Further reduced padding
        borderRadius: "6px", // Smaller border radius
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // Lighter shadow
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-4px)", // Smaller hover effect
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)", // Lighter hover shadow
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        height: "250px", // Reduced card height
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'F1-Wide', sans-serif",
          fontWeight: "bold",
          color: "#FFD700",
          marginBottom: "10px", // Reduced margin
          fontSize: "1.4rem", // Smaller font size
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: "1rem", // Smaller font size
          color: "#f0f0f0",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default EconomySection;
