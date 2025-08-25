/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import WithdrawImg from "@/assets/images/Login.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useGetAllAgentsQuery } from "@/redux/features/user/user.api";
import { useWithdrawFromWalletMutation } from "@/redux/features/wallet/wallet.api";
import {
  TopUpSendMoneySchema,
  type TopUpFormValues,
} from "@/types/TopUpSendMoneySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function WithdrawMoneyForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<TopUpFormValues>({
    resolver: zodResolver(TopUpSendMoneySchema) as any,
    defaultValues: {
      balance: 0,
      agentId: "",
    },
  });

  const { data: agents } = useGetAllAgentsQuery(undefined);
  const agentsData = agents?.data;
  const [withDrawMoney] = useWithdrawFromWalletMutation();

  // Handle form submission
  const onSubmit = async (data: TopUpFormValues) => {
    const toastId = toast.loading("Please wait...");
    console.log(data, "data...");
    const userInfo = {
      balance: data?.balance,
      agentId: data?.agentId,
    };
    // console.log({ userInfo });

    try {
      const result = await withDrawMoney(userInfo).unwrap();
      console.log({ result });
      toast.success("Withdraw successful!", { id: toastId });

      form.reset();
    } catch (error: any) {
      toast.error(`${error.data?.message}`, { id: toastId });
      console.log(error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Withdraw Money</h1>
                <p className="text-muted-foreground text-balance">
                  Cash out your Money to Agent
                </p>
              </div>

              {/* Amount Field */}
              <FormField
                control={form.control}
                name="balance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === "" ? 0 : e.target.valueAsNumber
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Agent Select Field */}
              <FormField
                control={form.control}
                name="agentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Agent</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an Agent" />
                        </SelectTrigger>
                        <SelectContent>
                          {agentsData?.map((agent: any) => (
                            <SelectItem key={agent._id} value={agent._id}>
                              {agent.name} ({agent.phone})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full cursor-pointer text-white"
              >
                Withdraw
              </Button>
            </form>
          </Form>

          {/* ✅ Image Section */}
          <div className="bg-muted relative hidden md:block">
            <img
              src={WithdrawImg}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
