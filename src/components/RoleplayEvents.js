import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { FaTheaterMasks, FaCarCrash, FaUsers, FaNewspaper, FaBalanceScale } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RoleplayEvents = () => {
  return (
    <Box
      id="roleplay-events-section"
      sx={{
        padding: { xs: "60px 20px", sm: "80px 50px" },
        textAlign: "center",
        backgroundColor: "#2e2e2e",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        marginBottom: "50px",
        maxWidth: { xs: "95%", sm: "90%", lg: "80%" },
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography
        className="custom-title"
        variant="h3"
        sx={{
          marginBottom: "40px",
          fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
          fontWeight: "bold",
          color: "#FFD700",
        }}
      >
        <FaTheaterMasks size={36} style={{ marginRight: "10px" }} /> Roleplay Events
      </Typography>
      <Typography
        className="custom-body"
        variant="body1"
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          lineHeight: "1.8",
          marginBottom: "30px",
          color: "#FFFFFF",
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        Roleplay (RP) events are a core part of the league, adding layers of excitement, strategy, and drama. These events encourage participants to dive deeper into their roles, creating memorable interactions and outcomes. Here are some key RP events:
      </Typography>

      {/* Accordion for each event */}
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: "95%", lg: "85%" },
          margin: "0 auto",
        }}
      >
        {[
          {
            title: "Driver Wrecks and Injuries",
            icon: <FaCarCrash size={24} color="#ffd700" />,
            content:
              "When a driver is involved in a wreck, it impacts their finances and race availability. Injuries can result in recovery arcs, race suspensions, or fines for dangerous driving. The consequences can make a significant difference in the championship race.",
          },
          {
            title: "Driver Rivalries",
            icon: <FaUsers size={24} color="#ffd700" />,
            content:
              "Drivers can spark intense rivalries, challenging each other through public comments, press conferences, and on-track performances. Rivalries influence race strategies and offer extra rewards for outperforming rivals.",
          },
          {
            title: "Press Conferences",
            icon: <FaNewspaper size={24} color="#ffd700" />,
            content:
              "After each race, drivers and team principals participate in press conferences, responding to questions from 'reporters' (league members). Public reactions can lead to rewards or fines based on how the answers are perceived.",
          },
          {
            title: "Team Alliances and Pacts",
            icon: <FaUsers size={24} color="#ffd700" />,
            content:
              "Teams can form secret alliances or pacts with each other, pooling resources or working together to strategize against their rivals. These pacts can lead to betrayal, secrets, and high-stakes drama!",
          },
          {
            title: "Media Coverage and Rumors",
            icon: <FaNewspaper size={24} color="#ffd700" />,
            content:
              "Journalists play a key role in the league by uncovering secrets, creating rumors, or amplifying controversies. Their coverage can influence public opinion, sponsors, and even the FIA's decisions on penalties or rewards.",
          },
          {
            title: "FIA Protests and Courtroom Events",
            icon: <FaBalanceScale size={24} color="#ffd700" />,
            content:
              "Teams or drivers may submit formal protests against race results, penalties, or other disputes. The FIA will host courtroom-style events to resolve these issues, often with significant financial and reputational consequences.",
          },
        ].map((event, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#333",
              marginBottom: "20px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ffd700" }} />}
              aria-controls={`${event.title}-content`}
              id={`${event.title}-header`}
            >
              <Typography
                className="custom-subheading"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: { xs: "1.5rem", sm: "1.8rem" },
                  fontWeight: "bold",
                  color: "#FFD700",
                }}
              >
                {event.icon} {event.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="custom-body"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  lineHeight: "1.8",
                  color: "#FFFFFF",
                }}
              >
                {event.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default RoleplayEvents;