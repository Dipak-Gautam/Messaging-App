import { useEffect, useRef, useState } from "react";
import getMessageApi from "../../../ApiService/Message/getMessagesApi";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../../../Schema/Store/store.schema";
import {
  IMessages,
  IReceivedMessage,
} from "../../../Schema/Message/receivedMessage.schema";
import MessageComponent from "../../../component/Conversation/MessageComponent";
import deactivateFlagApi from "../../../ApiService/Message/deactivateFlag.Api";

const ConversationContainer = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const token = useSelector((store: IStore) => store.token);
  const [convData, setConvData] = useState<IReceivedMessage>();
  const [loading, setLoading] = useState(true);
  const lastMessage = useRef("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!id || !token) return;
    const fetchMessages = () => {
      getMessageApi(token, id, setConvData, setLoading);
      deactivateFlagApi(token, id);
    };
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 2000);
    return () => clearInterval(intervalId);
  }, [id, token]);

  useEffect(() => {
    if (lastMessage.current == convData?.messages?.at(-1)?.message) {
      return;
    }
    lastMessage.current = convData?.messages.at(-1).message;
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [convData]);

  return (
    <div className="w-full h-[calc(100vh-150px)] flex flex-col border-red-400 p-2">
      {convData && (
        <div className="text-white w-full flex flex-col gap-3 flex-grow overflow-y-auto">
          {convData?.messages.map((item: IMessages) => (
            <MessageComponent data={item} key={item._id} />
          ))}

          <div ref={messagesEndRef}></div>
        </div>
      )}
    </div>
  );
};

export default ConversationContainer;
