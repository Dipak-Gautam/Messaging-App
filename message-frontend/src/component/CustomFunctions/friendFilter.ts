import { IRequestProp } from "../../Schema/Request/addFriend.schema";
import { IConversation } from "../../Schema/UserInfo/conversation.schema";

function excludeElements(arr1: IRequestProp[], arr2: IConversation[]) {
  const excludeNames = new Set(arr2.map((item) => item.name));
  return arr1.filter((item) => !excludeNames.has(item.name));
}

export default excludeElements;
