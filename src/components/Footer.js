import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import { Twitter, YouTube } from '@mui/icons-material';
import { FaTwitch } from 'react-icons/fa'; // Importing Twitch from react-icons

const Footer = () => (
  <Box sx={{ backgroundColor: '#212121', padding: 3, color: '#FFF', textAlign: 'center' }}>
    {/* Main Footer Content */}
    <Typography variant="body2" sx={{ marginBottom: 2 }}>
      © 2025 Intrepid Racing League | Website Created by: 
      <Link href="https://www.webdevcaleb.xyz" target="_blank" sx={{ color: '#FFD700' }}>
        www.webdevcaleb.xyz
      </Link>
    </Typography>

    {/* Social Media Icons */}
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <IconButton
          component={Link}
          href="https://www.twitter.com"
          target="_blank"
          sx={{
            color: '#FFD700',
            '&:hover': { color: '#1DA1F2' }, // Twitter blue on hover
          }}
        >
          <Twitter />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          component={Link}
          href="https://www.youtube.com"
          target="_blank"
          sx={{
            color: '#FFD700',
            '&:hover': { color: '#FF0000' }, // YouTube red on hover
          }}
        >
          <YouTube />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          component={Link}
          href="https://www.twitch.tv"
          target="_blank"
          sx={{
            color: '#FFD700',
            '&:hover': { color: '#9146FF' }, // Twitch purple on hover
          }}
        >
          <FaTwitch size={24} /> {/* Twitch icon from react-icons */}
        </IconButton>
      </Grid>
    </Grid>

    {/* Additional Space or Text */}
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="caption" sx={{ color: '#AAAAAA' }}>
        Follow us on social media for the latest updates.
      </Typography>
    </Box>
  </Box>
);

export default Footer;
