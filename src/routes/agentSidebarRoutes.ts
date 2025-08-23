
import { MyTransactionTable } from "@/pages/User/MyTransactionTable";
import type { ISidebarItem } from "@/types";
import { History } from "lucide-react";

export const agentSidebarRoutes: ISidebarItem[] = [
  {
    title: "History",
    icon: History,
    items: [
      {
        title: "My Transactions",
        url: "/agent/transaction",
        component:  MyTransactionTable,
      },
    ],
  },
];
