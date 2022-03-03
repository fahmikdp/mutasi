import React from "react";
import {
  AppBar,
  Button,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
import { SaveButton } from "../components/RiwayatMurid/Buttonfloating";
import Navbar from "../components/Navbar";
import Hitomi from "../img/hitomi.jpg";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ImageIcon from "@mui/icons-material/Image";
import ReceiptIcon from "@mui/icons-material/ReceiptOutlined";
import Divider from "@mui/material/Divider";

export default function riwayatmurid() {
  return (
    <>
      <Navbar>&nbsp;Riwayat Murid</Navbar>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Card
            sx={{
              maxWidth: 600,
              xs: 12,
              width: "100%",
              margin: "auto",
              mb: 1,
              height: 140,
              boxShadow: "0px 0px 6px #a1a1a1",
            }}
          >
            <Grid container spacing={2}>
              {/* Biodata */}
              <Grid item xs={8} md={1} lg={10}>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: 16,
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      ml: 0,
                      mt: -1,
                    }}
                  >
                    Gatau nama sendiri :(
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 12, fontFamily: "Roboto", mb: 0.5 }}
                  >
                    Sabuk Hijau
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontFamily: "Roboto" }}
                  >
                    17 Tahun
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontFamily: "Roboto", mb: 0.5 }}
                  >
                    Bekasi, 21 November 2004
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontFamily: "Roboto" }}
                  >
                    Lanang
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontFamily: "Roboto" }}
                  >
                    Kampung Dua Jakasampurna
                  </Typography>
                </CardContent>
              </Grid>
              {/* Avatar */}
              <Grid item xs={4} md={1} lg={0.5}>
                <Avatar
                  sx={{
                    bgcolor: "#F78104",
                    mt: 3,
                    width: 90,
                    height: 90,
                  }}
                  src={Hitomi}
                >
                  Avatar
                </Avatar>
              </Grid>
            </Grid>
          </Card>
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
              <ImageIcon sx={{ mr: 2 }} />
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
              <ImageIcon sx={{ mr: 2 }} />
              <Box sx={{ display: "block" }}>
                <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                  28 Januari 2018
                </Typography>
                <Typography sx={{ fontSize: 15 }}>Mutasi Ke korut</Typography>
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
        <Box>
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
                Mutasi
              </Button>
            </Box>
          </AppBar>
        </Box>
      </Container>
    </>
  );
}
