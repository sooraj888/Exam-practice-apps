import { Button, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { idText } from "typescript";

const PostList = ({ postData, selectedPost, setSelectedPost }: any) => {
  const navigate = useNavigate();
  const handleOnSelect = (item: any) => {
    navigate("/rawData", { state: item });
  };

  return (
    <div>
      {postData.length != 0 ? (
        postData?.[selectedPost - 1].map((item: any) => {
          return (
            <Box key={item?.objectID} className="list">
              <Box>{item?.title}</Box>
              <Box>{item?.author}</Box>
              <Box>{item?.url}</Box>
              <Box>{item?.created_at_i}</Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleOnSelect(item);
                  }}
                >
                  select
                </Button>
              </Box>
            </Box>
          );
        })
      ) : (
        <div>Loading....</div>
      )}
      <Pagination
        count={postData.length}
        page={selectedPost}
        onChange={(e: any, value: any) => {
          setSelectedPost(value);
        }}
      ></Pagination>
    </div>
  );
};

export default PostList;
