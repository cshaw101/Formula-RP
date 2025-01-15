import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { SportsMotorsports } from '@mui/icons-material'; // Example icon
import { Link } from 'react-scroll'; // Import the Link component from react-scroll

const Header = () => (
  <AppBar 
    position="sticky" 
    sx={{
      background: 'linear-gradient(45deg, #D50032, #FFD700)', // Gradient background
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
      height: { xs: '80px', sm: '120px' }, // Increase height for larger screen sizes
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
        paddingX: { xs: '1rem', sm: '3rem' }, // Adjust padding for responsiveness
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton 
          color="inherit" 
          sx={{ 
            fontSize: '3.5rem', 
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)', // Add glow effect
            transition: 'all 0.3s ease', // Smooth transition on hover
            '&:hover': {
              textShadow: '0 0 20px rgba(255, 255, 255, 1)', // Stronger glow on hover
              transform: 'scale(1.1)', // Slight zoom effect on hover
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
            fontSize: { xs: '2.5rem', sm: '3.5rem' }, // Adjust font size based on screen size
            letterSpacing: '1px', 
            lineHeight: 1.1, 
            textTransform: 'uppercase',
            animation: 'fadeIn 2s ease-out', // Subtle fade-in effect
          }}
        >
          Formula RP
        </Typography>
      </Box>
      
      {/* Navigation Links */}
      <Box sx={{ display: 'flex', gap: 2 }}>
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
                fontSize: { xs: '1.25rem', sm: '1.5rem' }, 
                padding: '12px 24px', // Button size
                transition: 'transform 0.3s ease', // Smooth transition on hover
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize first letter */}
            </Button>
          </Link>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
