import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import InputPage from "./pages/InputPage";

function App() {
  // const location = useLocation().state;
  return (
    <Routes>
      <Route path="/" element={<InputPage></InputPage>}></Route>
      <Route path="countryDetails" element={<div></div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
