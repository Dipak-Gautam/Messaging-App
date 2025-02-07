import { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import sendMessageApi from "../../../ApiService/Message/sendMessageApi";
import { useSelector } from "react-redux";
import { IStore } from "../../../Schema/Store/store.schema";
import { useLocation } from "react-router-dom";

const SendMessageContainer = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const messageRef = useRef<HTMLInputElement | null>(null);
  const token = useSelector((store: IStore) => store.token);
  const userInfo = useSelector((store: IStore) => store.userInfo);
  const [messageStatus, setMessageStatus] = useState<
    "sending" | "sent" | "error"
  >("sending");

  const handleSend = () => {
    if (messageRef.current == null || messageRef.current.value == "") return;
    sendMessageApi(
      token,
      id,
      userInfo._id,
      userInfo.name,
      messageRef.current.value,
      setMessageStatus
    );
    messageRef.current.value = "";
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="text-white mb-2 px-4  p-2 flex items-center gap-5">
      <div className="flex-1">
        <input
          ref={messageRef}
          type="text"
          className=" w-full bg-slate-600 p-2 rounded-lg text-base md:text-lg"
          placeholder="Enter message"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="" onClick={handleSend}>
        <IoMdSend size={30} className="text-green-400 hover:text-green-500" />
      </div>
    </div>
  );
};

export default SendMessageContainer;
