import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import axios from "axios";

function App() {
  let count = 0;
  const [postData, setPostData] = useState<any>([]);

  const fetchDataFromApi = async () => {
    try {
      const responce = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=bar&page=${count}`
      );

      if (responce) {
        setPostData((prev: any) => [...prev, responce?.data?.hits]);
      }
    } catch (e) {
    } finally {
    }
    count += 1;
  };

  useEffect(() => {
    fetchDataFromApi();
    setInterval(fetchDataFromApi, 10000);
  }, []);

  useMemo(() => {
    console.log(postData);
  }, [postData]);
  return <Box className="App"></Box>;
}

export default App;
