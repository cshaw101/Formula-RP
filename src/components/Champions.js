import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Collapse } from '@mui/material';

// Mock data for previous champions
const champions = [
  {
    name: 'ANYKAMIKAZU',
    season: '1',
    image: '/logos/stake.avif',
    stats: {
      races: 10,
      wins: 2,
      podiums: 7,
      fastestLap:2,
      points: 249,
    },
  },
  {
    name: 'Hashbrown',
    season: '2',
    image: '/logos/ferrari.avif',
    stats: {
      races: 12,
      wins: 5,
      podiums: 11,
      fastestLap:2,
      points: 422,
    },
  },
];

// Define solid background colors for each season
const seasonColors = {
  '1': '#00e701',
  '2': '#EF1A2D',
};

const ChampionsPage = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

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
                background: '#292929',
                boxShadow: '0 8px 16px rgba(255, 165, 0, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 24px rgba(255, 165, 0, 0.6)',
                },
              }}
              onClick={() => handleCardClick(index)}
            >
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: seasonColors[champion.season] || '#000',
                  borderRadius: '12px 12px 0 0',
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={champion.image}
                  alt={champion.name}
                  sx={{
                    borderRadius: '12px 12px 0 0',
                    objectFit: 'cover',
                    filter: champion.season === '1' ? 'grayscale(30%)' : 'none',
                  }}
                />
              </Box>
              <CardContent sx={{ padding: '1.5rem', textAlign: 'center', background: '#1a1a1a' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#F79535' }}>
                  {champion.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#D1D3D4', marginTop: '0.5rem' }}>
                  Season: {champion.season}
                </Typography>
              </CardContent>

              {/* Collapse section for stats */}
              <Collapse in={openCard === index}>
                <CardContent sx={{ background: '#1a1a1a', color: '#D1D3D4', textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#F79535' }}>
                    Season Stats
                  </Typography>
                  <Typography>Races: {champion.stats.races}</Typography>
                  <Typography>Wins: {champion.stats.wins}</Typography>
                  <Typography>Podiums: {champion.stats.podiums}</Typography>
                  <Typography>Fastest Lap: {champion.stats.fastestLap}</Typography>
                  <Typography>Points: {champion.stats.points}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChampionsPage;
