import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import secureFetch from "../SecureFetch/secureFetch.api";
import { mainEndPoint } from "../EndPoint/endpoint";
import { modalAction } from "../../store";

const createGroupApi = async (
  token: string,
  dispatch: Dispatch<UnknownAction>,
  groupName: string,
  onHide: any
) => {
  const formData = { groupName: groupName };
  const request = await secureFetch({
    url: `${mainEndPoint}/conv/group-chat`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  if (request.status == 200) {
    onHide();
    dispatch(
      modalAction.showModal({
        type: "success",
        title: "Group created sucessfully",
      })
    );
  } else {
    onHide();
    dispatch(
      modalAction.showModal({ type: "error", title: "Please try again" })
    );
  }
};
export default createGroupApi;
