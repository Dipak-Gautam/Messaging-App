import React, { useEffect, useState } from "react";
import { IRequestProp } from "../../../Schema/Request/addFriend.schema";
import getAllUser from "../../../ApiService/Friends/getAllUser.api";
import { useSelector } from "react-redux";
import { IStore } from "../../../Schema/Store/store.schema";
import filterArrayById from "../../CustomFunctions/addFriendFilter";
import { Spinner } from "react-bootstrap";
import AddMemberCard from "./AddMemberCard";

const AddMemberComponent = () => {
  const [allUser, setAllUser] = useState<IRequestProp[]>([]);
  const token = useSelector((store: IStore) => store.token);
  const [loading, setLoading] = useState(false);
  const [showUser, setShowUser] = useState<IRequestProp[]>([]);
  useEffect(() => {
    setLoading(true);
    getAllUser(token, setLoading, setAllUser);
  }, []);

  useEffect(() => {
    if (allUser == undefined) return;
    setShowUser(filterArrayById(allUser, ["67aaf543902bbe7d554c36b9"]));
  }, [allUser]);

  return (
    <div className="flex-1  h-full">
      {loading ? (
        <div className="flex-1 flex justify-center items-center h-full w-full ">
          <Spinner />
        </div>
      ) : (
        <div className=" h-full w-full  ">
          {showUser.map((item) => (
            <AddMemberCard key={item._id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddMemberComponent;
