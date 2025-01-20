import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { tokenAction } from "../../store";
import getUserInfo from "../../ApiService/UserInfo/getUserInfo.spi";

const getToken = (dispatch: Dispatch<UnknownAction>) => {
  let token = localStorage.getItem("token");
  if (token != null) {
    getUserInfo(token, dispatch);
    dispatch(tokenAction.addToken(token));
  }
};
export default getToken;
