import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import InformationDataContainer from "./information/InformationDataContainer";
import MainContainer from "./countrySelection/MainContainer";

const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<MainContainer />} />
        <Route
          exact
          path="/home/:country"
          element={<InformationDataContainer />}
        />
        <Route exact path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default AppRouting;
