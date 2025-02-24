import { IoPersonAddOutline } from "react-icons/io5";
import { IRequestProp } from "../../Schema/Request/addFriend.schema";
import addFriendApi from "../../ApiService/Friends/addFriend.api";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
interface PeopleCardProp {
  data: IRequestProp;
}

const PeopleCard = ({ data }: PeopleCardProp) => {
  const token = useSelector((store: IStore) => store.token);
  const dispatch = useDispatch();
  const userInfo = useSelector((store: IStore) => store.userInfo);

  const handleSend = () => {
    addFriendApi(token, userInfo.name, data._id, dispatch, data.photo);
  };

  return (
    <>
      <div
        className={`   border-1 border-gray-500 hover:shadow-md hover:shadow-white/50 p-2 md:px-4  rounded-2xl w-full text-white flex items-center justify-between gap-3 ${
          data._id == userInfo._id && "hidden"
        }`}
      >
        <div>
          <div className="hidden md:flex  p-2 text-lg w-12 h-12 bg-pink-500 justify-center items-center rounded-full">
            D
          </div>
        </div>
        <div className="flex-1 leading-6">
          <p className="m-0 p-0 text-xs md:text-base">{data.name}</p>
          <p className="m-0 p-0 text-slate-400 text-[8px] md:text-base">
            {data.email}
          </p>
        </div>
        <div
          className="flex gap-2  p-1 px-2 rounded-md bg-gPrimary font-semibold hover:border hover:border-gPrimary text-xs md:text-base"
          onClick={handleSend}
        >
          <IoPersonAddOutline className=" text-lg md:text-2xl" />
          <div> Send Request</div>
        </div>
      </div>
    </>
  );
};

export default PeopleCard;
