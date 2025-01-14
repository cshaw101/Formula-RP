import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import { Document, Packer, Paragraph, TextRun } from "docx";

const DownloadRulebook = () => {
  const handleDownload = () => {
    // Create the document for downloading
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun("F1 Roleplaying League Rulebook"), // Title of the document
                new TextRun({
                  text: "\n\n", // Add spacing after title
                }),
                new TextRun({
                  text: "1. Introduction\n",
                  bold: true, // Bold the section title
                }),
                new TextRun("This document outlines the rules of the F1 Roleplaying League."), // Content for the Introduction
                new TextRun({
                  text: "\n\n2. Economy\n",
                  bold: true, // Bold the next section title
                }),
                new TextRun("Details about the league's economy and how finances work."), // Content for the Economy section
              ],
            }),
          ],
        },
      ],
    });

    // Convert the document to a Blob and trigger the download
    Packer.toBlob(doc).then((blob) => {
      const element = document.createElement("a");
      element.href = URL.createObjectURL(blob);
      element.download = "F1_Roleplaying_League_Rulebook.docx"; // Set the file name
      document.body.appendChild(element);
      element.click(); // Programmatically click to start the download
    });
  };

  return (
    <Box
      id="download-rulebook-section"
      sx={{
        padding: "60px 30px", // Add padding for better spacing
        textAlign: "center", // Center align the content
        backgroundColor: "#2e2e2e", // Set the background color
        borderRadius: "10px", // Rounded corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow for depth
        marginBottom: "40px", // Add space below the section
        width: "100%", // Full width
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Roboto', sans-serif", // Use Roboto font for header
          marginBottom: "20px", // Space between header and content
          fontWeight: "bold", // Make the header bold
          display: "flex", // Flexbox for alignment
          alignItems: "center", // Center content vertically
          justifyContent: "center", // Center content horizontally
          gap: "10px", // Space between icon and text
          color: "#FFD700", // Gold color for the header
        }}
      >
        <FaDownload size={30} color="#FFD700" /> Download the Rulebook
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "18px", // Set the font size
          lineHeight: "1.6", // Improve line height for readability
          marginBottom: "30px", // Space between text and button
          color: "#fff", // Set the text color to white
        }}
      >
        Click below to download the official F1 Roleplaying League rulebook, which contains all the essential guidelines for participating in the league.
      </Typography>
      <Button
        onClick={handleDownload} // Trigger the handleDownload function on button click
        variant="contained" // Set the button style to contained
        sx={{
          backgroundColor: "#FFD700", // Set button background color to gold
          color: "#fff", // Set the button text color to white
          "&:hover": {
            backgroundColor: "#e6c300", // Darken the gold on hover
          },
        }}
      >
        Download Rulebook
      </Button>
    </Box>
  );
};

export default DownloadRulebook;
