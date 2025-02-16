import { OverlayTrigger } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import SuggestOverLay from "../OverLay/SuggestOverLay";
import { useState } from "react";
import AddTaskModal from "../../screens/MainScreen/Task/Components/AddTaskModal";

const TaskBanner = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="bg-slate-700 p-3 text-white flex justify-between">
        <div className="text-white text-lg font-semibold">Tasks</div>
        <div className="flex justify-center items-center gap-3">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 250 }}
            overlay={SuggestOverLay("Add Task", "bottom")}
          >
            <div onClick={() => setModalShow(true)}>
              <RiMenuAddLine size={25} />
            </div>
          </OverlayTrigger>

          <div>
            <input
              type="text"
              className="bg-slate-800 rounded-lg  placeholder:text-slate-300 text-base  text-white pl-3 pt-1 pb-1 pr-1 w-56"
              placeholder=" search"
            />
          </div>
          <div className="flex justify-center items-center   gap-1 p-2 px-3 bg-gPrimary rounded-lg hover:bg-[#31c09f] cursor-pointer">
            <MdSearch />
            <p className=" text-center  my-auto text-xs">Search</p>
          </div>
        </div>
      </div>
      <AddTaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default TaskBanner;
