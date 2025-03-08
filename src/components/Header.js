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
    {/* Logo Section */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <IconButton
        color="inherit"
        sx={{
          fontSize: '2.5rem',
          textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
          transition: 'all 0.3s ease',
          '&:hover': {
            textShadow: '0 0 16px rgba(255, 255, 255, 1)',
            transform: 'scale(1.05)',
          },
        }}
        aria-label="Formula RP Icon"
      />
      <img
        src="/logo1.jpg" 
        alt="Intrepid Racing League"
        style={{
          height: '80px',
          width: 'auto',
        }}
      />
    </Box>

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

  {/* Mobile Drawer Menu */}
  <Drawer
    anchor="right"
    open={mobileOpen}
    onClose={handleMobileToggle}
    sx={{
      '& .MuiDrawer-paper': {
        width: 250,
        background: '#f89535',
        color: '#FFFFFF',
      },
    }}
  >
    <List>
      {navLinks.map((section) => (
        <ListItem key={section.name} disablePadding>
          <ListItemButton onClick={handleMobileToggle} component="a" href={section.path}>
            <ListItemText primary={section.name} sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>
      ))}
      {/* Archive Section */}
      <ListItem disablePadding>
        <ListItemButton onClick={handleArchiveClose} component="a" href="/archive/season1">
          <ListItemText primary="Season 1" sx={{ color: 'white' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={handleArchiveClose} component="a" href="/archive/season2">
          <ListItemText primary="Season 2" sx={{ color: 'white' }} />
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
</AppBar>

  );
};

export default Header;
