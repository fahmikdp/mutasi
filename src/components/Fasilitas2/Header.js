import * as React from "react";
import { Typography, Grid } from "@mui/material";

export default function Header(props) {
  return (
    <>
      {/* sakit */}
      <Grid item xs={2} style={{ display: "flex", flexDirection: "column" }}>
        <Typography>
          <b>Sakit</b>
        </Typography>
        <Typography>{props.sakit}</Typography>
      </Grid>

      {/* izin */}
      <Grid item xs={2} style={{ display: "flex", flexDirection: "column" }}>
        <Typography>
          <b>Izin</b>
        </Typography>
        <Typography>{props.izin}</Typography>
      </Grid>

      {/* alpa */}
      <Grid item xs={2} style={{ display: "flex", flexDirection: "column" }}>
        <Typography>
          <b>Alpa</b>
        </Typography>
        <Typography>{props.alpa}</Typography>
      </Grid>
    </>
  );
}
