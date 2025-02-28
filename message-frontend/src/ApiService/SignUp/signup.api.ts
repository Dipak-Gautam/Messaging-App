import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { ISignUpProp } from "../../Schema/Signup/signup.schema";
import secureFetch from "../SecureFetch/secureFetch.api";
import { userEndPoint } from "../EndPoint/endpoint";
import asyncStorage from "../../Functions/localStorage/SaveToken";
import { tokenAction } from "../../store";
import { NavigateFunction } from "react-router-dom";

const signupApi = async (
  signUpData: ISignUpProp,
  dispatch: Dispatch<UnknownAction>,
  navigate: NavigateFunction
) => {
  const formData = {
    name: signUpData.name,
    mobile: signUpData.phone,
    email: signUpData.email,
    password: signUpData.password,
  };
  const request = await secureFetch({
    url: `${userEndPoint}/signup`,
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
export default signupApi;
