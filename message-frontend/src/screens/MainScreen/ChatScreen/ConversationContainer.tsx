import { useEffect, useState } from "react";
import getMessageApi from "../../../ApiService/Message/getMessagesApi";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../../../Schema/Store/store.schema";
import {
  IMessages,
  IReceivedMessage,
} from "../../../Schema/Message/receivedMessage.schema";
import MessageComponent from "../../../component/Conversation/MessageComponent";

const ConversationContainer = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const token = useSelector((store: IStore) => store.token);
  const [convData, setConvData] = useState<IReceivedMessage>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !token) return;
    const fetchMessages = () => {
      getMessageApi(token, id, setConvData, setLoading);
    };
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 2000);
    return () => clearInterval(intervalId);
  }, [id, token]);

  return (
    <div className="w-full h-full flex p-2">
      {convData && (
        <div className="text-white w-full flex flex-col gap-3 justify-end">
          {convData.messages.map((item: IMessages) => (
            <MessageComponent data={item} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConversationContainer;
