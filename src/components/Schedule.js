import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  IconButton
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

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
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const today = new Date();
    const nextRaceIndex = races.findIndex((race) => new Date(race.date) >= today);
    if (nextRaceIndex !== -1) {
      setCurrentIndex(nextRaceIndex);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 250 : 400;
      scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        background: "linear-gradient(135deg, #2e2e2e 30%, #1a1a1a 100%)",
        textAlign: "center",
        position: "relative",
      }}
    >
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
        Upcoming Races 
      </Typography>

      {/* Scrollable Carousel */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 3,
          paddingBottom: "1rem",
          scrollBehavior: "smooth",
          "::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          position: "relative",
        }}
      >
        {races.map((race, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 380,
              maxWidth: 420,
              height: 450,
              boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.4)",
              borderRadius: "12px",
              padding: "1rem",
              textAlign: "center",
              background: "linear-gradient(180deg, #7D3569 20%, #2E2E2E 100%)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: `2px solid #F79535`,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 15px 30px rgba(255, 165, 0, 0.6)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={race.image}
              alt={race.name}
              sx={{
                width: "100%",
                height: 180,
                borderRadius: "8px",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#F79535" }}>
                {race.name}
              </Typography>
              <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                📅 {race.date} | 🕖 {race.time}
              </Typography>
              <Typography sx={{ fontSize: "1rem", fontStyle: "italic" }}>
                📍 {race.venue}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{
                background: "#F79535",
                color: "#FFFFF",
                fontWeight: "bold",
                fontSize: "1rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                border: `2px solid #F79535`,
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "#FFA500",
                  borderColor: "#F79535",
                  transform: "scale(1.1)",
                },
              }}
              href="https://www.twitch.tv"
              target="_blank"
            >
              Watch Live
            </Button>
          </Card>
        ))}
      </Box>

      {/* Left and Right Arrows for Scroll Navigation */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={() => scroll(-1)}
          sx={{
            backgroundColor: "#F79535",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#FFA500",
            },
          }}
        >
          <ArrowBack />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={() => scroll(1)}
          sx={{
            backgroundColor: "#F79535",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#FFA500",
            },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default RaceSchedule;
