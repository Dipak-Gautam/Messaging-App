import React, { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import createGroupApi from "../../ApiService/GroupChat/createGroup.api";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";

const GroupChat = ({ ...props }) => {
  const groupName = useRef<HTMLInputElement>(null);
  const token = useSelector((store: IStore) => store.token);
  const dispatch = useDispatch();

  const onConfirm = () => {
    if (groupName.current == null) return;
    createGroupApi(token, dispatch, groupName.current.value, props.onHide);
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="  flex flex-col border border-slate-600 bg-dark p-3 rounded-2xl gap-2 ">
        <div className="text-center text-white text-xl font-semibold">
          Create Group Chat
        </div>
        <div className="flex text-white w-full gap-3 my-3 px-4">
          <div className="text-lg font-medium">Group Name:</div>
          <div className="flex   flex-1">
            <input
              ref={groupName}
              type="text"
              className=" flex-1 p-1 px-2 rounded-lg bg-slate-600"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-3">
          <Button variant="danger" onClick={onConfirm}>
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

export default GroupChat;
