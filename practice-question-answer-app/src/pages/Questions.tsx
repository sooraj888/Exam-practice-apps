import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextField,
  Radio,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Box, display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionIndicator from "../componenets/QuestionIndicator";
import questioData from "./../questionData.json";

const Questions = () => {
  let id: any = useParams().id;
  const navigate = useNavigate();

  if (!id) {
    id = 1;
  }

  const [answeredArray, setAnseweredArray] = useState<any>(
    Array(questioData.length).fill([])
  );

  const handleOnCheckBox = (value: any) => {
    setAnseweredArray((prev: any) => {
      const arr = [...prev];
      if (!arr[2].includes(value)) {
        arr[2] = [...arr[2], value];
      } else {
        arr[2] = arr[2].filter((item: any) => item != value);
      }
      return arr;
    });
  };

  useEffect(() => {
    console.log(answeredArray);
  }, [answeredArray]);

  return (
    <Box sx={{ width: "100%" }}>
      <QuestionIndicator
        id={id}
        answeredArray={answeredArray}
      ></QuestionIndicator>
      <Box sx={{ marginTop: "30px" }}>
        <h5 style={{ display: "inline", marginRight: "20px" }}>{id})</h5>
        {questioData[id - 1].question}
      </Box>

      {(() => {
        switch (id) {
          case "1":
            let arr1: any;
            return (
              <Box>
                <TextField
                  value={answeredArray[0]}
                  sx={{ padding: "10px" }}
                  onChange={(e: any) => {
                    setAnseweredArray((prev: any) => {
                      arr1 = [...prev];
                      arr1[0] = e.target.value;
                      return arr1;
                    });
                  }}
                ></TextField>
              </Box>
            );
          case "2":
            let arr2: any = questioData[1]?.options;
            return (
              <FormControl>
                <RadioGroup
                  value={answeredArray[1]}
                  onChange={(e: any) => {
                    setAnseweredArray((prev: any) => {
                      const arrUpdate = [...prev];
                      arrUpdate[1] = e.target.value;
                      return arrUpdate;
                    });
                  }}
                >
                  {arr2.map((item: any) => {
                    return (
                      <FormControlLabel
                        key={item}
                        value={item}
                        label={item}
                        control={<Radio />}
                      ></FormControlLabel>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            );
          case "3":
            let arr3: any = questioData?.[2]?.options;
            return (
              <FormControl>
                {arr3.map((item: any) => {
                  return (
                    <FormControlLabel
                      control={<Checkbox />}
                      value={item}
                      label={item}
                      key={item}
                      onChange={() => {
                        handleOnCheckBox(item);
                      }}
                    ></FormControlLabel>
                  );
                })}
              </FormControl>
            );
          case "4":
            let arr4: any = questioData?.[3].options;
            return (
              <FormControl>
                <RadioGroup
                  value={answeredArray[3]}
                  onChange={(e: any) => {
                    setAnseweredArray((prev: any) => {
                      const arrUpdate = [...prev];
                      arrUpdate[3] = e.target.value;
                      return arrUpdate;
                    });
                  }}
                >
                  {arr4.map((item: any) => {
                    return (
                      <FormControlLabel
                        key={item}
                        value={item}
                        label={item}
                        control={<Radio />}
                      ></FormControlLabel>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            );
          case "5":
            return <Box>5</Box>;

          default:
            return <Box>3</Box>;
        }
      })()}
      <Box
        sx={{
          margin: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ left: "60px", position: "absolute" }}
          onClick={() => {
            navigate(`/question/${Number(id) - 1}`);
          }}
          disabled={id <= 1}
        >
          Back
        </Button>
        <Button
          sx={{ right: "60px", position: "absolute" }}
          disabled={id >= 5}
          onClick={() => {
            navigate(`/question/${Number(id) + 1}`);
          }}
        >
          Next
        </Button>
      </Box>
      <Button
        disabled={id != 5}
        onClick={() => {
          navigate("/result", { state: answeredArray });
        }}
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
};

export default Questions;
