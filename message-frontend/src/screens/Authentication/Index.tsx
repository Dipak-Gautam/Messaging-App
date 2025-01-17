import React, { useEffect } from "react";
import getData from "../../Functions/getLocalData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getData(navigate, dispatch);
  }, []);
  return (
    <div className="flex flex-1 bg-dark justify-center items-center">
      <div className="text-white text-2xl font-bold">Welcome to Cosmic</div>
    </div>
  );
};

export default Index;
