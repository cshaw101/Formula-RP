import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => (
  <AppBar position="sticky" sx={{ backgroundColor: '#D50032', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Formula RP
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#FFD700', color: '#212121' } }} href="/economy">
          Economy
        </Button>
        <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#FFD700', color: '#212121' } }} href="/rulebook">
          Rulebook
        </Button>
        <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#FFD700', color: '#212121' } }} href="/howitworks">
          How It Works
        </Button>
        <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#FFD700', color: '#212121' } }} href="/roleplayevents">
          Roleplay Events
        </Button>
        <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#FFD700', color: '#212121' } }} href="/signup">
          Sign Up
        </Button>
        <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#FFD700', color: '#212121' } }} href="/weather">
          Weather
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
