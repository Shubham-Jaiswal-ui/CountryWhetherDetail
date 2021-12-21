import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import WbCloudyRoundedIcon from "@mui/icons-material/WbCloudyRounded";
import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const InformationData = ({ information, setCountryCode }) => {
  return (
    <>
      {Object.values(information).length && (
        <Card className="card-container" sx={{ maxWidth: 200 }}>
          <CardMedia
            className="media"
            component="img"
            image={
              information.flags.svg ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
          />

          <CardContent>
            <div className="overlay">
              <div className="capital-text">
                <LocationOnRoundedIcon />
                <Typography variant="h6" color="textPrimary">
                  {information.capital}
                </Typography>
              </div>

              <Button
                style={{ color: "black" }}
                size="small"
                onClick={() => setCountryCode(information.capital)}
              >
                <WbCloudyRoundedIcon />
              </Button>
            </div>
            <div className="population-tag">
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="div"
              >
                Population : &nbsp;
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="span"
                >
                  {information.population}
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
                Latlng :&nbsp;
                <Typography gutterBottom variant="h6" component="span">
                  {information.latlng.map((data, key) => {
                    return <span key={key}>{data}&nbsp;</span>;
                  })}
                </Typography>
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default InformationData;
