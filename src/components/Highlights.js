import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Paper, Divider } from '@mui/material';

const MAX_RESULTS = 5; // Number of videos to fetch

const HighlightsPage = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      // Check environment variables
      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
      const channelId = process.env.REACT_APP_CHANNEL_ID;

      if (!apiKey || !channelId) {
        setError('Missing YouTube API key or Channel ID.');
        return;
      }

      try {
        const playlistRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );

        const uploadsPlaylistId = playlistRes.data.items[0].contentDetails.relatedPlaylists.uploads;

        const videoRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_RESULTS}&key=${apiKey}`
        );

        const fetchedVideos = videoRes.data.items.map(item => ({
          title: item.snippet.title,
          url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
        }));

        setVideos(fetchedVideos);
        setCurrentVideo(fetchedVideos[0]);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to load videos. Please try again later.');
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return (
      <Box
        sx={{
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #2e2e2e 30%, #1a1a1a 100%)',
          textAlign: 'center',
          color: '#FFFFFF',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: '#F79535', marginBottom: '1rem' }}>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #2e2e2e 30%, #1a1a1a 100%)',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#F79535',
          marginBottom: '2rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '0px 0px 10px rgba(255, 165, 0, 0.6)',
        }}
      >
        Race Highlights
      </Typography>

      {/* Main video section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <Paper
          sx={{
            width: '80%',
            maxWidth: '1200px',
            padding: '1rem',
            boxShadow: 4,
            borderRadius: '8px',
            backgroundColor: '#333',
          }}
        >
          {currentVideo ? (
            <iframe
              width="100%"
              height="600"
              src={currentVideo.url}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px' }}
            ></iframe>
          ) : (
            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
              Loading video...
            </Typography>
          )}
        </Paper>
      </Box>

      <Divider sx={{ borderColor: '#F79535', marginBottom: '2rem' }} />

      {/* Scrollable vertical video list */}
      <Typography
        variant="h3"
        sx={{
          color: '#F79535',
          marginBottom: '2rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '0px 0px 10px rgba(255, 165, 0, 0.6)',
        }}
      >
        Other Highlights
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
          maxHeight: '350px',
          padding: '1rem',
          border: '2px solid #F79535',
          borderRadius: '12px',
          backgroundColor: '#333',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <Button
              key={index}
              onClick={() => setCurrentVideo(video)}
              sx={{
                margin: '0.8rem 0',
                padding: '1rem',
                backgroundColor: '#F79535',
                color: 'white',
                width: '90%',
                textAlign: 'left',
                borderRadius: '8px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#D16C2C',
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s ease-in-out',
                boxShadow: 'none',
              }}
            >
              {video.title}
            </Button>
          ))
        ) : (
          <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
            No videos available yet.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default HighlightsPage;