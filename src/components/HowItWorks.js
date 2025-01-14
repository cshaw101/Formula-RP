import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Team Assignments",
      description:
        "Team Owners are assigned their teams, followed by the selection of Team Principals who will manage strategies and operations.",
    },
    {
      title: "2. Driver Pre-Season Race",
      description:
        "Potential drivers compete in a high-stakes pre-season race, giving Team Owners and Principals a chance to evaluate their performance.",
    },
    {
      title: "3. Free Agency Period",
      description:
        "After the pre-season race, a free agency period begins. Team Owners negotiate contracts with drivers to build their teams.",
    },
    {
      title: "4. The Championship Begins",
      description:
        "Once teams are finalized, the league kicks off! Each race is packed with drama, rivalries, and opportunities to showcase your skills.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
      id="how-it-works"
    >
      <Typography
        variant="h3"
        style={{
          fontFamily: "'Formula1-Bold', sans-serif",
          marginBottom: "30px",
        }}
      >
        How the League Works
      </Typography>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Timeline position="alternate">
          {steps.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "'Formula1-Bold', sans-serif",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                <Typography variant="body2">{step.title}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={index % 2 === 0 ? "primary" : "secondary"} />
                {index < steps.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.6)",
                    marginBottom: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "'Formula1-Bold', sans-serif", marginBottom: "10px" }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "16px", lineHeight: "1.6" }}>
                    {step.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </div>
  );
};

export default HowItWorks;
