import { AddMoneyPage } from "@/pages/AddMoneyPage";
import { AdminWalletPage } from "@/pages/AdminWalletPage";
import { SendMoneyPage } from "@/pages/SendMoneyPage";
import { MyTransactionTable } from "@/pages/User/MyTransactionTable";
import { WithdrawMoneyPage } from "@/pages/WithdrawMoneyPage";
import type { ISidebarItem } from "@/types";
import { History, Wallet, WalletMinimal } from "lucide-react";

export const userSidebarRoutes: ISidebarItem[] = [
  {
    title: "Transaction History",
    icon: History,
    items: [
      {
        title: "My Transactions",
        url: "/user/transaction",
        component: MyTransactionTable,
      },
    ],
  },
  {
    title: "Wallet Services",
    icon: WalletMinimal,
    items: [
      {
        title: "Add Money",
        url: "user/wallet/top-up",
        component: AddMoneyPage,
      },
      {
        title: "Withdraw Money",
        url: "user/wallet/withdraw",
        component: WithdrawMoneyPage,
      },
      {
        title: "Send Money",
        url: "user/wallet/send-money",
        component: SendMoneyPage,
      },
    ],
  },
  {
    title: "Wallet",
    icon: Wallet,
    items: [
      {
        title: "My Wallet",
        url: "user/wallet",
        component: AdminWalletPage,
      },
    ],
  },
];
