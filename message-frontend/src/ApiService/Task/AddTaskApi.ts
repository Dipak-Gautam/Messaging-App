import { IAddTaskProp } from "../../Schema/Task/AddTask.schema";
import secureFetch from "../SecureFetch/secureFetch.api";
import { mainEndPoint } from "../EndPoint/endpoint";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

const addTaskApi = async (
  data: IAddTaskProp,
  token: string,
  dispatch: Dispatch<UnknownAction>
) => {
  const formData = {
    name: data.name,
    description: data.description ? data.description : undefined,
    assigned: {
      id: "12345",
      name: data.assigned,
    },
    status: "Not-Started",
  };
  const request = await secureFetch({
    url: `${mainEndPoint}/task/add`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  return request;
};
export default addTaskApi;
