import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { AppSidebar } from "../app-sidebar";
import { BadgeTurkishLiraIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { useGetMyWalletQuery } from "@/redux/features/wallet/wallet.api";

export default function DashboardLayout() {
  const { data: walletData } = useGetMyWalletQuery(undefined);
  console.log(walletData?.data?.user?.role, "WalletData");
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-5"
          />
          <div>
            <h1 className="text-2xl font-bold">
              {`${
                walletData?.data?.user?.role === "AGENT"
                  ? "Agent"
                  : walletData?.data?.user?.role === "USER"
                  ? "User"
                  : "Admin"
              } Dashboard`}
            </h1>
          </div>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-5"
          />
          <Badge
            variant="secondary"
            className="bg-primary/70 ms-1 h-7 w-auto flex items-center justify-center text-white relative"
          >
            <BadgeTurkishLiraIcon />
            <span className="text-sm">
              Balance:{" "}
              {walletData?.data?.balance ? walletData.data.balance : 0.0}
            </span>
          </Badge>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
