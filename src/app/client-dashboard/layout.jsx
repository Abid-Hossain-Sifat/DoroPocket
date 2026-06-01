"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import {
  Home,
  ShoppingBag,
  Heart,
  XCircle,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const ClientDashLayout = ({ children }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const menu = [
    { name: "Overview", href: "/client-dashboard", icon: Home },
    { name: "Wishlist", href: "/client-dashboard/wishlist", icon: Heart },
    { name: "Total Order", href: "/client-dashboard/total-order", icon: ShoppingBag },
    { name: "Delivered", href: "/client-dashboard/delivered", icon: CheckCircle2 },
    { name: "Cancelled", href: "/client-dashboard/cancelled", icon: XCircle },
  ];

  return (
    <div
      className={`flex min-h-screen ${
        isDark ? "bg-[#0B111E] text-white" : "bg-gray-50 text-slate-900"
      }`}
    >
      {/* SIDEBAR */}
      <aside
        className={`w-64 min-h-screen p-5 border-r flex flex-col justify-between ${
          isDark ? "border-gray-800 bg-[#0F172A]" : "border-gray-200 bg-white"
        }`}
      >
        {/* TOP CONTENT */}
        <div className="mb-105 flex-1">
          <h1 className="text-xl font-bold mb-6">Dashboard</h1>

          <nav className="space-y-2">
            {menu.map((item, i) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`flex items-center gap-3 p-2 rounded-lg transition font-medium
                  ${
                    isActive
                      ? isDark
                        ? "bg-gray-800 text-white"
                        : "bg-slate-200 text-slate-900"
                      : isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/"
            className={`flex items-center gap-2 p-2 rounded-lg font-medium transition
            ${
              isDark
                ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <ArrowLeft size={18} />
            Return Home
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">
        {children}
        </main>
    </div>
  );
};

export default ClientDashLayout;