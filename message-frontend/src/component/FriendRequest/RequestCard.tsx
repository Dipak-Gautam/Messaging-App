import React from "react";
import { IRequest } from "../../Schema/UserInfo/request.schema";
import { FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import requestAcceptApi from "../../ApiService/Friends/requestAccept.api";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";

interface RequestCardProp {
  data: IRequest;
}

const RequestCard = ({ data }: RequestCardProp) => {
  const dispatch = useDispatch();
  const token = useSelector((store: IStore) => store.token);

  const handelAccept = () => {
    requestAcceptApi(token, dispatch, data.id);
  };

  return (
    <div className="   border-1 border-gray-500 hover:shadow-md hover:shadow-white/50 p-2 px-4  rounded-2xl w-full text-white flex items-center justify-between gap-3 h-fit">
      <div>
        <div className="  p-2 text-xs md:text-lg  w-10 h-10  md:w-12 md:h-12 bg-pink-500 flex justify-center items-center rounded-full">
          {data.name.slice(0, 1)}
        </div>
      </div>
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex-1 leading-6">
          <p className="m-0 p-0">{data.name}</p>
        </div>
        <div className="flex gap-3">
          <div
            className="flex gap-2 items-center  p-1 px-2 rounded-md bg-gPrimary font-semibold border-1 border-sDark hover:border hover:border-gPrimary"
            onClick={handelAccept}
          >
            <FaUserCheck className=" text-xl md:text-2xl" />
            <div className=" text-sm md:text-base">Accept</div>
          </div>
          <div className="flex gap-2   p-1 px-2 rounded-md bg-gray-600 font-semibold border-1 border-sDark hover:border hover:border-gray-600">
            <FaUserXmark className=" text-xl md:text-2xl" />
            <div className=" text-sm md:text-base">Reject</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
