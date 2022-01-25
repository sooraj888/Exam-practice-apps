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
          bgcolor: "purple",
          width: "100%",
          margin: "10px",
          fontSize: "60px",
        }}
      >
        <Link to="/">
          <Box sx={{ color: "white" }}>Question App</Box>
        </Link>
      </Box>

      <Routes>
        <Route path="/" element={<CandidateInput></CandidateInput>}></Route>
        <Route path="question/:id" element={<Questions></Questions>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
