import React from "react";
import { TbMessage2Plus } from "react-icons/tb";
import PeopleList from "../PeopleList/PeopleList";

const ChatsMenu = () => {
  return (
    <div className="w-full h-full   p-2 py-4 bg-[#2d3031]">
      <div className="text-white text-xl font-bold flex justify-between w-full px-4 items-center p-2 border-b ">
        <div>Chats</div>
        <div>
          <TbMessage2Plus
            size={25}
            className=" text-[#a2a5b1] hover:text-white "
          />
        </div>
      </div>
      <div className="mt-2 px-2">
        <PeopleList message="Hello from Dipak" name="Dipak Gautam" />
        <PeopleList message="Hi" name="Mamata Bihene" />
        <PeopleList message="Please call me" name="Ram Bahadur" />
        <PeopleList message="Ka xa kanxa" name="Milan Dai" />
      </div>
    </div>
  );
};

export default ChatsMenu;
