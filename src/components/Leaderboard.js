import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";
import axios from "axios";

const GOOGLE_SHEET_ID = "1wyZXZqNtAa9s5HRYr5rhgGc_Tm0o0ixqshXyjymzH6A";
const GOOGLE_API_KEY = "AIzaSyDFJMB6zM1bBInkE7iVqzHgHwbe20i0aEk";
const SHEET_NAME = "DriversChampionshipTier1"; // Change if your sheet has a different name

const F1Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${SHEET_NAME}?key=${GOOGLE_API_KEY}`
        );
        const rows = response.data.values.slice(1); // Skipping header row
        const formattedData = rows.map((row) => ({
          name: row[1],
          points: parseInt(row[2], 10), // Make sure points are parsed as integers
        }));

        // Sort by points in descending order
        formattedData.sort((a, b) => b.points - a.points);

        // Set the leaderboard state
        setLeaderboard(formattedData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
      setLoading(false);
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress size={80} />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ backgroundColor: "#181818", color: "white", padding: 3, borderRadius: 3, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#ff1801" }}>F1 Leaderboard</Typography>
      {leaderboard.length > 0 && (
        <Box display="flex" alignItems="center" sx={{ backgroundColor: "#222", padding: 3, borderRadius: 2, mb: 3 }}>
          <Box textAlign="left">
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "gold" }}>
              {leaderboard[0].name} (P1)
            </Typography>
            <Typography variant="h6">{leaderboard[0].points} Points</Typography>
          </Box>
        </Box>
      )}
      <TableContainer component={Paper} sx={{ backgroundColor: "#222" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Rank</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Driver</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard.map((driver, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "white" }}>P{index + 1}</TableCell> {/* Dynamically assign position */}
                <TableCell sx={{ color: "white" }}>{driver.name}</TableCell>
                <TableCell sx={{ color: "white" }}>{driver.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default F1Leaderboard;
