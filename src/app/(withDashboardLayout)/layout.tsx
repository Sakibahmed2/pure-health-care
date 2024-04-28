"use client";

import DashboardSidebar from "@/components/dashboard/dashboardSidebar/DashboardSidebar";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  if (!isLoggedIn()) {
    router.push("/login");
    return null;
  }

  return <DashboardSidebar>{children}</DashboardSidebar>;
};

export default DashboardLayout;
