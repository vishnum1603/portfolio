// src/components/Projects.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import img1 from "../assets/images/AgriInsight.png";
import img2 from "../assets/images/EventElite.png";
import img3 from "../assets/images/PerfumePalette.png";

const projects = [
  {
    title: "AgriInsight",
    description:
      "SMART CROP RECOMMENDATIONS Smart Crops, Smart Choices with AgriInsight!",
    image: img1,
    link: "https://agri-in-sight.vercel.app/",
  },
  {
    title: "EventElie",
    description:
      "Event Elie is a platform where Customers can Organize and Manage their Events",
    image: img2,
    link: "https://event-elite-l6v8-42rute7cx-vishnu-ms-projects-7747b0e9.vercel.app/",
  },
  {
    title: "PerfumePalettex",
    description:
      "Perfume Palette is an online platform where customers can customize their fragrances",
    image: img3,
    link: "https://www.example.com/project3",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 5,
        backgroundColor: "#1C2833",
        color: "#D5D8DC",
        minHeight: "80vh",
      }}
    >
      <Container
        sx={{
          margin: "110px auto",
          padding: "20px",
          boxShadow: 3,
          backgroundColor: "#273746",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            color: "#58D68D",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          My Projects
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#34495e",
                  color: "#D5D8DC",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardActionArea
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: "cover",
                      backgroundColor: "#f4f4f4",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#BDC3C7" }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
