import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => (
  <Box sx={{
    padding: { xs: '2rem', sm: '4rem' },
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #9C1C29, #1C1C1C)', // Gradient from dark red to black
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFFFFF'
  }}>
    <Typography variant="h1" sx={{
      fontSize: { xs: '2.5rem', sm: '4rem' },
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.1rem',
      marginBottom: 2,
      color: '#FFFFFF',
    }}>
      Welcome to Formula RP
    </Typography>
    <Typography variant="h4" sx={{
      fontSize: { xs: '1.5rem', sm: '2rem' },
      marginBottom: 3,
      fontWeight: 300,
      color: '#FFFFFF',
    }}>
      Join the most competitive F1 Roleplaying League!
    </Typography>
    <Button variant="contained" sx={{
      backgroundColor: '#FFD700',
      color: '#212121',
      padding: '12px 24px',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      '&:hover': { backgroundColor: '#FFB300', transform: 'scale(1.05)' }
    }}>
      View Standings
    </Button>
  </Box>
);

export default HeroSection;
