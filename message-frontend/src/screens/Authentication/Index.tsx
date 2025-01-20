import { useEffect } from "react";
import getData from "../../Functions/getLocalData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";

const Index = () => {
  const navigate = useNavigate();
  const token = useSelector((store: IStore) => store.token);

  useEffect(() => {
    getData(navigate);
  }, []);
  return (
    <div className="flex flex-1 bg-dark justify-center items-center">
      <div className="text-white text-2xl font-bold">Welcome to Cosmic</div>
    </div>
  );
};

export default Index;
