import * as React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Button,
  AppBar,
  Box,
  List,
  ListItem,
} from "@mui/material";
import _ from "lodash";
import { Link } from "react-router-dom";
import { DataFasilitas } from "../Fasilitas/DataAndStyle";
import { useLocation } from "react-router-dom";
// icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWorkOutlined";

const Peralatan = (props) => {
  const newQueryParams = new URLSearchParams(useLocation().search);
  const dataChecked = JSON.parse(newQueryParams.get("data"));
  const [expanded, setExpanded] = React.useState(0);

  let dataTemp = dataChecked.map((item) => {
    const dataFilter = DataFasilitas.filter((data) => data.id === item)[0];
    return dataFilter;
  });

  let dataShow = [...dataTemp];

  let groupCategory = _.chain(dataShow)
    .groupBy("kategori")
    .toPairs()
    .map((pair) => _.zipObject(["kategori", "data"], pair))
    .value();
  console.log("datashow", groupCategory);

  const handleChange = (panel) => {
    console.log(panel);
    setExpanded(panel);
  };

  return (
    <>
      <div>
        {/* Header */}
        {groupCategory.length === 0 ? (
          <div>Fasilitas belum dipilih</div>
        ) : (
          groupCategory.map((item) => (
            <Accordion
              sx={{
                border: 0,
                bgcolor: "#f2f2f2",
                boxShadow: "0px 0px 6px #a1a1a1",
                mb: 1,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "000" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ borderRadius: 1 }}
                style={{ backgroundColor: "#FFF" }}
              >
                <MapsHomeWorkIcon />
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: 15, fontFamily: "Roboto", ml: 1 }}
                >
                  {item.kategori}
                </Typography>
              </AccordionSummary>
              {/* isi */}

              {item.data.map((data, index) => (
                <AccordionDetails style={{ color: "#000" }}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 300,
                      height: 10,
                      mt: -2,
                    }}
                  >
                    <ListItem>
                      <Typography sx={{ fontSize: 14 }}>{data.name}</Typography>
                    </ListItem>
                  </List>
                </AccordionDetails>
              ))}
            </Accordion>
          ))
        )}
      </div>

      <Box mt={1}>
        <Link
          to="/fasilitas"
          style={{ textDecoration: "none", color: "#F78104" }}
        >
          <Typography sx={{ color: "#F78104", fontSize: 13 }}>
            Edit Fasilitas Gedung
          </Typography>
        </Link>
      </Box>

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
              flexGrow: 2,
              textAlign: "center",
              width: "95%",
            }}
          >
            <Button
              variant="contained"
              color="warning"
              sx={{
                mb: 2,
                borderRadius: 2,
                // width: 0,
                height: 50,
                fontSize: 30,
                float: "right",
                textDecoration: "none",
                fontWeight: 300,
              }}
            >
              +
            </Button>
          </Box>
        </AppBar>
      </Box>
    </>
  );
};

export default Peralatan;
