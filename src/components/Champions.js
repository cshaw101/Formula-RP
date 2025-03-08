import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Mock data for previous champions
const champions = [
  {
    name: 'John Doe',
    season: '2024',
    image: '/champion1.jpg', // Replace with actual image paths
  },
  {
    name: 'Jane Smith',
    season: '2023',
    image: '/champion2.jpg',
  },
  {
    name: 'Mike Johnson',
    season: '2022',
    image: '/champion3.jpg',
  },
  {
    name: 'Emily Davis',
    season: '2021',
    image: '/champion4.jpg',
  },
  {
    name: 'Chris Brown',
    season: '2020',
    image: '/champion5.jpg',
  },
];

const ChampionsPage = () => {
  return (
    <Box sx={{ padding: '3rem', backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <Typography 
        variant="h3" 
        sx={{ 
          textAlign: 'center', 
          color: '#F79535', 
          marginBottom: '2rem', 
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Wall of Champions
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {champions.map((champion, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: '12px',
                background: 'linear-gradient(145deg, #292929, #1a1a1a)',
                boxShadow: '0 8px 16px rgba(255, 165, 0, 0.4)',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 24px rgba(255, 165, 0, 0.6)',
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={champion.image} // Replace with actual image URLs
                  alt={champion.name}
                  sx={{
                    borderRadius: '12px 12px 0 0',
                    objectFit: 'cover',
                    filter: 'grayscale(30%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8))',
                  }}
                />
              </Box>
              <CardContent sx={{ padding: '1.5rem', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#F79535' }}>
                  {champion.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#D1D3D4', marginTop: '0.5rem' }}>
                  Season: {champion.season}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChampionsPage;