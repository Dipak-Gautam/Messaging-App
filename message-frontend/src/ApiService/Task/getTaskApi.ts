import secureFetch from "../SecureFetch/secureFetch.api";
import { mainEndPoint } from "../EndPoint/endpoint";
import { ITask } from "../../Schema/Task/task.schema";

const getTaskApi = async (
  token: string,
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const request = await secureFetch({
    url: `${mainEndPoint}/task`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
  });
  const response = await request.json();
  if (request.status == 200) {
    setTask(response);
  }
  setLoading(false);
};
export default getTaskApi;
