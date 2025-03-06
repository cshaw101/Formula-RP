import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
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
import { SportsMotorsports, Menu as MenuIcon } from '@mui/icons-material';
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
        background: 'linear-gradient(45deg, #D50032, #FFD700)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
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
            <SportsMotorsports />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: { xs: '1.3rem', sm: '2rem' },
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              animation: 'fadeIn 2s ease-out',
            }}
          >
            Intrepid Racing League
          </Typography>
        </Box>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
          {navLinks.map((section) => (
            <Link to={section} smooth={true} duration={500} key={section}>
              <Button
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: '#FFD700',
                    color: '#212121',
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
                  backgroundColor: '#FFD700',
                  color: '#212121',
                  transform: 'scale(1.05)',
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
            background: '#D50032',
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