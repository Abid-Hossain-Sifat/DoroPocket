"use client";

import React from "react";
import { useTheme } from "next-themes";

const stats = [
  { value: "50k+", label: "Active Users" },
  { value: "200+", label: "Tech Brands" },
  { value: "4.9/5", label: "User Rating" },
  { value: "24h", label: "Fast Delivery" },
];

const Rating = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`w-full py-16 border-b transition-colors duration-300 ${isDark ? "bg-[#0B111E] border-slate-800" : "bg-white border-slate-100"}`}>
      <div className="max-w-[80%] mx-auto flex justify-between items-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-between text-center">
            <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-[#0071E3]"}`}>
              {stat.value}
            </h3>
            <p className={`text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;