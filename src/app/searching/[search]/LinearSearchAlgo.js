import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

function LinearSearchAlgo({ array, searchelement, cases }) {
  const [index, setIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState("Please click on Start algo button");
  const [disbalebutton, setDisableButton] = useState(false);

  function startAlgo() {
    const id = setInterval(() => {
      setDisableButton(true);
      setIndex((prev) => {
        console.log("Start algo", prev);
        if (array[prev] === searchelement) {
          setErrorMsg("Element found on index: " + prev);
          setIndex(0);
          clearInterval(id);
          setDisableButton(false);

          return;
        }
        if (prev === array.length - 1 || prev >= array.length) {
          setErrorMsg("Array Traversed Element Not Found");
          setIndex(0);
          clearInterval(id);
          setDisableButton(false);

          return;
        } else {
          setIndex(prev + 1);
        }
      });
    }, 1000);
  }
  return (
    <Box
      component="section"
      sx={{ p: 2, border: "1px dashed grey", mb: "2px" }}
    >
      <code>{cases}</code>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={startAlgo}
          disabled={disbalebutton}
        >
          Start
        </Button>
        <Typography variant="h6">
          {array ? (
            <div>
              {array.map((el, i) => {
                return (
                  <span
                    style={{
                      margin: "5px",
                      padding: "2px",
                    }}
                    className={i === index ? "red" : ""}
                  >
                    {el}
                  </span>
                );
              })}
            </div>
          ) : (
            "Please Enter the Array"
          )}
        </Typography>
        <Typography variant="h6">
          {searchelement !== null ? (
            <span>
              Search Key :{" "}
              <span
                style={{
                  border: "1px solid green",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              >
                {searchelement}
              </span>
            </span>
          ) : (
            <span>Please Enter the Search Key</span>
          )}
        </Typography>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="subtitle1" sx={{ color: "green" }}>
            {`Searching Element on Index ${index || "0"} (Elem : ${
              array[index]
            }) === ${searchelement}`}
          </Typography>
        </div>
      </div>
      <div>
        <Typography variant="h6" sx={{ color: "red" }}>
          {errorMsg}
        </Typography>
      </div>
    </Box>
  );
}

export default LinearSearchAlgo;
