import { IReceivedMessage } from "../../Schema/Message/receivedMessage.schema";

import { mainEndPoint } from "../EndPoint/endpoint";
import secureFetch from "../SecureFetch/secureFetch.api";

const getMessageApi = async (
  token: string,
  convId: string,
  setConvData: React.Dispatch<
    React.SetStateAction<IReceivedMessage | undefined>
  >,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const formData = {
    convId: convId,
  };
  const request = await secureFetch({
    url: `${mainEndPoint}/conv/message`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const response = await request.json();
  if (request.status == 200) {
    setConvData(response);
  }
  setLoading(false);
};
export default getMessageApi;
