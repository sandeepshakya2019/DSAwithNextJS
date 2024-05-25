import { Box, Typography } from "@mui/material";
import React from "react";

function LinearSearchTheory() {
  return (
    <div>
      {" "}
      <Typography variant="h5" sx={{ mb: 2 }}>
        LinearSearch :{" "}
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Key Point About Linear Search
      </Typography>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        <code>
          for(i = 0 to arr.length - 1) :
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{`check arr[i] == key return true`}
          <br />
          loop complete means key element not present return false
        </code>
        <br />
        <br />
        <code>
          Overall time Complexity is O(n) and space complexity is O(1)
          <br />
          Best Case : When First element is key element then T.C. is O(1)
          <br />
          Worst Case : When First element is key element then T.C. is O(n)
        </code>
        <br />
        <br />
        <code>
          Linear Search can be used to implement as (Case Study) :
          <br />
          1) To Find Min and Max in an Array
          <br />
          2) To Search the element in specific range <br />
          3) To Count the Even and Odd Number <br />
          4) To serch the element in 2D Array <br />
          5) To count the no of digits
        </code>
      </Box>
    </div>
  );
}

export default LinearSearchTheory;
