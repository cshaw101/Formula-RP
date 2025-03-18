import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Person, SportsMotorsports } from "@mui/icons-material";

const Overview = () => {
  return (
    <Box
      id="overview"
      sx={{
        padding: { xs: "20px 10px", sm: "40px 20px", md: "60px 40px" }, // Reduced padding on mobile
        textAlign: "center",
        backgroundColor: "#2E2E2E",
        color: "#FFFFFF",
        position: "relative",
        borderRadius: "4px",
        marginTop: { xs: "50px", sm: "100px" }, // Smaller margin on mobile
        marginBottom: { xs: "50px", sm: "100px" },
        boxShadow: "none",
      }}
    >
      {/* Header */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" }, // Scaled for mobile
          fontWeight: "bold",
          color: "#F79535",
          marginBottom: { xs: "15px", sm: "20px" },
          letterSpacing: "2px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Your Journey Starts Here
      </Typography>

      {/* Overview Text */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: { xs: "1rem", sm: "1.4rem", md: "1.6rem" }, // Scaled for mobile
          lineHeight: "1.8",
          color: "#FFFFFF",
          letterSpacing: "1px",
          maxWidth: { xs: "90%", sm: "80%" }, // Wider on mobile
          margin: "0 auto",
          marginBottom: { xs: "30px", sm: "50px" },
        }}
      >
        Experience the thrill of Formula 1 like never before! Join a dynamic league where every player takes on a unique role: Owners manage budgets and teams, Principals strategize for success, Drivers race for glory, and FIA members enforce the rules.
      </Typography>

      {/* Tier Guide: Side-by-side on desktop, stacked on mobile */}
      <Grid container spacing={{ xs: 2, sm: 4 }} sx={{ marginBottom: { xs: "40px", sm: "60px" } }}>
        {/* Tier 1 */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: "#3a3a3a",
              padding: { xs: "20px", sm: "30px" }, // Reduced padding on mobile
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: { xs: "none", sm: "translateY(-10px)" }, // Disable hover on mobile
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#F79535",
                marginBottom: "15px",
                fontSize: { xs: "1.5rem", sm: "2rem" }, // Scaled for mobile
              }}
            >
              Tier 1
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                marginBottom: "15px",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
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
                padding: { xs: "8px 16px", sm: "10px 20px" },
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                "&:hover": {
                  backgroundColor: "#7D3569",
                  transform: { xs: "none", sm: "scale(1.05)" }, // Disable scale on mobile
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
              padding: { xs: "20px", sm: "30px" },
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: { xs: "none", sm: "translateY(-10px)" },
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#F79535",
                marginBottom: "15px",
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Tier 2
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                marginBottom: "15px",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                lineHeight: "1.5",
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
                padding: { xs: "8px 16px", sm: "10px 20px" },
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                "&:hover": {
                  backgroundColor: "#7D3569",
                  transform: { xs: "none", sm: "scale(1.05)" },
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
          marginBottom: { xs: "40px", sm: "60px" },
          padding: { xs: "20px", sm: "30px" },
          backgroundColor: "#3d3d3d",
          borderRadius: "8px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#F79535",
            marginBottom: { xs: "20px", sm: "30px" },
            textAlign: "center",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Role Guide
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 4 }}>
          {/* Team Principal */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "#2e2e2e",
                padding: { xs: "15px", sm: "20px" },
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: { xs: "10px", sm: "20px" },
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                height: "100%",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: { xs: "none", sm: "translateY(-10px)" },
                },
              }}
            >
              <Person sx={{ color: "#F79535", fontSize: { xs: "2rem", sm: "3rem" } }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#F79535",
                    marginBottom: "10px",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  }}
                >
                  Team Principal
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
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
                padding: { xs: "15px", sm: "20px" },
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: { xs: "10px", sm: "20px" },
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                height: "100%",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: { xs: "none", sm: "translateY(-10px)" },
                },
              }}
            >
              <SportsMotorsports sx={{ color: "#F79535", fontSize: { xs: "2rem", sm: "3rem" } }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#F79535",
                    marginBottom: "10px",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  }}
                >
                  Reserve Driver
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
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
      <Box sx={{ marginTop: { xs: "20px", sm: "40px" } }}>
        <Button
          variant="contained"
          color="primary"
          href="https://discord.com/invite/U6dZYMpyya"
          sx={{
            backgroundColor: "#F79535",
            borderRadius: "8px",
            padding: { xs: "10px 20px", sm: "12px 25px" },
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            "&:hover": {
              backgroundColor: "#7D3569",
              transform: { xs: "none", sm: "scale(1.05)" },
            },
          }}
        >
          Join our Discord
          <ArrowForwardIcon sx={{ marginLeft: "10px", fontSize: { xs: "1rem", sm: "1.2rem" } }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Overview;