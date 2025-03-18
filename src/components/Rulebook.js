import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";

const DownloadRulebook = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/intrepidrulebook.pdf";
    link.download = "intrepidrulebook.pdf";
    
    // Error handling for unavailable file
    link.onerror = () => {
      alert("Sorry, the rulebook could not be downloaded. Please try again later.");
    };

    // Initiating download
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
        backgroundColor: "#2E2E2E",
        borderRadius: "15px",
        marginBottom: "100px",
        width: "100%",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
        "@media (max-width: 600px)": {
          padding: "40px 20px", // Reduce padding for mobile
          marginBottom: "50px", // Decrease bottom margin
        },
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
          gap: "10px",
          color: "#F79535",
          fontSize: { xs: "28px", sm: "36px" }, // Responsive font size
        }}
      >
        <FaDownload size={40} color="#F79535" /> Download the Rulebook
      </Typography>
      <Typography
        variant="h6"
        sx={{
          
          lineHeight: "1.8",
          marginBottom: "40px",
          color: "#fff",
          fontSize: { xs: "16px", sm: "20px" }, // Responsive font size
        }}
      >
        Click below to download the official Intrepid Racing rulebook, which contains all the essential guidelines for participating in the league.
      </Typography>
      <Button
        onClick={handleDownload}
        variant="contained"
        sx={{
          backgroundColor: "#F79535",
          color: "#fff",
          fontSize: "18px",
          padding: "18px 36px",
          borderRadius: "10px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#7D3569",
            transform: "scale(1.05)",
          },
          transition: "all 0.3s ease",
          "@media (max-width: 600px)": {
            padding: "12px 24px", // Adjust padding for mobile
            fontSize: "16px", // Smaller font size for mobile
          },
        }}
        aria-label="Download the Intrepid Racing rulebook"
      >
        Download Rulebook
      </Button>
    </Box>
  );
};

export default DownloadRulebook;
