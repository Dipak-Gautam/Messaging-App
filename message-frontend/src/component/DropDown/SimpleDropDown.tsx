import React, { useState } from "react";
import { ITask } from "../../Schema/Task/task.schema";

const colors = {
  "Not-Started": "bg-gray-500",
  "In-Progress": "bg-green-500",
  "Partially-Completed": "bg-blue-500",
  Completed: "bg-yellow-500",
  Stopped: "bg-red-500",
};

const options = [
  { value: "Not-Started", label: "Not-Started" },
  { value: "In-Progress", label: "In-Progress" },
  { value: "Partially-Completed", label: "Partially-Completed" },
  { value: "Completed", label: "Completed" },
  { value: "Stopped", label: "Stopped" },
];

interface SimpleDropDownProp {
  data: ITask;
  status: React.MutableRefObject<any>;
}

const SimpleDropDown = ({ data, status }: SimpleDropDownProp) => {
  const [selectedValue, setSelectedValue] = useState(data.status);
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
    status.current = event.target.value;
  };
  return (
    <>
      <select
        value={selectedValue}
        onChange={handleChange}
        className={`p-1 px-2 rounded-md ${colors[selectedValue]} text-white font-medium`}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value} className="bg-gray-500">
            {item.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default SimpleDropDown;
