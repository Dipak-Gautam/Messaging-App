import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { mainEndPoint } from "../EndPoint/endpoint";
import secureFetch from "../SecureFetch/secureFetch.api";
import { modalAction } from "../../store";

const addFriendApi = async (
  token: string,
  name: string,
  id: string,
  dispatch: Dispatch<UnknownAction>,
  photo?: string
) => {
  const formData = {
    name: name,
    photo: photo ? photo : null,
    searchId: id,
  };
  const request = await secureFetch({
    url: `${mainEndPoint}/request`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const response = await request.json();
  if (request.status == 200) {
    dispatch(
      modalAction.showModal({
        type: "success",
        title: "Request send sucessfully",
      })
    );
  }
};
export default addFriendApi;
