import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
          team: row[3], // Assuming the team name is in column D (index 3)
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
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.7)",
        minHeight: "100vh",
        fontFamily: "'Anton', sans-serif", // Bolder, thicker text
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Title */}
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
       Tier 1 Drivers Championship
      </Typography>

      {/* Leaderboard Table */}
      <TableContainer
        component={Paper}
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          position: "relative",
          zIndex: 5,
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            {leaderboard.map((driver, index) => {
              const teamImageSrc = `/logos/${driver.team?.toLowerCase().replace(/\s+/g, "")}.avif`;
              const carImageSrc = `/cars/${driver.team?.toLowerCase().replace(/\s+/g, "")}.avif`; // Assuming car image is in the /cars/ folder
              let backgroundColor = "";
              if (index === 0) {
                backgroundColor = "gold"; // 1st place - Gold
              } else if (index === 1) {
                backgroundColor = "silver"; // 2nd place - Silver
              } else if (index === 2) {
                backgroundColor = "#cd7f32"; // 3rd place - Bronze (using a bronze color code)
              } else {
                backgroundColor = index % 2 === 0 ? "#2C2C2C" : "#3C3C3C"; // Other positions - default alternating color
              }

              return (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: backgroundColor,
                    "&:hover": { backgroundColor: "#444", cursor: "pointer", transform: "scale(1.05)" }, // Hover effect
                    position: "relative",
                    padding: index < 3 ? "16px" : "8px", // Larger padding for top 3
                    fontSize: index < 3 ? "1.8rem" : "1.2rem", // Larger font for top 3
                    fontWeight: index < 3 ? "bold" : "normal",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition on hover
                    zIndex: 5,
                  }}
                >
                  {/* Team Logo */}
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {driver.team && (
                      <img
                        src={teamImageSrc}
                        alt={driver.team}
                        style={{
                          width: "100px", // Kept size for team logos
                          height: "100px",
                          objectFit: "contain",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    )}
                  </TableCell>

                  {/* Driver Name */}
                  <TableCell
                    sx={{
                      color: index < 3 ? "black" : "white", // Black for top 3 to contrast with background
                      fontSize: index < 3 ? "2.5rem" : "1.8rem", // Larger font for top 3
                      fontWeight: "900", // Set the font weight to the heaviest for maximum boldness
                      textAlign: "center",
                      textTransform: "uppercase",
                      textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)", // Neon glow effect
                    }}
                  >
                    {driver.name}
                  </TableCell>

                  {/* Car Image */}
                  <TableCell
                    sx={{
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    {driver.team && (
                      <img
                        src={carImageSrc}
                        alt={`${driver.team} Car`}
                        style={{
                          width: "160px", // Increased width for the car images to match your preference
                          height: "80px", // Adjusted height to keep it proportional
                          objectFit: "contain", // Adjusts the aspect ratio to fit the container
                          borderRadius: "8px",
                          transform: "scale(1.1)", // Slight zoom effect on car image
                          transition: "transform 0.3s ease",
                        }}
                      />
                    )}
                  </TableCell>

                  {/* Points */}
                  <TableCell
                    sx={{
                      color: index < 3 ? "black" : "white",
                      fontSize: index < 3 ? "2rem" : "1.6rem", // Larger points for top 3
                      fontWeight: "900", // Set the font weight to the heaviest for maximum boldness
                      textAlign: "center",
                      padding: "16px",
                      textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)", // Neon glow effect
                    }}
                  >
                    {driver.points}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default F1Leaderboard;
