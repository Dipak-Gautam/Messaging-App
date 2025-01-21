import React, { SetStateAction } from "react";
import { mainEndPoint } from "../EndPoint/endpoint";
import secureFetch from "../SecureFetch/secureFetch.api";

const sendMessageApi = async (
  token: string,
  convId: string,
  senderId: string,
  senderName: string,
  message: string,
  setMessageStatus: React.Dispatch<
    React.SetStateAction<"sending" | "sent" | "error">
  >
) => {
  setMessageStatus("sending");
  const formData = {
    convId: convId,
    message: {
      type: "message",
      status: "visible",
      sender: {
        id: senderId,
        name: senderName,
      },
      message: message,
    },
  };

  const request = await secureFetch({
    url: `${mainEndPoint}/conv`,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Barer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  if (request.status == 200) {
    setMessageStatus("sent");
  } else {
    setMessageStatus("error");
  }
};
export default sendMessageApi;
