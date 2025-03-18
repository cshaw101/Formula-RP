import React, { useState, useRef } from "react";
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
    name: "Australian Grand Prix",
    date: "2025-03-09",
    time: "7:30 EST",
    venue: "Albert Park Circuit",
    image: "/track-images/australia.avif",
    description:
      "A classic season opener held in Melbourne's Albert Park. This semi-permanent street circuit is known for its smooth surface, fast chicanes, and tight racing action.",
    previousWinner: "Scorenzy (Season 3)",
  },
  {
    name: "Chinese Grand Prix",
    date: "2025-03-16",
    time: "7:30 EST",
    venue: "Shanghai International Circuit",
    image: "/track-images/china.avif",
    description:
      "Returning to the calendar, Shanghai features a challenging first corner that spirals inward and a long back straight that promotes exciting DRS overtakes.",
    previousWinner: "Sqert-_- (Season 3)",
  },
  {
    name: "Saudi Arabian Grand Prix (SPRINT)",
    date: "2025-03-23",
    time: "7:30 EST",
    venue: "Jeddah Corniche Circuit",
    image: "/track-images/saudi.avif",
    description:
      "The fastest street circuit in F1, Jeddah's high-speed nature and tight barriers demand precision, especially under the lights for this night race.",
    previousWinner: "CRF Rapters (Season 2)",
  },
  {
    name: "Canadian Grand Prix",
    date: "2025-03-30",
    time: "7:30 EST",
    venue: "Circuit Gilles Villeneuve",
    image: "/track-images/canada.avif",
    description:
      "Held in Montreal, this circuit is known for its long straights and the infamous 'Wall of Champions,' which has caught out many great drivers.",
    previousWinner: "INAUGURAL RACE (Season 3)",
  },
  {
    name: "Belgian Grand Prix",
    date: "2025-04-06",
    time: "7:00 EST",
    venue: "Circuit de Spa-Francorchamps",
    image: "/track-images/spa.avif",
    description:
      "One of F1's most legendary tracks, Spa is famous for the high-speed Eau Rouge corner, unpredictable weather, and dramatic races.",
    previousWinner: "Hashbrown (Season 2)",
  },
  {
    name: "British Grand Prix",
    date: "2025-04-13",
    time: "7:30 EST",
    venue: "Silverstone Circuit",
    image: "/track-images/silverstone.avif",
    description:
      "A fan-favorite circuit with legendary corners like Copse, Maggots, and Becketts. The birthplace of Formula 1, Silverstone always delivers thrilling racing.",
    previousWinner: "Hashbrown (Season 2)",
  },
  {
    name: "Monaco Grand Prix",
    date: "2025-04-27",
    time: "7:30 EST",
    venue: "Circuit de Monaco",
    image: "/track-images/monaco.avif",
    description:
      "The most prestigious race in F1, Monaco’s tight streets require absolute precision. Qualifying is crucial as overtaking is nearly impossible.",
    previousWinner: "Unbroken Leonardo (Season 2)",
  },
  {
    name: "Imola Grand Prix",
    date: "2025-05-04",
    time: "7:30 EST",
    venue: "Autodromo Enzo e Dino Ferrari",
    image: "/track-images/imola.avif",
    description:
      "A historic track with a mix of high-speed corners and technical sections. Imola tests drivers’ skills with minimal room for error.",
    previousWinner: "RenatoGames (Season 2)",
  },
  {
    name: "Austrian Grand Prix (SPRINT)",
    date: "2025-05-18",
    time: "7:30 EST",
    venue: "Red Bull Ring",
    image: "/track-images/austria.avif",
    description:
      "A short but intense circuit, the Red Bull Ring is known for its elevation changes and three key DRS zones that encourage overtaking.",
    previousWinner: "Hashbrown (Season 2)",
  },
  {
    name: "Monza Grand Prix",
    date: "2025-05-25",
    time: "7:30 EST",
    venue: "Autodromo Nazionale Monza",
    image: "/track-images/monza.avif",
    description:
      "The 'Temple of Speed' features the highest top speeds of the season. A historic track where slipstream battles are common.",
    previousWinner: "promaster7 (Season 2)",
  },
  {
    name: "Azerbaijan Grand Prix",
    date: "2025-06-01",
    time: "7:30 EST",
    venue: "Baku City Circuit",
    image: "/track-images/baku.avif",
    description:
      "A street circuit with the longest straight in F1, Baku often produces unpredictable races with plenty of overtaking and dramatic moments.",
    previousWinner: "RenatoGames (Season 2)",
  },
  {
    name: "Japanese Grand Prix",
    date: "2025-06-08",
    time: "7:30 EST",
    venue: "Suzuka International Racing Course",
    image: "/track-images/japan.avif",
    description:
      "Suzuka’s figure-eight layout features high-speed corners and technical sections. A favorite among drivers for its challenge.",
    previousWinner: "RST_LuisCarlos11 (Season 2)",
  },
  {
    name: "Brazilian Grand Prix (SPRINT)",
    date: "2025-06-22",
    time: "7:30 EST",
    venue: "Autódromo José Carlos Pace",
    image: "/track-images/brazil.avif",
    description:
      "Interlagos is a legendary circuit with unpredictable weather, elevation changes, and a history of delivering dramatic races.",
    previousWinner: "RenatoGames (Season 2)",
  },
  {
    name: "Las Vegas Grand Prix",
    date: "2025-06-29",
    time: "7:30 EST",
    venue: "Las Vegas Street Circuit",
    image: "/track-images/vegas.avif",
    description:
      "Under the bright lights of Las Vegas, this high-speed street circuit features long straights and sharp corners, offering a true spectacle.",
    previousWinner: "RST_LuisCarlos11(Season 2)",
  },
];


const RaceSchedule = () => {
  const [expandedRace, setExpandedRace] = useState(null);
  const scrollRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");



  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 250 : 400;
      scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        padding: "6rem 2rem", 
        background: "#2e2e2e)",
        textAlign: "center",
        position: "relative",
        minHeight: "500px", 
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
                transform: "scale(1.0)",
                boxShadow: "0px 15px 30px rgba(255, 165, 0, 0.6)",
                zIndex: 10,
              },
            }}
          >
            {expandedRace === index ? (
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#F79535" }}>
                  {race.name}
                </Typography>
                <Typography sx={{ fontSize: "1rem", marginTop: "0.5rem" }}>
                  {race.description}
                </Typography>
                <Typography sx={{ fontSize: "1rem", marginTop: "1rem", fontWeight: "bold", color: "#F79535" }}>
                  Previous Winner: {race.previousWinner}
                </Typography>
                <Button
                  onClick={() => setExpandedRace(null)}
                  variant="contained"
                  sx={{
                    background: "#F79535",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    padding: "0.5rem 1rem",
                    marginTop: "1rem",
                    borderRadius: "8px",
                    border: `2px solid #F79535`,
                    "&:hover": {
                      background: "#FFA500",
                    },
                  }}
                >
                  Back
                </Button>
              </CardContent>
            ) : (
              <>
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
                <Box sx={{ display: "flex", justifyContent: "center", gap: "0.3rem", marginTop: "0.5rem" }}>
                <Button
  variant="contained"
  sx={{
    background: "#F79535",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.2rem",  // Increased font size
    padding: "0.75rem 1.5rem",  // Increased padding for bigger buttons
    borderRadius: "12px",  // Slightly more rounded corners for a more modern feel
    border: `2px solid #F79535`,
    "&:hover": {
      background: "#FFA500",
    },
  }}
  href="https://www.twitch.tv/intrepidracingleague"
  target="_blank"
>
  Watch Live
</Button>

<Button
  onClick={() => setExpandedRace(index)}
  variant="contained"
  sx={{
    background: "#7D3569", // Change to purple
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.2rem",  // Increased font size
    padding: "0.75rem 1.5rem",  // Increased padding for bigger buttons
    borderRadius: "12px",  // Slightly more rounded corners for a more modern feel
    border: `2px solid #7D3569`, // Border to match the purple
    "&:hover": {
      background: "#6A2A58", // Slightly darker purple on hover
    },
  }}
>
  More Info
</Button>


                </Box>
              </>
            )}
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <IconButton onClick={() => scroll(-1)} sx={{ backgroundColor: "#F79535", color: "#fff" }}>
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
        <IconButton onClick={() => scroll(1)} sx={{ backgroundColor: "#F79535", color: "#fff" }}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default RaceSchedule;