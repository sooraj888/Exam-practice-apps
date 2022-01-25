import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const localState: any = useLocation().state;

  return (
    <div>
      {localState.map((item: any) => {
        return <div>{JSON.stringify(item)}</div>;
      })}
    </div>
  );
};

export default Result;
