import * as React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";

// icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWorkOutlined";

// import component
import Contact from "./Contact";
import Header from "./Header";
// import lotsOfData from '../components/DataAll';

const Peralatan = (props) => {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => {
    console.log(panel);
    setExpanded(panel);
  };

  return (
    <>
      {/* {lotsOfData.map((data, index) => ( */}
      <div
      //   key={index}
      >
        {/* Header */}
        <Accordion
          // expanded={expanded === data.id}
          // onChange={() => handleChange(data.id)}
          sx={{
            border: 0,
            bgcolor: "#f2f2f2",
            boxShadow: "0px 0px 6px #a1a1a1",
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
              Umum
            </Typography>
          </AccordionSummary>

          {/* isi */}
          <AccordionDetails style={{ color: "#fff" }}>...</AccordionDetails>
        </Accordion>
      </div>
      {/* ))} */}
    </>
  );
};

export default Peralatan;
