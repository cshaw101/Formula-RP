import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Button, Paper } from '@mui/material';

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
    <Box sx={{ padding: '2rem', backgroundColor: '#F1F1F1' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#7D3569', marginBottom: '2rem' }}>
        Race Highlights
      </Typography>

      {/* Main video section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Paper sx={{ width: '80%', maxWidth: '1200px', padding: '1rem', boxShadow: 3 }}>
          {currentVideo && (
            <iframe
              width="100%"
              height="600"
              src={currentVideo.url}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
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
            onClick={() => setCurrentVideo(video)}
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
