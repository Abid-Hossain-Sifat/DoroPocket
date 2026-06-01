"use client";

import React from "react";
import { useTheme } from "next-themes";
import { ShoppingBag, Heart, XCircle, CheckCircle2 } from "lucide-react";

const ClientDashPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cards = [{
      title: "Wishlist",
      value: 0,
      icon: Heart,
    },
    {
      title: "Total Orders",
      value: 0,
      icon: ShoppingBag,
    },
    {
      title: "Delivered",
      value: 0,
      icon: CheckCircle2,
    },
    {
      title: "Cancelled",
      value: 0,
      icon: XCircle,
    }
  ];

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${
      isDark ? "bg-[#0B111E] text-white" : "bg-slate-50 text-slate-900"
    }`}>
      
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`rounded-xl p-5 border transition-all duration-300 hover:scale-[1.02] ${
                isDark
                  ? "bg-[#111a2e] border-white/10"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-70">{item.title}</p>
                  <h2 className="text-2xl font-bold mt-1">{item.value}</h2>
                </div>

                <div
                  className={`p-3 rounded-lg ${
                    isDark ? "bg-white/10" : "bg-slate-100"
                  }`}
                >
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientDashPage;