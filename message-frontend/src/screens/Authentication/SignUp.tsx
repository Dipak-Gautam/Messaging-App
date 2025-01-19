import SignupForm from "../../component/SignUp/SignupForm";
import WelcomeMessage from "../../component/SignUp/WelcomeMessage";

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
        className=" rounded-xl sm:h-[80%] w-[70%]  relative flex overflow-hidden shadow-sm shadow-white "
        style={{
          backgroundImage: "url('/asset/pokhara.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-1 bg-gradient-to-r from-black/50 via-dark to-dark z-10 px-5 py-auto justify-center ">
          <div className="hidden md:flex w-[50%]">
            <WelcomeMessage />
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
