import { Outlet } from "react-router-dom";
import MainNav from "../../component/HomeComponents/MainNav";
import ChatsMenu from "../../component/HomeComponents/SubMenu/ChatsMenu";
import ChatScreen from "./ChatScreen/ChatScreen";

const Home = () => {
  return (
    <div className="flex  h-screen w-[100vw] bg-dark">
      <div className=" w-20 bg-slate-800">
        <MainNav />
      </div>
      <div className="w-96 ">
        <ChatsMenu />
      </div>
      <div className="flex flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
