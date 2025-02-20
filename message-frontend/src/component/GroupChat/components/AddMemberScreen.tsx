import { RiGroup2Line } from "react-icons/ri";
import AddMemberComponent from "./AddMemberComponent";

const AddMemberScreen = () => {
  return (
    <div className="text-white p-3 flex-1 flex flex-col">
      <div className="my-1 flex justify-center items-center flex-col">
        <RiGroup2Line className="text-slate-300 text-7xl mb-3" />
        <div className="text-slate-200    flex flex-col justify-center gap-3">
          <input
            type="text"
            value={"HardWare Group"}
            className=" bg-slate-700 p-2 px-3 rounded-md text-xl font-bold text-center"
          />
          <button className="text-white bg-green-600 text-base p-2 px-4 rounded-md font-medium hover:bg-green-500">
            Update
          </button>
        </div>
      </div>
      <div className="border-b my-3" />
      <div>
        <div className="text-xl mx-4 font-semibold mb-3">Add Members</div>
      </div>
      <div className="flex-1  ">
        <AddMemberComponent />
      </div>
    </div>
  );
};

export default AddMemberScreen;
