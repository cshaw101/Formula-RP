import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const roles = [
  {
    name: "Owner",
    brief: "Make the rules for the leageu, hire drivers, and make strategic decisions.",
    details:
      "As an Owner, you hold the keys to your team's success. Make the rules , negotiate contracts, and guide your team to victory. ",
  },
  {
    name: "Principal",
    brief: "Strategize for races, oversee team operations, and lead to success.",
    details:
      "As a Principal, you are the mastermind behind the team. Collaborate with the Owner and Drivers to develop winning strategies.",
  },
  {
    name: "Driver",
    brief: "Race for glory and earn points to help your team dominate the season.",
    details:
      "As a Driver, you're the face of the team. Take on rivals, earn points, and secure victories on the track.",
  },
];

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setFormVisible(false); // Reset the form visibility when switching roles
  };

  const handleSignUpClick = () => {
    setFormVisible(true); // Show the sign-up form
  };

  const renderFormForRole = () => {
    if (!selectedRole) return null;

    return (
      <>
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          {selectedRole} Sign-Up
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          label="Discord Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          label="RolePlay Character Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          label={`Why do you want to join as a ${selectedRole}?`}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ marginBottom: "15px" }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%", marginTop: "10px" }}
        >
          Submit
        </Button>
      </>
    );
  };

  return (
    <Box
      id="signup"
      sx={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Sign Up for the F1 Roleplay League
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "20px", fontSize: "18px", lineHeight: "1.6" }}
      >
        Select a role to explore its responsibilities and join the league.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {roles.map((role) => (
          <Box
            key={role.name}
            sx={{
              width: selectedRole === role.name ? "100%" : "30%",
              padding: "20px",
              textAlign: "left",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "width 0.3s ease",
            }}
            onClick={() => handleRoleClick(role.name)}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: selectedRole === role.name ? "center" : "left",
              }}
            >
              {role.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "10px",
                textAlign: selectedRole === role.name ? "center" : "left",
              }}
            >
              {selectedRole === role.name ? role.details : role.brief}
            </Typography>
            {selectedRole === role.name && !formVisible && (
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSignUpClick();
                }}
                sx={{ margin: "10px auto", display: "block" }}
              >
                Sign Up as {role.name}
              </Button>
            )}
          </Box>
        ))}
      </Box>
      {formVisible && (
        <Box
          sx={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            maxWidth: "600px",
            margin: "30px auto",
          }}
        >
          {renderFormForRole()}
        </Box>
      )}
    </Box>
  );
};

export default SignUp;
