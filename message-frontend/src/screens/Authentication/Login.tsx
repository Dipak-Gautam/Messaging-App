import { useEffect, useState } from "react";
import LoginForm from "../../component/Login/LoginForm";
import WelcomeBack from "../../component/Login/WelcomeBack";
import darkTheme from "../../component/functions/darkTheme";

const Login = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    darkTheme(setTheme);
  }, []);
  return (
    <div
      style={{
        backgroundImage: "url('/asset/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
      className="flex flex-1  text-black dark:text-white justify-center items-center"
    >
      <div
        className=" rounded-xl sm:h-[80%] w-[70%]  relative flex overflow-hidden shadow-sm shadow-white"
        style={{
          backgroundImage: "url('/asset/pokhara.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-1 bg-gradient-to-r from-black/50 via-dark to-dark z-10 px-5 py-5 justify-center  ">
          <div className="hidden md:flex w-[50%]">
            <WelcomeBack />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
