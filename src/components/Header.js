import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { SportsMotorsports } from '@mui/icons-material'; // Example icon (you can change it)

const Header = () => (
  <AppBar 
    position="sticky" 
    sx={{
      backgroundColor: '#D50032', 
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', 
      height: '120px', // Increased height for more room
    }}
  >
    <Toolbar 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '100%', // Ensure the toolbar fills the AppBar height
        fontFamily: 'Formula Condensed Light, sans-serif', // Apply custom font
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton 
          color="inherit" 
          sx={{ fontSize: '3rem' }} 
          aria-label="Formula RP Icon"
        >
          <SportsMotorsports />
        </IconButton>
        <Typography 
          variant="h6" 
          sx={{
            color: '#FFFFFF', 
            fontWeight: 'bold', 
            fontSize: '3rem', // Adjusted title size if needed
            letterSpacing: '1px', 
            lineHeight: 1.1, 
          }}
        >
          Formula RP
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button 
          color="inherit" 
          sx={{ 
            '&:hover': { backgroundColor: '#FFD700', color: '#212121' },
            fontSize: '1.5rem', // Increased font size for buttons
            padding: '12px 24px', // Adjusted padding for balance
          }} 
          href="/economy"
        >
          Overview
        </Button>
        <Button 
          color="inherit" 
          sx={{ 
            '&:hover': { backgroundColor: '#FFD700', color: '#212121' },
            fontSize: '1.5rem', // Increased font size for buttons
            padding: '12px 24px', // Adjusted padding for balance
          }} 
          href="/rulebook"
        >
          How It Works
        </Button>
        <Button 
          color="inherit" 
          sx={{ 
            '&:hover': { backgroundColor: '#FFD700', color: '#212121' },
            fontSize: '1.5rem', // Increased font size for buttons
            padding: '12px 24px', // Adjusted padding for balance
          }} 
          href="/howitworks"
        >
          Weather
        </Button>
        <Button 
          color="inherit" 
          sx={{ 
            '&:hover': { backgroundColor: '#FFD700', color: '#212121' },
            fontSize: '1.5rem', // Increased font size for buttons
            padding: '12px 24px', // Adjusted padding for balance
          }} 
          href="/roleplayevents"
        >
          Economy
        </Button>
        <Button 
          color="inherit" 
          sx={{ 
            '&:hover': { backgroundColor: '#FFD700', color: '#212121' },
            fontSize: '1.5rem', // Increased font size for buttons
            padding: '12px 24px', // Adjusted padding for balance
          }} 
          href="/signup"
        >
          Roleplay Events
        </Button>
        <Button 
          color="inherit" 
          sx={{ 
            '&:hover': { backgroundColor: '#FFD700', color: '#212121' },
            fontSize: '1.5rem', // Increased font size for buttons
            padding: '12px 24px', // Adjusted padding for balance
          }} 
          href="/weather"
        >
          Sign Up
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
