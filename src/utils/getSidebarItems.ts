import { role } from "@/constants/role";
import { adminSidebarRoutes } from "@/routes/adminSidebarRoutes";
import { agentSidebarRoutes } from "@/routes/agentSidebarRoutes";
import { userSidebarRoutes } from "@/routes/userSidebarRoutes";

import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.ADMIN:
      return [...adminSidebarRoutes];
    case role.USER:
      return [...userSidebarRoutes];
    case role.AGENT:
      return [...agentSidebarRoutes];
    default:
      return [];
  }
};
