import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CountryDetails from "./pages/CountryDetails";
import InputCountryName from "./pages/InputCountryName";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InputCountryName></InputCountryName>}></Route>
        <Route
          path="countryDetails"
          element={<CountryDetails></CountryDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
