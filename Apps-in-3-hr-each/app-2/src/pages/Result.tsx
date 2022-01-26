import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PieChart from "../componenets/PieChart";
import questionData from "./../questionData.json";

const Result = () => {
  const localState: any = useLocation().state;
  let total = 0;

  const incrimentTotal = () => {
    total = total + 1;
  };

  questionData.map((item: any) => {
    item.id == 4
      ? JSON.stringify(localState[item.id - 1].sort()) ==
          JSON.stringify(item?.answer.sort()) && incrimentTotal()
      : JSON.stringify(localState[item.id - 1]) ==
          JSON.stringify(item.answer) && incrimentTotal();
  });

  return (
    <div>
      <p>
        You got <b>{total}</b>/5
      </p>
      <PieChart percentage={(total * 100) / 5}></PieChart>
    </div>
  );
};

export default Result;
