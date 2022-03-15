import React, { useState } from "react";
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
  FormControl,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { ArrowBackTwoTone } from "@mui/icons-material";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import CellWifiOutlinedIcon from "@mui/icons-material/CellWifiOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { Link, useHistory } from "react-router-dom";

import {
  Umum,
  Konek,
  Terdekat,
  DataFasilitas,
  checkboxStyle,
} from "../components/Fasilitas/DataAndStyle";
import AC from "../img/ac.svg";
import Wifi from "../img/wifi.svg";
import { SaveButton } from "../components/RiwayatMurid/Buttonfloating";
import _ from "lodash";

export default function Test() {
  // const [fasilitas, setFasilitas] = useState(DataFasilitas);
  // Checkbox state
  const [checkdata, setCheckdata] = useState([]);
  const [checkdata2, setCheckdata2] = useState([]);
  const [checkdata3, setCheckdata3] = useState([]);
  const datacheck = [];

  const handleChangeChecked = (d) => {
    let fselected = [...checkdata];
    let selectedtrue = checkdata.filter((x) => x === d);

    if (selectedtrue.length > 0) {
      let withoutdouble = fselected.filter((x) => x !== d);
      setCheckdata(withoutdouble);
    } else {
      fselected.push(d);
      setCheckdata(fselected);
    }
    // passingData();
  };

  const handleChangeChecked2 = (c) => {
    let fselected2 = [...checkdata2];
    let selectedtrue2 = checkdata2.filter((x) => x === c);

    if (selectedtrue2.length > 0) {
      let withoutdouble2 = fselected2.filter((x) => x !== c);
      setCheckdata2(withoutdouble2);
    } else {
      fselected2.push(c);
      setCheckdata2(fselected2);
    }
  };

  const handleChangeChecked3 = (c) => {
    let fselected2 = [...checkdata3];
    let selectedtrue2 = checkdata3.filter((x) => x === c);

    if (selectedtrue2.length > 0) {
      let withoutdouble2 = fselected2.filter((x) => x !== c);
      setCheckdata3(withoutdouble2);
    } else {
      fselected2.push(c);
      setCheckdata3(fselected2);
    }
  };

  // const passingData = () => {
  //   let output = _.groupBy(DataFasilitas, "kategori");
  //   setFasilitas(output);
  // };

  //  Ambil data
  const history = useHistory();

  const handleSubmit = () => {
    const ambildata = checkdata;
    const ambildata2 = checkdata2;
    const ambildata3 = checkdata3;

    datacheck.push(ambildata, ambildata2, ambildata3);
    // console.log(datacheck);
    history.push("/fasilitas2");
    console.log(
      `\n`,
      `Umum: ${ambildata}`,
      `\n`,
      `Konektivitas: ${ambildata2}`,
      `\n`,
      `Fasilitas Terdekat:${ambildata3} `
    );
  };

  return (
    <>
      <Navbar>
        <Link to="/mutasi" style={{ textDecoration: "none" }}>
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
                  {/* <img src={AC} alt="Air Conditioner Icon" /> */}
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
                  {Umum.map((data) => (
                    <Box
                      key={data}
                      onClick={() => handleChangeChecked(data)}
                      width={"90%"}
                    >
                      <Typography sx={{ fontSize: 14, mb: -1 }}>
                        <Checkbox
                          checked={
                            checkdata.filter((item) => item == data).length > 0
                              ? true
                              : false
                          }
                          // onClick={() => handleChangeChecked(data)}
                          sx={checkboxStyle}
                        />
                        {data}
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
                  {/* <img src={Wifi} alt="Wifi Icon" />
                   */}
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
                  {Konek.map((datas) => (
                    <Box
                      key={datas}
                      onClick={() => handleChangeChecked2(datas)}
                      width={"90%"}
                    >
                      <Typography key={datas} sx={{ fontSize: 14, mb: -1 }}>
                        <Checkbox
                          checked={
                            checkdata2.filter((itemz) => itemz == datas)
                              .length > 0
                              ? true
                              : false
                          }
                          // onClick={() => handleChangeChecked2(datas)}
                          sx={checkboxStyle}
                        />
                        {datas}
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
                  {Terdekat.map((dekat) => (
                    <Box
                      key={dekat}
                      onClick={() => handleChangeChecked3(dekat)}
                      width={"90%"}
                    >
                      <Typography key={dekat} sx={{ fontSize: 14, mb: -1 }}>
                        <Checkbox
                          checked={
                            checkdata3.filter((item) => item == dekat).length >
                            0
                              ? true
                              : false
                          }
                          // onClick={() => handleChangeChecked3(dekat)}
                          sx={checkboxStyle}
                        />
                        {dekat}
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
