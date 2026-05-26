"use client";

import React from "react";
import { useTheme } from "next-themes";
import { ArrowRight, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const upDownDistance = -20;
  const animationDuration = 3;

  return (
    <div
      className={`w-full py-20 transition-colors duration-300 ${isDark ? "bg-[#0B111E]" : "bg-white"}`}
    >
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 w-full space-y-6">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${isDark ? "bg-slate-800 text-cyan-400" : "bg-blue-50 text-[#0071E3]"}`}
          >
            ● Latest Gadgets
          </span>
          <h1
            className={`text-5xl md:text-6xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Unbox the <span className="italic text-[#0071E3]">Future</span>
          </h1>
          <p
            className={`text-lg max-w-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Experience the evolution of gadget-core. We bridge the gap between
            imagination and reality with sleek, high-fidelity technology that
            fits right in your pocket.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button className="bg-[#0071E3] hover:bg-[#0052A3] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all">
              All Product <ArrowRight size={18} />
            </button>
            <button
              className={`px-8 py-3 rounded-full font-medium transition-all ${isDark ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}
            >
              Contact Now
            </button>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="relative w-full max-w-[450px]">
            <motion.div
              className={`aspect-square rounded-[3rem] flex items-center justify-center ${isDark ? "bg-slate-800/50" : "bg-blue-50"}`}
              animate={{ y: [0, upDownDistance, 0] }}
              transition={{
                duration: animationDuration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <img
                src="./Assets/Hero.png"
                alt="Hero Gadget"
                className="w-[80%] h-auto object-contain"
              />
            </motion.div>

            <motion.div
              className={`absolute -bottom-6 -left-4 md:-left-12 flex items-center gap-3 p-4 pr-6 rounded-2xl shadow-xl border ${isDark ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-100 text-slate-900"}`}
              style={{ rotate: 8 }}
              animate={{ y: [0, upDownDistance * 0.7, 0] }}
              transition={{
                duration: animationDuration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.7,
              }}
            >
              <div className="w-10 h-10 bg-[#0071E3] rounded-xl flex items-center justify-center text-white">
                <Wifi size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Pocket Link v2</p>
                <p
                  className={`text-[11px] ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  Available for pre-order
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
