import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import SimpleDropDown from "../../DropDown/SimpleDropDown";
import { useDispatch, useSelector } from "react-redux";
import updateTaskApi from "../../../ApiService/Task/updateTaskApi";
import { IStore } from "../../../Schema/Store/store.schema";

const UpdateTaskModal = ({ ...props }) => {
  const status = useRef(props.data.status);
  const token = useSelector((store: IStore) => store.token);
  const dispatch = useDispatch();
  const reason = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    updateTaskApi(
      dispatch,
      token,
      props.data._id,
      status.current,
      props.onHide,
      props.setTask,
      reason.current?.value
    );
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="  flex flex-col border border-slate-600 bg-dark p-3 rounded-2xl gap-2 ">
          <div className="text-white font-semibold text-2xl text-center">
            {props.data.name}
          </div>
          <div className="text-slate-300 text-base text-center">
            {props.data.description}
          </div>
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="text-white font-medium text-xl">Status : </div>
            <div>
              <SimpleDropDown data={props.data} status={status} />
            </div>
          </div>
          <div className="w-[70%] mx-auto">
            <TextField
              inputRef={reason}
              multiline={true}
              label={"Reason"}
              variant="standard"
              fullWidth
              sx={{
                backgroundColor: "transparent",
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                  fontSize: 13,
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "white",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "white",
                },
                "& input::-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
                  WebkitTextFillColor: "white",
                  backgroundColor: "transparent !important",
                },
                "& input::-webkit-contacts-auto-fill-button": {
                  display: "none !important",
                },
              }}
              autoComplete="off"
            />
          </div>

          <div className="flex justify-center mt-3">
            <div
              className="text-white font-medium bg-gPrimary  p-1 px-2 rounded-lg w-[50%] text-center"
              onClick={() => handleSubmit()}
            >
              Submit
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateTaskModal;
