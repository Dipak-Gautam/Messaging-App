import { string, z } from "zod";

export const UserSignupSchema = z
  .object({
    name: string().min(2, "Name must be minimum 2 character long"),
    email: string().email("Please enter a valid email"),
    phone: string().min(10, "Please provide a valid number"),
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

export type ISignUpProp = z.infer<typeof UserSignupSchema>;
