import { TbMessage2Plus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import SuggestOverLay from "../../OverLay/SuggestOverLay";
import { MdGroupAdd } from "react-icons/md";
import { useState } from "react";
import GroupChat from "../../GroupChat/GroupChat";
import { GiHamburgerMenu } from "react-icons/gi";
import OffCanvasMenu from "./OffCanvasMenu";

const ChatMenuTopBanner = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="text-white text-xl font-bold flex justify-between w-full  items-center p-2 border-b ">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <GiHamburgerMenu onClick={handleShow} />
          </div>
          Chats
        </div>
        <div className="flex gap-3">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 250 }}
            overlay={SuggestOverLay("Requests", "bottom")}
          >
            <div onClick={() => navigate("/home/friend-request")}>
              <IoMdPersonAdd
                size={25}
                className=" text-[#a2a5b1] hover:text-white "
              />
            </div>
          </OverlayTrigger>

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

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 250 }}
            overlay={SuggestOverLay("Create Group chat", "bottom")}
          >
            <div onClick={() => setModalShow(true)}>
              <MdGroupAdd
                size={25}
                className=" text-[#a2a5b1] hover:text-white "
              />
            </div>
          </OverlayTrigger>
        </div>
      </div>
      <GroupChat show={modalShow} onHide={() => setModalShow(false)} />
      <OffCanvasMenu show={show} setShow={setShow} />
    </>
  );
};

export default ChatMenuTopBanner;
