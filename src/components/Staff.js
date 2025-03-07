import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material';

// Mock data for staff members
const staff = [
  {
    name: 'Alice Johnson',
    title: 'Team Manager',
    bio: 'Alice has been leading teams for over 10 years and brings a wealth of experience in strategic planning and leadership.',
    image: '/alice.jpg', // Replace with actual image paths
  },
  {
    name: 'Bob Smith',
    title: 'Race Director',
    bio: 'Bob oversees race day operations and ensures everything runs smoothly. With a deep passion for racing, he has been part of the sport for over 15 years.',
    image: '/bob.jpg',
  },
  {
    name: 'Claire Williams',
    title: 'Technical Director',
    bio: 'Claire is responsible for the engineering side of the races, ensuring all vehicles meet the necessary technical standards and perform at their best.',
    image: '/claire.jpg',
  },
  {
    name: 'David Brown',
    title: 'Communications Specialist',
    bio: 'David manages all media relations and ensures that race events get the right coverage. He has a background in journalism and public relations.',
    image: '/david.jpg',
  },
  {
    name: 'Emma Lee',
    title: 'Operations Coordinator',
    bio: 'Emma handles the logistics of the team and event operations, ensuring that every event goes off without a hitch. She has excellent organizational skills.',
    image: '/emma.jpg',
  },
];

const StaffPage = () => {
  return (
    <Box sx={{ padding: '3rem', backgroundColor: '#F1F1F1' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#7D3569', marginBottom: '3rem' }}>
        Meet Our Staff
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {staff.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="300"
                image={member.image} // Replace with actual image URLs
                alt={member.name}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ padding: '2rem', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#7D3569' }}>
                  {member.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#F79535', fontWeight: '500', marginBottom: '1rem' }}>
                  {member.title}
                </Typography>
                <Divider sx={{ marginBottom: '1rem' }} />
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StaffPage;
