import z from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(11, "Phone is required"),
  oldPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .optional(),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .optional(),
});

export type ProfileFormValues = z.infer<typeof ProfileSchema>;