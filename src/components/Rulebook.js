import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";

const DownloadRulebook = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/rulebook.pdf";
    link.download = "rulebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="download-rulebook-section"
      sx={{
        padding: "80px 20px", // Increased padding
        textAlign: "center",
        backgroundColor: "#2e2e2e",
        borderRadius: "15px",
        marginBottom: "100px", // More space below for emphasis
        width: "100%",
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
          gap: "15px", // More space between icon and text
          color: "#FFD700",
        }}
      >
        <FaDownload size={40} color="#FFD700" /> Download the Rulebook
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "20px", // Larger text for better readability
          lineHeight: "1.8", // More breathing space between lines
          marginBottom: "40px", // More space before the button
          color: "#fff",
        }}
      >
        Click below to download the official F1 Roleplaying League rulebook, which contains all the essential guidelines for participating in the league.
      </Typography>
      <Button
        onClick={handleDownload}
        variant="contained"
        sx={{
          backgroundColor: "#FFD700",
          color: "#fff",
          fontSize: "18px", // Larger font size for button text
          padding: "18px 36px", // Bigger button size
          borderRadius: "10px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#e6c300",
            transform: "scale(1.05)", // Slight hover animation
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
