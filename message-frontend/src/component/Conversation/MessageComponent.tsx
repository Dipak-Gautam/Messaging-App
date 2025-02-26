import { useSelector } from "react-redux";
import { IMessages } from "../../Schema/Message/receivedMessage.schema";
import { IStore } from "../../Schema/Store/store.schema";
import { LuAudioLines } from "react-icons/lu";
import { IoPlay } from "react-icons/io5";
import { MdOutlineFolderZip } from "react-icons/md";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { useState } from "react";
import AudioPlay from "../AudioMessage/AudioPlay";

interface MessageComponent {
  data: IMessages;
}

const MessageComponent = ({ data }: MessageComponent) => {
  const userInfo = useSelector((store: IStore) => store.userInfo);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {data.type == "message" && (
        <div
          className={`  max-w-[60%] w-fit text-lg ${
            userInfo._id == data.sender.id ? "self-end" : "self-start"
          } mx-2 md:mx-4 `}
        >
          <div
            className={` ${
              userInfo._id == data.sender.id ? "bg-green-600" : "bg-indigo-500"
            } rounded-xl p-2 px-3 break-words `}
          >
            <p className="p-0 m-0 my-auto max-w-[700px] text-xs md:text-xl">
              {data.message}
            </p>
          </div>
          <p
            className={`text-slate-500 text-[10px] md:text-xs  m-0 p-0 md:mt-1 ${
              userInfo._id == data.sender.id ? "text-right" : "text-left"
            }`}
          >
            {data.sender.name}
          </p>
        </div>
      )}
      {data.type == "photo" && (
        <div
          className={`max-w-[50%] w-fit text-lg ${
            userInfo._id === data.sender.id ? "self-end" : "self-start"
          } mx-4`}
        >
          <img
            src={`${data.message}`}
            alt="Sent Content"
            className="rounded-xl max-w-full h-auto"
          />
          <p
            className={`text-slate-500 text-xs m-0 p-0 mt-1 ${
              userInfo._id === data.sender.id ? "text-right" : "text-left"
            }`}
          >
            {data.sender.name}
          </p>
        </div>
      )}
      {data.type == "audio" && (
        <div
          className={`  max-w-[60%] w-fit text-lg ${
            userInfo._id == data.sender.id ? "self-end" : "self-start"
          } mx-2 md:mx-4 `}
          onClick={() => {
            setModalShow(true);
          }}
        >
          <div
            className={` ${
              userInfo._id == data.sender.id ? "bg-green-600" : "bg-indigo-500"
            } rounded-xl p-2 px-3 break-words `}
          >
            <p className="p-0 m-0 my-auto max-w-[700px] text-xs md:text-2xl flex">
              <IoPlay />
              <LuAudioLines /> <LuAudioLines /> <LuAudioLines />
              <LuAudioLines /> <LuAudioLines /> <LuAudioLines />
            </p>
          </div>
          <p
            className={`text-slate-500 text-[10px] md:text-xs  m-0 p-0 md:mt-1 ${
              userInfo._id == data.sender.id ? "text-right" : "text-left"
            }`}
          >
            {data.sender.name}
          </p>
        </div>
      )}
      {data.type == "file" && (
        <div
          className={`  max-w-[60%] w-fit text-lg ${
            userInfo._id == data.sender.id ? "self-end" : "self-start"
          } mx-2 md:mx-4 `}
        >
          <div
            className={` ${
              userInfo._id == data.sender.id ? "bg-green-600" : "bg-indigo-500"
            } rounded-xl p-2 px-3 break-words `}
          >
            <p className="p-0 m-0 my-auto max-w-[700px] text-xs md:text-2xl flex items-center gap-2">
              <MdOutlineDownloadForOffline className=" text-xl md:text-5xl text-gray-400" />
              <MdOutlineFolderZip className=" text-2xl md:text-7xl" />
            </p>
          </div>
          <p
            className={`text-slate-500 text-[10px] md:text-xs  m-0 p-0 md:mt-1 ${
              userInfo._id == data.sender.id ? "text-right" : "text-left"
            }`}
          >
            {data.sender.name}
          </p>
        </div>
      )}
      <AudioPlay
        show={modalShow}
        onHide={() => setModalShow(false)}
        fileId={data.fileId}
      />
    </>
  );
};

export default MessageComponent;
