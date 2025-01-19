import { useEffect } from "react";
import getData from "../../Functions/getLocalData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Index = () => {
  const navigate = useNavigate();
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
