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
import { ArrowBackTwoTone } from "@mui/icons-material";
import axios from "axios";

export default function Showfasilitas() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:100/mutasi/");
      setData(request.data);
    }
    fetchData();
  }, []);
  console.log(datas);

  return (
    <div>
      <Navbar>
        <Link to="/mutasi" style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackTwoTone />
            <Typography sx={{ fontFamily: "Roboto", fontWeight: 500 }}>
              &nbsp;Serius mau Mutasi banh?
            </Typography>
          </IconButton>
        </Link>
      </Navbar>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Typography sx={{ mb: 1 }}>
            Apakah data yg diisi sudah benar?
          </Typography>
          {datas.map((mutasi) => (
            <Card
              sx={{
                maxWidth: 600,
                xs: 12,
                width: "100%",
                margin: "auto",
                mb: 1,
                height: 180,
                boxShadow: "0px 0px 6px #a1a1a1",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 370,
                  height: 20,
                }}
              >
                <ListItem sx={{ mb: -1, display: "block" }}>
                  <Typography sx={{ fontSize: 14 }}>
                    Dojo Asal : {mutasi.originDojo}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Provinsi : {mutasi.province}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Cabang : {mutasi.branch}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Dojo Baru : {mutasi.newDojo}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Alasan Pindah : {mutasi.whyMove}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Rencana Pindah : {mutasi.when}
                  </Typography>
                </ListItem>
              </List>
            </Card>
          ))}
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
