import React from "react";
import { Box, Typography, Divider } from "@mui/material";
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
        When a driver is involved in a wreck, the impact on their finances and availability for future races can be significant. Injuries may cause a driver to miss a race, and there will be RP consequences, such as recovery arcs or fines for dangerous driving.
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* Driver Rivalries */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        2. Driver Rivalries
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        Drivers can engage in rivalries, challenging each other through public comments or heated debates. Rivalries influence race strategies and may trigger extra rewards for the driver who performs better in head-to-head matchups.
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* Press Conferences */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        3. Press Conferences
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        After each race, drivers and team principals participate in press conferences, answering questions from "reporters" (league members). This adds drama and can result in fines or positive perks based on public reactions to the answers.
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* Team Alliances and Pacts */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        4. Team Alliances and Pacts
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        Teams can form secret alliances or pacts with each other to strategize against their rivals. This could involve coordinated tactics during races or efforts to sabotage an opponent’s performance. Secrets and betrayal are at the heart of these alliances!
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* Media Coverage and Rumors */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        5. Media Coverage and Rumors
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        Journalists play an important role in stirring drama by uncovering secrets, creating rumors, or reporting on controversial moments. The media can influence public opinion, sponsors, and even the FIA’s decisions on penalties and rewards.
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* FIA Protests and Courtroom Events */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "10px", color: "#1976d2" }}
      >
        6. FIA Protests and Courtroom Events
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
        Teams or drivers may submit formal protests over race results, penalties, or disputes. FIA members will hold courtroom-style events to resolve these issues, with potential financial repercussions and reputational impacts.
      </Typography>
    </Box>
  );
};

export default RoleplayEvents;
