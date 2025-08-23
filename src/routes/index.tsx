import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Aboutpage } from "@/pages/Aboutpage";
import { Contactpage } from "@/pages/Contactpage";
import { Faq } from "@/pages/Faq";
import { Features } from "@/pages/Features";
import { Homepage } from "@/pages/Homepage";
import Login from "@/pages/Login";
import { Pricing } from "@/pages/Pricing";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarRoutes } from "./adminSidebarRoutes";
import { userSidebarRoutes } from "./userSidebarRoutes";
import RegisterPage from "@/pages/RegisterPage";
import { agentSidebarRoutes } from "./agentSidebarRoutes";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: Aboutpage,
        path: "about",
      },
      {
        Component: Contactpage,
        path: "contact",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: Pricing,
        path: "pricing",
      },
      {
        Component: Faq,
        path: "faq",
      },
    ],
  },

  // Auth Routes
  {
    Component: Login,
    path: "login",
  },
  {
    Component: RegisterPage,
    path: "register",
  },

  // Admin Routes (Dashboard)
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarRoutes),
    ],
  },
  // User Routes (Dashboard)
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/transaction" /> },
      ...generateRoutes(userSidebarRoutes),
    ],
  },
  // Agent Routes (Dashboard)
  {
    Component: DashboardLayout,
    path: "/agent",
    children: [
      { index: true, element: <Navigate to="/agent/transaction" /> },
      ...generateRoutes(agentSidebarRoutes),
    ],
  },
]);
