import { SendMoneyForm } from "@/components/modules/User/SendMoneyForm";

export const SendMoneyPage = () => {
  return (
    <div className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SendMoneyForm />
      </div>
    </div>
  );
};
