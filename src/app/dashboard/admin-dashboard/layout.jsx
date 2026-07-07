"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  TicketPercent,
  BarChart3,
  MessageSquare,
  Settings,
  Sun,
  Moon,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/admin-dashboard/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/admin-dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "Users",
    href: "/admin-dashboard/users",
    icon: Users,
  },
  {
    title: "Coupons",
    href: "/admin-dashboard/coupons",
    icon: TicketPercent,
  },
  {
    title: "Analytics",
    href: "/admin-dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Messages",
    href: "/admin-dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/admin-dashboard/settings",
    icon: Settings,
  },
];

const AdminDashLayoutPage = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#0B111E] text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="w-[95%] lg:w-[90%] xl:w-[80%] mx-auto flex min-h-screen">
        <aside
          className={`w-64 shrink-0 border-r p-5 ${
            isDark
              ? "border-slate-800 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#0071E3] rounded-lg flex items-center justify-center text-white font-bold">
              DP
            </div>

            <h2 className="font-bold text-lg">
              DoroPocket Admin
            </h2>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isDark
                      ? "hover:bg-slate-800"
                      : "hover:bg-slate-100"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminDashLayoutPage;