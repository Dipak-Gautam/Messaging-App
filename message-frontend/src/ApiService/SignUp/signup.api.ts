import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { ISignUpProp } from "../../Schema/Signup/signup.schema";
import secureFetch from "../SecureFetch/secureFetch.api";
import { userEndPoint } from "../EndPoint/endpoint";

const signupApi = async (
  signUpData: ISignUpProp,
  dispatch: Dispatch<UnknownAction>
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
  console.log("request", request);
};
export default signupApi;
