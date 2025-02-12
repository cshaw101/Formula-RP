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
        padding: { xs: "60px 20px", sm: "80px 50px", lg: "100px 60px" },
        textAlign: "center",
        backgroundColor: "#2e2e2e",
        borderRadius: "15px",
        marginBottom: { xs: "40px", sm: "50px", lg: "60px" }, // Spacing below the section
        marginTop: { xs: "40px", sm: "50px", lg: "60px" }, // Spacing above the section
        maxWidth: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography
        className="custom-title"
        variant="h3"
        sx={{
          marginBottom: "40px",
          fontSize: { xs: "2.5rem", sm: "3rem", lg: "3.5rem" },
          fontWeight: "bold",
          color: "#FFD700",
        }}
      >
        <FaTheaterMasks size={40} style={{ marginRight: "10px" }} /> Roleplay Events
      </Typography>
      <Typography
        className="custom-body"
        variant="body1"
        sx={{
          fontSize: { xs: "1.3rem", sm: "1.5rem", lg: "1.7rem" },
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
            icon: <FaCarCrash size={28} color="#ffd700" />,
            content:
              "When a driver is involved in a wreck, it impacts their finances and race availability. Injuries can result in recovery arcs, race suspensions, or fines for dangerous driving. The consequences can make a significant difference in the championship race.",
          },
          {
            title: "Driver Rivalries",
            icon: <FaUsers size={28} color="#ffd700" />,
            content:
              "Drivers can spark intense rivalries, challenging each other through public comments, press conferences, and on-track performances. Rivalries influence race strategies and offer extra rewards for outperforming rivals.",
          },
          {
            title: "Press Conferences",
            icon: <FaNewspaper size={28} color="#ffd700" />,
            content:
              "After each race, drivers and team principals participate in press conferences, responding to questions from 'reporters' (league members). Public reactions can lead to rewards or fines based on how the answers are perceived.",
          },
          {
            title: "Team Alliances and Pacts",
            icon: <FaUsers size={28} color="#ffd700" />,
            content:
              "Teams can form secret alliances or pacts with each other, pooling resources or working together to strategize against their rivals. These pacts can lead to betrayal, secrets, and high-stakes drama!",
          },
          {
            title: "FIA Protests and Courtroom Events",
            icon: <FaBalanceScale size={28} color="#ffd700" />,
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
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              },
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
                  fontSize: { xs: "1.5rem", sm: "1.8rem", lg: "2rem" },
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
                  fontSize: { xs: "1.2rem", sm: "1.5rem", lg: "1.7rem" },
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
