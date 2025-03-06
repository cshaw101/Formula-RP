import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';

const Header = () => {
  const [anchorElArchive, setAnchorElArchive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleArchiveOpen = (event) => {
    setAnchorElArchive(event.currentTarget);
  };

  const handleArchiveClose = () => {
    setAnchorElArchive(null);
  };

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = ['Overview', 'signUp', 'Highlights', 'Leaderboard', 'Champions'];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#f89535', // Orange background color
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Retain the shadow effect
        height: { xs: '50px', sm: '70px' },
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          fontFamily: 'Formula Condensed Light, sans-serif',
          paddingX: { xs: '0.5rem', sm: '1rem' },
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton
            color="inherit"
            sx={{
              fontSize: '2rem',
              textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
              transition: 'all 0.3s ease',
              '&:hover': {
                textShadow: '0 0 16px rgba(255, 255, 255, 1)',
                transform: 'scale(1.05)',
              },
            }}
            aria-label="Formula RP Icon"
          >
          </IconButton>
          <img
            src="/logo1.jpg"  // Use path relative to the public folder
            alt="Intrepid Racing League"
            style={{
              height: '40px', // You can adjust the height as needed
              width: 'auto',
            }}
          />
        </Box>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          {navLinks.map((section) => (
            <Link to={section} smooth={true} duration={500} key={section}>
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: '#7d3569', // Purple hover effect for the links
                    color: '#ffffff',
                    transform: 'scale(1.05)',
                  },
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                  padding: '4px 12px',
                  transition: 'transform 0.3s ease',
                }}
              >
                {section}
              </Button>
            </Link>
          ))}

          {/* Archive Button with Clickable Dropdown */}
          <Box sx={{ position: 'relative' }}>
            <Button
              color="inherit"
              onClick={handleArchiveOpen}
              sx={{
                '&:hover': {
                  backgroundColor: '#7d3569', // Purple background on hover
                  color: '#ffffff',
                  transform: 'scale(1.05)',
                },
                '&:active': {
                  backgroundColor: '#7d3569', // Purple background on click
                  color: '#ffffff',
                },
                fontSize: { xs: '0.85rem', sm: '1rem' },
                padding: '4px 12px',
                transition: 'transform 0.3s ease',
              }}
            >
              Archive
            </Button>

            {/* Archive Dropdown Menu */}
            <Menu
              anchorEl={anchorElArchive}
              open={Boolean(anchorElArchive)}
              onClose={handleArchiveClose}
              sx={{
                mt: 1,
              }}
            >
              <MenuItem onClick={handleArchiveClose} component="a" href="/season1">
                Season 1
              </MenuItem>
              <MenuItem onClick={handleArchiveClose} component="a" href="/season2">
                Season 2
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          onClick={handleMobileToggle}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleMobileToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            background: '#f89535', // Orange background for drawer
            color: '#FFFFFF',
          },
        }}
      >
        <List>
          {navLinks.map((section) => (
            <ListItem key={section} disablePadding>
              <ListItemButton onClick={handleMobileToggle}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  <ListItemText primary={section} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
          {/* Archive Section */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleArchiveClose} component="a" href="/season1">
              <ListItemText primary="Season 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleArchiveClose} component="a" href="/season2">
              <ListItemText primary="Season 2" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
