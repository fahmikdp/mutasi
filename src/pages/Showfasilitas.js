import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  IconButton,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ArrowBackTwoTone } from "@mui/icons-material";

export default function Showfasilitas() {
  return (
    <div>
      <Navbar>
        <Link to="/mutasi" style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackTwoTone />
            <Typography sx={{ fontFamily: "Roboto", fontWeight: 500 }}>
              &nbsp;Serius mau Mutasi????
            </Typography>
          </IconButton>
        </Link>
      </Navbar>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Typography>Apakah data yg diisi sudah benar?</Typography>
          <Card
            sx={{
              maxWidth: 600,
              xs: 12,
              width: "100%",
              margin: "auto",
              mb: 1,
              height: 200,
              boxShadow: "0px 0px 6px #a1a1a1",
            }}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: 300,
                height: 20,
              }}
            >
              <ListItem sx={{ mb: -1 }}>
                <Typography sx={{ fontSize: 14 }}>
                  {/* {data.name} */}
                  test aynkk
                </Typography>
              </ListItem>
            </List>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
