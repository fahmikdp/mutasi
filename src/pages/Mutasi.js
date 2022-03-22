import React, { useState } from "react";
import {
  AppBar,
  Button,
  Box,
  Container,
  Typography,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import { SaveButton } from "../components/RiwayatMurid/Buttonfloating";
import Navbar from "../components/Navbar";
import Cards from "../components/Card";
import { Link, useHistory } from "react-router-dom";
import { ArrowBackTwoTone } from "@mui/icons-material";

// Select
import {
  textfield,
  calendar,
  datePicker,
} from "../components/Mutasi/styleform";
import {
  MenuProps,
  provinsi,
  cabang,
  dojo,
} from "../components/Mutasi/DataSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function Mutasi() {
  const [dojoAsal, setDojoAsal] = useState("");
  const [alasanPindah, setAlasanPindah] = useState("");
  const [tanggalmutasi, setTanggalmutasi] = useState("");

  const [selectedProvinsi, setProvinsi] = useState("");
  const [filterCabang, setFilterCabang] = useState([]);

  const [selectedCabang, setCabang] = useState("");
  const [filterDojo, setFilterDojo] = useState([]);

  const [selectedDojo, setDojo] = useState("");
  const history = useHistory();

  const handleSubmit = function (event) {
    event.preventDefault();
    history.push("/showmutasi");
    console.log(
      `\n`,
      `Dojo Asal: ${dojoAsal}`,
      `\n`,
      `Provinsi: ${selectedProvinsi}`,
      `\n`,
      `Cabang: ${selectedCabang}`,
      `\n`,
      `Dojo: ${selectedDojo}`,
      `\n`,
      `Alasan Pindah: ${alasanPindah}`,
      `\n`,
      `Rencana Pindah: ${tanggalmutasi}`
    );
    const json = {
      originDojo: dojoAsal,
      province: selectedProvinsi,
      branch: selectedCabang,
      newDojo: selectedDojo,
      whyMove: alasanPindah,
      when: tanggalmutasi,
    };
    axios.post("http://localhost:100/mutasi/register", json).then((result) => {
      console.log(result);
    });
  };

  // SELECT FILTER
  const handleSelectProvinsi = (newValue) => {
    setProvinsi(newValue);
    console.log(newValue);
    const filtercabang = cabang.filter((e) => e.idprovinsi === newValue);
    // console.log(filtercabang);
    setFilterCabang(filtercabang);
  };

  const handleSelectCabang = (newValue) => {
    setCabang(newValue);
    console.log(newValue);
    const filterdojo = dojo.filter((e) => e.idcabang === newValue);
    // console.log(filterdojo);
    setFilterDojo(filterdojo);
  };

  const handleSelectDojo = (newValue) => {
    setDojo(newValue);
    console.log(newValue);
  };

  // DATEPICKER
  const handleDate = (newValue) => {
    setTanggalmutasi(newValue);
  };

  return (
    <>
      <Navbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackTwoTone />
            <Typography sx={{ fontFamily: "Roboto", fontWeight: 500 }}>
              &nbsp;Permintaan Mutasi
            </Typography>
          </IconButton>
        </Link>
      </Navbar>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Container>
          <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Cards />
          </Box>
          <Typography sx={{ fontSize: 14, mt: 2 }}>Dojo Asal</Typography>
          <TextField
            required
            placeholder="Terakoya Dojo"
            type="text"
            value={dojoAsal}
            onChange={(e) => setDojoAsal(e.target.value)}
            sx={textfield}
            inputProps={{
              style: {
                fontSize: 15,
                height: 5,
              },
            }}
          ></TextField>
          <Typography sx={{ fontSize: 14, mt: 1 }}>Dojo Baru</Typography>

          {/* SELECT */}
          <FormControl sx={textfield}>
            <Select
              required
              sx={{ height: 40, fontSize: 15 }}
              displayEmpty
              value={selectedProvinsi}
              onChange={(e) => handleSelectProvinsi(e.target.value)}
              // input={<OutlinedInput />}

              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                value=""
                disabled
                sx={{
                  fontSize: 15,
                  minHeight: {
                    xs: 2,
                  },
                }}
              >
                <p>Pilih Provinsi</p>
              </MenuItem>
              {provinsi.map((name) => (
                <MenuItem
                  sx={{
                    fontSize: 15,
                    minHeight: {
                      xs: 2,
                    },
                  }}
                  key={name.id}
                  value={name.name}
                >
                  {name.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Select 2 */}
          <FormControl sx={textfield}>
            <Select
              required
              sx={{ height: 40, fontSize: 15 }}
              displayEmpty
              value={selectedCabang}
              onChange={(e) => handleSelectCabang(e.target.value)}
              // input={<OutlinedInput />}

              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                value=""
                disabled
                sx={{
                  fontSize: 15,
                  minHeight: {
                    xs: 2,
                  },
                }}
              >
                <p>Pilih Cabang</p>
              </MenuItem>
              {filterCabang.map((dojo) => (
                <MenuItem
                  sx={{
                    fontSize: 15,
                    minHeight: {
                      xs: 2,
                    },
                  }}
                  key={dojo.id}
                  value={dojo.name}
                >
                  {dojo.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* SELECT 3 */}
          <FormControl sx={textfield}>
            <Select
              required
              sx={{ height: 40, fontSize: 15 }}
              displayEmpty
              value={selectedDojo}
              onChange={(e) => handleSelectDojo(e.target.value)}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                value=""
                disabled
                sx={{
                  fontSize: 15,
                  minHeight: {
                    xs: 2,
                  },
                }}
              >
                <p>Pilih Dojo</p>
              </MenuItem>
              {filterDojo.map((cabang) => (
                <MenuItem
                  sx={{
                    fontSize: 15,
                    minHeight: {
                      xs: 2,
                    },
                  }}
                  key={cabang.id}
                  value={cabang.name}
                >
                  {cabang.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Alasan Pindah */}
          <Typography sx={{ fontSize: 14, mt: 1 }}>Alasan Pindah</Typography>
          <TextField
            required
            placeholder="Udah Jago"
            multiline
            rows={3}
            value={alasanPindah}
            onChange={(e) => setAlasanPindah(e.target.value)}
            type="text"
            sx={textfield}
            inputProps={{
              style: {
                fontSize: 14,
                height: 45,
              },
            }}
          ></TextField>
          <Typography sx={{ fontSize: 14, mt: 1 }}>Rencana Pindah</Typography>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={7}>
              <DesktopDatePicker
                placeholder="Date desktop"
                inputFormat="dd/MM/yyyy"
                value={tanggalmutasi}
                onChange={handleDate}
                renderInput={(params) => (
                  <TextField {...params} sx={calendar} />
                )}
                sx={datePicker}
              />
            </Stack>
          </LocalizationProvider>

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
                  variant="contained"
                  type="submit"
                  disableRipple
                  sx={SaveButton}
                >
                  Terima Mutasi
                </Button>
              </Box>
            </AppBar>
          </Box>
        </Container>
      </form>
    </>
  );
}
