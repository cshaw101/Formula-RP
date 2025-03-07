import React, { useState, useEffect, useRef } from "react";
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
    time: "7:00 EST",
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
  const scrollRef = useRef(null);

  useEffect(() => {
    const today = new Date();
    const nextRaceIndex = races.findIndex((race) => new Date(race.date) >= today);
    if (nextRaceIndex !== -1) {
      setCurrentIndex(nextRaceIndex);
    }
  }, []);

  const nextRace = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % races.length);
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const prevRace = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + races.length) % races.length);
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  return (
    <Box sx={{ padding: "3rem", backgroundColor: "#2e2e2e", textAlign: "center" }}>
      <Typography variant="h3" sx={{ color: "#7D3569", marginBottom: "2rem", fontWeight: "bold" }}>
        Upcoming Races
      </Typography>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 2,
          paddingBottom: "1rem",
        }}
      >
        {races.map((race, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 450,
              height: 400,
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              backgroundColor: "#FFF",
              color: "#7D3569",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: `2px solid ${"#F79535"}`,
            }}
          >
            <CardMedia
              component="img"
              image={race.image}
              alt={race.name}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 200,
                borderRadius: "8px",
                objectFit: "contain",
                marginBottom: "1rem",
              }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#7D3569" }}>
                {race.name}
              </Typography>
              <Typography sx={{ color: "#7D3569" }}>
                {race.date} | {race.time}
              </Typography>
              <Typography sx={{ color: "#7D3569" }}>{race.venue}</Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F79535",
                color: "#FFF",
                fontWeight: "bold",
                fontSize: "1rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: `2px solid #F79535`,
                "&:hover": {
                  backgroundColor: "#7D3569",
                  borderColor: "#7D3569",
                  color: "#FFF",
                },
              }}
              href="https://www.twitch.tv"
              target="_blank"
            >
              Watch the Race
            </Button>
          </Card>
        ))}
      </Box>
      <IconButton onClick={prevRace}><ArrowBack /></IconButton>
      <IconButton onClick={nextRace}><ArrowForward /></IconButton>
    </Box>
  );
};

export default RaceSchedule;
