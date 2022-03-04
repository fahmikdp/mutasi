import React from "react";
import { AppBar, Button, Box, Container, Typography } from "@mui/material";
import { SaveButton } from "../components/RiwayatMurid/Buttonfloating";
import Navbar from "../components/Navbar";
import Cards from "../components/Card";
import { Link } from "react-router-dom";

export default function Mutasi() {
  return (
    <>
      <Link to="/">
        <Navbar>&nbsp;Permintaan Mutasi</Navbar>
      </Link>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Cards />
        </Box>

        {/* Button Floating */}
        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            bgcolor: "transparent",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              margin: "auto",
              textAlign: "center",
              width: "95%",
            }}
          >
            <Button variant="contained" disableRipple sx={SaveButton}>
              Terima Mutasi
            </Button>
          </Box>
        </AppBar>
      </Container>
    </>
  );
}
