import React from "react";
import { Container, Typography, Box, CircularProgress, Button } from "@mui/material";
import { YouTube, Twitter, SportsEsports } from "@mui/icons-material"; // SportsEsports as Twitch alternative

const UnderConstruction = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        textAlign: "center" 
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Coming Soon!
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        We're working hard to bring you something amazing. Stay tuned!
      </Typography>
      
      <Box sx={{ my: 3 }}>
        <CircularProgress size={60} />
      </Box>

      <Typography variant="body1" color="textSecondary" gutterBottom>
        Follow us for updates:
      </Typography>
      
      <Box sx={{ display: "flex", gap: 2, my: 2 }}>
        <Button variant="contained" color="error" startIcon={<YouTube />} href="https://www.youtube.com/@IntrepidRacingLeague">
          YouTube
        </Button>
        
        <Button variant="contained" color="info" startIcon={<Twitter />} href="https://x.com/Intrepid_League">
          Twitter
        </Button>
        
        <Button variant="contained" color="secondary" startIcon={<SportsEsports />} href="https://www.twitch.tv/intrepidracingleague">
          Twitch
        </Button>
      </Box>
    </Container>
  );
};

export default UnderConstruction;
