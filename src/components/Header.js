import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Popover,
} from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu Icon

const Header = () => {
  const [anchorElArchive, setAnchorElArchive] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null); // For Hamburger Menu Popover
  const [openMenu, setOpenMenu] = useState(false); // For controlling the popover

  const handleArchiveOpen = (event) => {
    setAnchorElArchive(event.currentTarget);
  };

  const handleArchiveClose = () => {
    setAnchorElArchive(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorElMenu(event.currentTarget); // Open the popover when hamburger icon is clicked
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false); // Close the popover when clicking outside or on a link
  };

  const navLinks = [
    { name: 'Highlights', path: '/highlights' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Champions', path: '/champions' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: '#7D3569',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', 
        height: { xs: '70px', sm: '90px' },
        transition: 'all 0.3s ease',
        backdropFilter: 'none',
        '&:hover': {
          boxShadow: '0 4px 30px rgba(255, 165, 0, 0.6)', 
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          fontFamily: 'Helvetica, Arial, sans-serif',
          paddingX: { xs: '1rem', sm: '1.5rem' },
          letterSpacing: '1px',
          color: '#fff',
        }}
      >
        {/* Logo on the Left for Desktop, Centered for Mobile */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flex: 1 }}>
          <Link to="/">
            <img
              src="/logo1.jpg" 
              alt="Intrepid Racing League"
              style={{
                height: '60px', // Smaller logo for mobile
                width: 'auto',
              }}
            />
          </Link>
        </Box>

        {/* Hamburger Icon for Mobile (on the Right side) */}
        <IconButton
          color="inherit"
          onClick={handleMenuOpen} // Open the popover when clicked
          sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'flex-end' }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          {navLinks.map((section) => (
            <Button
              key={section.name}
              color="inherit"
              href={section.path}
              sx={{
                '&:hover': {
                  backgroundColor: '#F79535',
                  color: '#ffffff',
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
                fontSize: { xs: '1rem', sm: '1.2rem' },
                padding: '8px 16px',
                transition: 'transform 0.3s ease, box-shadow 0.2s ease',
              }}
            >
              {section.name}
            </Button>
          ))}

          {/* Archive Button with Clickable Dropdown */}
          <Box sx={{ position: 'relative' }}>
            <Button
              color="inherit"
              onClick={handleArchiveOpen}
              sx={{
                '&:hover': {
                  backgroundColor: '#F79535',
                  color: '#ffffff',
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                },
                '&:active': {
                  backgroundColor: '#F79535', 
                  color: '#ffffff',
                },
                fontSize: { xs: '1rem', sm: '1.2rem' },
                padding: '8px 16px',
                transition: 'transform 0.3s ease, box-shadow 0.2s ease',
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
              <MenuItem onClick={handleArchiveClose} component="a" href="/archive/season1">
                Season 1
              </MenuItem>
              <MenuItem onClick={handleArchiveClose} component="a" href="/archive/season2">
                Season 2
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>

      {/* Popover for Hamburger Menu */}
      <Popover
        open={openMenu}
        anchorEl={anchorElMenu}
        onClose={handleMenuClose} // Close the popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPopover-paper': {
            backgroundColor: '#f89535',
            color: '#fff',
            padding: '8px 16px',
          },
        }}
      >
        <Box>
          {navLinks.map((section) => (
            <Button
              key={section.name}
              color="inherit"
              onClick={handleMenuClose}
              href={section.path}
              sx={{
                display: 'block',
                width: '100%',
                padding: '8px 0',
                textAlign: 'left',
                '&:hover': {
                  backgroundColor: '#F79535',
                  color: '#ffffff',
                },
              }}
            >
              {section.name}
            </Button>
          ))}
          {/* Archive Section in Popover */}
          <Button
            color="inherit"
            onClick={handleMenuClose}
            href="/archive/season1"
            sx={{
              display: 'block',
              width: '100%',
              padding: '8px 0',
              textAlign: 'left',
              '&:hover': {
                backgroundColor: '#F79535',
                color: '#ffffff',
              },
            }}
          >
            Season 1
          </Button>
          <Button
            color="inherit"
            onClick={handleMenuClose}
            href="/archive/season2"
            sx={{
              display: 'block',
              width: '100%',
              padding: '8px 0',
              textAlign: 'left',
              '&:hover': {
                backgroundColor: '#F79535',
                color: '#ffffff',
              },
            }}
          >
            Season 2
          </Button>
        </Box>
      </Popover>
    </AppBar>
  );
};

export default Header;
