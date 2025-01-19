import React, { useEffect, useState } from "react";
import AddFriendBanner from "../../../component/AddFriends/AddFriendBanner";
import { useSelector } from "react-redux";
import { IStore } from "../../../Schema/Store/store.schema";
import getAllUser from "../../../ApiService/Friends/getAllUser.api";
import { Spinner } from "react-bootstrap";
import { TfiFaceSad } from "react-icons/tfi";
import { IRequestProp } from "../../../Schema/Request/addFriend.schema";
import PeopleCard from "../../../component/AddFriends/PeopleCard";

const AddFriends = () => {
  const token = useSelector((store: IStore) => store.token);
  const [loading, setLoading] = useState(false);
  const [allUser, setAllUser] = useState<IRequestProp[]>([]);
  useEffect(() => {
    getAllUser(token, setLoading, setAllUser);
  }, []);

  console.log("all users", allUser);

  return (
    <div className="flex flex-col  bg-sDark flex-1 ">
      <AddFriendBanner />
      <div className=" flex-1">
        {loading && (
          <div className="flex-1 justify-center items-center">
            <Spinner animation="border" variant="light" />
          </div>
        )}
        {!loading && allUser.length == 0 && (
          <div className=" flex w-full h-full justify-center items-center text-white ">
            <div className="flex flex-col justify-center items-center gap-3">
              <TfiFaceSad size={40} />
              <p>Oops!, Something went wrong</p>
            </div>
          </div>
        )}
        {!loading && allUser.length != 0 && (
          <div className="flex flex-col pt-3 w-full h-full  px-5 gap-3 overflow-auto">
            {allUser.map((item: IRequestProp) => (
              <PeopleCard key={item._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddFriends;
