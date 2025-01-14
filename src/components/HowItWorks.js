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
        padding: "120px 20px", // Increased padding for better space
        textAlign: "center",
        borderRadius: "10px",
      }}
      id="how-it-works"
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'F1-Wide', sans-serif", // Changed to match Overview font family
          fontSize: { xs: "3.5rem", sm: "5rem" }, // Updated font size
          fontWeight: "bold",
          color: "#FFD700", // F1 gold color for the header
          marginBottom: "50px", // Increased margin for more space between title and text
          maxWidth: "80%", // Ensure the title doesn’t stretch too wide on large screens
          margin: "0 auto", // Center the title
          letterSpacing: "2px", // Add letter spacing for clarity
        }}
      >
        How the League Works
      </Typography>
      <Box
        sx={{
          maxWidth: "1400px", // Larger max width for the content area
          margin: "0 auto",
        }}
      >
        <Timeline position="alternate">
          {steps.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "'F1-Regular', sans-serif", // Updated to match Overview font
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "22px", // Increased font size for step titles
                  fontWeight: "bold", // Bold text for step titles
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
                    borderRadius: "10px",
                    padding: "40px", // Increased padding for larger cards
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)", // Stronger shadow
                    marginBottom: "60px", // Increased margin between steps
                    transition: "all 0.3s ease-in-out", // Hover transition
                    "&:hover": {
                      transform: "translateY(-8px)", // Slight lift on hover
                      boxShadow: "0px 16px 40px rgba(0, 0, 0, 0.8)", // Hover shadow effect
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'F1-Wide', sans-serif", // Changed to match Overview font family
                      marginBottom: "20px", // Increased margin for more space
                      fontSize: "28px", // Larger title size
                      color: "#FFD700", // Gold color for titles
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'F1-Regular', sans-serif", // Updated to match Overview font
                      fontSize: { xs: "1.6rem", sm: "1.8rem" }, // Increased font size for description
                      lineHeight: "2", // Increased line height for better spacing
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
