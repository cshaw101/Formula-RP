import React from "react";
import { Box, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";
import { FaTheaterMasks } from "react-icons/fa";

const RoleplayEvents = () => {
  return (
    <Box
      id="roleplay-events-section"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#f0f4ff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "40px",
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
        }}
      >
        <FaTheaterMasks size={30} color="#6c63ff" /> Roleplay Events
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "30px" }}>
        Roleplay (RP) events add depth and excitement to the league by encouraging participants to engage in storytelling and strategic interactions. These events include, but are not limited to:
      </Typography>

      {/* Driver Wrecks and Injuries */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        1. Driver Wrecks and Injuries
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        After a wreck, the FIA will assess its severity using the tier system:
      </Typography>
      <List sx={{ textAlign: "left", marginBottom: "20px" }}>
        <ListItem>
          <ListItemText primary="• Tier 1: Minor crash; no injuries." />
        </ListItem>
        <ListItem>
          <ListItemText primary="• Tier 2: Moderate crash; small chance of injury (1-2 missed races)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="• Tier 3: Severe crash; high chance of injury (longer recovery or missed races)." />
        </ListItem>
      </List>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
        Injured drivers may be replaced by reserve drivers during their recovery.
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* Rivalry Cards */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        2. Rivalry Cards
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        Drivers can declare a rival for the season by purchasing an item in-store, which will then grant rivalry cards.
      </Typography>
      <List sx={{ textAlign: "left", marginBottom: "20px" }}>
        <ListItem>
          <ListItemText
            primary="• Objectives: Rivalry cards will have specific goals like beating the rival in qualifying or avoiding incidents for a set number of races."
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="• Rewards: Completing objectives grants in-game money and prestige perks." />
        </ListItem>
      </List>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* Team Owner Meetings */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        3. Team Owner Meetings
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        Regularly scheduled private meetings for team owners and principals to discuss strategies, alliances, or league-wide issues.
      </Typography>
      <List sx={{ textAlign: "left", marginBottom: "20px" }}>
        <ListItem>
          <ListItemText primary="• Roleplay Dynamics: Team owners can propose rule changes or discuss concerns with the FIA." />
        </ListItem>
        <ListItem>
          <ListItemText primary="• Principals can collaborate or scheme against rivals." />
        </ListItem>
        <ListItem>
          <ListItemText primary="• Secret Chats: Private discussions between team principals and owners to plan strategies." />
        </ListItem>
      </List>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* In-Character Discord Environment */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        4. In-Character Discord Environment
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
        The main league Discord will be strictly in-character (IC). Drivers, team principals, and owners will roleplay interactions in channels like:
        <br />
        • "F1 Twitter" channel for banter, updates, and media-style posts. <br />
        • A separate Out-of-Character (OOC) channel for non-RP discussions.
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* FIA Steward Hearings */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        5. FIA Steward Hearings
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
        After major incidents or controversies, the FIA may host a Steward’s Meeting where drivers or teams can roleplay their defense or arguments. Decisions, such as fines or penalties, will impact the season and RP storylines.
      </Typography>
    </Box>
  );
};

export default RoleplayEvents;
