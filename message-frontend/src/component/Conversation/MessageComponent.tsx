import { useSelector } from "react-redux";
import { IMessages } from "../../Schema/Message/receivedMessage.schema";
import { IStore } from "../../Schema/Store/store.schema";
interface MessageComponent {
  data: IMessages;
}

const MessageComponent = ({ data }: MessageComponent) => {
  const userInfo = useSelector((store: IStore) => store.userInfo);

  return (
    <>
      {data.type == "message" ? (
        <div
          className={`  max-w-[60%] w-fit text-lg ${
            userInfo._id == data.sender.id ? "self-end" : "self-start"
          } mx-4 `}
        >
          <div
            className={` ${
              userInfo._id == data.sender.id ? "bg-green-600" : "bg-indigo-500"
            } rounded-xl p-2 px-3 break-words `}
          >
            <p className="p-0 m-0 my-auto max-w-[700px]">{data.message}</p>
          </div>
          <p
            className={`text-slate-500 text-xs  m-0 p-0 mt-1 ${
              userInfo._id == data.sender.id ? "text-right" : "text-left"
            }`}
          >
            {data.sender.name}
          </p>
        </div>
      ) : (
        <div
          className={`max-w-[50%] w-fit text-lg ${
            userInfo._id === data.sender.id ? "self-end" : "self-start"
          } mx-4`}
        >
          <img
            src={`data:image/png;base64,${data.message}`}
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
    </>
  );
};

export default MessageComponent;
