import { Box } from "@mui/system";
import React from "react";

const PieChart = ({ percentage }: any) => {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        background: `conic-gradient(green ${percentage}%,red 0%)`,
        width: 200,
        height: 200,
        bgcolor: "red",
      }}
    ></Box>
  );
};

export default PieChart;
