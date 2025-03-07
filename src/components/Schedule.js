import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const races = [
  {
    name: "Spanish Grand Prix",
    date: "2025-03-08",
    time: "7:00 EST",
    venue: "The Circuit de Barcelona-Catalunya",
    image: "/track-images/Spain_Circuit.avif",
  },
  {
    name: "Azerbaijan Grand Prix",
    date: "2025-03-15",
    time: "7:00 EST",
    venue: "Baku City Circuit",
    image: "/track-images/Baku.avif",
  },
  {
    name: "Netherlands Grand Prix",
    date: "2025-03-22",
    time: "7:00 ESt",
    venue: "Zandvoort Circuit",
    image: "/track-images/zandvoort.avif",
  },
  {
    name: "Austrian Grand Prix",
    date: "2025-03-29",
    time: "7:00 PM",
    venue: "Red Bull Ring",
    image: "/track-images/ring.avif",
  },
  {
    name: "British Grand Prix",
    date: "2025-04-05",
    time: "7:00 PM",
    venue: "Silverstone Circuit",
    image: "/track-images/silverstone.avif",
  },
  {
    name: "Canadian Grand Prix",
    date: "2025-04-12",
    time: "7:00 PM",
    venue: "Circuit Gilles Villeneuve",
    image: "/track-images/canada.avif",
  },
  {
    name: "Mexican Grand Prix",
    date: "2025-04-26",
    time: "7:00 PM",
    venue: "Autódromo Hermanos Rodríguez",
    image: "/track-images/mexico.avif",
  },
  {
    name: "Miami Grand Prix",
    date: "2025-05-03",
    time: "7:00 PM",
    venue: "Miami International Autodrome",
    image: "/track-images/miami.avif",
  },
  {
    name: "Brazilian Grand Prix",
    date: "2025-05-17",
    time: "7:00 PM",
    venue: "Autódromo de Interlagos",
    image: "/track-images/brazil.avif",
  },
  {
    name: "Las Vegas Grand Prix",
    date: "2025-05-24",
    time: "7:00 PM",
    venue: "Las Vegas Strip Circuit",
    image: "/track-images/vegas.avif",
  },
  {
    name: "Singapore Grand Prix",
    date: "2025-05-31",
    time: "7:00 PM",
    venue: "Marina Bay Street Circuit",
    image: "/track-images/singapore.avif",
  },
  {
    name: "Japanese Grand Prix",
    date: "2025-06-07",
    time: "7:00 PM",
    venue: "Suzuka International Racing Course",
    image: "/track-images/japan.avif",
  },
  {
    name: "Saudi Arabian Grand Prix",
    date: "2025-06-21",
    time: "7:00 PM",
    venue: "Jeddah Corniche Circuit",
    image: "/track-images/saudi.avif",
  },
  {
    name: "Qatar Grand Prix",
    date: "2025-06-28",
    time: "7:00 PM",
    venue: "Lusail International Circuit",
    image: "/track-images/qatar.avif",
  },
];

const RaceSchedule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRace = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % races.length);
  };

  const prevRace = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + races.length) % races.length
    );
  };

  return (
    <Box sx={{ padding: "3rem", backgroundColor: "#F1F1F1", textAlign: "center" }}>
      <Typography variant="h3" sx={{ color: "#7D3569", marginBottom: "2rem", fontWeight: "bold" }}>
        Upcoming Races
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={prevRace}
          sx={{
            position: "absolute",
            left: -50,
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <ArrowBack sx={{ color: "#fff" }} />
        </IconButton>

        {/* Race Card */}
        <Card
          sx={{
            width: 320, // Slightly bigger card
            height: 420, // Taller card for better spacing
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            padding: "1rem",
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={races[currentIndex].image}
            alt={races[currentIndex].name}
            sx={{
              width: 220, // Wider image
              height: 140, // Proportionally adjusted height
              objectFit: "cover",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
          <CardContent sx={{ padding: "1.2rem", textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#7D3569" }}>
              {races[currentIndex].name}
            </Typography>
            <Typography variant="body1" sx={{ color: "#444", marginTop: "8px" }}>
              {races[currentIndex].date} | {races[currentIndex].time}
            </Typography>
            <Typography variant="body2" sx={{ color: "#777", marginTop: "4px" }}>
              {races[currentIndex].venue}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            href="#"
            sx={{
              backgroundColor: "#F79535",
              fontSize: "0.9rem",
              padding: "8px 16px",
              borderRadius: "6px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#D16C2C",
              },
            }}
          >
            View Details
          </Button>
        </Card>

        {/* Right Arrow */}
        <IconButton
          onClick={nextRace}
          sx={{
            position: "absolute",
            right: -50,
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <ArrowForward sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default RaceSchedule;
