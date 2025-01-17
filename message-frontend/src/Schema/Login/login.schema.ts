import { string, z } from "zod";

export const LoginSignupSchema = z.object({
  email: string().email("Please enter a valid email"),
  password: string().min(8, "Password must be at least 8 characters long"),
});

export type ILoginProp = z.infer<typeof LoginSignupSchema>;
