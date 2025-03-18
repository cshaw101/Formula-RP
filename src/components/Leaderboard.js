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
          teamColor: row[4] || "#FFFFFF", // Color for team (added new column for hex code)
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

  const renderDriversTable = (title, leaderboard) => (
    <TableContainer
      component={Paper}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        borderRadius: "12px",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
        padding: "1rem",
        textAlign: "center",
        width: "100%",
        minWidth: "500px",
        margin: "0 auto",
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
      <Table size="medium" sx={{ width: "100%" }}>
        <TableBody>
          {leaderboard.map((entry, index) => {
            const teamLogo = `/logos/${entry.team?.toLowerCase().replace(/\s+/g, "")}.avif`;

            return (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: entry.teamColor || "#333", // Apply team color
                  "&:hover": { backgroundColor: "#555", cursor: "pointer" },
                  transition: "background-color 0.3s ease",
                }}
              >
                {/* Team Logo */}
                <TableCell sx={{ textAlign: "center", padding: "12px", width: "25%" }}>
                  <img
                    src={teamLogo}
                    alt={entry.team}
                    style={{ width: "100px", height: "100px" }} // Increased size for better visibility
                  />
                </TableCell>

                {/* Name (Driver Name) */}
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                    padding: "12px",
                    width: "40%",
                  }}
                >
                  {entry.name}
                </TableCell>

                {/* Points */}
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "1.5rem",
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

  const renderConstructorsTable = (title, leaderboard) => (
    <TableContainer
      component={Paper}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        borderRadius: "12px",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
        padding: "1rem",
        textAlign: "center",
        width: "100%",
        minWidth: "500px",
        margin: "0 auto",
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
      <Table size="medium" sx={{ width: "100%" }}>
        <TableBody>
          {leaderboard.map((entry, index) => {
            const teamLogo = `/logos/${entry.team?.toLowerCase().replace(/\s+/g, "")}.avif`;
            const carLogo = `/cars/${entry.team?.toLowerCase().replace(/\s+/g, "")}.avif`;

            return (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: entry.teamColor || "#333", // Apply team color
                  "&:hover": { backgroundColor: "#555", cursor: "pointer" },
                  transition: "background-color 0.3s ease",
                }}
              >
                {/* Team Logo */}
                <TableCell sx={{ textAlign: "center", padding: "12px", width: "20%" }}>
                  <img
                    src={teamLogo}
                    alt={entry.team}
                    style={{ width: "100px", height: "100px" }} // Increased size for better visibility
                  />
                </TableCell>

                {/* Car Logo */}
                <TableCell sx={{ textAlign: "center", padding: "12px", width: "20%" }}>
                  <img
                    src={carLogo}
                    alt={entry.team}
                    style={{ width: "200px", height: "70px" }}
                  />
                </TableCell>

                {/* Points */}
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: "1.5rem",
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
        width: "100%",
        paddingTop: "3rem",
        maxWidth: "100%",
        margin: "0",
      }}
    >
      <Typography
        variant="h2"
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
        <Grid item xs={12} sm={6} md={5} lg={5}>
          {renderDriversTable("Drivers Championship", driversLeaderboard)}
        </Grid>

        {/* Constructors Championship */}
        <Grid item xs={12} sm={6} md={5} lg={5}>
          {renderConstructorsTable("Constructors Championship", constructorsLeaderboard)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default F1Leaderboard;
