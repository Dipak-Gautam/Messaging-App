import React from "react";
import { IRequest } from "../../Schema/UserInfo/request.schema";
import { FaUserCheck } from "react-icons/fa";

interface RequestCardProp {
  data: IRequest;
}

const RequestCard = ({ data }: RequestCardProp) => {
  return (
    <div className="   border-1 border-gray-500 hover:shadow-md hover:shadow-white/50 p-2 px-4  rounded-2xl w-full text-white flex items-center justify-between gap-3 h-fit">
      <div>
        <div className="  p-2 text-lg w-12 h-12 bg-pink-500 flex justify-center items-center rounded-full">
          D
        </div>
      </div>
      <div className="flex-1 leading-6">
        <p className="m-0 p-0">{data.name}</p>
      </div>
      <div className="flex gap-2  p-1 px-2 rounded-md bg-gPrimary font-semibold hover:border hover:border-gPrimary">
        <FaUserCheck size={20} />
        <div>Accept</div>
      </div>
    </div>
  );
};

export default RequestCard;
