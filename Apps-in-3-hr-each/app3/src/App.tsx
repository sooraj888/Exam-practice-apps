import React, { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import RawData from "./pages/RawData";
import NotFound from "./pages/NotFound";

function App() {
  let count = 0;
  const [postData, setPostData] = useState<any>([]);
  const [selectedPost, setSelectedPost] = useState<number>(1);
  const fetchDataFromApi = async () => {
    try {
      const responce = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=bar&page=${count}`
      );

      if (responce?.data) {
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
  return (
    <Box className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PostList
              postData={postData}
              selectedPost={selectedPost}
              setSelectedPost={setSelectedPost}
            ></PostList>
          }
        ></Route>
        <Route path="/rawData" element={<RawData />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
