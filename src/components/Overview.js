import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Icon for button
import { Person, SportsMotorsports } from "@mui/icons-material"; // Icons for role guide

const Overview = () => {
  return (
    <Box
      id="overview"
      sx={{
        padding: { xs: "40px 20px", sm: "60px 40px" },
        textAlign: "center",
        backgroundColor: "#2E2E2E",  // Solid background color
        color: "#FFFFFF",
        position: "relative",
        borderRadius: "4px",
        marginTop: "100px",
        marginBottom: "100px",
        boxShadow: "none",
      }}
    >
      {/* Header */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: { xs: "3.5rem", sm: "5rem" },
          fontWeight: "bold",
          color: "#F79535",
          marginBottom: "20px",
          letterSpacing: "2px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Text shadow for header
        }}
      >
        Your Journey Starts Here
      </Typography>

      {/* Overview Text */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: { xs: "1.4rem", sm: "1.6rem" },
          lineHeight: "1.8",
          color: "#FFFFFF",
          letterSpacing: "1px",
          maxWidth: "80%",
          margin: "0 auto",
          marginBottom: "50px",
        }}
      >
        Experience the thrill of Formula 1 like never before! Join a dynamic league where every player takes on a unique role: Owners manage budgets and teams, Principals strategize for success, Drivers race for glory, and FIA members enforce the rules.
      </Typography>

      {/* Tier Guide: Side-by-side */}
      <Grid container spacing={4} sx={{ marginBottom: "60px" }}>
        {/* Tier 1 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: "#3a3a3a",
              padding: "30px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)", // Deeper box shadow
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              transition: "transform 0.3s ease",  // Smooth transform on hover
              "&:hover": {
                transform: "translateY(-10px)", // Hover effect
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#F79535",
                marginBottom: "15px",
              }}
            >
              Tier 1
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                marginBottom: "15px",
                fontSize: "1.1rem",
                lineHeight: "1.5",
              }}
            >
              Races on Sundays at 7:30 PM EST
              <br />
              Lobby opens at 7:00 PM EST
              <br />
              Short Qualifying
              <br />
              50% Race Distance
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKo7VDOv34AzevNXuIDPIRAvzb0S8OZAb79PPtxZ2YaHOTQQ/viewform"
              target="_blank"
              sx={{
                backgroundColor: "#F79535",
                borderRadius: "8px",
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "#7D3569",
                  transform: "scale(1.05)",  // Button hover effect
                },
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Grid>

        {/* Tier 2 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: "#3d3d3d",
              padding: "30px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)", // Deeper box shadow
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)",  // Hover effect
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#F79535",
                marginBottom: "20px",
              }}
            >
              Tier 2
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                marginBottom: "20px",
                fontSize: "1.2rem",
                lineHeight: "1.6",
              }}
            >
              Races on Saturdays at 6:30 PM EST
              <br />
              Lobby opens at 6:00 PM EST
              <br />
              Short Qualifying
              <br />
              35% Race Distance
              <br />
              Sprint Race with Every Event!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKo7VDOv34AzevNXuIDPIRAvzb0S8OZAb79PPtxZ2YaHOTQQ/viewform"
              target="_blank"
              sx={{
                backgroundColor: "#F79535",
                borderRadius: "8px",
                padding: "12px 25px",
                fontWeight: "bold",
                fontSize: "1.2rem",
                "&:hover": {
                  backgroundColor: "#7D3569",
                  transform: "scale(1.05)",
                },
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Role Guide: Team Principal and Reserve Driver */}
      <Box
        sx={{
          marginBottom: "60px",
          padding: "30px",
          backgroundColor: "#3d3d3d",
          borderRadius: "8px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",  // Shadow for the section
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#F79535",
            marginBottom: "30px",
            textAlign: "center",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",  // Text shadow for role guide
          }}
        >
          Role Guide
        </Typography>

        <Grid container spacing={4}>
          {/* Team Principal */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "#2e2e2e",
                padding: "20px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",  // Box shadow for card effect
                height: "100%",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)", // Hover effect on card
                },
              }}
            >
              <Person sx={{ color: "#F79535", fontSize: "3rem" }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#F79535",
                    marginBottom: "10px",
                  }}
                >
                  Team Principal
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                  }}
                >
                  The team principal is responsible for signing and firing drivers, setting lineups, and managing team members.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Reserve Driver */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "#2e2e2e",
                padding: "20px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                height: "100%",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)", // Hover effect on card
                },
              }}
            >
              <SportsMotorsports sx={{ color: "#F79535", fontSize: "3rem" }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#F79535",
                    marginBottom: "10px",
                  }}
                >
                  Reserve Driver
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                  }}
                >
                  Dedicated reserve drivers may replace drivers in either championship. Drivers must be willing to fill in when needed.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Discord Button */}
      <Box sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          color="primary"
          href="https://discord.com/invite/U6dZYMpyya"
          sx={{
            backgroundColor: "#F79535",
            borderRadius: "8px",
            padding: "12px 25px",
            fontWeight: "bold",
            fontSize: "1.2rem",
            "&:hover": {
              backgroundColor: "#7D3569",
              transform: "scale(1.05)",  // Button hover effect
            },
          }}
        >
          Join our Discord
          <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Overview;
