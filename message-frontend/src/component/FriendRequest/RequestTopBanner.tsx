import { BsThreeDotsVertical } from "react-icons/bs";
import { TbMessage2Plus } from "react-icons/tb";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import SuggestOverLay from "../OverLay/SuggestOverLay";
import { useNavigate } from "react-router-dom";

const RequestTopBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-700 p-3 text-white flex justify-between">
      <div className="text-white text-lg font-semibold">Requests</div>
      <div className="flex justify-center items-center gap-3">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 250 }}
          overlay={SuggestOverLay("Add Chats", "bottom")}
        >
          <div onClick={() => navigate("/home/add-friend")}>
            <TbMessage2Plus
              size={25}
              className=" text-[#a2a5b1] hover:text-white "
            />
          </div>
        </OverlayTrigger>
        <BsThreeDotsVertical
          size={25}
          className=" text-[#a2a5b1] hover:text-white "
        />
      </div>
    </div>
  );
};

export default RequestTopBanner;
