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

const DRIVERS_SHEET = "DriversChampionshipTier1";
const CONSTRUCTORS_SHEET = "ConstructorsChampionshipTier1";

const F1Leaderboard = () => {
  const [driversLeaderboard, setDriversLeaderboard] = useState([]);
  const [constructorsLeaderboard, setConstructorsLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async (sheetName, setStateFunction) => {
      const sheetId = process.env.REACT_APP_GOOGLE_SHEET_ID;
      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

      if (!sheetId || !apiKey) {
        setError('Missing Google Sheet ID or API Key.');
        return;
      }

      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`
        );
        const rows = response.data.values.slice(1);

        const formattedData = rows.map((row) => ({
          name: row[1],
          points: parseInt(row[2], 10),
          team: row[3] || row[1], // Constructor name
          teamColor: row[4] || "#FFFFFF", // Color for team
        }));

        formattedData.sort((a, b) => b.points - a.points);
        setStateFunction(formattedData);
      } catch (error) {
        console.error(`Error fetching ${sheetName}:`, error);
        setError(`Failed to load ${sheetName} data.`);
      }
    };

    Promise.all([
      fetchLeaderboard(DRIVERS_SHEET, setDriversLeaderboard),
      fetchLeaderboard(CONSTRUCTORS_SHEET, setConstructorsLeaderboard),
    ]).finally(() => setLoading(false));
  }, []);

  if (error) {
    return (
      <Box
        sx={{
          padding: '4rem 2rem',
          backgroundColor: '#1C1C1C',
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
        maxWidth: "600px",
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
                  backgroundColor: entry.teamColor || "#333",
                  "&:hover": { backgroundColor: "#555", cursor: "pointer" },
                  transition: "background-color 0.3s ease",
                }}
              >
                <TableCell sx={{ textAlign: "center", padding: "8px", width: { xs: "30%", sm: "25%" } }}>
                  <img
                    src={teamLogo}
                    alt={entry.team}
                    style={{
                      width: "80px", // Adjusted for better mobile scaling
                      height: "80px",
                      maxWidth: "100%",
                      objectFit: "contain", // Ensures the image is not distorted
                    }}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1.2rem" }, // Reduced mobile size
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                    padding: "12px",
                    width: "40%",
                  }}
                >
                  {entry.name}
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
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
        maxWidth: "600px",
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
                  backgroundColor: entry.teamColor || "#333",
                  "&:hover": { backgroundColor: "#555", cursor: "pointer" },
                  transition: "background-color 0.3s ease",
                }}
              >
                <TableCell sx={{ textAlign: "center", padding: "12px", width: { xs: "30%", sm: "20%" } }}>
                  <img
                    src={teamLogo}
                    alt={entry.team}
                    style={{ width: "80px", height: "80px", maxWidth: "100%" }}
                  />
                </TableCell>
                <TableCell sx={{ textAlign: "center", padding: "12px", width: { xs: "50%", sm: "20%" } }}>
                  <img
                    src={carLogo}
                    alt={entry.team}
                    style={{ width: "150px", height: "50px", maxWidth: "100%" }}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
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
        justifyContent: "center",
        width: "100%",
        paddingTop: "3rem",
        maxWidth: "100%",
        overflowX: "hidden",
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
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
        }}
      >
        Tier 1 Leaderboards
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ width: "100%" }}>
        <Grid item xs={12} sm={6} md={5} lg={5}>
          {renderDriversTable("Drivers Championship", driversLeaderboard)}
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={5}>
          {renderConstructorsTable("Constructors Championship", constructorsLeaderboard)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default F1Leaderboard;