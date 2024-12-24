import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 5,
        px: 3,
        backgroundColor: "#1C2833",
        color: "#D5D8DC",
        textAlign: "center",
        minHeight: "80vh",
      }}
    >
      <Container
        sx={{
          margin: "140px auto",
          padding: "30px",
          boxShadow: 3,
          backgroundColor: "#273746",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#fff", fontWeight: 700 }}
        >
          Contact Me
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#58D68D", marginBottom: 3 }}
        >
          Feel free to reach out by filling out the form below.
        </Typography>

        <form autoComplete="off">
          <Grid container spacing={3}>
            {/* Full Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Full Name"
                variant="outlined"
                InputProps={{ style: { color: "#D5D8DC" } }}
                InputLabelProps={{ style: { color: "#ABB2B9" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ABB2B9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#58D68D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#58D68D",
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Email Address"
                type="email"
                variant="outlined"
                InputProps={{ style: { color: "#D5D8DC" } }}
                InputLabelProps={{ style: { color: "#ABB2B9" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ABB2B9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#58D68D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#58D68D",
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Mobile Number"
                type="tel"
                variant="outlined"
                InputProps={{ style: { color: "#D5D8DC" } }}
                InputLabelProps={{ style: { color: "#ABB2B9" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ABB2B9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#58D68D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#58D68D",
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Subject"
                variant="outlined"
                InputProps={{ style: { color: "#D5D8DC" } }}
                InputLabelProps={{ style: { color: "#ABB2B9" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ABB2B9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#58D68D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#58D68D",
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                InputProps={{ style: { color: "#D5D8DC" } }}
                InputLabelProps={{ style: { color: "#ABB2B9" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ABB2B9",
                    },
                    "&:hover fieldset": {
                      borderColor: "#58D68D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#58D68D",
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#58D68D",
                  color: "#fff",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#45B39D",
                  },
                }}
                size="large"
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
