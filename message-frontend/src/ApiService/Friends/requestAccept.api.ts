import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { mainEndPoint } from "../EndPoint/endpoint";
import secureFetch from "../SecureFetch/secureFetch.api";
import { modalAction } from "../../store";
import getUserInfo from "../UserInfo/getUserInfo.spi";

const requestAcceptApi = async (
  token: string,
  dispatch: Dispatch<UnknownAction>,
  id: string
) => {
  const formData = {
    id: id,
  };
  const request = await secureFetch({
    url: `${mainEndPoint}/request/accept`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  if (request.status == 200) {
    getUserInfo(token, dispatch);
    dispatch(
      modalAction.showModal({ title: "Request accepted", type: "success" })
    );
  } else {
    dispatch(
      modalAction.showModal({ title: "Some thing went wrong", type: "error" })
    );
  }
};
export default requestAcceptApi;
