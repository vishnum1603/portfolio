import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Instagram, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        backgroundColor: "#ecf0f1",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        py: 3,
        px: 4,
      }}
    >
      <Typography variant="h6" sx={{ flex: 1, fontWeight: "bold" }}>
        Get connected with me on social networks:
      </Typography>

      <Box sx={{ display: "flex" }}>
        <IconButton
          href="https://www.linkedin.com/in/vishnu-m-849062257/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#0A66C2",
            fontSize: "2rem",
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.2)",
              color: "#005C8E",
            },
          }}
        >
          <LinkedIn fontSize="2.2rem" />
        </IconButton>

        <IconButton
          href="https://github.com/vishnum1603"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "black",
            fontSize: "2rem",
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.2)",
              color: "#333333",
            },
          }}
        >
          <GitHub fontSize="2.2rem" />
        </IconButton>

        <IconButton
          href="mailto:vm5215053@gmail.com"
          sx={{
            color: "#D44638",
            fontSize: "2rem",
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.2)",
              color: "#A8402D",
            },
          }}
        >
          <Email fontSize="2.2rem" />
        </IconButton>

        <IconButton
          href="https://www.instagram.com/itz_me_._vishnu/profilecard/?igsh=MXUwM3JuYzhidjJvYg=="
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#E4405F",
            fontSize: "2rem",
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.2)",
              color: "#C13584",
            },
          }}
        >
          <Instagram fontSize="2.2rem" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
