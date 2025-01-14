import { Box, Typography, Button } from '@mui/material';
import { useState, useRef } from 'react';

const HeroSection = () => {
  // Create a reference for the video element
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box sx={{
      position: 'relative',
      padding: { xs: '2rem', sm: '4rem' },
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: '#FFFFFF',
      overflow: 'hidden'
    }}>
      {/* Background Video */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2
      }}>
        <video
          ref={videoRef}  // Reference the video element
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: 'cover', // Make sure the video covers the entire container
            width: '100%',
            height: '100%',
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
          <img src="/fallback-image.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          Your browser does not support the video tag. <br />
          Please consider upgrading your browser or using a more modern one.
        </video>
      </Box>

      {/* Black overlay filter */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
        zIndex: -1, // Ensures the filter is behind the text
      }} />

      {/* Text and Button */}
      <Typography variant="h1" sx={{
        fontSize: { xs: '2.5rem', sm: '4rem' },
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        marginBottom: 2,
        color: '#FFFFFF',
        zIndex: 1, // Text will be above the video and filter
      }}>
        Welcome to Formula RP
      </Typography>
      <Typography variant="h4" sx={{
        fontSize: { xs: '1.5rem', sm: '2rem' },
        marginBottom: 3,
        fontWeight: 300,
        color: '#FFFFFF',
        zIndex: 1, // Text will be above the video and filter
      }}>
        Join the most fun Formula League!
      </Typography>
      <Button variant="contained" sx={{
        backgroundColor: '#FFD700',
        color: '#212121',
        padding: '12px 24px',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '8px',
        '&:hover': { backgroundColor: '#FFB300', transform: 'scale(1.05)' },
        zIndex: 1, // Button will be above the video and filter
      }}>
        View Standings
      </Button>

      {/* Pause/Play Button */}
      <Button
        onClick={togglePlayPause}
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#FFD700',
          color: '#212121',
          borderRadius: '50%',
          padding: '10px',
          zIndex: 2,  // Ensure button is above everything
          '&:hover': { backgroundColor: '#FFB300', transform: 'scale(1.05)' },
        }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
    </Box>
  );
};

export default HeroSection;
