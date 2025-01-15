import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z, { string } from "zod";
import TextInputControllers from "../Controllers/TextInputControllers";

const UserSignupSchema = z
  .object({
    name: string().min(2, "Name must be minimum 2 character long"),
    email: string().email("Please enter a valid email"),
    password: string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: string().min(
      8,
      "Password and confirm password must match"
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

type UserSignupSchema = z.infer<typeof UserSignupSchema>;

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSignupSchema>({
    resolver: zodResolver(UserSignupSchema),
  });

  const onSubmit: SubmitHandler<UserSignupSchema> = async (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="md:w-[50%] flex flex-col items-center my-5 pt-5 ">
      <div className=" text-xl sm:text-2xl  font-bold text-black dark:text-white mb-5">
        Create Account
      </div>

      <div className=" flex  flex-col my-2 gap-2 sm:gap-3 mb-10 sm:w-72 px-5">
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
      <div className=" w-full sm:w-72">
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="w-full bg-cyan-600 hover:bg-cyan-700 p-2 rounded-3xl text-sm sm:text-base text-white font-semibold hover:shadow-md hover:shadow-cyan-300/50"
        >
          Submit
        </button>
      </div>

      <div className=" mt-5">
        <p className="text-xs flex">
          Already have an account
          <p className="ml-4 underline text-blue-400">Login</p>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
