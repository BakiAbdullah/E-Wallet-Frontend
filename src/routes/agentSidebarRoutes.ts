
import { MyTransaction } from "@/pages/User/MyTransaction";
import type { ISidebarItem } from "@/types";

export const agentSidebarRoutes: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "My Transactions",
        url: "/agent/transaction",
        component: MyTransaction,
      },
    ],
  },
];
