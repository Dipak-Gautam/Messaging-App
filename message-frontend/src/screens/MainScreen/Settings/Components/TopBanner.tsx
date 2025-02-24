import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-800 p-4 md:px-5 flex justify-between gap-4 items-center">
      <div className="text-white text-base font-medium flex gap-3">
        <div>
          <IoArrowBack
            className=" text-white text-xl md:hidden"
            onClick={() => navigate("/")}
          />
        </div>
        Settings
      </div>
    </div>
  );
};

export default TopBanner;
