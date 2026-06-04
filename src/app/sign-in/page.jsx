"use client";

import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data, error: authError } = await authClient.signIn.email({
        email,
        password,
        dontRedirect: true, // Navigate client-side for smoother SPA experience
      });

      if (authError) {
        setError(authError.message || "Failed to sign in. Please check your credentials.");
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md rounded-3xl shadow-2xl border p-8 md:p-10 transition-colors duration-300 bg-white border-slate-200 dark:bg-[#111827] dark:border-slate-800 relative z-10"
    >
      {/* header */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 mx-auto bg-[#0071E3] rounded-xl mb-4 flex items-center justify-center text-white font-bold">
          DP
        </div>
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p className="text-sm opacity-70 mt-1">Sign in to continue your journey</p>
      </div>

      {error && (
        <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* email */}
        <div className="mb-5">
          <label className="text-xs font-bold opacity-70">Email</label>
          <div className="relative mt-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl outline-none border transition duration-300 bg-slate-50 border-slate-200 text-black placeholder-slate-400 focus:border-[#0071E3] dark:bg-[#0B111E] dark:border-slate-800 dark:text-white dark:placeholder-slate-500"
            />
          </div>
        </div>

        {/* password */}
        <div className="mb-6">
          <label className="text-xs font-bold opacity-70">Password</label>
          <div className="relative mt-1">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full pl-12 pr-12 py-3 rounded-xl outline-none border transition duration-300 bg-slate-50 border-slate-200 text-black placeholder-slate-400 focus:border-[#0071E3] dark:bg-[#0B111E] dark:border-slate-800 dark:text-white dark:placeholder-slate-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 text-slate-500 dark:text-slate-400"
            >
              {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-[#0071E3] hover:bg-[#005BB5] text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </motion.button>
      </form>

      {/* divider */}
      <div className="flex items-center gap-3 text-xs my-5 opacity-60">
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
        OR
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* google button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full border py-3 rounded-xl flex items-center justify-center gap-3 transition bg-white border-slate-200 hover:bg-slate-50 text-slate-900 dark:bg-[#0B111E] dark:border-slate-800 dark:hover:bg-slate-800 dark:text-white cursor-pointer"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.58z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.32 14.24A7.16 7.16 0 0 1 5 12c0-.79.13-1.57.32-2.34V6.51H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.39l4.11-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.39l4.11 3.15c.94-2.85 3.57-4.96 6.68-4.96z"
          />
        </svg>
        Continue with Google
      </motion.button>

      {/* footer */}
      <p className="text-center text-sm mt-6 opacity-70">
        Don’t have an account?{" "}
        <Link href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
          <span className="text-[#0071E3] font-semibold cursor-pointer">Register</span>
        </Link>
      </p>
    </motion.div>
  );
};

const SigninPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#0B111E] dark:text-white relative overflow-hidden">
      {/* glow (same vibe as navbar blue) */}
      <div className="absolute w-[500px] h-[500px] bg-[#0071E3]/10 blur-3xl rounded-full top-[-180px] right-[-120px]" />
      <Suspense fallback={<Loader2 className="w-10 h-10 animate-spin text-[#0071E3]" />}>
        <SigninForm />
      </Suspense>
    </div>
  );
};

export default SigninPage;
