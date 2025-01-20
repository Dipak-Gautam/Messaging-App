import { TbMessage2Plus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";

const ChatMenuTopBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white text-xl font-bold flex justify-between w-full px-4 items-center p-2 border-b ">
      <div>Chats</div>
      <div className="flex gap-3">
        <div onClick={() => navigate("/home/friend-request")}>
          <IoMdPersonAdd
            size={25}
            className=" text-[#a2a5b1] hover:text-white "
          />
        </div>
        <div onClick={() => navigate("/home/add-friend")}>
          <TbMessage2Plus
            size={25}
            className=" text-[#a2a5b1] hover:text-white "
          />
        </div>
      </div>
    </div>
  );
};

export default ChatMenuTopBanner;
