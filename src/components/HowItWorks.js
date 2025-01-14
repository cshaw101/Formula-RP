import React from "react";

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
      <h3
        style={{
          fontFamily: "'Formula1-Bold', sans-serif",
          marginBottom: "30px",
        }}
      >
        How the League Works
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.6)",
            }}
          >
            <h5
              style={{
                fontFamily: "'Formula1-Bold', sans-serif",
                marginBottom: "10px",
              }}
            >
              {step.title}
            </h5>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
