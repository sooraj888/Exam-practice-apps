import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import InputPage from "./pages/InputPage";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InputPage></InputPage>}></Route>
      <Route
        path="countryDetails"
        element={<CountryDetails></CountryDetails>}
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
