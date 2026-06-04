"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, ShoppingCart, User, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const { data: session } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    setDropdownOpen(false);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  if (!mounted) {
    return <div className="h-[64px]" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`w-full border-b transition-all duration-300 ${isDark
          ? "bg-[#0B111E] border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
        }`}
    >
      <div className="max-w-[80%] mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#0071E3] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            DP
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${isDark ? "text-white" : "text-[#0052A3]"}`}
          >
            DoroPocket
          </span>
        </div>

        <div
          className={`hidden md:flex items-center gap-8 text-[15px] font-medium ${isDark ? "text-slate-300" : "text-slate-600"}`}
        >
          <Link
            href="/"
            className={`pb-1 transition-colors ${pathname === "/"
                ? isDark
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-[#0071E3] border-b-2 border-[#0071E3]"
                : isDark
                  ? "hover:text-cyan-400"
                  : "hover:text-[#0071E3]"
              }`}
          >
            Explore
          </Link>

          <Link
            href="/products"
            className={`pb-1 transition-colors ${pathname === "/products"
                ? isDark
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-[#0071E3] border-b-2 border-[#0071E3]"
                : isDark
                  ? "hover:text-cyan-400"
                  : "hover:text-[#0071E3]"
              }`}
          >
            All Products
          </Link>

          <Link
            href="/new-arrivals"
            className={`pb-1 transition-colors ${pathname === "/new-arrivals"
                ? isDark
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-[#0071E3] border-b-2 border-[#0071E3]"
                : isDark
                  ? "hover:text-cyan-400"
                  : "hover:text-[#0071E3]"
              }`}
          >
            New Arrivals
          </Link>

          <Link
            href="/support"
            className={`pb-1 transition-colors ${pathname === "/support"
                ? isDark
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-[#0071E3] border-b-2 border-[#0071E3]"
                : isDark
                  ? "hover:text-cyan-400"
                  : "hover:text-[#0071E3]"
              }`}
          >
            Support
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-full transition-all duration-200 ${isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
          >
            {isDark ? (
              <Moon size={22} className="text-cyan-400 stroke-[2]" />
            ) : (
              <Sun size={22} className="text-yellow-500 stroke-[2]" />
            )}
          </button>

          <button
            className={`relative p-1.5 rounded-full transition-colors ${isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
          >
            <ShoppingCart size={22} className="stroke-[2]" />
            <span className="absolute -top-1 -right-1 bg-[#0071E3] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {session ? (
            <div
              ref={dropdownRef}
              className="relative animate-in fade-in duration-200"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-3 py-1.5 px-3 rounded-full transition-all duration-300 ${isDark
                    ? "hover:bg-slate-800 text-slate-200"
                    : "hover:bg-slate-100 text-slate-700"
                  }`}
              >
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="w-6 h-6 rounded-full object-cover border border-[#0071E3]"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#0071E3] flex items-center justify-center text-white font-bold text-xs">
                    {session.user.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                )}

                <div className="hidden sm:flex flex-col leading-tight text-left">
                  <span className="text-sm font-medium truncate max-w-[80px]">
                    {session.user.name}
                  </span>
                  <span className="text-[11px] opacity-70">Account</span>
                </div>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  className={`absolute right-0 mt-2 w-48 rounded-2xl shadow-xl border overflow-hidden z-50 transition-all duration-200 ${
                    isDark
                      ? "bg-[#0B111E] border-slate-800 text-white"
                      : "bg-white border-slate-100 text-slate-800"
                  }`}
                >
                  <Link
                    href="/client-dashboard"
                    onClick={() => setDropdownOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors ${
                      isDark ? "hover:bg-slate-800" : "hover:bg-slate-50"
                    }`}
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`flex items-center gap-2 w-full px-4 py-3 text-sm text-left transition-colors border-t cursor-pointer ${
                      isDark
                        ? "hover:bg-slate-855 border-slate-800 text-red-400"
                        : "hover:bg-slate-50 border-slate-100 text-red-600"
                    }`}
                  >
                    <LogOut size={16} />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href='/sign-in'>
              <button
                className={`flex items-center gap-3 py-1.5 px-3 rounded-full transition-all duration-300 ${isDark
                    ? "hover:bg-slate-800 text-slate-200"
                    : "hover:bg-slate-100 text-slate-700"
                  }`}
              >
                <User size={22} className="stroke-[2]" />

                <div className="hidden sm:flex flex-col leading-tight text-left">
                  <span className="text-sm font-medium">Account</span>

                  <span className="text-[11px] opacity-70">Register or Login</span>
                </div>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
