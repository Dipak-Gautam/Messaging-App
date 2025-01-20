import { IUserInfo } from "../UserInfo/userInfo.schema";
import { IMessageModalProp } from "./modalStore.schema";

export interface IStore {
  token: string;
  userInfo: IUserInfo;
  modal: IMessageModalProp;
}
