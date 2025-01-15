import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div className=" w-[70%] ">
        <div>
          <p className="text-base font-semibold">Welcome to,</p>
          <p className="text-2xl font-semibold">Cosmic Communication</p>
        </div>
        <div className="text-sm mt-4">
          Our app provides real-time chat for seamless communication and a task
          management system for creating, assigning, and tracking tasks
          efficiently.
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
