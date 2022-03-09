import React from "react";
import {
  AppBar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { SaveButton } from "../components/RiwayatMurid/Buttonfloating";
import Navbar from "../components/Navbar";
import { ArrowBackTwoTone } from "@mui/icons-material";

import logoMutasi from "../img/logo.png";
import Cards from "../components/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ReceiptIcon from "@mui/icons-material/ReceiptOutlined";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export default function riwayatmurid() {
  return (
    <>
      <Navbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackTwoTone />
            <Typography sx={{ fontFamily: "Roboto", fontWeight: 500 }}>
              &nbsp;Riwayat Murid
            </Typography>
          </IconButton>
        </Link>
      </Navbar>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Cards />
        </Box>
        <Box>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <img
                src={logoMutasi}
                style={{ marginRight: "17px", width: 25 }}
              />
              <Box sx={{ display: "block" }}>
                <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                  12 Maret 2016
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  Mutasi Ke Inkanas Dojo
                </Typography>
              </Box>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <img
                src={logoMutasi}
                style={{ marginRight: "17px", width: 25 }}
              />
              <Box sx={{ display: "block" }}>
                <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                  28 Januari 2018
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  Mutasi Ke Aikido Dojo
                </Typography>
              </Box>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ReceiptIcon sx={{ mr: 2 }} />
              <Box sx={{ display: "block" }}>
                <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                  12 Oktober 2019
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  Terdaftar Pada Terakoya Dojo
                </Typography>
              </Box>
            </ListItem>
          </List>
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
            <Link to="/mutasi" style={{ textDecoration: "none" }}>
              <Button variant="contained" disableRipple sx={SaveButton}>
                Mutasi
              </Button>
            </Link>
          </Box>
        </AppBar>
      </Container>
    </>
  );
}
