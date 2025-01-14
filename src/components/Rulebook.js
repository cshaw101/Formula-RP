import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";

const DownloadRulebook = () => {
  const handleDownload = () => {
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
        padding: "60px 30px",
        textAlign: "center",
        backgroundColor: "#eaf4f4",
        borderRadius: "12px",
        boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
        marginBottom: "50px",
        maxWidth: "800px",
        margin: "0 auto",
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
          gap: "12px",
          color: "#34a853",
        }}
      >
        <FaDownload size={32} />
        Download Rulebook
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "30px", color: "#555" }}>
        Access the official F1 Roleplaying League Rulebook to familiarize yourself with all the guidelines and regulations. Click the button below to download it.
      </Typography>
      <Button
        onClick={handleDownload}
        variant="contained"
        sx={{
          backgroundColor: "#34a853",
          color: "#fff",
          padding: "14px 30px",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#2b7a4d" },
          transition: "background-color 0.3s",
        }}
        startIcon={<FaDownload />}
      >
        Download Rulebook
      </Button>
    </Box>
  );
};

export default DownloadRulebook;
