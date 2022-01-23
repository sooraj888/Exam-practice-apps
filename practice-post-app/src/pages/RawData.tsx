import { Button } from "@mui/material";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const RawData = () => {
  const localtState: any = useLocation().state;
  const navigate = useNavigate();
  if (!localtState) {
    return <>No Raw Data Found</>;
  }
  return (
    <div className="pages">
      <div>
        <h1>
          <b>Raw Data</b>
        </h1>
      </div>
      <p> {JSON.stringify(localtState)}</p>
      <Button onClick={() => navigate("/")} variant="contained">
        back
      </Button>
    </div>
  );
};

export default RawData;
