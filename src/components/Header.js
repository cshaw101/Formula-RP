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
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [anchorElArchive, setAnchorElArchive] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleArchiveOpen = (event) => {
    setAnchorElArchive(event.currentTarget);
  };

  const handleArchiveClose = () => {
    setAnchorElArchive(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorElMenu(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setAnchorElMenu(null);
    setOpenMenu(false);
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
        background: '#FFFFFF', // White background
        borderBottom: '4px solid #7D3569', // Purple border at the bottom
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        height: { xs: '60px', sm: '80px' }, // Consistent height
        transition: 'all 0.3s ease',
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
          height: '100%', // Full height of AppBar
          paddingX: { xs: '0.5rem', sm: '1.5rem' }, // Reduced padding on mobile
          color: '#000',
          minHeight: '0 !important', // Override default Toolbar minHeight
        }}
      >
        {/* Logo - Centered on Mobile, Left on Desktop */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-start' },
            flex: { xs: '0', sm: '1' }, // No flex grow on mobile
            position: { xs: 'absolute', sm: 'static' }, // Center logo on mobile
            left: { xs: '50%', sm: 'auto' },
            transform: { xs: 'translateX(-50%)', sm: 'none' },
            alignItems: 'center', // Vertically center logo
            height: '100%', // Match Toolbar height
          }}
        >
          <Link to="/">
            <Box
              component="img"
              src="/logo1.jpg"
              alt="Intrepid Racing League"
              sx={{
                height: { xs: '60px', sm: '80px' }, // Match AppBar height exactly
                width: 'auto', // Maintain aspect ratio
                display: 'block',
                objectFit: 'contain', // Ensure logo fits without distortion
              }}
            />
          </Link>
        </Box>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          color="inherit"
          onClick={handleMenuOpen}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            position: 'absolute',
            right: '0.5rem', // Align to right edge
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 1, md: 2 } }}>
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
                fontSize: { sm: '1rem', md: '1.2rem' },
                padding: { sm: '6px 12px', md: '8px 16px' },
                transition: 'transform 0.3s ease, box-shadow 0.2s ease',
              }}
            >
              {section.name}
            </Button>
          ))}

          {/* Archive Button with Dropdown */}
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
              fontSize: { sm: '1rem', md: '1.2rem' },
              padding: { sm: '6px 12px', md: '8px 16px' },
              transition: 'transform 0.3s ease, box-shadow 0.2s ease',
            }}
          >
            Archive
          </Button>
          <Menu
            anchorEl={anchorElArchive}
            open={Boolean(anchorElArchive)}
            onClose={handleArchiveClose}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={handleArchiveClose} component="a" href="/archive/season1">
              Season 1
            </MenuItem>
            <MenuItem onClick={handleArchiveClose} component="a" href="/archive/season2">
              Season 2
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Popover for Hamburger Menu */}
      <Popover
        open={openMenu}
        anchorEl={anchorElMenu}
        onClose={handleMenuClose}
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
            backgroundColor: '#7D3569', // Match AppBar color
            color: '#fff',
            width: '180px', // Fixed width for consistency
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <Box sx={{ padding: '8px' }}>
          {navLinks.map((section) => (
            <Button
              key={section.name}
              color="inherit"
              onClick={handleMenuClose}
              href={section.path}
              sx={{
                display: 'block',
                width: '100%',
                padding: '10px 16px',
                textAlign: 'left',
                fontSize: '1rem',
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
              padding: '10px 16px',
              textAlign: 'left',
              fontSize: '1rem',
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
              padding: '10px 16px',
              textAlign: 'left',
              fontSize: '1rem',
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