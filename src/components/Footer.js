import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        © 2025 F1 Roleplay League. All Rights Reserved.
      </Typography>
      <Typography variant="body2">
        Contact us: <a href="mailto:f1league@example.com">f1league@example.com</a>
      </Typography>
    </Box>
  );
};

export default Footer;
