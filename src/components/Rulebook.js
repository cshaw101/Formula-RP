import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";

const DownloadRulebook = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/intrepidrulebook.pdf";
    link.download = "intrepidrulebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="download-rulebook-section"
      sx={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "#2E2E2E", // Keep the background color consistent
        borderRadius: "15px", 
        marginBottom: "100px",
        width: "100%",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Added shadow for depth
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          marginBottom: "30px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px", // Adjusted space between icon and text
          color: "#F79535", // Matching the accent color
        }}
      >
        <FaDownload size={40} color="#F79535" /> Download the Rulebook
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "20px",
          lineHeight: "1.8",
          marginBottom: "40px",
          color: "#fff",
        }}
      >
        Click below to download the official Intrepid Racing rulebook, which contains all the essential guidelines for participating in the league.
      </Typography>
      <Button
        onClick={handleDownload}
        variant="contained"
        sx={{
          backgroundColor: "#F79535", // Use accent color
          color: "#fff",
          fontSize: "18px",
          padding: "18px 36px",
          borderRadius: "10px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#e67d29", // Slightly darker hover state
            transform: "scale(1.05)", 
          },
          transition: "all 0.3s ease",
        }}
      >
        Download Rulebook
      </Button>
    </Box>
  );
};

export default DownloadRulebook;
