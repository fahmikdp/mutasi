import React from "react";
import {
  AppBar,
  Button,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
} from "@mui/material";
// Import Search
import { IconButton, InputAdornment, TextField } from "@mui/material";
// Import Icon
import SearchIcon from "@mui/icons-material/Search";

import Peralatan from "../components/Fasilitas2/Peralatan";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import { ArrowBackTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Fasilitas2(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar>
        <Link to="/fasilitas" style={{ textDecoration: "none" }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackTwoTone />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              &nbsp;Fasilitas
            </Typography>
          </IconButton>
        </Link>
      </Navbar>

      <Box sx={{ width: "100%", mt: 8 }}>
        {/* Component Search */}
        <Container>
          <TextField
            // value={searchText}
            // onChange={(e) => handleChange(e.target.value)}
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon
                      sx={{
                        fontSize: 22,
                        color: "grey",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                fontSize: 15,
                height: 40,
              },
            }}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey",
                borderRadius: 2,
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "grey",
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#7349AC",
                },
            }}
          />
        </Container>

        {/* Component Tabs */}
        <Box sx={{ color: "grey" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <Tab label="Peralatan" {...a11yProps(0)} />
            <Tab label="Gedung" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* Tab Peralatan */}
        <TabPanel value={value} index={0} sx={{ width: "100%" }}>
          <Peralatan />
        </TabPanel>
        {/* Tab Gedung */}
        <TabPanel value={value} index={1}>
          Content
        </TabPanel>
      </Box>
    </>
  );
}
