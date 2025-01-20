import { IConversation } from "./conversation.schema";
import { IRequest } from "./request.schema";

export interface IUserInfo {
  conversation: IConversation[];
  email: string;
  friends: any;
  mobile: string;
  name: string;
  requests: IRequest[];
  _id: string;
}
