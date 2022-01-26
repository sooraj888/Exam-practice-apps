import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import CandidateInput from "./pages/CandidateInput";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";
import { Box } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          background: "coral",
          padding: "20px 0px",
          width: "100%",

          fontSize: "30px",
          color: "white",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Question And Answer App
        </Link>
      </Box>
      <Routes>
        <Route path="/" element={<CandidateInput />}></Route>
        <Route path="/question/:id" element={<Questions />}></Route>
        <Route path="result" element={<Result />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
