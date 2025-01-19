import React from "react";
import { LuUserRoundSearch } from "react-icons/lu";
import { MdSearch } from "react-icons/md";

const AddFriendBanner = () => {
  return (
    <div className="bg-slate-700 p-3 text-white flex justify-between">
      <div className="text-white text-lg font-semibold">Add Friends</div>
      <div className="flex justify-center items-center gap-3">
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
