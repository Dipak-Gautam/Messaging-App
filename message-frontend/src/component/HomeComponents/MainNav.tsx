import React from "react";
import { BsChatSquareText } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../Modal/ConfirmModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import SuggestOverLay from "../OverLay/SuggestOverLay";

const MainNav = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  const accepted = () => {
    localStorage.removeItem("token");
    setModalShow(false);
    navigate("/login");
  };

  return (
    <div className="flex justify-between flex-1  text-center  h-full w-full">
      <div className=" flex flex-col justify-between  w-full  my-5  ">
        <div className=" flex  flex-col items-center gap-5">
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 250 }}
            overlay={SuggestOverLay("Chats", "right")}
          >
            <div className="p-2 rounded-full bg-slate-600">
              <BsChatSquareText
                size={23}
                className=" text-[#a2a5b1] hover:text-white "
              />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 250 }}
            overlay={SuggestOverLay("Tasks", "right")}
          >
            <div className="p-2 rounded-full ">
              <FaTasks className=" text-[#a2a5b1] hover:text-white" size={23} />
            </div>
          </OverlayTrigger>
        </div>
        <div className="flex  flex-col items-center gap-4">
          <div
            className="p-2 rounded-full "
            onClick={() => navigate("home/setting")}
          >
            <IoSettingsOutline
              className=" text-[#a2a5b1] hover:text-white"
              size={23}
            />
          </div>
          <FiLogOut
            className=" text-[#a2a5b1] hover:text-white"
            size={25}
            onClick={() => {
              setModalShow(true);
            }}
          />
        </div>
      </div>

      <ConfirmModal
        description="By clicking confirm all the session from this device will be destroyed"
        heading="Are you sure to logout?"
        accepted={accepted}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default MainNav;
