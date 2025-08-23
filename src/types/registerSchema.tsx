import { role } from "@/constants/role";
import { z } from "zod";

// Define the schema for the registration form using Zod
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(50),
    email: z.email(),
    role: z.enum([role.AGENT, role.USER]),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(10),
    confirmPassword: z
      .string()
      .min(8, { message: "Password does not match" })
      .max(10),
    phone: z.string().min(11).max(15),
    address: z.string().min(5).max(100),
    commissionRate: z.number().min(0).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
