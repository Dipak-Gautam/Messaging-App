import { sender } from "../Message/receivedMessage.schema";

export interface ITask {
  assigned: sender[];
  description: string;
  name: string;
  status:
    | "Not-Started"
    | "In-Progress"
    | "Partially-Completed"
    | "Completed"
    | "Stopped";
  _id: string;
}
