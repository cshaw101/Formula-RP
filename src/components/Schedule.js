import React, { useState } from 'react';
import { Box, Typography, IconButton, Card, CardContent, CardMedia, Button } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const races = [
  {
    name: 'Grand Prix of Monaco',
    date: '2025-04-25',
    time: '14:00 UTC',
    venue: 'Monaco Circuit',
    image: '/monaco.jpg',
  },
  {
    name: 'Formula 1 British Grand Prix',
    date: '2025-05-15',
    time: '13:00 UTC',
    venue: 'Silverstone Circuit',
    image: '/silverstone.jpg',
  },
  {
    name: 'Italian Grand Prix',
    date: '2025-06-06',
    time: '15:00 UTC',
    venue: 'Monza Circuit',
    image: '/monza.jpg',
  },
  {
    name: 'Canadian Grand Prix',
    date: '2025-07-10',
    time: '17:00 UTC',
    venue: 'Circuit Gilles Villeneuve',
    image: '/canada.jpg',
  },
  {
    name: 'Spanish Grand Prix',
    date: '2025-08-01',
    time: '14:30 UTC',
    venue: 'Circuit de Barcelona-Catalunya',
    image: '/spain.jpg',
  },
];

const RaceSchedule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRace = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % races.length); // Loop back to first race
  };

  const prevRace = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + races.length) % races.length // Loop to last race
    );
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#F1F1F1' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#7D3569', marginBottom: '2rem' }}>
        Upcoming Races
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={prevRace}
          sx={{
            position: 'absolute',
            left: 0,
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <ArrowBack sx={{ color: '#fff' }} />
        </IconButton>

        {/* Carousel Container */}
        <Box
          sx={{
            display: 'flex',
            transform: `translateX(-${currentIndex * 100}%)`, // Moves the carousel
            transition: 'transform 0.5s ease',
            width: '100%', // Ensure the container takes up full width
          }}
        >
          {races.map((race, index) => (
            <Box key={index} sx={{ flex: '0 0 100%', maxWidth: '100%' }}>
              <Card sx={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={race.image} // Replace with actual image URLs
                  alt={race.name}
                  sx={{
                    borderRadius: '8px 8px 0 0',
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ padding: '1.5rem', textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#7D3569' }}>
                    {race.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', marginBottom: '1rem' }}>
                    {race.date} | {race.time} | {race.venue}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href="#"
                    sx={{
                      backgroundColor: '#F79535',
                      '&:hover': {
                        backgroundColor: '#D16C2C',
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={nextRace}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <ArrowForward sx={{ color: '#fff' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default RaceSchedule;
