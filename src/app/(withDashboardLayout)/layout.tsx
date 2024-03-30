import DashboardSidebar from "@/components/dashboard/dashboardSidebar/DashboardSidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <DashboardSidebar>{children}</DashboardSidebar>;
};

export default DashboardLayout;
