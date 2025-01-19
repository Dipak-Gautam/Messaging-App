import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { tokenAction } from "../store";

const getData = (navigate: NavigateFunction) => {
  let prev = localStorage.getItem("prevLogin");
  if (prev == null) {
    navigate("/signup");
  } else {
    navigate("/login");
  }
};
export default getData;
