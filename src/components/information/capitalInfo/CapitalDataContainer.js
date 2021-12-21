import React, { useEffect, useState } from "react";
import InformationData from "./InformationData";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const CapitalDatContainer = ({ setCountryCode }) => {
  let { country } = useParams();
  const [information, setInformation] = useState([]);

  useEffect(() => {
    const URL = `https://restcountries.com/v2/name/${country}`;
    axios
      .get(URL)
      .then((response) => setInformation(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      {!information.length ? (
        <CircularProgress />
      ) : (
        information.map((info, key) => {
          return (
            <InformationData
              setCountryCode={setCountryCode}
              key={key}
              information={info}
            />
          );
        })
      )}
    </>
  );
};

export default CapitalDatContainer;
