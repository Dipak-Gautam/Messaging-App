import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { IoMdCloseCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
import sendPhotoApi from "../../ApiService/Message/sendPhoto.Api";
const SendPhotoModal = ({ ...props }) => {
  const token = useSelector((store: IStore) => store.token);
  const userInfo = useSelector((store: IStore) => store.userInfo);
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressedImage = canvas.toDataURL("image/jpeg", 0.7);
            setImage(compressedImage);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = () => {
    if (image == null) return;
    sendPhotoApi(token, props.id, userInfo._id, userInfo.name, image);
    setImage(null);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="overflow-hidden  "
      style={{ padding: "20px" }}
    >
      <div className="bg-dark  rounded-xl flex flex-col p-3 gap-4">
        <div
          onClick={props.onHide}
          className=" absolute -top-9 bg-white rounded-full right-0"
        >
          <IoMdCloseCircle className="text-red-500 font-bold text-3xl " />
        </div>
        <div className=" text-white font-bold text-2xl text-center border-b-2 pb-2 ">
          Choose a picture
        </div>

        <div className="  flex flex-col justify-center items-center gap-3">
          {image && <img src={image} alt="Selected" className=" w-36" />}
          <label className="flex flex-col items-center justify-center w-36 h-10 bg-gray-700 text-white font-medium rounded-lg cursor-pointer hover:bg-gray-600 transition">
            <span>Choose Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <div
          className="p-2 bg-green-600 rounded-lg text-white font-bold text-base text-center"
          onClick={handleSend}
        >
          Send
        </div>
      </div>
    </Modal>
  );
};

export default SendPhotoModal;
