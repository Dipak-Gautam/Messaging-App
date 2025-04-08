import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ConfirmModal = ({ ...props }) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="  flex flex-col border border-slate-600 bg-dark p-3 rounded-2xl gap-2 ">
        <div className="text-center text-white text-xl font-semibold">
          {props.heading}
        </div>
        <div className="text-xs text-white text-center">
          {props.description}
        </div>
        <div className="flex justify-end gap-4 mt-3">
          <Button variant="danger" onClick={props.accepted}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
