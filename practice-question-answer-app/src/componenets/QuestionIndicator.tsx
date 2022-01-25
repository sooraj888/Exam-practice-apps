import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import questionData from "./../questionData.json";

const QuestionIndicator = ({ id, answeredArray }: any) => {
  let answered = false;

  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-around" }}
    >
      {questionData.map((item: any) => {
        answered = answeredArray[item.id - 1].length != 0;
        console.log(answered);
        return (
          <Circle
            key={item.id}
            id={item.id}
            current={id == item.id}
            answered={answered}
          ></Circle>
        );
      })}
    </Box>
  );
};

export default QuestionIndicator;

const Circle = ({ current, answered, id }: any) => {
  return (
    <Link to={`/question/${id}`}>
      <Box
        sx={{
          bgcolor: answered ? "red" : "gray",
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: current ? "3px solid blue" : "",
          color: "white",
        }}
      >
        {id}
      </Box>
    </Link>
  );
};
