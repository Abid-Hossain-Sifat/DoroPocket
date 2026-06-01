"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  ImageIcon,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#0B111E] dark:text-white">

      {/* Glow (same style as signin) */}
      <div className="absolute w-[500px] h-[500px] bg-[#0071E3]/10 blur-3xl rounded-full top-[-180px] right-[-120px]" />

      {/* CARD (MATCHED EXACT WIDTH SYSTEM) */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border p-8 md:p-10 transition-colors duration-300 bg-white border-slate-200 dark:bg-[#111827] dark:border-slate-800"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto bg-[#0071E3] rounded-xl mb-4 flex items-center justify-center text-white font-bold">
            DP
          </div>

          <h2 className="text-3xl font-bold">
            Create Account
          </h2>

          <p className="text-sm opacity-70 mt-1">
            Join DoroPocket and start your journey
          </p>
        </div>

        <form>
          {/* Name */}
          <div className="mb-5">
            <label className="text-xs font-bold opacity-70">
              Full Name
            </label>

            <div className="relative mt-1">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none border bg-slate-50 border-slate-200 text-black dark:bg-[#0B111E] dark:border-slate-800 dark:text-white"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="text-xs font-bold opacity-70">
              Email
            </label>

            <div className="relative mt-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none border bg-slate-50 border-slate-200 text-black dark:bg-[#0B111E] dark:border-slate-800 dark:text-white"
              />
            </div>
          </div>

          {/* Image */}
          <div className="mb-5">
            <label className="text-xs font-bold opacity-70">
              Profile Image URL
            </label>

            <div className="relative mt-1">
              <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none border bg-slate-50 border-slate-200 text-black dark:bg-[#0B111E] dark:border-slate-800 dark:text-white"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="text-xs font-bold opacity-70">
              Password
            </label>

            <div className="relative mt-1">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 rounded-xl outline-none border bg-slate-50 border-slate-200 text-black dark:bg-[#0B111E] dark:border-slate-800 dark:text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>

          {/* Confirm */}
          <div className="mb-6">
            <label className="text-xs font-bold opacity-70">
              Confirm Password
            </label>

            <div className="relative mt-1">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 rounded-xl outline-none border bg-slate-50 border-slate-200 text-black dark:bg-[#0B111E] dark:border-slate-800 dark:text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
              >
                {showConfirmPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#0071E3] hover:bg-[#005BB5] text-white py-3 rounded-xl font-semibold"
          >
            Create Account
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6 opacity-70">
          Already have an account?{" "}
          <Link href="/sign-in">
            <span className="text-[#0071E3] font-semibold cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpPage;