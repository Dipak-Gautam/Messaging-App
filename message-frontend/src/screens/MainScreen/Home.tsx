import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex px-4 justify-center items-center h-screen w-[100vw]">
      <div className=" ">
        <button
          className="bg-red-500 p-2 rounded-lg text-white font-bold"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          logOut
        </button>
      </div>
    </div>
  );
};

export default Home;
