import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { FaTheaterMasks, FaCarCrash, FaUsers, FaNewspaper, FaBalanceScale } from "react-icons/fa";

const RoleplayEvents = () => {
  return (
    <Box
      id="roleplay-events-section"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#2e2e2e", // Dark grey background for consistency
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "40px",
        width: "100%", // Ensures full-width of the page
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          marginBottom: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          color: "#ffd700", // Gold accent color for the title
        }}
      >
        <FaTheaterMasks size={30} color="#ffd700" /> Roleplay Events
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "30px", color: "#fff" }}>
        Roleplay (RP) events are a core part of the league, adding layers of excitement, strategy, and drama. These events encourage participants to dive deeper into their roles, creating memorable interactions and outcomes. Here are some key RP events:
      </Typography>

      {/* Driver Wrecks and Injuries */}
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ffd700", // Gold accent color for event title
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaCarCrash size={24} color="#ffd700" /> 1. Driver Wrecks and Injuries
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
          When a driver is involved in a wreck, it impacts their finances and race availability. Injuries can result in recovery arcs, race suspensions, or fines for dangerous driving. The consequences can make a significant difference in the championship race.
        </Typography>
        <Divider sx={{ marginY: "20px", backgroundColor: "#fff" }} />
      </Box>

      {/* Driver Rivalries */}
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ffd700", // Gold accent color for event title
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUsers size={24} color="#ffd700" /> 2. Driver Rivalries
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
          Drivers can spark intense rivalries, challenging each other through public comments, press conferences, and on-track performances. Rivalries influence race strategies and offer extra rewards for outperforming rivals.
        </Typography>
        <Divider sx={{ marginY: "20px", backgroundColor: "#fff" }} />
      </Box>

      {/* Press Conferences */}
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ffd700", // Gold accent color for event title
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaNewspaper size={24} color="#ffd700" /> 3. Press Conferences
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
          After each race, drivers and team principals participate in press conferences, responding to questions from "reporters" (league members). Public reactions can lead to rewards or fines based on how the answers are perceived.
        </Typography>
        <Divider sx={{ marginY: "20px", backgroundColor: "#fff" }} />
      </Box>

      {/* Team Alliances and Pacts */}
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ffd700", // Gold accent color for event title
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUsers size={24} color="#ffd700" /> 4. Team Alliances and Pacts
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
          Teams can form secret alliances or pacts with each other, pooling resources or working together to strategize against their rivals. These pacts can lead to betrayal, secrets, and high-stakes drama!
        </Typography>
        <Divider sx={{ marginY: "20px", backgroundColor: "#fff" }} />
      </Box>

      {/* Media Coverage and Rumors */}
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ffd700", // Gold accent color for event title
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaNewspaper size={24} color="#ffd700" /> 5. Media Coverage and Rumors
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
          Journalists play a key role in the league by uncovering secrets, creating rumors, or amplifying controversies. Their coverage can influence public opinion, sponsors, and even the FIA's decisions on penalties or rewards.
        </Typography>
        <Divider sx={{ marginY: "20px", backgroundColor: "#fff" }} />
      </Box>

      {/* FIA Protests and Courtroom Events */}
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ffd700", // Gold accent color for event title
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaBalanceScale size={24} color="#ffd700" /> 6. FIA Protests and Courtroom Events
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
          Teams or drivers may submit formal protests against race results, penalties, or other disputes. The FIA will host courtroom-style events to resolve these issues, often with significant financial and reputational consequences.
        </Typography>
      </Box>
    </Box>
  );
};

export default RoleplayEvents;
