import React, { useState } from 'react';
import { Box, Grid, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Sample images and titles for Season 1
const images = [
  '/archive/s2t1constructors.png',
  '/archive/s2t1racesummary1.png',
  '/archive/s2t1summary2.png',
];

const titles = [
  'S2T1 Constructors Standings',
  'S2T1 Race Summary part 1',
  'S2T1 Race Summary part 2',
];

const Season2 = () => {
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
        Season 2 Archive
      </Typography>

      {/* Description */}
      <Typography variant="body1" paragraph style={{ color: '#D1D3D4', lineHeight: '1.6' }}>
        Welcome to the archive for Season 2! Here you will find all the details and images for this exciting season. Browse through the images to see the season's highlights, including preseason events, qualification rounds, race results, and standings.
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
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column', // Stack title and image vertically
                  justifyContent: 'space-between', // Ensure equal spacing
                  alignItems: 'center',
                  height: '100%', // Ensure cards take up full height
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
                  alt={`Season 2 - Event ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '250px', // Limiting max height of the image in the gallery
                    objectFit: 'cover', // Ensures image covers the entire container without distortion
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    flexGrow: 1, // Allow the image to grow and fill the available space
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
              height: 'auto', // This ensures the image maintains its aspect ratio
              maxHeight: '80vh', // Max height to avoid stretching
              objectFit: 'contain', // Ensures the image scales without distortion
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Season2;
