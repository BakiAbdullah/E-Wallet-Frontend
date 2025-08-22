import App from "@/App";
import { Aboutpage } from "@/pages/Aboutpage";
import { Contactpage } from "@/pages/Contactpage";
import { Faq } from "@/pages/Faq";
import { Features } from "@/pages/Features";
import { Homepage } from "@/pages/Homepage";
import Login from "@/pages/Login";
import { Pricing } from "@/pages/Pricing";
import { createBrowserRouter } from "react-router";

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
  // {
  //   Component: Register,
  //   path: "register",
  // },
]);