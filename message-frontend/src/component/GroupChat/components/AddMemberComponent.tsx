import React, { useEffect, useState } from "react";
import { IRequestProp } from "../../../Schema/Request/addFriend.schema";
import getAllUser from "../../../ApiService/Friends/getAllUser.api";
import { useSelector } from "react-redux";
import { IStore } from "../../../Schema/Store/store.schema";
import filterArrayById from "../../CustomFunctions/addFriendFilter";
import { Spinner } from "react-bootstrap";
import AddMemberCard from "./AddMemberCard";
import { useLocation } from "react-router-dom";

const AddMemberComponent = () => {
  const [allUser, setAllUser] = useState<IRequestProp[]>([]);
  const token = useSelector((store: IStore) => store.token);
  const [loading, setLoading] = useState(false);
  const [showUser, setShowUser] = useState<IRequestProp[]>([]);
  const location = useLocation();
  const { convInfo } = location.state || {};
  useEffect(() => {
    setLoading(true);
    getAllUser(token, setLoading, setAllUser);
  }, []);

  useEffect(() => {
    if (allUser == undefined) return;
    setShowUser(filterArrayById(allUser, convInfo.participant));
  }, [allUser]);

  return (
    <div className="flex-1  h-full">
      {loading ? (
        <div className="flex-1 flex justify-center items-center h-full w-full ">
          <Spinner />
        </div>
      ) : (
        <div className=" h-full w-full  ">
          {showUser.length != 0 ? (
            <>
              {showUser.map((item) => (
                <AddMemberCard key={item._id} data={item} />
              ))}
            </>
          ) : (
            <div className="text-white text-center font-medium text-lg">
              No members to add
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddMemberComponent;
