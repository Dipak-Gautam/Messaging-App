import { IUserInfo } from "../UserInfo/userInfo.schema";

export interface IStore {
  token: string;
  userInfo: IUserInfo;
}
