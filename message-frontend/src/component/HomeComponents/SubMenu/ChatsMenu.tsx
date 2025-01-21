import { useSelector } from "react-redux";
import PeopleList from "../PeopleList/PeopleList";
import ChatMenuTopBanner from "./ChatMenuTopBanner";
import { IStore } from "../../../Schema/Store/store.schema";
import { useNavigate } from "react-router-dom";

const ChatsMenu = () => {
  const userInfo = useSelector((store: IStore) => store.userInfo);
  const navigate = useNavigate();
  return (
    <div className="w-full h-full   p-2 py-4 bg-[#2d3031]">
      <ChatMenuTopBanner />
      <div className="mt-2 px-2">
        {userInfo?.conversations?.map((item) => (
          <div
            onClick={() => navigate("/home/chats")}
            className="my-3 "
            key={item.id}
          >
            <PeopleList message={item.id} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatsMenu;
