import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  CircularProgress,
  Grid,
} from "@mui/material";
import axios from "axios";

const GOOGLE_SHEET_ID = "1wyZXZqNtAa9s5HRYr5rhgGc_Tm0o0ixqshXyjymzH6A";
const GOOGLE_API_KEY = "AIzaSyDFJMB6zM1bBInkE7iVqzHgHwbe20i0aEk";
const DRIVERS_SHEET = "DriversChampionshipTier1";
const CONSTRUCTORS_SHEET = "ConstructorsChampionshipTier1";

const F1Leaderboard = () => {
  const [driversLeaderboard, setDriversLeaderboard] = useState([]);
  const [constructorsLeaderboard, setConstructorsLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async (sheetName, setStateFunction) => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${sheetName}?key=${GOOGLE_API_KEY}`
        );
        const rows = response.data.values.slice(1);

        const formattedData = rows.map((row) => ({
          name: row[1],
          points: parseInt(row[2], 10),
          team: row[3] || row[1], // Constructor name
        }));

        formattedData.sort((a, b) => b.points - a.points);
        setStateFunction(formattedData);
      } catch (error) {
        console.error(`Error fetching ${sheetName}:`, error);
      }
    };

    Promise.all([
      fetchLeaderboard(DRIVERS_SHEET, setDriversLeaderboard),
      fetchLeaderboard(CONSTRUCTORS_SHEET, setConstructorsLeaderboard),
    ]).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress size={80} />
      </Box>
    );
  }

  const renderTable = (title, leaderboard, isDrivers = false) => (
    <TableContainer
      component={Paper}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        borderRadius: "12px",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
        padding: "1rem",
        textAlign: "center",
        width: "100%", // Allow it to take the full width
        overflowX: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#F79535",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>
      <Table size="medium" sx={{ minWidth: 300 }}>
        <TableBody>
          {leaderboard.map((entry, index) => {
            const teamLogo = `/logos/${entry.team?.toLowerCase().replace(/\s+/g, "")}.avif`;
            const carLogo = `/cars/${entry.team?.toLowerCase().replace(/\s+/g, "")}.avif`;

            return (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#333" : "#444",
                  "&:hover": { backgroundColor: "#555", cursor: "pointer" },
                  transition: "background-color 0.3s ease",
                }}
              >
                {/* Team Logo */}
                <TableCell sx={{ textAlign: "center", padding: "12px", width: "20%" }}>
                  <img src={teamLogo} alt={entry.team} style={{ width: "60px", height: "60px" }} />
                </TableCell>

                {/* Name (Driver Name for Drivers, Team Name for Constructors) */}
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "1.2rem", // Adjusted font size
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                    padding: "12px",
                    width: "40%",
                  }}
                >
                  {entry.name}
                </TableCell>

                {/* Car Logo */}
                <TableCell sx={{ textAlign: "center", padding: "12px", width: "20%" }}>
                  <img src={carLogo} alt="Car" style={{ width: "120px", height: "40px" }} /> {/* Adjusted width */}
                </TableCell>

                {/* Points */}
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "1.2rem", // Adjusted font size
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "12px",
                    width: "20%",
                  }}
                >
                  {entry.points}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box
      sx={{
        backgroundColor: "#1C1C1C",
        color: "white",
        padding: 3,
        borderRadius: 12,
        textAlign: "center",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.6)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%", // Full width
        paddingTop: "3rem", // Add spacing from top
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#F79535",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "1.5rem",
        }}
      >
        Tier 1 Leaderboards
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ width: "100%" }}>
        {/* Drivers Championship */}
        <Grid item xs={12} sm={6} md={5}>
          {renderTable("Drivers Championship", driversLeaderboard, true)}
        </Grid>

        {/* Constructors Championship */}
        <Grid item xs={12} sm={6} md={5}>
          {renderTable("Constructors Championship", constructorsLeaderboard, false)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default F1Leaderboard;
