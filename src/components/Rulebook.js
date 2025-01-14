import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";

const DownloadRulebook = () => {
  const handleDownload = () => {
    // Create a blank document for download
    const element = document.createElement("a");
    const file = new Blob([""], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    element.href = URL.createObjectURL(file);
    element.download = "F1_Roleplaying_League_Rulebook.docx";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Box
      id="download-rulebook-section"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#eaf4f4",
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
        <FaDownload size={30} color="#34a853" /> Download Rulebook
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "30px" }}>
        Access the official F1 Roleplaying League Rulebook to familiarize yourself with all the guidelines and regulations. Click the button below to download it.
      </Typography>
      <Button
        onClick={handleDownload}
        variant="contained"
        sx={{
          backgroundColor: "#34a853",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#2b7a4d" },
        }}
        startIcon={<FaDownload />}
      >
        Download Rulebook
      </Button>
    </Box>
  );
};

export default DownloadRulebook;
