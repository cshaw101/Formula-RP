import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#212121', padding: 2, textAlign: 'center' }}>
    <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
      © 2025 F1 RP League | All Rights Reserved
    </Typography>
    <Typography variant="body2" sx={{ color: '#FFD700', marginTop: 1 }}>
      <Link href="#" sx={{ color: '#FFD700' }}>Terms of Service</Link> | 
      <Link href="#" sx={{ color: '#FFD700' }}> Privacy Policy</Link>
    </Typography>
  </Box>
);

export default Footer;