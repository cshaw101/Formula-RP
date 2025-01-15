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
      padding: { xs: '2rem', sm: '4rem' },
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
        fontSize: { xs: '3rem', sm: '5rem' }, // Increased font size
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        marginBottom: 3,
        color: '#FFD700', // Gold color for the title text
        zIndex: 1,
      }}>
        Welcome to Formula RP
      </Typography>
      <Typography variant="h4" sx={{
        fontSize: { xs: '2rem', sm: '3rem' }, // Increased font size
        marginBottom: 4,
        fontWeight: 300,
        color: '#FFD700', // Gold color for the subtitle text
        zIndex: 1,
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
          backgroundColor: '#FFD700',
          color: '#212121',
          padding: '16px 32px', // Increased padding
          fontSize: '1.25rem', // Increased font size
          fontWeight: 'bold',
          borderRadius: '8px',
          '&:hover': { backgroundColor: '#FFB300', transform: 'scale(1.05)' },
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
          bottom: '20px',
          right: '20px',
          backgroundColor: '#FFD700',
          color: '#212121',
          borderRadius: '50%',
          padding: '15px', // Increased padding
          fontSize: '1.25rem', // Increased font size
          zIndex: 2,
          '&:hover': { backgroundColor: '#FFB300', transform: 'scale(1.05)' },
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />} 
      </Button>
    </Box>
  );
};

export default HeroSection;
