import { SetStateAction } from "react";
import secureFetch from "../SecureFetch/secureFetch.api";
import { mainEndPoint } from "../EndPoint/endpoint";
import { IConversationInfo } from "../../Schema/Conversation/conversation.schema";

const getInfoApi = async (
  token: string,
  convId: string,
  setConvInfo: React.Dispatch<
    React.SetStateAction<IConversationInfo | undefined>
  >
) => {
  const formData = {
    convId: convId,
  };
  const request = await secureFetch({
    url: `${mainEndPoint}/conv/info`,
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const response = await request.json();
  if (request.status == 200) {
    setConvInfo(response.data);
  }
};
export default getInfoApi;
