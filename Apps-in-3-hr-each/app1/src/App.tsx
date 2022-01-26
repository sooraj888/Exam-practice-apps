import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import InputCountry from "./pages/InputCountry";
import CountryDetails from "./pages/CountryDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Link className="title" to="/">
        Country Weather App
      </Link>
      <Routes>
        <Route path="/" element={<InputCountry></InputCountry>}></Route>
        <Route
          path="/countryDetails"
          element={<CountryDetails></CountryDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
