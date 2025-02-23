import { useDispatch, useSelector } from "react-redux";
import PeopleList from "../PeopleList/PeopleList";
import ChatMenuTopBanner from "./ChatMenuTopBanner";
import { IStore } from "../../../Schema/Store/store.schema";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../../ApiService/UserInfo/getUserInfo.spi";
import { useEffect } from "react";

const ChatsMenu = () => {
  const userInfo = useSelector((store: IStore) => store.userInfo);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    const interval = setInterval(() => {
      getUserInfo(token, dispatch);
    }, 2000);

    return () => clearInterval(interval);
  }, [token, dispatch]);
  return (
    <>
      <div className="w-full h-full px-3 md:px-0  p-2 py-4 bg-[#2d3031]">
        <ChatMenuTopBanner />
        <div className="mt-2 px-2">
          {userInfo?.conversations?.map((item) => (
            <div
              onClick={() =>
                navigate("/home/chats", {
                  state: { id: item.id, name: item.name },
                })
              }
              className={`my-3 `}
              key={item.id}
            >
              <PeopleList
                message={item.message}
                name={item.name}
                active={item.activeFlag}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatsMenu;
