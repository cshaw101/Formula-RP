import React from "react";
import { Box, Typography, Divider, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FaTheaterMasks, FaCarCrash, FaUsers, FaNewspaper, FaBalanceScale } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        width: "80%", // Center the content
        marginLeft: "auto",
        marginRight: "auto",
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

      {/* Accordion for each event */}
      <Accordion sx={{ backgroundColor: "#333", marginBottom: "20px", borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffd700" }} />}
          aria-controls="driver-wrecks-content"
          id="driver-wrecks-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ffd700",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaCarCrash size={24} color="#ffd700" /> 1. Driver Wrecks and Injuries
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
            When a driver is involved in a wreck, it impacts their finances and race availability. Injuries can result in recovery arcs, race suspensions, or fines for dangerous driving. The consequences can make a significant difference in the championship race.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#333", marginBottom: "20px", borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffd700" }} />}
          aria-controls="driver-rivalries-content"
          id="driver-rivalries-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ffd700",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaUsers size={24} color="#ffd700" /> 2. Driver Rivalries
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
            Drivers can spark intense rivalries, challenging each other through public comments, press conferences, and on-track performances. Rivalries influence race strategies and offer extra rewards for outperforming rivals.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#333", marginBottom: "20px", borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffd700" }} />}
          aria-controls="press-conferences-content"
          id="press-conferences-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ffd700",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaNewspaper size={24} color="#ffd700" /> 3. Press Conferences
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
            After each race, drivers and team principals participate in press conferences, responding to questions from "reporters" (league members). Public reactions can lead to rewards or fines based on how the answers are perceived.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#333", marginBottom: "20px", borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffd700" }} />}
          aria-controls="team-alliances-content"
          id="team-alliances-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ffd700",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaUsers size={24} color="#ffd700" /> 4. Team Alliances and Pacts
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
            Teams can form secret alliances or pacts with each other, pooling resources or working together to strategize against their rivals. These pacts can lead to betrayal, secrets, and high-stakes drama!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#333", marginBottom: "20px", borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffd700" }} />}
          aria-controls="media-coverage-content"
          id="media-coverage-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ffd700",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaNewspaper size={24} color="#ffd700" /> 5. Media Coverage and Rumors
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
            Journalists play a key role in the league by uncovering secrets, creating rumors, or amplifying controversies. Their coverage can influence public opinion, sponsors, and even the FIA's decisions on penalties or rewards.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "#333", marginBottom: "20px", borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ffd700" }} />}
          aria-controls="fia-protests-content"
          id="fia-protests-header"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ffd700",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaBalanceScale size={24} color="#ffd700" /> 6. FIA Protests and Courtroom Events
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
            Teams or drivers may submit formal protests against race results, penalties, or other disputes. The FIA will host courtroom-style events to resolve these issues, often with significant financial and reputational consequences.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default RoleplayEvents;
