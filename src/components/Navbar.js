import React from "react";
import { AppBar, IconButton, Typography, Box } from "@mui/material";
import { ArrowBackTwoTone } from "@mui/icons-material";

export default function Navbar(props) {
  return (
    <AppBar
      elevation="none"
      position="fixed"
      sx={{ xs: 12, bgcolor: "#7349AC", pt: 1 }}
    >
      <Box>{props.children}</Box>
    </AppBar>
  );
}
