import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { LuUserRoundSearch } from "react-icons/lu";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddFriendBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-700 p-3 text-white flex justify-between">
      <div className="text-white text-lg font-semibold flex gap-2 items-center">
        <div>
          <IoArrowBack
            className=" text-white text-xl md:hidden"
            onClick={() => navigate("/")}
          />
        </div>
        Add Friends
      </div>
      <div className="hidden md:flex justify-center items-center gap-3">
        <LuUserRoundSearch size={25} />
        <div>
          <input
            type="text"
            className="bg-slate-800 rounded-lg  placeholder:text-slate-300 text-base  text-white pl-3 pt-1 pb-1 pr-1 w-56"
            placeholder=" search"
          />
        </div>
        <div className="flex justify-center items-center   gap-1 p-2 px-3 bg-gPrimary rounded-lg hover:bg-[#31c09f] cursor-pointer">
          <MdSearch />
          <p className=" text-center  my-auto text-xs">Search</p>
        </div>
      </div>
    </div>
  );
};

export default AddFriendBanner;
