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
    <Box sx={{ padding: '2rem', backgroundColor: '#F1F1F1' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#7D3569', marginBottom: '2rem' }}>
        Previous Champions
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {champions.map((champion, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', height: '100%' }}>
              <CardMedia
                component="img"
                height="250"
                image={champion.image} // Replace with actual image URLs
                alt={champion.name}
                sx={{
                  borderRadius: '8px 8px 0 0',
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ padding: '1.5rem', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#7D3569' }}>
                  {champion.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', marginBottom: '1rem' }}>
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
