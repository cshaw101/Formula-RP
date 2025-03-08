import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Paper, Divider } from '@mui/material';

const YOUTUBE_API_KEY = 'AIzaSyApBfgFs1qBgsALgwpy4xXpwTxxx0mTHBY';  // Replace with your API key
const CHANNEL_ID = 'UCOEkVCYBRH2ycIbVQvHVWRQ';  // Replace with the YouTube channel ID
const MAX_RESULTS = 5;  // Number of videos to fetch

const HighlightsPage = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const playlistRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );

        const uploadsPlaylistId = playlistRes.data.items[0].contentDetails.relatedPlaylists.uploads;

        const videoRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API_KEY}`
        );

        const fetchedVideos = videoRes.data.items.map(item => ({
          title: item.snippet.title,
          url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
        }));

        setVideos(fetchedVideos);
        setCurrentVideo(fetchedVideos[0]); // Set the latest video
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        background: "linear-gradient(135deg, #2e2e2e 30%, #1a1a1a 100%)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#F79535",
          marginBottom: "2rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "0px 0px 10px rgba(255, 165, 0, 0.6)",
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
            boxShadow: 4, // Softer shadow for a clean look
            borderRadius: '8px',
            backgroundColor: '#333',
          }}
        >
          {currentVideo && (
            <iframe
              width="100%"
              height="600"
              src={currentVideo.url}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: '8px', // Rounded corners for iframe
              }}
            ></iframe>
          )}
        </Paper>
      </Box>

      <Divider sx={{ borderColor: '#F79535', marginBottom: '2rem' }} /> {/* Divider for separation */}

      {/* Scrollable vertical video list */}
      <Typography
        variant="h3"
        sx={{
          color: "#F79535",
          marginBottom: "2rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "0px 0px 10px rgba(255, 165, 0, 0.6)",
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
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow for vertical list
        }}
      >
        {videos.map((video, index) => (
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
                transform: 'scale(1.05)', // Subtle hover effect
              },
              transition: 'transform 0.2s ease-in-out',
              boxShadow: 'none', // No shadow effect on button
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
