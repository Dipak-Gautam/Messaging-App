import { IConversation } from "./conversation.schema";
import { IRequest } from "./request.schema";

export interface IUserInfo {
  conversations: IConversation[];
  email: string;
  friends: any;
  mobile: string;
  name: string;
  requests: IRequest[];
  _id: string;
}
