import { mainEndPoint } from "../EndPoint/endpoint";
import secureFetch from "../SecureFetch/secureFetch.api";

const deactivateFlagApi = async (token: string, convId: string) => {
  const formData = {
    convId: convId,
  };
  const request = await secureFetch({
    url: `${mainEndPoint}/conv/deactivate`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
};
export default deactivateFlagApi;
