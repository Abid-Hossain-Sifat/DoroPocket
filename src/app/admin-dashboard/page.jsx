"use client";

import React from "react";
import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";
import { useTheme } from "next-themes";

const AdminDashPage = () => {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const stats = [
    {
      title: "Total Products",
      value: "120",
      icon: Package,
    },
    {
      title: "Total Orders",
      value: "340",
      icon: ShoppingCart,
    },
    {
      title: "Total Users",
      value: "890",
      icon: Users,
    },
    {
      title: "Revenue",
      value: "$5,200",
      icon: DollarSign,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p
          className={`mt-1 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Welcome back to DoroPocket Admin Panel.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className={`rounded-2xl border p-5 transition ${
                isDark
                  ? "bg-[#0F172A] border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`text-sm ${
                      isDark
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {stat.value}
                  </h2>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#0071E3]/10 flex items-center justify-center">
                  <Icon
                    size={24}
                    className="text-[#0071E3]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div
        className={`rounded-2xl border p-6 ${
          isDark
            ? "bg-[#0F172A] border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <h2 className="text-xl font-semibold mb-5">
          Recent Orders
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className={`border-b ${
                  isDark
                    ? "border-slate-800"
                    : "border-slate-200"
                }`}
              >
                <th className="text-left py-3">Order ID</th>
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Amount</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-4">#DP001</td>
                <td>John Doe</td>
                <td>$120</td>
                <td>
                  <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500">
                    Delivered
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-4">#DP002</td>
                <td>Sarah Smith</td>
                <td>$85</td>
                <td>
                  <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-500">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-4">#DP003</td>
                <td>Alex Johnson</td>
                <td>$210</td>
                <td>
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500">
                    Processing
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashPage;