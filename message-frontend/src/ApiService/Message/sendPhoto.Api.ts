import { mainEndPoint } from "../EndPoint/endpoint";

const sendPhotoApi = async (
  token: string,
  convId: string,
  senderId: string,
  senderName: string,
  photo: string
) => {
  const formData = new FormData();
  formData.append("convId", convId);
  formData.append("type", "photo");
  formData.append("status", "visible");
  formData.append("senderId", senderId);
  formData.append("senderName", senderName);
  formData.append("photo", photo);

  const request = await fetch(`${mainEndPoint}/conv/photo`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
};
export default sendPhotoApi;
