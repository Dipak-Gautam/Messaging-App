import ChatsMenu from "../../../component/HomeComponents/SubMenu/ChatsMenu";

const HomeScreen = () => {
  return (
    <>
      <div className="flex  flex-1 justify-center items-center bg-[#222e35]  h-full  w-full">
        <div className="text-white  hidden md:flex flex-col ">
          <div className="text-center font-bold leading-4">
            <p className="text-xl p-0 m-0">Welcome to </p>
            <p className="text-3xl">Cosmic communication</p>
          </div>
          <div className="text-center max-w-[70%] mx-auto">
            Innovative way to communicate. Connect to yor friends seamlessly and
            effectively. share task, ideas , documents and many more
          </div>
        </div>
        <div className=" flex-1 h-full  md:hidden ">
          <ChatsMenu />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
