import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Collapse } from '@mui/material';

// Mock data (unchanged)
const champions = {
  '1': {
    driver: {
      name: 'ANYKAMIKAZU',
      image: '/logos/stake.avif',
      stats: { races: 10, wins: 2, podiums: 7, fastestLap: 2, points: 249 },
      teamColor: '#52E252',
    },
    constructor: {
      name: 'Alfa Romeo/Stake Sauber',
      image: '/logos/stake.avif',
      teamPrincipal: 'Capt_Davis',
      drivers: { driver1: 'AnyKamiKazu', driver2: 'Marklax', reserve: 'Kaos' },
      stats: { wins: 4, podiums: 10, fastestLaps: 5, polePositions: 5, points: 455 },
      teamColor: '#52E252',
    },
  },
  '2': {
    driver: {
      name: 'Hashbrown',
      image: '/logos/ferrari.avif',
      stats: { races: 12, wins: 5, podiums: 11, fastestLap: 2, points: 422 },
      teamColor: '#D91D2A',
    },
    constructor: {
      name: 'Red Bull Racing',
      image: '/logos/red-bull.avif',
      teamPrincipal: 'Capt_Davis',
      drivers: { driver1: 'Marklax', driver2: 'Ne0N', reserve: 'Inhumandan' },
      stats: { wins: 1, podiums: 14, fastestLaps: 4, polePositions: 0, points: 605 },
      teamColor: '#121f45',
    },
  },
};

const hoverColor = '#F79535';

const ChampionsPage = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <Box
      sx={{
        padding: { xs: '1rem', sm: '2rem', md: '3rem' }, // Reduced padding on mobile
        backgroundColor: '#1a1a1a',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          color: hoverColor,
          marginBottom: { xs: '1rem', sm: '2rem' }, // Smaller margin on mobile
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size
        }}
      >
        Wall of Champions
      </Typography>

      {/* Season 1 */}
      <Typography
        variant="h3"
        sx={{
          color: hoverColor,
          marginBottom: '1rem',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
        }}
      >
        Season 1
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {/* Driver Champion for Season 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: '12px',
              background: champions['1'].driver.teamColor,
              boxShadow: '0 8px 16px rgba(255, 165, 0, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: { xs: 'none', sm: 'scale(1.05)' }, // Disable scale on mobile
                boxShadow: `0 12px 24px rgba(${hoverColor}, 0.6)`,
              },
            }}
            onClick={() => handleCardClick(1)}
          >
            <Box
              sx={{
                position: 'relative',
                backgroundColor: champions['1'].driver.teamColor,
                borderRadius: '12px 12px 0 0',
              }}
            >
              <CardMedia
                component="img"
                height="200" // Slightly smaller height for mobile
                image={champions['1'].driver.image}
                alt={champions['1'].driver.name}
                sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
            </Box>
            <CardContent
              sx={{
                padding: { xs: '1rem', sm: '1.5rem' }, // Reduced padding on mobile
                textAlign: 'center',
                background: '#1a1a1a',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: hoverColor,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Responsive font size
                }}
              >
                {champions['1'].driver.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#D1D3D4',
                  marginTop: '0.5rem',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Driver Champion
              </Typography>
            </CardContent>

            <Collapse in={openCard === 1}>
              <CardContent
                sx={{
                  background: '#1a1a1a',
                  color: '#D1D3D4',
                  textAlign: 'center',
                  padding: { xs: '1rem', sm: '1.5rem' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: hoverColor,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Driver Stats
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Races: {champions['1'].driver.stats.races}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Wins: {champions['1'].driver.stats.wins}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Podiums: {champions['1'].driver.stats.podiums}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Fastest Lap: {champions['1'].driver.stats.fastestLap}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Points: {champions['1'].driver.stats.points}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Constructor Champion for Season 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: '12px',
              background: champions['1'].constructor.teamColor,
              boxShadow: '0 8px 16px rgba(255, 165, 0, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: { xs: 'none', sm: 'scale(1.05)' }, // Disable scale on mobile
                boxShadow: `0 12px 24px rgba(${hoverColor}, 0.6)`,
              },
            }}
            onClick={() => handleCardClick(2)}
          >
            <Box
              sx={{
                position: 'relative',
                backgroundColor: champions['1'].constructor.teamColor,
                borderRadius: '12px 12px 0 0',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={champions['1'].constructor.image}
                alt={champions['1'].constructor.name}
                sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
            </Box>
            <CardContent
              sx={{
                padding: { xs: '1rem', sm: '1.5rem' },
                textAlign: 'center',
                background: '#1a1a1a',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: hoverColor,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                {champions['1'].constructor.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#D1D3D4',
                  marginTop: '0.5rem',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Constructor Champion
              </Typography>
            </CardContent>

            <Collapse in={openCard === 2}>
              <CardContent
                sx={{
                  background: '#1a1a1a',
                  color: '#D1D3D4',
                  textAlign: 'center',
                  padding: { xs: '1rem', sm: '1.5rem' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: hoverColor,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Constructor Stats
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Wins: {champions['1'].constructor.stats.wins}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Podiums: {champions['1'].constructor.stats.podiums}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Fastest Laps: {champions['1'].constructor.stats.fastestLaps}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Pole Positions: {champions['1'].constructor.stats.polePositions}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Points: {champions['1'].constructor.stats.points}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    marginTop: '1rem',
                    fontWeight: 'bold',
                    color: hoverColor,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Team Principal
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  {champions['1'].constructor.teamPrincipal}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    marginTop: '1rem',
                    fontWeight: 'bold',
                    color: hoverColor,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Drivers
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Driver 1: {champions['1'].constructor.drivers.driver1}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Driver 2: {champions['1'].constructor.drivers.driver2}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Reserve: {champions['1'].constructor.drivers.reserve}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>

      {/* Season 2 */}
      <Typography
        variant="h3"
        sx={{
          color: hoverColor,
          marginTop: { xs: '2rem', sm: '3rem' },
          marginBottom: '1rem',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
        }}
      >
        Season 2
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {/* Driver Champion for Season 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: '12px',
              background: champions['2'].driver.teamColor,
              boxShadow: '0 8px 16px rgba(255, 165, 0, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: { xs: 'none', sm: 'scale(1.05)' },
                boxShadow: `0 12px 24px rgba(${hoverColor}, 0.6)`,
              },
            }}
            onClick={() => handleCardClick(3)}
          >
            <Box
              sx={{
                position: 'relative',
                backgroundColor: champions['2'].driver.teamColor,
                borderRadius: '12px 12px 0 0',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={champions['2'].driver.image}
                alt={champions['2'].driver.name}
                sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
            </Box>
            <CardContent
              sx={{
                padding: { xs: '1rem', sm: '1.5rem' },
                textAlign: 'center',
                background: '#1a1a1a',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: hoverColor,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                {champions['2'].driver.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#D1D3D4',
                  marginTop: '0.5rem',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Driver Champion
              </Typography>
            </CardContent>

            <Collapse in={openCard === 3}>
              <CardContent
                sx={{
                  background: '#1a1a1a',
                  color: '#D1D3D4',
                  textAlign: 'center',
                  padding: { xs: '1rem', sm: '1.5rem' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: hoverColor,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Driver Stats
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Races: {champions['2'].driver.stats.races}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Wins: {champions['2'].driver.stats.wins}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Podiums: {champions['2'].driver.stats.podiums}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Fastest Lap: {champions['2'].driver.stats.fastestLap}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Points: {champions['2'].driver.stats.points}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Constructor Champion for Season 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: '12px',
              background: champions['2'].constructor.teamColor,
              boxShadow: '0 8px 16px rgba(255, 165, 0, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: { xs: 'none', sm: 'scale(1.05)' },
                boxShadow: `0 12px 24px rgba(${hoverColor}, 0.6)`,
              },
            }}
            onClick={() => handleCardClick(4)}
          >
            <Box
              sx={{
                position: 'relative',
                backgroundColor: champions['2'].constructor.teamColor,
                borderRadius: '12px 12px 0 0',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={champions['2'].constructor.image}
                alt={champions['2'].constructor.name}
                sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />
            </Box>
            <CardContent
              sx={{
                padding: { xs: '1rem', sm: '1.5rem' },
                textAlign: 'center',
                background: '#1a1a1a',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: hoverColor,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                {champions['2'].constructor.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#D1D3D4',
                  marginTop: '0.5rem',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Constructor Champion
              </Typography>
            </CardContent>

            <Collapse in={openCard === 4}>
              <CardContent
                sx={{
                  background: '#1a1a1a',
                  color: '#D1D3D4',
                  textAlign: 'center',
                  padding: { xs: '1rem', sm: '1.5rem' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: hoverColor,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Constructor Stats
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Wins: {champions['2'].constructor.stats.wins}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Podiums: {champions['2'].constructor.stats.podiums}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Fastest Laps: {champions['2'].constructor.stats.fastestLaps}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Pole Positions: {champions['2'].constructor.stats.polePositions}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Points: {champions['2'].constructor.stats.points}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    marginTop: '1rem',
                    fontWeight: 'bold',
                    color: hoverColor,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Team Principal
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  {champions['2'].constructor.teamPrincipal}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    marginTop: '1rem',
                    fontWeight: 'bold',
                    color: hoverColor,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Drivers
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Driver 1: {champions['2'].constructor.drivers.driver1}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Driver 2: {champions['2'].constructor.drivers.driver2}
                </Typography>
                <Typography fontSize={{ xs: '0.85rem', sm: '1rem' }}>
                  Reserve: {champions['2'].constructor.drivers.reserve}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChampionsPage;