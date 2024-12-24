import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const skillsData = {
  Languages: [
    { name: "Java", image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "C++", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
    { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  ],
  "Web Technologies": [
    { name: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  ],
  "Tools and Frameworks": [
    { name: "MySQL", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Spring Boot", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
    { name: "Git", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
    { name: "Postman", image: "https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" },
    { name: "Swagger", image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" },
  ],
};

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 5,
        px: 3,
        backgroundColor: "#1C2833", 
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "#fff", fontWeight: 700 }}>
        Skills
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: 3, color: "#58D68D" }}>
        Explore my technical skills categorized for easier navigation.
      </Typography>

      <Box
        sx={{
          maxWidth: "80%",  // Limit the width of the container
          margin: "auto",  // Center the container
          padding: 5, // Add padding inside the container
        }}
      >
        {Object.entries(skillsData).map(([category, skills]) => (
          <Box key={category} sx={{ marginBottom: 5 }}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "left",
                marginBottom: 2,
                color: "white",
                fontWeight: 500,
              }}
            >
              {category}
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      width: "100%",
                      maxWidth: 400,  // Reduce the card size
                      backgroundColor: "#34495e",
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="120"  // Decrease the image height for smaller cards
                      image={skill.image}
                      alt={skill.name}
                      sx={{
                        objectFit: "contain",
                        backgroundColor: "#f4f4f4",
                        padding: 2,
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
