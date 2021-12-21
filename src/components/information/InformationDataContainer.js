import React, { useState } from "react";
import { Container } from "@mui/material";
import CapitalDatContainer from "./capitalInfo/CapitalDataContainer";
import WheatherInformation from "./WheatherInformation";

const InformationDataContainer = (props) => {
  const [countryCode, setCountryCode] = useState();

  return (
    <Container maxWidth="lg" className="main-container">
      <div className="inner-container">
        <div className="information-container">
          <CapitalDatContainer setCountryCode={setCountryCode} />
        </div>
        <div className="weather-container">
          {countryCode && <WheatherInformation countryCode={countryCode} />}
        </div>
      </div>
    </Container>
  );
};

export default InformationDataContainer;
