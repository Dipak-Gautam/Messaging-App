import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { tokenAction } from "../store";

const getData = (
  navigate: NavigateFunction,
  dispatch: Dispatch<UnknownAction>
) => {
  let token = localStorage.getItem("token");
  let prev = localStorage.getItem("prevLogin");
  if (token != null) {
    dispatch(tokenAction.addToken(token));
    navigate("/home");
  } else {
    if (prev == null) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  }
};
export default getData;
