"use client";
import React from "react";
import BinarySearch from "./BinarySearch";
import LinearSearch from "./LinearSearch";

export default function Search({ params }) {
  console.log("pathanme", params);
  return (
    <div>
      {params?.search === "binary" && <BinarySearch />}
      {params?.search === "linear" && <LinearSearch />}
    </div>
  );
}
