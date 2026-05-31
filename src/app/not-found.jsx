"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen py-20 transition-colors duration-300 ${isDark ? "bg-[#0B111E] text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="max-w-[80%] mx-auto flex flex-col items-center justify-center text-center">
        {/* Icon Container */}
        <div
          className={`p-6 rounded-full mb-8 ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
        >
          <AlertTriangle className="w-16 h-16 text-[#0071E3]" />
        </div>

        {/* Content */}
        <h1 className="text-9xl font-bold tracking-tighter">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
        <p
          className={`mt-4 text-lg max-w-md ${isDark ? "text-slate-400" : "text-slate-600"}`}
        >
          Sorry, the page you are looking for cannot be found. Please check the
          correct URL or return to our homepage.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="mt-10 flex items-center gap-2 bg-[#0071E3] hover:bg-[#005bb5] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
