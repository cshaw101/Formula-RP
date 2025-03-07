import { Box, Typography, Button } from '@mui/material';
import { useState, useRef } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Import Play Icon
import PauseIcon from '@mui/icons-material/Pause'; // Import Pause Icon

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
      padding: { xs: '1rem', sm: '2rem' }, // Smaller padding
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: '#FFD700', // Gold color for text
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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: 'cover',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: -1,
      }} />

      {/* Text and Button */}
      <Typography variant="h1" sx={{
        fontSize: { xs: '2.5rem', sm: '4.5rem' }, // Bigger text
        fontWeight: 900, // Maximum boldness
        textTransform: 'uppercase',
        letterSpacing: '0.15rem',
        marginBottom: 2,
        color: '#F79535', // Orange text color
        zIndex: 1,
        display: 'inline', // To make the border wrap each letter
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6), 0 0 25px rgba(125, 53, 105, 0.8)' // Purple glow effect
      }}>
        Welcome to Intrepid Racing
      </Typography>

      <Typography variant="h4" sx={{
        fontSize: { xs: '1.5rem', sm: '2.5rem' }, // Bigger text
        fontWeight: 700, // Extra bold
        marginBottom: 2,
        color: '#F79535', // Orange text color
        zIndex: 1,
        display: 'inline', // To make the border wrap each letter
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6), 0 0 25px rgba(125, 53, 105, 0.8)' // Purple glow effect
      }}>
        Join the most realistic Formula League!
      </Typography>

      {/* Update button text and link */}
      <Link 
        to="signUp"  // Scroll to the Sign Up section
        smooth={true} 
        duration={500}
      >
        <Button variant="contained" sx={{
          backgroundColor: '#7D3569', // Purple button background
          color: 'white', // Orange text color
          padding: '10px 20px', // Further reduced padding
          fontSize: '0.875rem', // Reduced font size
          fontWeight: 'bold',
          borderRadius: '8px',
          '&:hover': { 
            backgroundColor: '#F79535', // Orange background on hover
            transform: 'scale(1.05)' 
          },
          zIndex: 1,
        }}>
          Join the League Now!
        </Button>
      </Link>

      {/* Pause/Play Icon Button */}
      <Button
        onClick={togglePlayPause}
        sx={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: '#FFD700',
          color: '#212121',
          borderRadius: '50%',
          padding: '10px', // Reduced padding
          fontSize: '0.875rem', // Reduced font size
          zIndex: 2,
          '&:hover': { backgroundColor: '#FFB300', transform: 'scale(1.05)' },
        }}
      >
        {isPlaying ? <PauseIcon sx={{ fontSize: '1.25rem' }} /> : <PlayArrowIcon sx={{ fontSize: '1.25rem' }} />} 
      </Button>
    </Box>
  );
};

export default HeroSection;
