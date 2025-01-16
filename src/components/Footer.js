import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#212121', padding: 2, textAlign: 'center' }}>
    <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
      © 2025 F1 RP League | Website Created by: 
      <Link href="https://www.webdevcaleb.xyz" target="_blank" sx={{ color: '#FFD700' }}>
        www.webdevcaleb.xyz
      </Link>
    </Typography>
    <Typography variant="body2" sx={{ color: '#FFD700', marginTop: 1 }}>
      <Link href="#" sx={{ color: '#FFD700' }}>RIP DIVA 01/16/25</Link> | 
      <Link href="#" sx={{ color: '#FFD700' }}> Privacy Policy</Link>
    </Typography>
  </Box>
);

export default Footer;
