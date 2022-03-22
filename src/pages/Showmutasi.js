import React, { useState, useEffect } from "react";
import {
  AppBar,
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
import { SaveButton } from "../components/RiwayatMurid/Buttonfloating";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ArrowBackTwoTone } from "@mui/icons-material";
import axios from "axios";

export default function Showfasilitas() {
  //   const newQueryParams = new URLSearchParams(useLocation().search);
  //   const dataChecked = JSON.parse(newQueryParams.get("data"));

  const [data, setData] = useState("");

  const getDojo = () => {
    axios
      .get("http://localhost:100/mutasi/")
      .then((res) => {
        console.log(res.data.body);
        setData(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getDojo);

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
              {data && (
                <ListItem sx={{ mb: -1 }}>
                  <Typography sx={{ fontSize: 14 }}>
                    {data}
                    test aynkk
                  </Typography>
                </ListItem>
              )}
            </List>
          </Card>
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
            <Link to="/fasilitas" style={{ textDecoration: "none" }}>
              <Button variant="contained" disableRipple sx={SaveButton}>
                Lanjutkan Mutasi
              </Button>
            </Link>
          </Box>
        </AppBar>
      </Container>
    </div>
  );
}
