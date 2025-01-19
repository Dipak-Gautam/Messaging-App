import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInputControllers from "../Controllers/TextInputControllers";
import { useNavigate } from "react-router-dom";
import {
  ISignUpProp,
  UserSignupSchema,
} from "../../Schema/Signup/signup.schema";
import signupApi from "../../ApiService/SignUp/signup.api";
import { useDispatch } from "react-redux";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpProp>({
    resolver: zodResolver(UserSignupSchema),
  });

  const onSubmit: SubmitHandler<ISignUpProp> = async (data) => {
    signupApi(data, dispatch, navigate);
  };

  return (
    <div className="md:w-[50%] flex flex-col items-center my-auto  ">
      <div className=" text-xl md:text-xl  font-bold  text-white mb-5">
        Create Account
      </div>

      <div className=" flex  flex-col  gap-1 sm:gap-1 mb-6 sm:w-72  overflow-auto overflow-y-auto px-5">
        <TextInputControllers
          label="Full Name"
          name="name"
          control={control}
          error={errors.name}
        />
        <TextInputControllers
          label="Email"
          name="email"
          control={control}
          error={errors.email}
        />
        <TextInputControllers
          label="Phone Number"
          name="phone"
          control={control}
          error={errors.phone}
        />
        <TextInputControllers
          label="Password"
          name="password"
          control={control}
          error={errors.password}
        />

        <TextInputControllers
          label="Confirm Password"
          name="confirmPassword"
          control={control}
          error={errors.confirmPassword}
        />
      </div>
      <div className=" w-full sm:w-72 px-5">
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-1 rounded-3xl text-sm sm:text-sm text-white font-semibold hover:shadow-md hover:shadow-white/50"
        >
          Submit
        </button>
      </div>

      <div className=" mt-4">
        <div className="text-xs flex">
          Already have an account
          <p
            className="ml-4 underline text-blue-400 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
