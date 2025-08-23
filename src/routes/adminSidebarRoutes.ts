import { AgentsPage } from "@/pages/Admin/AgentsPage";
import { AnalyticsPage } from "@/pages/Admin/AnalyticsPage";
import { TransactionsPage } from "@/pages/Admin/TransactionsPage";
import { UsersPage } from "@/pages/Admin/UsersPage";
import { AdminWalletPage } from "@/pages/AdminWalletPage";
import type { ISidebarItem } from "@/types";
import {
  CoinsIcon,
  LayoutDashboard,
  User2,
  UserStar,
  Wallet,
} from "lucide-react";

export const adminSidebarRoutes: ISidebarItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
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
    icon: User2,
    items: [
      {
        title: "All Users",
        url: "/admin/users",
        component: UsersPage,
      },
    ],
  },
  {
    title: "Agent Management",
    icon: UserStar,
    items: [
      {
        title: "All Agents",
        url: "/admin/agents",
        component: AgentsPage,
      },
    ],
  },
  {
    title: "Transactions Management",
    icon: CoinsIcon,
    items: [
      {
        title: "All Transactions",
        url: "/admin/transactions",
        component: TransactionsPage,
      },
    ],
  },
  {
    title: "Wallet Management",
    icon: Wallet,
    items: [
      {
        title: "Manage Wallet",
        url: "/admin/manage-wallet",
        component: AdminWalletPage,
      },
    ],
  },
];
