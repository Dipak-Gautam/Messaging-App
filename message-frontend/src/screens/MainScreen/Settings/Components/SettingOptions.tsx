import React from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import { IStore } from "../../../../Schema/Store/store.schema";

const SettingOptions = () => {
  const userData = useSelector((store: IStore) => store.userInfo);

  return (
    <div className=" p-3">
      <div className="justify-center flex items-center gap-3 border-b pb-3 mb-3 border-white">
        <HiMiniUserCircle className="text-8xl text-slate-300" />
        <div className="text-2xl text-slate-100 font-medium">
          {userData.name}
        </div>
      </div>
      <div className="mx-10 flex flex-col gap-4">
        <div className="flex text-slate-200 items-center gap-4 border-b border-slate-400 p-2 hover:text-white hover:border-white text-lg hover:text-xl cursor-pointer">
          <HiMiniUserCircle className="text-4xl" />
          <div className="font-medium"> Account</div>
        </div>

        <div className="flex text-slate-200 items-center gap-4 border-b border-slate-400 p-2 hover:text-white hover:border-white text-lg hover:text-xl cursor-pointer">
          <MdOutlineMarkUnreadChatAlt className="text-3xl" />
          <div className=" font-medium"> Chats</div>
        </div>

        <div className="flex text-slate-200 items-center gap-4 border-b border-slate-400 p-2 hover:text-white hover:border-white text-lg hover:text-xl cursor-pointer">
          <IoIosNotificationsOutline className="text-4xl" />
          <div className="font-medium"> Notification</div>
        </div>

        <div className="flex  items-center gap-4 border-b border-slate-400 p-2 text-red-600  cursor-pointer">
          <MdLogout className="text-4xl" />
          <div className="text-lg font-medium ">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default SettingOptions;
