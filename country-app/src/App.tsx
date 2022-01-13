import React, { useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import { Route, Routes } from "react-router-dom";
import CountryDetailse from "./components/CountryDetailse";

function App() {
  const [inputCountryName, setInputCountryName] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <InputForm
              inputCountryName={inputCountryName}
              setInputCountryName={setInputCountryName}
            ></InputForm>
          }
        ></Route>
        <Route
          path="countryPage"
          element={
            <CountryDetailse
              inputCountryName={inputCountryName}
            ></CountryDetailse>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
