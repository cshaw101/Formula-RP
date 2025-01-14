import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { FaMoneyBillWave } from "react-icons/fa";

const EconomySection = () => {
  return (
    <Box
      id="economy-section"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#fff3e0",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "40px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          marginBottom: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <FaMoneyBillWave size={30} color="#43a047" /> 💰 The Economy: The Heart of the League
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "30px" }}>
        Money makes the world—and our league—go round! The economy is a core part of our F1 roleplaying experience, creating an added layer of strategy and competition for every role. Managing your finances wisely could make the difference between victory and defeat. Here’s how it works:
      </Typography>
      
      <Divider sx={{ marginBottom: "20px" }} />

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        For Drivers
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        <strong>Earning Money:</strong> Drivers can earn funds through race performance and Driver contracts. <br />
        <strong>Expenses:</strong> Be prepared for costs like fines for bad wrecks, repair fees, and recovery expenses for injuries.
      </Typography>
      
      <Divider sx={{ marginBottom: "20px" }} />

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        For Team Owners
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        <strong>Sponsorship Deals:</strong> Secure sponsors to bring in extra income, but beware—poor performance could cause sponsors to pull out! <br />
        <strong>Supporting the Team:</strong> Owners must ensure their drivers have what they need to succeed, balancing spending with strategy.
      </Typography>
      
      <Divider sx={{ marginBottom: "20px" }} />

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        For Team Principals
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        <strong>Strategic Spending:</strong> Principals play a key role in advising how team funds are spent, from deciding on tire purchases to recommending key upgrades.
      </Typography>
      
      <Divider sx={{ marginBottom: "20px" }} />

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        For FIA Members
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        <strong>Fines & Penalties:</strong> FIA members can issue financial penalties for rule violations or dangerous wrecks, affecting a team or driver’s bottom line.
      </Typography>
    </Box>
  );
};

export default EconomySection;
