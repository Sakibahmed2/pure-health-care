"use client";

import DashboardSidebar from "@/components/dashboard/dashboardSidebar/DashboardSidebar";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, []);

  return isLoggedIn() ? <DashboardSidebar>{children}</DashboardSidebar> : null;
};

export default DashboardLayout;
