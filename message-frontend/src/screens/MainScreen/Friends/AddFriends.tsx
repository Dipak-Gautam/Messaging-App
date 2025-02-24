import React, { useEffect, useState } from "react";
import AddFriendBanner from "../../../component/AddFriends/AddFriendBanner";
import { useSelector } from "react-redux";
import { IStore } from "../../../Schema/Store/store.schema";
import getAllUser from "../../../ApiService/Friends/getAllUser.api";
import { Spinner } from "react-bootstrap";
import { TfiFaceSad } from "react-icons/tfi";
import { IRequestProp } from "../../../Schema/Request/addFriend.schema";
import PeopleCard from "../../../component/AddFriends/PeopleCard";
import excludeElements from "../../../component/CustomFunctions/friendFilter";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const AddFriends = () => {
  const userData = useSelector((store: IStore) => store.userInfo);
  const token = useSelector((store: IStore) => store.token);
  const [loading, setLoading] = useState(false);
  const [allUser, setAllUser] = useState<IRequestProp[]>([]);
  const [showUser, setShowUser] = useState<IRequestProp[]>([]);

  useEffect(() => {
    getAllUser(token, setLoading, setAllUser);
  }, []);

  useEffect(() => {
    if (allUser == undefined || userData == undefined) return;
    setShowUser(excludeElements(allUser, userData?.conversations));
  }, [allUser]);

  return (
    <div className="flex flex-col  bg-sDark flex-1 h-full">
      <AddFriendBanner />
      <div className=" flex flex-1 overflow-auto  ">
        {loading && (
          <div className="flex-1 justify-center items-center w-full h-full">
            <Spinner animation="border" variant="light" />
          </div>
        )}
        {!loading && showUser.length == 0 && (
          <div className=" flex w-full h-full justify-center items-center text-white ">
            <div className="flex flex-col justify-center items-center gap-3">
              <TfiFaceSad size={40} />
              <p>Oops!, Something went wrong</p>
              <div
                className="bg-gPrimary rounded-2xl p-2 text-center md:w-60 cursor-pointer hover:bg-green-500"
                onClick={() => {
                  setLoading(true), getAllUser(token, setLoading, setAllUser);
                }}
              >
                Refresh
              </div>
            </div>
          </div>
        )}
        {!loading && showUser.length > 1 ? (
          <div className="flex flex-col pt-3 w-full h-full px-2 md:px-5 gap-3 ">
            {showUser.map((item: IRequestProp) => (
              <PeopleCard key={item._id} data={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-1 text-white justify-center items-center  ">
            <div className="flex flex-1 flex-col gap-7">
              <div className="flex justify-center">
                <FaRegFaceSmileBeam className=" text-5xl md:text-7xl font-bold  " />
              </div>
              <div className=" flex-1 font-semibold text-center leading-3">
                <p className="text-sm md:text-xl">
                  There are no more new users to be friends.
                </p>
                <p className="text-xs md:text-base font-normal">
                  We will let you know if new user join
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddFriends;
