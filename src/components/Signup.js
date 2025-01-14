import { Box, TextField, Button, Typography } from '@mui/material';

const SignupPage = () => (
  <Box sx={{ padding: 4, backgroundColor: '#2e2e2e', borderRadius: 2, boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)', maxWidth: 600, margin: '0 auto' }}>
    <Typography variant="h2" sx={{ color: '#FFD700', marginBottom: 3, textAlign: 'center' }}>
      Sign Up for Formula RolePlay
    </Typography>
    <form>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2, input: { color: '#fff' }, '& .MuiInputLabel-root': { color: '#fff' } }}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2, input: { color: '#fff' }, '& .MuiInputLabel-root': { color: '#fff' } }}
      />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2, input: { color: '#fff' }, '& .MuiInputLabel-root': { color: '#fff' } }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FFD700', // Gold color
          color: '#fff', // White text
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          '&:hover': { backgroundColor: '#e6c300' }, // Slightly darker gold on hover
          transition: 'background-color 0.3s',
          width: '100%',
        }}
      >
        Sign Up
      </Button>
    </form>
  </Box>
);

export default SignupPage;
