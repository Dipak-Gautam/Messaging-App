import { useSelector } from "react-redux";
import RequestTopBanner from "../../../component/FriendRequest/RequestTopBanner";
import { IStore } from "../../../Schema/Store/store.schema";
import RequestCard from "../../../component/FriendRequest/RequestCard";

const FriendRequest = () => {
  const userData = useSelector((store: IStore) => store.userInfo);

  return (
    <div className="flex flex-1 flex-col">
      <RequestTopBanner />
      <div className="flex  flex-1 gap-2 my-3 px-3">
        {userData?.requests?.map((item) => (
          <RequestCard data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default FriendRequest;
