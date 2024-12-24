// src/components/Header.js
import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 10,
        backgroundColor: "#ecf0f1",
        color: "#D5D8DC",
        height: "80px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left - Portfolio Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "black", cursor: "pointer" }}
          >
            🌐
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "black" }}>
            Portfolio
          </Typography>
        </Box>

        {/* Right - Navigation Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="black"
          TabIndicatorProps={{
            style: { backgroundColor: "black", height: "3px" },
          }}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "500",
              color: "black",
              "&.Mui-selected": { color: "black" },
            },
          }}
        >
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Skills" component={Link} to="/skills" />
          <Tab label="Projects" component={Link} to="/projects" />
          <Tab label="Contact" component={Link} to="/contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
