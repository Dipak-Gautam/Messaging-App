import { useSelector } from "react-redux";
import RequestTopBanner from "../../../component/FriendRequest/RequestTopBanner";
import { IStore } from "../../../Schema/Store/store.schema";
import RequestCard from "../../../component/FriendRequest/RequestCard";
import { FaUserSlash } from "react-icons/fa6";

const FriendRequest = () => {
  const userData = useSelector((store: IStore) => store.userInfo);

  return (
    <div className="flex flex-1 flex-col h-full ">
      <RequestTopBanner />
      {userData && userData.requests.length != 0 ? (
        <div className="flex flex-col  flex-1 gap-2 my-3 px-3">
          {userData?.requests?.map((item) => (
            <RequestCard data={item} key={item._id} />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col  justify-center items-center text-white ">
          <FaUserSlash className="text-7xl text-white" />
          <div className="my-3 text-xl ">No Request found</div>
        </div>
      )}
    </div>
  );
};

export default FriendRequest;
