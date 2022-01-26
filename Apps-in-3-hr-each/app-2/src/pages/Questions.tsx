import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Button,
  TextField,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionIndicator from "../componenets/QuestionIndicator";
import questionData from "./../questionData.json";
import NotFound from "./NotFound";

const Questions = () => {
  const [answerArray, setAnswerArray] = useState<any>(
    Array(questionData.length).fill([])
  );

  const navigate = useNavigate();
  let id: any = useParams().id;
  if (!id) {
    id = 1;
  }

  const handleOnCheckBox = (value: any) => {
    setAnswerArray((prev: any) => {
      const updatedArray = [...prev];
      if (!updatedArray[3].includes(value)) {
        updatedArray[3] = [...updatedArray[3], value];
      } else {
        updatedArray[3] = updatedArray[3].filter((item: any) => {
          return item != value;
        });
      }
      return updatedArray;
    });
  };

  useMemo(() => {
    console.log(answerArray);
  }, [answerArray]);

  if (id > 5) {
    return <div>Question not found</div>;
  }
  return (
    <Box sx={{ width: "100%" }}>
      <QuestionIndicator answerArray={answerArray} id={id}></QuestionIndicator>
      <p>{questionData?.[id - 1].question}</p>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px",
        }}
      >
        {(() => {
          switch (id) {
            case "1":
              return (
                <TextField
                  value={answerArray[0]}
                  onChange={(e: any) => {
                    setAnswerArray((prev: any) => {
                      const updateArray = [...prev];
                      updateArray[0] = e.target.value;
                      return updateArray;
                    });
                  }}
                ></TextField>
              );
            case "2":
              const optionsArray = questionData?.[1]?.option;
              return (
                <Box className="option">
                  <RadioGroup
                    value={answerArray[1]}
                    onChange={(e: any) => {
                      setAnswerArray((prev: any) => {
                        const updatedArray = [...prev];
                        updatedArray[1] = e.target.value;
                        return updatedArray;
                      });
                    }}
                  >
                    {optionsArray?.map((item: any) => {
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
                </Box>
              );
            case "3":
              const optionsArray3 = questionData?.[2]?.option;
              return (
                <Box className="option">
                  <RadioGroup
                    value={answerArray[2]}
                    onChange={(e: any) => {
                      setAnswerArray((prev: any) => {
                        const updatedArray = [...prev];
                        updatedArray[2] = e.target.value;
                        return updatedArray;
                      });
                    }}
                  >
                    {optionsArray3?.map((item: any) => {
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
                </Box>
              );
            case "4":
              const optionArray4: any = questionData?.[3]?.option;
              return (
                <FormGroup className="options">
                  {optionArray4.map((item: any) => {
                    return (
                      <FormControlLabel
                        key={item}
                        control={<Checkbox />}
                        label={item}
                        value={item}
                        onChange={() => {
                          handleOnCheckBox(item);
                        }}
                        checked={answerArray[3].includes(item)}
                      ></FormControlLabel>
                    );
                  })}
                </FormGroup>
              );
            case "5":
              return <Box></Box>;

            default:
              return <Box></Box>;
          }
        })()}
      </Box>
      <Box>
        <Button
          sx={{ left: "40px", position: "absolute" }}
          disabled={id <= 1}
          onClick={() => {
            navigate(`/question/${Number(id) - 1}`);
          }}
        >
          Back
        </Button>
        <Button
          disabled={id >= 5}
          sx={{ right: "40px", position: "absolute" }}
          onClick={() => {
            navigate(`/question/${Number(id) + 1}`);
          }}
        >
          Next
        </Button>
      </Box>
      <Button
        onClick={() => {
          navigate("/result", { state: answerArray });
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Questions;
