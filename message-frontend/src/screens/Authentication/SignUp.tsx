import React from "react";
import SignupForm from "../../component/SignUp/SignupForm";

const SignUp = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/asset/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
      className="flex flex-1  text-white justify-center items-center"
    >
      <div
        className=" rounded-xl h-[80%] w-[70%]  relative flex overflow-hidden"
        style={{
          backgroundImage: "url('/asset/pokhara.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-1 bg-gradient-to-r from-black/50 via-dark to-dark z-10  justify-end ">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
