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
        backgroundColor: "#2e2e2e", // Dark grey background
        color: "#fff",
        padding: "40px 10px", // Further reduced padding
        textAlign: "center",
        borderRadius: "8px", // Smaller border radius
      }}
      id="how-it-works"
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'F1-Wide', sans-serif", // F1-style font
          fontSize: { xs: "1.8rem", sm: "2.5rem" }, // Adjusted font size for mobile
          fontWeight: "bold",
          color: "#FFD700", // F1 gold color
          marginBottom: "20px", // Reduced margin
          maxWidth: "90%", // Slightly smaller width
          margin: "0 auto", // Center the title
          letterSpacing: "1px", // Reduced letter spacing for compactness
        }}
      >
        How the League Works
      </Typography>
      <Box
        sx={{
          maxWidth: "1000px", // Smaller max width for content
          margin: "0 auto",
        }}
      >
        <Timeline position="alternate">
          {steps.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{
                  display: { xs: "none", sm: "block" }, // Hide on mobile
                  fontFamily: "'F1-Regular', sans-serif", // F1-style font
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "16px", // Smaller font size
                  fontWeight: "bold", // Bold text
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
                    backgroundColor: "#333", // Dark background for cards
                    color: "#fff",
                    borderRadius: "6px", // Smaller border radius
                    padding: { xs: "10px", sm: "15px" }, // Adjusted padding
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)", // Smaller shadow
                    marginBottom: "15px", // Reduced margin between steps
                    transition: "all 0.3s ease-in-out", // Hover transition
                    "&:hover": {
                      transform: "translateY(-2px)", // Slight lift on hover
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)", // Stronger shadow on hover
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'F1-Wide', sans-serif", // F1-style font
                      marginBottom: "10px", // Smaller margin for title
                      fontSize: { xs: "1.2rem", sm: "18px" }, // Responsive font size for title
                      color: "#FFD700", // Gold color for title
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'F1-Regular', sans-serif", // F1-style font
                      fontSize: { xs: "1rem", sm: "1.2rem" }, // Further reduced font size
                      lineHeight: "1.4", // Slightly tighter line height
                      color: "#ccc", // Lighter text for description
                    }}
                  >
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
