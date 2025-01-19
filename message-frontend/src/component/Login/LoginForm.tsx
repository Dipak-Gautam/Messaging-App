import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInputControllers from "../Controllers/TextInputControllers";
import { useNavigate } from "react-router-dom";
import { ILoginProp, LoginSignupSchema } from "../../Schema/Login/login.schema";
import loginApi from "../../ApiService/Login/login.api";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginProp>({
    resolver: zodResolver(LoginSignupSchema),
  });

  const onSubmit: SubmitHandler<ILoginProp> = async (data) => {
    loginApi(data, dispatch, navigate);
  };

  return (
    <div className="md:w-[50%] flex flex-col items-center pt-5 my-auto">
      <div className=" text-xl sm:text-2xl font-bold  text-white mb-5">
        Login
      </div>

      <div className=" flex  flex-col my-2 gap-3 mb-10 sm:w-72 px-5">
        <TextInputControllers
          label="Email"
          name="email"
          control={control}
          error={errors.email}
        />
        <TextInputControllers
          label="Password"
          name="password"
          control={control}
          error={errors.password}
        />
      </div>
      <div className=" w-full sm:w-72 px-5">
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-1 rounded-3xl text-sm sm:text-sm text-white font-semibold hover:shadow-md hover:shadow-white/50"
        >
          Login
        </button>
      </div>

      <div className=" mt-5">
        <div className=" text-[10px] sm:text-xs flex">
          New to Cosmic
          <p
            className=" ml-2 sm:ml-4 underline text-blue-400 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            create an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
