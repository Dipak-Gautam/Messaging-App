import React, { SetStateAction, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsChatSquareText } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../Modal/ConfirmModal";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

interface OffcanvasProp {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

const OffCanvasMenu = ({ show, setShow }: OffcanvasProp) => {
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const accepted = () => {
    localStorage.removeItem("token");
    setModalShow(false);
    navigate("/login");
  };

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{
          width: "250px",
        }}
      >
        <div className="bg-sDark flex-1 p-3 flex flex-col">
          <div className="text-white font-semibold text-base flex justify-between items-center pb-3 border-b">
            Cosmic Communication
            <div>
              <IoMdClose className="text-2xl" onClick={handleClose} />
            </div>
          </div>
          <div className="flex flex-1 flex-col my-3 gap-3 ">
            <div
              className={`p-2 px-4 rounded-full flex gap-3 items-center  bg-slate-800`}
              onClick={() => {
                navigate("/");
              }}
            >
              <BsChatSquareText className=" text-[#bdc0cb] hover:text-white text-xl" />
              <div className=" text-white font-medium ">Chats</div>
            </div>

            <div
              className={`p-2 px-4 rounded-full flex gap-3 items-center  bg-slate-800`}
              onClick={() => {
                navigate("home/task");
              }}
            >
              <FaTasks className=" text-[#bdc0cb] hover:text-white text-xl" />
              <div className=" text-white font-medium ">Tasks</div>
            </div>
          </div>

          <div className="flex   justify-between gap-4">
            <div
              className={`p-2 rounded-full  `}
              onClick={() => {
                navigate("home/setting");
              }}
            >
              <IoSettingsOutline
                className=" text-[#a2a5b1] hover:text-white"
                size={20}
              />
            </div>
            <FiLogOut
              className=" text-[#a2a5b1] hover:text-white"
              size={20}
              onClick={() => {
                setModalShow(true);
              }}
            />
          </div>
        </div>
      </Offcanvas>
      <ConfirmModal
        description="By clicking confirm all the session from this device will be destroyed"
        heading="Are you sure to logout?"
        accepted={accepted}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default OffCanvasMenu;
