import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";

const EconomySection = () => {
  return (
    <Box
      id="economy-section"
      sx={{
        padding: { xs: "40px 20px", sm: "80px 40px" },
        textAlign: "center",  
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
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
          fontSize: { xs: "3rem", sm: "4rem" },
          fontWeight: "bold",
          color: "#ffd700",
          marginBottom: "40px",
          letterSpacing: "2px",
        }}
      >
        💰 The Economy: The Heart of the League
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: { xs: "1.5rem", sm: "1.8rem" },
          lineHeight: "1.8",
          marginBottom: "50px",
          maxWidth: "800px",
          textAlign: "center",
          color: "#f0f0f0",
        }}
      >
        Money makes the world—and our league—go round! The economy is a core
        part of our F1 roleplaying experience, creating an added layer of
        strategy and competition for every role. Managing your finances wisely
        could make the difference between victory and defeat. Here’s how it
        works:
      </Typography>

      <Divider sx={{ width: "80%", marginBottom: "40px", borderColor: "#ffd700" }} />

      <Grid
        container
        justifyContent="center"
        spacing={4}
        sx={{
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {[
          {
            title: "For Drivers",
            content: (
              <>
                <strong>Earning Money:</strong> Drivers can earn funds through
                race performance and Driver contracts. <br />
                <strong>Expenses:</strong> Be prepared for costs like fines for
                bad wrecks, repair fees, and recovery expenses for injuries.
              </>
            ),
          },
          {
            title: "For Team Owners",
            content: (
              <>
                <strong>Sponsorship Deals:</strong> Secure sponsors to bring in
                extra income, but beware—poor performance could cause sponsors
                to pull out! <br />
                <strong>Supporting the Team:</strong> Owners must ensure their
                drivers have what they need to succeed, balancing spending with
                strategy.
              </>
            ),
          },
          {
            title: "For Team Principals",
            content: (
              <>
                <strong>Strategic Spending:</strong> Principals play a key role
                in advising how team funds are spent, from deciding on tire
                purchases to recommending key upgrades.
              </>
            ),
          },
          {
            title: "For FIA Members",
            content: (
              <>
                <strong>Fines & Penalties:</strong> FIA members can issue
                financial penalties for rule violations or dangerous wrecks,
                affecting a team or driver’s bottom line.
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
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.8)",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Center the content vertically
        alignItems: "center",
        textAlign: "center",
        height: "400px", // Consistent height for all cards
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'F1-Wide', sans-serif",
          fontWeight: "bold",
          color: "#FFD700",
          marginBottom: "20px",
          fontSize: "1.8rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'F1-Regular', sans-serif",
          fontSize: "1.4rem",
          color: "#f0f0f0",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default EconomySection;
