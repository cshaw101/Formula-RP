import React, { useState } from 'react';
import { Box, Grid, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Sample images and titles for Season 1
const images = [
  '/archive/s1t1preseason.png',
  '/archive/s1t1preseasonpart2.png',
  '/archive/s1t1preseasonsummary.png',
  '/archive/s1t1quali1.png',
  '/archive/s1t1quali2.png',
  '/archive/s1t1resultssummary.png',
  '/archive/s1t1raceresultssummarypart2.png',
  '/archive/s1t1standings1.png',
];

const titles = [
  'Preseason Race Results Summary 1',
  'Preseason Race Results Summary 2',
  'Preseason Standings Summary',
  'S1T1 Race Results Summary',
  'S1T1 Race Results Summary 2',
  'S1T1 Qualifying Results Summary',
  'S1T1 Qualifying Results Summary 2',
  'S1T1 Standings Summary',
];

const Season1 = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage('');
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#2E2E2E' }}>
      {/* Main Heading */}
      <Typography
        variant="h3"
        gutterBottom
        style={{
          color: '#F79535',
          fontWeight: 'bold',
          textAlign: 'center', // Centered header
        }}
      >
        Season 1 Archive
      </Typography>

      {/* Description */}
      <Typography variant="body1" paragraph style={{ color: '#D1D3D4', lineHeight: '1.6' }}>
        Welcome to the archive for Season 1! Here you will find all the details and images for this exciting season. Browse through the images to see the season's highlights, including preseason events, qualification rounds, race results, and standings.
      </Typography>

      {/* Photo Gallery Section */}
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          style={{ color: '#F79535', fontWeight: 'bold' }}
        >
          Photo Gallery
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column', // Stack title and image vertically
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#333', // Card background color
                }}
              >
                {/* Title above each image */}
                <Typography
                  variant="h6"
                  style={{
                    color: '#F79535',
                    textAlign: 'center', // Center the title above the image
                    marginBottom: '8px',
                  }}
                >
                  {titles[index]}
                </Typography>

                <img
                  src={image}
                  alt={`Season 1 - Event ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpen(image)} // Open the image on click
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal for Full-Screen Image */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90%',
            maxHeight: '90%',
            backgroundColor: '#000',
            overflow: 'hidden',
            borderRadius: '8px',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: '#F79535',
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Full-Screen"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Season1;
