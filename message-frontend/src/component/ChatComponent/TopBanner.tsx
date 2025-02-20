import { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import getInfoApi from "../../ApiService/GroupChat/getInfo.api";
import { useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
import { IConversationInfo } from "../../Schema/Conversation/conversation.schema";

const TopBanner = () => {
  const location = useLocation();
  const token = useSelector((store: IStore) => store.token);
  const { name } = location.state || {};
  const { id } = location.state || {};
  const [convInfo, setConvInfo] = useState<IConversationInfo>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id == null) return;
    getInfoApi(token, id, setConvInfo);
  }, [id]);

  console.log("conversation", convInfo);

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
        <HiDotsVertical
          size={25}
          className="text-gray-400"
          onClick={() => {
            convInfo?.conversationType == "group" &&
              navigate("/home/add-member");
          }}
        />
      </div>
    </div>
  );
};

export default TopBanner;
