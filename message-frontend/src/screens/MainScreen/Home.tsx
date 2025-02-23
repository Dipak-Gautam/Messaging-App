import { Outlet } from "react-router-dom";
import MainNav from "../../component/HomeComponents/MainNav";
import ChatsMenu from "../../component/HomeComponents/SubMenu/ChatsMenu";

const Home = () => {
  return (
    <div className="flex  h-screen w-[100vw] bg-dark ">
      <div className=" hidden md:flex w-20 bg-slate-800">
        <MainNav />
      </div>
      <div className=" hidden md:flex md:w-72 lg:w-96 ">
        <ChatsMenu />
      </div>
      <div className=" flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
