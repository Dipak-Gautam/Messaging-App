import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import z, { string } from "zod";
import TextInputControllers from "../Controllers/TextInputControllers";

const LoginSignupSchema = z.object({
  email: string().email("Please enter a valid email"),
  password: string().min(8, "Password must be at least 8 characters long"),
});

type LoginSignupSchema = z.infer<typeof LoginSignupSchema>;

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSignupSchema>({
    resolver: zodResolver(LoginSignupSchema),
  });

  const onSubmit: SubmitHandler<LoginSignupSchema> = async (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="md:w-[50%] flex flex-col items-center pt-5 my-auto">
      <div className=" text-xl sm:text-2xl font-bold text-black dark:text-white mb-5">
        Login
      </div>

      <div className=" flex  flex-col my-2 gap-3 mb-10 sm:w-72">
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
      <div className=" w-full sm:w-72">
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="w-full bg-cyan-600 hover:bg-cyan-700 p-2 rounded-3xl text-sm sm:text-base text-white font-semibold hover:shadow-md hover:shadow-cyan-300/50"
        >
          Login
        </button>
      </div>

      <div className=" mt-5">
        <p className=" text-[10px] sm:text-xs flex">
          New to Cosmic
          <p className=" ml-2 sm:ml-4 underline text-blue-400 cursor-pointer">
            create an account
          </p>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
