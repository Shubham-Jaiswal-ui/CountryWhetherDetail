import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";

const WheatherInformation = ({ countryCode }) => {
  const [information, setInformation] = useState({});
  useEffect(() => {
    const URL = `http://api.weatherstack.com/current?access_key=64d28e5bac7027b0e4e4d9b45f775ce8&query=${countryCode}`;
    axios
      .get(URL)
      .then((response) => setInformation(response.data))
      .catch((error) => console.log(error.message));
  }, [countryCode]);

  return (
    <>
      {countryCode && Object.values(information).length > 0 && (
        <Card className="wheather-card-container" sx={{ maxWidth: 200 }}>
          <CardMedia
            component="img"
            image={
              information.current.weather_icons ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt="green iguana"
          />

          <CardContent>
            <div className="region-text">
              <LocationOnRoundedIcon />
              <Typography variant="h6" color="textPrimary">
                {information.location.region}
              </Typography>
            </div>
            <div className="region-text">
              <ThermostatRoundedIcon />
              <Typography variant="h6" color="textPrimary">
                {information.current.temperature}
              </Typography>
            </div>
            <div className="population-tag">
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="div"
              >
                Wind Speed : &nbsp;
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="span"
                >
                  {information.current.wind_speed}
                </Typography>
              </Typography>
            </div>
            <div>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="div"
              >
                Precip :&nbsp;
                <Typography gutterBottom variant="h6" component="span">
                  {information.current.precip}
                </Typography>
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default WheatherInformation;
