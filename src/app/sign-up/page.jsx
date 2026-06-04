"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import {
  User,
  Mail,
  ImageIcon,
  Lock,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data, error: authError } = await authClient.signUp.email({
        email,
        password,
        name,
        image: image || undefined,
        dontRedirect: true, // Use Next.js client-side redirection
      });

      if (authError) {
        setError(authError.message || "Failed to create an account.");
      } else {
        // Clear the automatic session from sign-up
        await authClient.signOut();
        // Redirect to sign-in with the target callbackUrl
        router.push(`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`);
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
      className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border p-8 md:p-10 transition-colors duration-300 bg-white border-slate-200 dark:bg-[#111827] dark:border-slate-800 relative z-10"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 mx-auto bg-[#0071E3] rounded-xl mb-4 flex items-center justify-center text-white font-bold">
          DP
        </div>
        <h2 className="text-3xl font-bold">Create Account</h2>
        <p className="text-sm opacity-70 mt-1">Join DoroPocket and start your journey</p>
      </div>

      {error && (
        <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-5">
          <label className="text-xs font-bold opacity-70">Full Name</label>
          <div className="relative mt-1">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60 text-slate-500 dark:text-slate-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl outline-none border transition duration-300 bg-slate-50 border-slate-200 text-black placeholder-slate-400 focus:border-[#0071E3] dark:bg-[#0B111E] dark:border-slate-800 dark:text-white dark:placeholder-slate-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-xs font-bold opacity-70">Email</label>
          <div className="relative mt-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60 text-slate-500 dark:text-slate-400" />
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

        {/* Image */}
        <div className="mb-5">
          <label className="text-xs font-bold opacity-70">Profile Image URL (Optional)</label>
          <div className="relative mt-1">
            <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60 text-slate-500 dark:text-slate-400" />
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full pl-12 pr-4 py-3 rounded-xl outline-none border transition duration-300 bg-slate-50 border-slate-200 text-black placeholder-slate-400 focus:border-[#0071E3] dark:bg-[#0B111E] dark:border-slate-800 dark:text-white dark:placeholder-slate-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="text-xs font-bold opacity-70">Password</label>
          <div className="relative mt-1">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60 text-slate-500 dark:text-slate-400" />
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
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 text-slate-500 dark:text-slate-400"
            >
              {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Confirm */}
        <div className="mb-6">
          <label className="text-xs font-bold opacity-70">Confirm Password</label>
          <div className="relative mt-1">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60 text-slate-500 dark:text-slate-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full pl-12 pr-12 py-3 rounded-xl outline-none border transition duration-300 bg-slate-50 border-slate-200 text-black placeholder-slate-400 focus:border-[#0071E3] dark:bg-[#0B111E] dark:border-slate-800 dark:text-white dark:placeholder-slate-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 text-slate-500 dark:text-slate-400"
            >
              {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Button */}
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
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </motion.button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm mt-6 opacity-70">
        Already have an account?{" "}
        <Link href={`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
          <span className="text-[#0071E3] font-semibold cursor-pointer">Sign In</span>
        </Link>
      </p>
    </motion.div>
  );
};

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#0B111E] dark:text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#0071E3]/10 blur-3xl rounded-full top-[-180px] right-[-120px]" />
      <Suspense fallback={<Loader2 className="w-10 h-10 animate-spin text-[#0071E3]" />}>
        <SignupForm />
      </Suspense>
    </div>
  );
};

export default SignUpPage;