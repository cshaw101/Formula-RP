import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#FF0000" }}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
          }}
        >
          F1 Roleplay League
        </Typography>
        <Box>
          <Button color="inherit" href="#overview">
            Overview
          </Button>
          <Button color="inherit" href="#roles">
            Roles
          </Button>
          <Button color="inherit" href="#signup">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
