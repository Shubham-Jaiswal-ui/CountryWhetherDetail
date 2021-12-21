import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import CountrySelection from "./CountrySelection";

const MainContainer = () => {
  return (
    <Container maxWidth="lg" className="main-container">
      <Grid container spacing={2}>
        <Grid container direction="column" alignItems="center" item xs={12}>
          <CountrySelection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContainer;
