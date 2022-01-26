import {
  Box,
  FormControl,
  FormControlLabel,
  TextField,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CandidateInput = () => {
  const navigate = useNavigate();
  const handleOnFormSubmit = (e: any) => {
    console.log("submit ");
    e.preventDefault();
    navigate("/question/1");
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={handleOnFormSubmit}
    >
      <TextField required placeholder="Enter yur Name"></TextField>
      <FormControl>
        <RadioGroup>
          <FormControlLabel
            label={"male"}
            value={"male"}
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            label={"female"}
            value={"female"}
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            label={"others"}
            value={"others"}
            control={<Radio />}
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default CandidateInput;
