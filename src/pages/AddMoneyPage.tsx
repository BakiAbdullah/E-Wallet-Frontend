import { AddMoneyForm } from "@/components/modules/User/AddMoneyForm";

export const AddMoneyPage = () => {
  return (
    <div className=" flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <AddMoneyForm />
      </div>
    </div>
  );
};
