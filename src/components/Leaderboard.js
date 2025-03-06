import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const GOOGLE_SHEET_ID = "1wyZXZqNtAa9s5HRYr5rhgGc_Tm0o0ixqshXyjymzH6A";
const GOOGLE_API_KEY = "AIzaSyDFJMB6zM1bBInkE7iVqzHgHwbe20i0aEk";
const SHEET_NAME = "DriversChampionshipTier1";

const F1Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${SHEET_NAME}?key=${GOOGLE_API_KEY}`
        );
        const rows = response.data.values.slice(1); // Skip header row
        const formattedData = rows.map((row) => ({
          name: row[1],
          points: parseInt(row[2], 10),
        }));

        formattedData.sort((a, b) => b.points - a.points);

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
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "#1C1C1C",
        color: "white",
        padding: 5,
        borderRadius: 8,
        textAlign: "center",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.7)", // Soft shadow for professional feel
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#ff1801", 
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontFamily: "'Orbitron', sans-serif",
        }}
      >
        F1 Drivers Championship Leaderboard
      </Typography>

      {/* Top Driver Highlight */}
      {leaderboard.length > 0 && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "linear-gradient(90deg, #FFD700, #FF6F00)", // Gold and orange gradient
            padding: "18px 30px",
            borderRadius: "12px",
            mb: 4,
            boxShadow: "0px 10px 40px rgba(255, 215, 0, 0.5)", // Enhanced glow
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#000", fontFamily: "'Titillium Web', sans-serif" }}
          >
            🏆 {leaderboard[0].name} (P1) - {leaderboard[0].points} Points
          </Typography>
        </Box>
      )}

      {/* Leaderboard Table */}
      <TableContainer
        component={Paper}
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#ff1801" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>
                🏁 Rank
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>
                Driver
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>
                Points
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard.map((driver, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#2C2C2C" : "#3C3C3C", // Dark alternating rows
                  "&:hover": { backgroundColor: "#444", cursor: "pointer" }, // Hover effect
                }}
              >
                <TableCell sx={{ color: index === 0 ? "gold" : "white", fontSize: "1.1rem", fontWeight: "bold", textAlign: "center" }}>
                  P{index + 1}
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "1rem", textAlign: "center", fontWeight: index === 0 ? "bold" : "normal" }}>
                  {driver.name}
                </TableCell>
                <TableCell sx={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}>
                  {driver.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default F1Leaderboard;
