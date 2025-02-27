import { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import getInfoApi from "../../ApiService/GroupChat/getInfo.api";
import { useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
import { IConversationInfo } from "../../Schema/Conversation/conversation.schema";
import { IoArrowBack } from "react-icons/io5";
import { PiFileArrowUpBold } from "react-icons/pi";
import FileSend from "../FileSend/FileSend";

const TopBanner = () => {
  const location = useLocation();
  const token = useSelector((store: IStore) => store.token);
  const { name } = location.state || {};
  const { id } = location.state || {};
  const [convInfo, setConvInfo] = useState<IConversationInfo>();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (id == null) return;
    getInfoApi(token, id, setConvInfo);
  }, [id]);

  return (
    <>
      <div className="bg-slate-800 p-3 md:p-4 md:px-5 flex justify-between gap-3 md:gap-4 items-center">
        <div className="bg-pink-500  rounded-full w-8 h-8 md:w-10 md:h-10  justify-center items-center hidden md:flex text-white font-semibold">
          {name.slice(0, 1)}
        </div>
        <div>
          <IoArrowBack
            className=" text-white text-xl"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="flex-1">
          <div className="text-white text-sm md:text-base font-medium">
            {name}
          </div>
          <div className="text-slate-200 text-[10px] md:text-xs">
            Click here for contact info
          </div>
        </div>
        <div className="flex gap-2 md:gap-4">
          <PiFileArrowUpBold
            className="text-gray-400 text-lg md:text-3xl hover:text-gray-300"
            onClick={() => setModalShow(true)}
          />
          <HiDotsVertical
            className="text-gray-400 text-lg md:text-3xl"
            onClick={() => {
              convInfo?.conversationType == "group" &&
                navigate("/home/add-member", { state: { convInfo: convInfo } });
            }}
          />
        </div>
      </div>
      <FileSend
        show={modalShow}
        onHide={() => setModalShow(false)}
        convId={id}
      />
    </>
  );
};

export default TopBanner;
