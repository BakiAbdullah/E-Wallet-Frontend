
import { MyTransaction } from "@/pages/User/MyTransaction";
import type { ISidebarItem } from "@/types";

export const userSidebarRoutes: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "My Transactions",
        url: "/user/transaction",
        component: MyTransaction,
      },
    ],
  },
];
