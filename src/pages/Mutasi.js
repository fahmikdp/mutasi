import React, { useState } from "react";
import {
  AppBar,
  Button,
  Box,
  Container,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { SaveButton } from "../components/RiwayatMurid/Buttonfloating";
import Navbar from "../components/Navbar";
import Cards from "../components/Card";
import { Link } from "react-router-dom";

// Select
import {
  textfield,
  calendar,
  datePicker,
} from "../components/Mutasi/styleform";
import { MenuProps, provinsi, cabang } from "../components/Mutasi/DataSelect";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Mutasi() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [tanggalmutasi, setTanggalmutasi] = useState("");

  const [selectedProvinsi, setProvinsi] = useState("");

  const handleSelectProvinsi = (newValue) => {
    setProvinsi(newValue);
    console.log(newValue);
  };

  const handleDate = (newValue) => {
    setTanggalmutasi(newValue);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Link to="/">
        <Navbar>&nbsp;Permintaan Mutasi</Navbar>
      </Link>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Cards />
        </Box>
        <Typography sx={{ fontSize: 14, mt: 2 }}>Dojo Asal</Typography>
        <TextField
          placeholder="Terakoya Dojo"
          type="text"
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
            sx={{ height: 40, fontSize: 15 }}
            displayEmpty
            value={selectedProvinsi}
            onChange={handleSelectProvinsi}
            input={<OutlinedInput />}
            // renderValue={(selected) => {
            //   if (selected.length === 0) {
            //     return <p>Pilih Provinsi</p>;
            //   }

            //   //   return selected.join(", ");
            // }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {provinsi.map((name) => (
              <MenuItem
                sx={{ fontSize: 15, height: 10 }}
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Select 2 */}
        <FormControl sx={textfield}>
          <Select
            sx={{ height: 40, fontSize: 15 }}
            displayEmpty
            value={personName}
            onChange={handleChange}
            // input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <p>Pilih Cabang</p>;
              }

              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {cabang.map((dojo) => (
              <MenuItem
                sx={{ fontSize: 15, height: 10 }}
                key={dojo}
                value={dojo}
                // style={getStyles(dojo, personName, theme)}
              >
                {dojo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* SELECT 3 */}
        <FormControl sx={textfield}>
          <Select
            sx={{ height: 40, fontSize: 15 }}
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <p>Pilih Dojo</p>;
              }

              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {provinsi.map((name) => (
              <MenuItem
                sx={{ fontSize: 15, height: 10 }}
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Catatan */}
        <Typography sx={{ fontSize: 14, mt: 1 }}>Alasan Pindah</Typography>
        <TextField
          placeholder="Udah Jago"
          multiline
          rows={3}
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
              renderInput={(params) => <TextField {...params} sx={calendar} />}
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
              <Button variant="contained" disableRipple sx={SaveButton}>
                Terima Mutasi
              </Button>
            </Box>
          </AppBar>
        </Box>
      </Container>
    </>
  );
}
