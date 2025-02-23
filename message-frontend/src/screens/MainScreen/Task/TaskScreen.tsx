import { useEffect, useState } from "react";
import TaskBanner from "../../../component/TaskScreenComponents/TaskBanner";
import TaskCard from "../../../component/TaskScreenComponents/TaskCard";
import { Spinner } from "react-bootstrap";
import getTaskApi from "../../../ApiService/Task/getTaskApi";
import { useSelector } from "react-redux";
import { IStore } from "../../../Schema/Store/store.schema";
import { ITask } from "../../../Schema/Task/task.schema";
import { TfiFaceSad } from "react-icons/tfi";

const TaskScreen = () => {
  const [task, setTask] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((store: IStore) => store.token);
  useEffect(() => {
    getTaskApi(token, setTask, setLoading);
  }, []);

  return (
    <div className="text-white  flex flex-1  flex-col h-[100vh]">
      <TaskBanner />
      {loading && (
        <div className="flex-1 flex  justify-center items-center">
          <Spinner animation="border" variant="light" className="" />
        </div>
      )}
      {!loading && task.length == 0 && (
        <div className=" flex w-full h-full justify-center items-center text-white ">
          <div className="flex flex-col justify-center items-center gap-3">
            <TfiFaceSad size={40} />
            <p>Oops!, Something went wrong</p>
            <div
              className="bg-gPrimary rounded-2xl p-2 text-center w-60 cursor-pointer hover:bg-green-500"
              onClick={() => {
                setLoading(true), getTaskApi(token, setTask, setLoading);
              }}
            >
              Refresh
            </div>
          </div>
        </div>
      )}
      {!loading && task.length != 0 && (
        <div className="flex-1 px-3 pt-3 flex flex-col  overflow-y-auto  ">
          {task.map((item) => (
            <TaskCard key={item._id} data={item} setTask={setTask} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskScreen;
