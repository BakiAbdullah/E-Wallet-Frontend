import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
export type { ILogin, IRegister } from "./auth.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

// export interface ISidebarItem {
//   title: string;
//   items: {
//     title: string;
//     url: string;
//     component: ComponentType;
//     icon?: LucideIcon;
//     items?: ISidebarItem[];
//   }[];
// }

export interface ISidebarChild {
  title: string;
  url: string;
  component: ComponentType;
  items?: ISidebarChild[]; // Nested subitems (optional)
}

export interface ISidebarItem {
  title: string;
  icon: LucideIcon;
  items: ISidebarChild[];
}

export type TRole = "ADMIN" | "USER" | "AGENT";
