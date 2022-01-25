import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CandidateInput = () => {
  const navigate = useNavigate();

  const [candidateName, setCandidateName] = useState("");

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    navigate("/question/1");
  };

  return (
    <FormControl
      sx={{
        display: "flex",
        alignItems: "center",
        width: "300px",
        height: "300px",
        border: "1px solid black",
      }}
      component="form"
      onSubmit={handleOnSubmit}
    >
      <TextField
        sx={{ padding: "20px" }}
        placeholder="Enter your name"
        value={candidateName}
        required
        onChange={(e) => {
          setCandidateName(e.target.value);
        }}
      ></TextField>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </FormControl>
  );
};

export default CandidateInput;

{
  /* <FormControl>
        <FormLabel id="radio-group">Gender</FormLabel>
        <RadioGroup aria-labelledby="radio-group" defaultValue="feamle">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel label={"male"} control={<Radio />} value={"male"} />
          <FormControlLabel
            label={"others"}
            value={"others"}
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl> */
}
