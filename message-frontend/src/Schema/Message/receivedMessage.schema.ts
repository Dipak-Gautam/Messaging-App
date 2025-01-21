interface sender {
  id: string;
  name: string;
}

export interface IMessages {
  message: string;
  status: "visible" | "hidden";
  type: string;
  _id: string;
  sender: sender;
}

export interface IReceivedMessage {
  messages: any;
  _id: string;
}
