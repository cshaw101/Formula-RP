import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

// Placeholder data for videos (replace with actual video URLs later)
const videos = [
  { title: 'Race Highlights - Monaco', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Race Highlights - Silverstone', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Race Highlights - Monza', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Race Highlights - Canada', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Race Highlights - Spain', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

const HighlightsPage = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#F1F1F1' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#7D3569', marginBottom: '2rem' }}>
        Race Highlights
      </Typography>

      {/* Main video section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Paper sx={{ width: '80%', maxWidth: '1200px', padding: '1rem', boxShadow: 3 }}>
          <iframe
            width="100%"
            height="600"
            src={currentVideo.url}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Paper>
      </Box>

      {/* Scrollable vertical video list */}
      <Typography variant="h5" sx={{ textAlign: 'center', color: '#7D3569', marginBottom: '1rem' }}>
        Previous Highlights
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'scroll', height: '300px', padding: '1rem', border: '2px solid #7D3569', borderRadius: '8px' }}>
        {videos.map((video, index) => (
          <Button
            key={index}
            onClick={() => handleVideoChange(video)}
            sx={{
              margin: '0.5rem 0',
              padding: '0.8rem',
              backgroundColor: '#F79535',
              color: 'white',
              '&:hover': {
                backgroundColor: '#D16C2C',
              },
              width: '100%',
              textAlign: 'left',
            }}
          >
            {video.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default HighlightsPage;
