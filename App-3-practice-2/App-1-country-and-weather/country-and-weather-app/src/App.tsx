import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import CountryDetails from "./pages/CountryDetails";
import CountryInput from "./pages/CountryInput";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Link to="/">Country and Weather App</Link>
      <Routes>
        <Route path="/" element={<CountryInput></CountryInput>} />
        <Route path="/countryDetails" element={<CountryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
