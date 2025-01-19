import React from "react";
import { FaChevronDown } from "react-icons/fa";
interface PeopleListProp {
  name: string;
  message: string;
  photo?: string | null;
}

const PeopleList = ({ name, message, photo }: PeopleListProp) => {
  return (
    <div className=" border border-slate-400 hover:shadow-md hover:shadow-white/20  p-2 rounded-lg flex my-3 justify-between gap-3 hover:bg-dark cursor-pointer">
      <div>
        <div className="bg-pink-500  rounded-full w-10 h-10 flex justify-center items-center">
          D
        </div>
      </div>
      <div className="flex-1">
        <div className="text-white text-base font-medium">{name}</div>
        <div className="text-slate-200 text-xs">{message}</div>
      </div>
      <div className="flex flex-col items-center  gap-1">
        <div className="text-gray-400 text-xs">Today</div>
        <div>
          <FaChevronDown size={15} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
