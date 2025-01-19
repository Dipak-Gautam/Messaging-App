import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { tokenAction } from "../../store";

const getToken = (dispatch: Dispatch<UnknownAction>) => {
  let token = localStorage.getItem("token");
  if (token != null) {
    dispatch(tokenAction.addToken(token));
  }
};
export default getToken;
