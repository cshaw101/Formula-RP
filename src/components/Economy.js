import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";

const EconomySection = () => {
  return (
    <Box
      id="economy-section"
      sx={{
        padding: { xs: "40px 20px", sm: "80px 40px" },
        textAlign: "center",
        backgroundColor: "#2e2e2e", // Grey background
        backgroundImage: "url('/assets/economy-bg.jpg')", // Optional background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFFFFF", // Keeping text light for readability
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px", // Rounded corners for a softer look
        minHeight: "100vh", // Ensure the container takes up the full height of the screen
        margin: 0, // Ensures there's no body margin affecting this section
        paddingTop: "80px", // Adds space from the top of the page
        display: "flex", // Flexbox to allow flexible layout
        flexDirection: "column", // Stack children vertically
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'F1-Wide', sans-serif",
          fontSize: { xs: "4rem", sm: "6rem" }, // Larger font size for the title
          fontWeight: "bold",
          color: "#ffd700", // Gold color
          marginBottom: "50px", // Space between title and body text
          maxWidth: "80%", // Prevent title from stretching too wide
          margin: "0 auto", // Center the title
          letterSpacing: "2px", // Add letter spacing for clarity
          animation: "popIn 1s ease-out", // Animation for header
        }}
      >
        💰 The Economy: The Heart of the League
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: { xs: "1.8rem", sm: "2rem" }, // Increased font size
          lineHeight: "2", // Increased line height
          marginBottom: "30px", // Space between paragraphs
          color: "#FFFFFF", // White color for text
          maxWidth: "80%", // Prevent text from going too wide
          margin: "0 auto", // Center text
          letterSpacing: "1px", // Add letter spacing for improved readability
          textAlign: "center", // Center the text
          animation: "popIn 1s ease-out", // Animation for text content
        }}
      >
        Money makes the world—and our league—go round! The economy is a core part of our F1 roleplaying experience, creating an added layer of strategy and competition for every role. Managing your finances wisely could make the difference between victory and defeat. Here’s how it works:
      </Typography>

      <Divider sx={{ marginBottom: "40px" }} />

      <Grid container justifyContent="center" spacing={4} sx={{ maxWidth: "1200px", width: "100%" }}>
        <Grid item xs={12} sm={6} md={3}>
          <SectionBox title="For Drivers">
            <Typography variant="body1" sx={{ fontFamily: "'F1-Regular', sans-serif", fontSize: "1.6rem" }}>
              <strong>Earning Money:</strong> Drivers can earn funds through race performance and Driver contracts. <br />
              <strong>Expenses:</strong> Be prepared for costs like fines for bad wrecks, repair fees, and recovery expenses for injuries.
            </Typography>
          </SectionBox>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SectionBox title="For Team Owners">
            <Typography variant="body1" sx={{ fontFamily: "'F1-Regular', sans-serif", fontSize: "1.6rem" }}>
              <strong>Sponsorship Deals:</strong> Secure sponsors to bring in extra income, but beware—poor performance could cause sponsors to pull out! <br />
              <strong>Supporting the Team:</strong> Owners must ensure their drivers have what they need to succeed, balancing spending with strategy.
            </Typography>
          </SectionBox>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SectionBox title="For Team Principals">
            <Typography variant="body1" sx={{ fontFamily: "'F1-Regular', sans-serif", fontSize: "1.6rem" }}>
              <strong>Strategic Spending:</strong> Principals play a key role in advising how team funds are spent, from deciding on tire purchases to recommending key upgrades.
            </Typography>
          </SectionBox>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SectionBox title="For FIA Members">
            <Typography variant="body1" sx={{ fontFamily: "'F1-Regular', sans-serif", fontSize: "1.6rem" }}>
              <strong>Fines & Penalties:</strong> FIA members can issue financial penalties for rule violations or dangerous wrecks, affecting a team or driver’s bottom line.
            </Typography>
          </SectionBox>
        </Grid>
      </Grid>
    </Box>
  );
};

// Section Box Component with animation for pop-up effect
const SectionBox = ({ title, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#333333", // Darker box background
        padding: "30px", // Increased padding for bigger boxes
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        marginBottom: "60px", // Increased space between each section box
        width: "100%", // Ensure the box takes full width available
        height: "100%", // Ensure boxes expand vertically to take up full space
        animation: "popIn 1s ease-out", // Animation for each section box
        display: "flex", // Flexbox to make sure content wraps nicely
        flexDirection: "column", // Ensure content flows vertically
        margin: "0 auto", // Center the boxes
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'F1-Wide', sans-serif",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#FFD700", // Gold color for subtitles
          fontSize: "2rem", // Bigger font size for section titles
        }}
      >
        {title}
      </Typography>
      <Box sx={{ flex: 1, overflow: "hidden", textAlign: "left" }}>
        {children}
      </Box>
    </Box>
  );
};

export default EconomySection;
