import { AnalyticsPage } from "@/pages/Admin/AnalyticsPage";
import { UsersPage } from "@/pages/Admin/UsersPage";
import type { ISidebarItem } from "@/types";

export const adminSidebarRoutes: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: AnalyticsPage,
      },
    ],
  },

  {
    title: "User Management",
    items: [
      {
        title: "Users",
        url: "/admin/users",
        component: UsersPage,
      },
    ],
  },
  // {
  //   title: "Agent Management",
  //   items: [
  //     {
  //       title: "Agents",
  //       url: "/admin/agents",
  //       component: AgentsPage,
  //     },
  //   ],
  // },
  // {
  //   title: "Transactions Management",
  //   items: [
  //     {
  //       title: "Transactions",
  //       url: "/admin/transactions",
  //       component: TransactionsPage,
  //     },
  //   ],
  // },
];
