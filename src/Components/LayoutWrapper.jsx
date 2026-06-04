"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Hide Navbar & Footer on dashboard paths
  const isDashboard = pathname?.startsWith("/client-dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
