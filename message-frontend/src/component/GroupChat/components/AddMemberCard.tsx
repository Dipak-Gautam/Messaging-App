import React from "react";
import { IRequestProp } from "../../../Schema/Request/addFriend.schema";
import { IoPersonAddOutline } from "react-icons/io5";

interface AddMemberCardProp {
  data: IRequestProp;
}

const AddMemberCard = ({ data }: AddMemberCardProp) => {
  return (
    <div
      className={`   border-1 border-gray-500 hover:shadow-md hover:shadow-white/50 p-2 px-4  rounded-2xl w-full text-white flex items-center justify-between gap-3 `}
    >
      <div>
        <div className="  p-2 text-lg w-12 h-12 bg-pink-500 flex justify-center items-center rounded-full">
          D
        </div>
      </div>
      <div className="flex-1 leading-6">
        <p className="m-0 p-0">{data.name}</p>
        <p className="m-0 p-0 text-slate-400">{data.email}</p>
      </div>
      <div
        className="flex gap-2  p-1 px-2 rounded-md bg-gPrimary font-semibold hover:border hover:border-gPrimary"
        // onClick={handleSend}
      >
        <IoPersonAddOutline size={20} />
        <div> Add Member</div>
      </div>
    </div>
  );
};

export default AddMemberCard;
