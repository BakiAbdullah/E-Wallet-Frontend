/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SendMoneyImg from "@/assets/images/SendMoney.jpg";
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
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  useGetAllUsersQuery,
  useGetUserProfileQuery,
} from "@/redux/features/user/user.api";
import { useSendMoneyMutation } from "@/redux/features/wallet/wallet.api";
import {
  SendMoneySchema,
  type SendMoneyFormValues,
} from "@/types/SendMoneySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function SendMoneyForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<SendMoneyFormValues>({
    resolver: zodResolver(SendMoneySchema) as any,
    defaultValues: {
      balance: 0,
      recipient: "",
    },
  });


  const [sendMoney] = useSendMoneyMutation();
  const { data: user } = useGetUserProfileQuery(undefined);
  const { data: allUsers } = useGetAllUsersQuery({ role: "USER" });

  const userOwnEmail = user?.data?.email;
  const filteredUsers = allUsers?.data?.data?.filter(
    (user: any) => user.email !== userOwnEmail
  );

  const onSubmit = async (data: SendMoneyFormValues) => {
    const toastId = toast.loading("Processing...");

    const userInfo = {
      balance: data?.balance,
      recipient: data?.recipient,
    };

    try {
      await sendMoney(userInfo).unwrap();
      toast.success("Send Money successful!", { id: toastId });
      form.reset();
    } catch (error: any) {
      toast.error(`${error.data?.message || "Failed to send money"}`, {
        id: toastId,
      });
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
                <h1 className="text-2xl font-bold">Send Money</h1>
                <p className="text-muted-foreground text-balance">
                  Send money to another user via phone/email
                </p>
              </div>

              {/* Recipient Select */}
              <FormField
                control={form.control}
                name="recipient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient (Phone / Email)</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select recipient" />
                        </SelectTrigger>
                        <SelectContent>
                          {filteredUsers?.map((user: any) => (
                            <SelectItem
                              key={user.email}
                              value={user.email || user.phone}
                            >
                              {user.name} ({user.phone || user.email})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <Button
                type="submit"
                className="w-full cursor-pointer text-white"
              >
                Send Money
              </Button>
            </form>
          </Form>

          {/* Image Section */}
          <div className="bg-muted relative hidden md:block">
            <img
              src={SendMoneyImg}
              alt="Send Money"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
