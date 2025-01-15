import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { SportsMotorsports } from '@mui/icons-material'; // Example icon
import { Link } from 'react-scroll'; // Import the Link component from react-scroll
import React, { useState } from 'react';

const Header = () => {
  // State for mobile menu toggle
  const [anchorEl, setAnchorEl] = useState(null);

  // Open mobile menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close mobile menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{
        background: 'linear-gradient(45deg, #D50032, #FFD700)', // Gradient background
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
        height: { xs: '50px', sm: '70px' }, // Adjusted height for responsiveness
        transition: 'all 0.3s ease', // Smooth transition for scroll
      }}
    >
      <Toolbar 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: '100%', 
          fontFamily: 'Formula Condensed Light, sans-serif', 
          paddingX: { xs: '0.25rem', sm: '1rem' }, // Adjusted padding for responsiveness
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
          <IconButton 
            color="inherit" 
            sx={{ 
              fontSize: '2rem', // Further reduced icon size
              textShadow: '0 0 8px rgba(255, 255, 255, 0.8)', // Slight glow effect
              transition: 'all 0.3s ease', // Smooth transition on hover
              '&:hover': {
                textShadow: '0 0 16px rgba(255, 255, 255, 1)', // Stronger glow on hover
                transform: 'scale(1.05)', // Slight zoom effect on hover
              },
            }} 
            aria-label="Formula RP Icon"
          >
            <SportsMotorsports />
          </IconButton>
          <Typography 
            variant="h6" 
            sx={{
              color: '#FFFFFF', 
              fontWeight: 'bold', 
              fontSize: { xs: '1.5rem', sm: '2rem' }, // Further reduced font size
              letterSpacing: '0.5px', 
              lineHeight: 1.1, 
              textTransform: 'uppercase',
              animation: 'fadeIn 2s ease-out', // Subtle fade-in effect
            }}
          >
            Formula RP
          </Typography>
        </Box>
        
        {/* Mobile Menu Icon (Hamburger for small screens) */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton 
            color="inherit" 
            onClick={handleMenuOpen}
            sx={{ fontSize: '2rem' }}
          >
            &#9776; {/* Hamburger icon */}
          </IconButton>
        </Box>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          {['overview', 'howItWorks', 'weather', 'economy', 'roleplayEvents', 'signUp'].map((section) => (
            <Link 
              to={section} // Use the section name for scroll target
              smooth={true} 
              duration={500} 
              key={section}
            >
              <Button 
                color="inherit" 
                sx={{ 
                  '&:hover': { 
                    backgroundColor: '#FFD700', 
                    color: '#212121', 
                    transform: 'scale(1.05)', // Add scaling effect on hover
                  },
                  fontSize: { xs: '0.85rem', sm: '1rem' }, // Further reduced font size
                  padding: '4px 12px', // Reduced padding
                  transition: 'transform 0.3s ease', // Smooth transition on hover
                }}
              >
                {section.split(/(?=[A-Z])/).map((word, index) => (
                  <span key={index} style={{ marginRight: '4px' }}>
                    {word}
                  </span>
                ))}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu - Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          {['Overview', 'How It Works', 'Weather', 'Economy', 'Roleplay Events', 'Sign Up'].map((section) => (
            <MenuItem 
              key={section} 
              onClick={handleMenuClose} 
              component="a" 
              href={`#${section}`}
            >
              {section.split(/(?=[A-Z])/).map((word, index) => (
                <span key={index} style={{ marginRight: '4px' }}>
                  {word}
                </span>
              ))}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
