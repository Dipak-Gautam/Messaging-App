import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { modalAction } from "../../store";
import { MdError } from "react-icons/md";
const MessageModal = () => {
  const modalData = useSelector((store: IStore) => store.modal);
  const dispatch = useDispatch();

  const handleClicked = () => {
    dispatch(modalAction.hideModal());
  };

  return (
    <Modal
      show={modalData.display}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="  flex flex-col border border-slate-600 bg-dark p-3 rounded-2xl gap-4 ">
        <div className="text-center text-white  font-semibold items-center">
          {modalData.type == "success" && (
            <div className="flex items-center justify-center gap-3">
              <IoCheckmarkDoneCircle
                size={35}
                className="text-green-500 bg-white p-0  rounded-full"
              />
              <p className="my-auto text-2xl text-green-500 font-bold">
                Success
              </p>
            </div>
          )}
          {modalData.type == "error" && (
            <div className="flex items-center justify-center gap-3">
              <MdError
                size={35}
                className="text-red-500 bg-white p-0  rounded-full"
              />
              <p className="my-auto text-2xl text-red-500 font-bold">Error !</p>
            </div>
          )}
        </div>
        <div className="text-lg text-white text-center">{modalData.title}</div>
        <div className="flex justify-center ">
          <Button variant="success" className="w-32" onClick={handleClicked}>
            Ok
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MessageModal;
