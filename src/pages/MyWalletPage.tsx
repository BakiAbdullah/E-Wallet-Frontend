/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetUserProfileQuery } from "@/redux/features/user/user.api";
import { useGetMyWalletQuery } from "@/redux/features/wallet/wallet.api";

import { Loader2 } from "lucide-react";

export const MyWalletPage = () => {
  const { data: walletData, isLoading: walletLoading } =
    useGetMyWalletQuery(undefined);
  const { data: userData, isLoading: userLoading } =
    useGetUserProfileQuery(undefined);

  if (walletLoading || userLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-8 h-8 text-orange-500" />
      </div>
    );
  }


  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card className="shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            💼 My Wallet Dashboard
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-6 space-y-6">
          {/* User Info */}
          <section>
            <h2 className="text-lg font-semibold dark:text-white mb-3">
              👤 User Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-white">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {userData?.data?.name}
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                {userData?.data?.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {userData?.data?.phone}
              </p>
              <p>
                <span className="font-medium">Role:</span>{" "}
                <span className="capitalize">{userData?.data?.role}</span>
              </p>
            </div>
          </section>

          {/* Wallet Info */}
          <section>
            <h2 className="text-lg font-semibold dark:text-white mb-3">
              💳 Wallet Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-white">
              <p>
                <span className="font-medium">Balance:</span>{" "}
                <span className="text-xl font-bold text-green-600">
                  {walletData?.data?.balance} ৳
                </span>
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span className=" font-semibold text-green-600">
                  {walletData?.data?.isBlocked}
                </span>
            
              </p>
            </div>
          </section>

          {/* Transactions */}
          <section>
            <h2 className="text-lg font-semibold dark:text-white mb-3">
              📜 Recent Transactions
            </h2>
            {walletData?.transactions?.length > 0 ? (
              <ul className="space-y-3">
                {walletData.transactions.map((tx: any) => (
                  <li
                    key={tx._id}
                    className="flex justify-between items-center border-b pb-2 last:border-0"
                  >
                    <span className="font-medium capitalize">{tx.type}</span>
                    <span
                      className={`font-semibold ${
                        tx.type === "send"
                          ? "text-red-500"
                          : tx.type === "receive"
                          ? "text-green-500"
                          : "dark:text-white"
                      }`}
                    >
                      {tx.amount} ৳
                    </span>
                    <span className="text-gray-500 text-sm">
                      {new Date(tx.createdAt).toLocaleDateString()}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No transactions yet</p>
            )}
          </section>
        </CardContent>
      </Card>
    </div>
  );
};


