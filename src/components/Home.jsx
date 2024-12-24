import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Header from "./Header";
import img1 from "../assets/images/devImage.jpg";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Box
              id="home"
              sx={{
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1C2833",
                color: "white",
              }}
            >
              <Grid container spacing={2} sx={{ marginTop: "64px" }}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={img1}
                    alt="Vishnu"
                    sx={{
                      width: { xs: "70%", md: "60%" },
                      borderRadius: "50%",
                      boxShadow: 3,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", 
                      },
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={5}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ color: "#58D68D" }}
                  >
                    <TypeAnimation
                      sequence={[
                        "Hi there👋, I'm Vishnu",
                        2000, 
                        "Welcome to my Portfolio!🚀",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: ".8em", display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "whitesmoke" }}
                    paragraph
                  >
                    I am a Passionate about creating intuitive and engaging web
                    experiences, I combine technical expertise with a creative
                    approach to deliver impactful solutions. Committed to
                    continuous learning and innovation in every project.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
