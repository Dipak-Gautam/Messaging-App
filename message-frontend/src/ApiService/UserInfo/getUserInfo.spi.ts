import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import secureFetch from "../SecureFetch/secureFetch.api";
import { userEndPoint } from "../EndPoint/endpoint";
import { userInfoAction } from "../../store";

const getUserInfo = async (
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  const request = await secureFetch({
    url: `${userEndPoint}/profile`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
  });
  const response = await request.json();
  if (request.status == 200) {
    dispatch(userInfoAction.addUserInfo(response.data));
  }
};
export default getUserInfo;
