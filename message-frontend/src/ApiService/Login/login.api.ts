import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

import secureFetch from "../SecureFetch/secureFetch.api";
import { userEndPoint } from "../EndPoint/endpoint";
import { ILoginProp } from "../../Schema/Login/login.schema";
import asyncStorage from "../../Functions/localStorage/SaveToken";
import { tokenAction } from "../../store";
import { NavigateFunction } from "react-router-dom";

const loginApi = async (
  loginData: ILoginProp,
  dispatch: Dispatch<UnknownAction>,
  navigate: NavigateFunction
) => {
  const formData = {
    email: loginData.email,
    password: loginData.password,
  };
  const request = await secureFetch({
    url: `${userEndPoint}/login`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const response = await request.json();
  if (request.status == 200) {
    asyncStorage(response.token);
    dispatch(tokenAction.addToken(response.token));
    navigate("/home");
  }
};
export default loginApi;
