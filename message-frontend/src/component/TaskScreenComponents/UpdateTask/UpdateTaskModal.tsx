import { TextField } from "@mui/material";
import { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import SimpleDropDown from "../../DropDown/SimpleDropDown";

const UpdateTaskModal = ({ ...props }) => {
  const reason = useRef("");
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
              <SimpleDropDown data={props.data} />
            </div>
          </div>
          <div className="w-[70%] mx-auto">
            <TextField
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
            <div className="text-white font-medium bg-gPrimary  p-1 px-2 rounded-lg w-[50%] text-center">
              Submit
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateTaskModal;
