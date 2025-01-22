import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
import { useLocation } from "react-router-dom";

const TopBanner = () => {
  const location = useLocation();
  const { name } = location.state || {};
  return (
    <div className="bg-slate-800 p-4 px-5 flex justify-between gap-4 items-center">
      <div className="bg-pink-500  rounded-full w-10 h-10 flex justify-center items-center">
        D
      </div>

      <div className="flex-1">
        <div className="text-white text-base font-medium">{name}</div>
        <div className="text-slate-200 text-xs">
          Click here for contact info
        </div>
      </div>
      <div>
        <HiDotsVertical size={25} className="text-gray-400" />
      </div>
    </div>
  );
};

export default TopBanner;
