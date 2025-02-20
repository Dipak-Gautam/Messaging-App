import { mainEndPoint } from "../EndPoint/endpoint";
import secureFetch from "../SecureFetch/secureFetch.api";

const addMemberApi = async (
  token: string,
  convId: string,
  memberId: string,
  groupName: string
) => {
  const formData = {
    convId: convId,
    memberId: memberId,
    groupName: groupName,
  };

  const request = await secureFetch({
    url: `${mainEndPoint}/conv/add-member`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
};

export default addMemberApi;
