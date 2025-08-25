import { AddMoneyPage } from "@/pages/AddMoneyPage";
import { MyProfilePage } from "@/pages/MyProfilePage";
import { MyWalletPage } from "@/pages/MyWalletPage";
import { SendMoneyPage } from "@/pages/SendMoneyPage";
import { MyTransactionTable } from "@/pages/User/MyTransactionTable";
import { WithdrawMoneyPage } from "@/pages/WithdrawMoneyPage";
import type { ISidebarItem } from "@/types";
import {
  History,
  Settings2Icon,
  Wallet,
  WalletMinimal
} from "lucide-react";

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
        url: "wallet/top-up",
        component: AddMoneyPage,
      },
      {
        title: "Withdraw Money",
        url: "wallet/withdraw",
        component: WithdrawMoneyPage,
      },
      {
        title: "Send Money",
        url: "wallet/send-money",
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
        component: MyWalletPage,
      },
    ],
  },
  {
    title: "Profile Management",
    icon: Settings2Icon,
    items: [
      {
        title: "My Account",
        url: "user/profile",
        component: MyProfilePage,
      },
    ],
  },
];
