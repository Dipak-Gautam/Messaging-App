import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { mainEndPoint } from "../EndPoint/endpoint";
import secureFetch from "../SecureFetch/secureFetch.api";
import { modalAction } from "../../store";
import { ITask } from "../../Schema/Task/task.schema";

const updateTaskApi = async (
  dispatch: Dispatch<UnknownAction>,
  token: string,
  id: string,
  status:
    | "Not-Started"
    | "In-Progress"
    | "Partially-Completed"
    | "Completed"
    | "Stopped",
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>,
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>,
  reason?: string
) => {
  const formData = {
    id: id,
    status: status,
    reason: reason ? reason : undefined,
  };
  const request = await secureFetch({
    url: `${mainEndPoint}/task/status`,
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const response = await request.json();
  if (request.status == 200) {
    setModalShow(false);
    setTask(response.data);
    dispatch(
      modalAction.showModal({
        title: "task updated sucessfully",
        type: "Success",
      })
    );
  }
};

export default updateTaskApi;
