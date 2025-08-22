import { z } from "zod";

// Define the schema for the registration form using Zod
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(50),
    email: z.email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(10),
    confirmPassword: z
      .string()
      .min(8, { message: "Password does not match" })
      .max(10),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
