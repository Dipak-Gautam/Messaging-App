import React from "react";
import { IoMdSend } from "react-icons/io";

const SendMessageContainer = () => {
  return (
    <div className="text-white mb-2 px-4  p-2 flex items-center gap-5">
      <div className="flex-1">
        <input
          type="text"
          className=" w-full bg-slate-600 p-2 rounded-lg"
          placeholder="Enter message"
        />
      </div>
      <div className="">
        <IoMdSend size={30} className="text-green-400 hover:text-green-500" />
      </div>
    </div>
  );
};

export default SendMessageContainer;
