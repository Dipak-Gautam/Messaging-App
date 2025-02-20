import { IMessages } from "../Message/receivedMessage.schema";

export interface IConversationInfo {
  name: string;
  conversationType: string;
  participant: string[];
  message: IMessages;
}
