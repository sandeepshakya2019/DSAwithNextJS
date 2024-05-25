"use client";
import React from "react";
import LinearSearchTheory from "./LinearSearchTheory";
import LinearSearchAlgo from "./LinearSearchAlgo";

function LinearSearch() {
  return (
    <div>
      <LinearSearchTheory />
      <br />
      <LinearSearchAlgo
        array={[1, 4, 5, 2, 3, 11, 22, 77, 55, 44]}
        searchelement={23}
        cases={"Worst Case"}
      />
      <LinearSearchAlgo
        array={[1, 4, 5, 2, 3, 11, 22, 77, 55, 44]}
        searchelement={1}
        cases={"Best Case"}
      />
      <LinearSearchAlgo
        array={[1, 4, 5, 2, 3, 11, 22, 77, 55, 44]}
        searchelement={77}
        cases={"Average Case"}
      />
    </div>
  );
}

export default LinearSearch;
