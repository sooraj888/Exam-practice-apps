import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PieChart from "../componenets/PieChart";
import questionData from "./../questionData.json";

const Result = () => {
  const localState: any = useLocation().state;
  let total = 0;

  const incrimentTotal = () => {
    total = total + 1;
  };

  return (
    <div>
      {questionData.map((item: any) => {
        item.id == 3
          ? JSON.stringify(localState[item.id - 1].sort()) ==
              JSON.stringify(item.answer.sort()) && incrimentTotal()
          : JSON.stringify(localState[item.id - 1]) ==
              JSON.stringify(item.answer) && incrimentTotal();
      })}
      <PieChart percentage={(total * 100) / 5}></PieChart>
    </div>
  );
};

export default Result;
