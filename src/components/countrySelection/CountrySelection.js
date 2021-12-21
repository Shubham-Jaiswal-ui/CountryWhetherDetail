import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Paper, Typography } from "@mui/material";
import useStyles from "./style";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const CountrySelection = () => {
  const classes = useStyles();
  const history = useNavigate();
  const [data, setData] = useState({
    country: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    history(`/home/${data.country}`);
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root} `}
        onSubmit={handleSubmit}
      >
        <TextField
          name="country"
          variant="outlined"
          label="Enter Country"
          fullWidth
          placeholder="Enter Country"
          value={data.country}
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />
        <Button
          className={`${classes.buttonSubmit}`}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default CountrySelection;
