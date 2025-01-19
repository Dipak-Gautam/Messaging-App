import { SetStateAction } from "react";
import secureFetch from "../SecureFetch/secureFetch.api";
import { userEndPoint } from "../EndPoint/endpoint";
import { IRequestProp } from "../../Schema/Request/addFriend.schema";

const getAllUser = async (
  token: string,
  setLoading: React.Dispatch<SetStateAction<boolean>>,
  setAllUser: React.Dispatch<React.SetStateAction<IRequestProp[]>>
) => {
  const request = await secureFetch({
    url: `${userEndPoint}/all`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
  });
  const response = await request.json();
  if (request.status == 200) {
    setAllUser(response.users);
  }
  setLoading(false);
};
export default getAllUser;
