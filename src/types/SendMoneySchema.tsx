import z from "zod";

// Schema for send money
export const SendMoneySchema = z.object({
  balance: z.coerce
    .number()
    .min(1, "Amount must be at least 1")
    .positive("Amount must be positive"),
  recipient: z
    .string()
    .min(5, "Enter recipient email or phone")
    .max(50, "Too long"),
});

export type SendMoneyFormValues = z.infer<typeof SendMoneySchema>;