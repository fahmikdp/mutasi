import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import Hitomi from "../img/hitomi.jpg";

export default function Cards() {
  return (
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
              Nikita Mirzani
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
              Perempuan
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
  );
}
