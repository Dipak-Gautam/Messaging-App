import { ITask } from "../../Schema/Task/task.schema";

interface TaskCardProp {
  data: ITask;
}

const colors = {
  "Not-Started": "bg-gray-500",
  "In-Progress": "bg-green-500",
  "Partially-Completed": "bg-blue-500",
  Completed: "bg-yellow-500",
  Stopped: "bg-red-500",
};

const TaskCard = ({ data }: TaskCardProp) => {
  return (
    <div className="border-1 border-slate-500 p-2 px-4 rounded-xl hover:shadow-md hover:shadow-white/50 flex gap-3">
      <div className="flex-1 flex flex-col justify-between ">
        <div className="text-xl font-medium">{data.name}</div>
        <div className="text-sm">{data.description}</div>
      </div>
      <div className=" flex flex-col gap-1">
        <div
          className={` text-sm p-1 px-2 ${
            colors[data.status]
          } rounded-xl text-center font-medium`}
        >
          {data.status}
        </div>
        <div className="text-sm text-gray-200"> {data.assigned[0].name}</div>
      </div>
    </div>
  );
};

export default TaskCard;
