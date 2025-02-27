import React from "react";
import { FaChevronDown } from "react-icons/fa";
interface PeopleListProp {
  name: string;
  message: string;
  active: boolean;
  photo?: string | null;
}

const PeopleList = ({ name, message, active, photo }: PeopleListProp) => {
  return (
    <div
      className={`  hover:shadow-md hover:shadow-white/20  p-2 rounded-lg flex  justify-between gap-3 hover:bg-sDark cursor-pointer ${
        active
          ? "   border-3 border-blue-800 text-gray-200"
          : " border  border-slate-400 text-gray-400"
      }`}
    >
      <div>
        <div className="bg-pink-500  rounded-full w-10 h-10 flex justify-center items-center text-white font-semibold">
          {name.slice(0, 1)}
        </div>
      </div>
      <div className="flex-1">
        <div
          className={`text-white text-base  ${
            active ? "font-bold" : "font-medium"
          }`}
        >
          {name}
        </div>
        <div
          className={`  ${
            active
              ? "font-bold text-slate-100 text-sm"
              : "text-slate-200 text-xs"
          }`}
        >
          {message}
        </div>
      </div>
      <div className="flex flex-col items-center  gap-1">
        <div className=" text-xs">Today</div>
        <div>
          <FaChevronDown size={15} />
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
