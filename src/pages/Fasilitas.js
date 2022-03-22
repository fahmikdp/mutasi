import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Typography,
  IconButton,
  Checkbox,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { ArrowBackTwoTone } from "@mui/icons-material";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import CellWifiOutlinedIcon from "@mui/icons-material/CellWifiOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { Link, useHistory } from "react-router-dom";

import {
  DataFasilitas,
  checkboxStyle,
  // Fasilitas,
} from "../components/Fasilitas/DataAndStyle";
import { SaveButton } from "../components/RiwayatMurid/Buttonfloating";
import _ from "lodash";

export default function Test() {
  // Checkbox state
  const [fasilitas, setFasilitas] = useState([]);

  const handleChangeChecked = (d) => {
    console.log("d.checked", d.checked);
    const dataChecked = fasilitas.map((item) => {
      item.checked =
        item.id === d.id && d.checked === false
          ? true
          : item.id === d.id && d.checked === true
          ? false
          : item.checked;
      return item;
    });
    console.log("data checked", dataChecked);
    setFasilitas(dataChecked);

    // if (selectedtrue.length > 0) {
    //   let withoutdouble = fselected.filter((x) => x !== d);
    //   setCheckdata(withoutdouble);
    // } else {
    //   fselected.push(d);
    //   setCheckdata(fselected);
    // }
    // passingData();
  };

  useEffect(() => {
    const updFasilitas = DataFasilitas.map((item) => {
      item.checked = false;
      return item;
    });
    setFasilitas(updFasilitas);
  }, []);

  //  Ambil data
  const history = useHistory();

  const handleSubmit = () => {
    const fasilitasChecked = fasilitas.filter((item) => item.checked);
    const fasilitasPass = fasilitasChecked.map((item) => item.id);
    history.push("/fasilitas2?data=" + JSON.stringify(fasilitasPass));
  };

  return (
    <>
      <Navbar>
        <Link to="/showmutasi" style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackTwoTone />
            <Typography sx={{ fontFamily: "Roboto", fontWeight: 500 }}>
              &nbsp;Tambah Fasilitas
            </Typography>
          </IconButton>
        </Link>
      </Navbar>

      <Container>
        <Box sx={{ flexGrow: 1, mt: 7 }}>
          {/* Fasilitas */}
          <Card
            sx={{
              maxWidth: 600,
              xs: 12,
              width: "100%",
              margin: "auto",
              mb: 1,
              height: 240,
              boxShadow: "none",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={1} md={1} lg={2}>
                <Box sx={{ mt: 3, width: 50 }}>
                  <MapsHomeWorkIcon />
                </Box>
              </Grid>

              <Grid item xs={11} md={1} lg={10}>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 15, fontFamily: "Roboto", mb: 0.5 }}
                  >
                    Umum
                  </Typography>
                  {fasilitas
                    .filter((item) => item.kategori === "Umum")
                    .map((data) => (
                      <Box
                        key={data}
                        onClick={() => handleChangeChecked(data)}
                        width={"90%"}
                      >
                        <Typography sx={{ fontSize: 14, mb: -1 }}>
                          <Checkbox checked={data.checked} sx={checkboxStyle} />
                          {data.name}
                        </Typography>
                      </Box>
                    ))}
                </CardContent>
              </Grid>
            </Grid>
          </Card>

          {/* Konektivitas */}
          <Card
            sx={{
              maxWidth: 600,
              xs: 12,
              width: "100%",
              margin: "auto",
              mb: 1,
              height: 90,
              boxShadow: "none",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={1} md={1} lg={2}>
                <Box sx={{ mt: 3, width: 50 }}>
                  <CellWifiOutlinedIcon />
                </Box>
              </Grid>

              <Grid item xs={11} md={1} lg={10}>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 15, fontFamily: "Roboto", mb: 0.5 }}
                  >
                    Konektivitas
                  </Typography>
                  {fasilitas
                    .filter((item) => item.kategori === "Konektivitas")
                    .map((datas, index) => (
                      <Box
                        key={index}
                        onClick={() => handleChangeChecked(datas)}
                        width={"90%"}
                      >
                        <Typography key={index} sx={{ fontSize: 14, mb: -1 }}>
                          <Checkbox
                            checked={datas.checked}
                            sx={checkboxStyle}
                          />
                          {datas.name}
                        </Typography>
                      </Box>
                    ))}
                </CardContent>
              </Grid>
            </Grid>
          </Card>

          {/* Fasiitas Terdekat */}
          <Card
            sx={{
              maxWidth: 600,
              xs: 12,
              width: "100%",
              margin: "auto",
              mb: 1,
              height: 100,
              boxShadow: "none",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={1} md={1} lg={2}>
                <Box sx={{ mt: 3, width: 50 }}>
                  <StorefrontOutlinedIcon />
                </Box>
              </Grid>

              <Grid item xs={11} md={1} lg={10}>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 15, fontFamily: "Roboto", mb: 0.5 }}
                  >
                    Fasilitas Terdekat
                  </Typography>
                  {fasilitas
                    .filter((item) => item.kategori === "Terdekat")
                    .map((dekat) => (
                      <Box
                        key={dekat}
                        onClick={() => handleChangeChecked(dekat)}
                        width={"90%"}
                      >
                        <Typography key={dekat} sx={{ fontSize: 14, mb: -1 }}>
                          <Checkbox
                            checked={dekat.checked}
                            sx={checkboxStyle}
                          />
                          {dekat.name}
                        </Typography>
                      </Box>
                    ))}
                </CardContent>
              </Grid>
            </Grid>
          </Card>

          {/* Button Floating */}
          <Box sx={{ mt: 8 }}>
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
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="contained"
                  disableRipple
                  sx={SaveButton}
                >
                  Simpan
                </Button>
              </Box>
            </AppBar>
          </Box>
        </Box>
      </Container>
    </>
  );
}
