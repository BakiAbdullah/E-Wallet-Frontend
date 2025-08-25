import { z } from "zod";

export const TopUpSendMoneySchema = z.object({
  balance: z.coerce
    .number()
    .min(10, "Minimum balance is 10")
    .positive("Balance must be positive"),
  agentId: z
    .string()
    .min(2, { message: "Agent ID must be at least 2 characters long" }),
});

export type TopUpFormValues = z.infer<typeof TopUpSendMoneySchema>;

