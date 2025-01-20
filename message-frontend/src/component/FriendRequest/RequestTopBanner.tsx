import { BsThreeDotsVertical } from "react-icons/bs";
import { TbMessage2Plus } from "react-icons/tb";

const RequestTopBanner = () => {
  return (
    <div className="bg-slate-700 p-3 text-white flex justify-between">
      <div className="text-white text-lg font-semibold">Requests</div>
      <div className="flex justify-center items-center gap-3">
        <TbMessage2Plus
          size={25}
          className=" text-[#a2a5b1] hover:text-white "
        />
        <BsThreeDotsVertical
          size={25}
          className=" text-[#a2a5b1] hover:text-white "
        />
      </div>
    </div>
  );
};

export default RequestTopBanner;
