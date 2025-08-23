import { Logo } from "@/assets/icons/Logo";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useGetUserProfileQuery } from "@/redux/features/user/user.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { ChevronRight } from "lucide-react";
import * as React from "react";
import { Link } from "react-router";
import { NavUser } from "./nav-user";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData, isLoading } = useGetUserProfileQuery(undefined);

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };

  const user = {
    name: userData?.data?.name || "John Doe",
    email: userData?.data?.email || "m@example.com",
    avatar: userData?.data?.avatar || "/avatars/shadcn.jpg",
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Logo */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex-col flex gap-2">
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1 h-full"
            >
              <Link to="/">
                <Logo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main Menu */}
      <SidebarContent>
        {isLoading ? (
          // Skeleton for menu loading
          <SkeletonTheme  baseColor="#202020" highlightColor="#444">
            <div className="space-y-5 p-5">
              <Skeleton height={20} />
              <Skeleton height={30} />
              <Skeleton height={32} />
              <Skeleton height={32} />
              <Skeleton height={33} />
              <Skeleton height={34} />
              <Skeleton height={35} />
              <Skeleton height={35} />
            </div>
          </SkeletonTheme>
        ) : (
          data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <Collapsible asChild className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          {item.items?.length ? (
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          ) : null}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      {/* Dropdown content */}
                      {item.items?.length ? (
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <Link to={subItem.url}>{subItem.title}</Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      ) : null}
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        )}
      </SidebarContent>

      {/* User Footer */}
      <SidebarFooter>
        {isLoading ? (
          <div className="flex items-center gap-3 p-3">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton circle width={40} height={40} />
              <div className="flex-1">
                <Skeleton width={`80%`} height={12} />
                <Skeleton width={`60%`} height={12} />
              </div>
            </SkeletonTheme>
          </div>
        ) : (
          <NavUser user={user} />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
