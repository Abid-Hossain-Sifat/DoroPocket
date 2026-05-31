"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Gauge, Sparkles } from "lucide-react";

const Playstyle = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-24 transition-colors duration-300 ${
        isDark ? "bg-[#0B111E] text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-[80%] mx-auto">
        {/* Main Box */}
        <div
          className={`rounded-[2.5rem] border p-8 lg:p-12 transition-all duration-300 ${
            isDark
              ? "bg-slate-900/60 border-slate-800"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <div className="grid md:grid-cols-[1.1fr_0.9fr] items-center gap-8 lg:gap-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span
                className={`font-semibold tracking-[0.35em] uppercase text-sm ${
                  isDark ? "text-blue-500" : "text-[#0071E3]"
                }`}
              >
                For The Pro Players
              </span>

              <h2 className="mt-6 text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02]">
                Elevate Your
                <br />
                <span
                  className={`${isDark ? "text-blue-500" : "text-[#0071E3]"}`}
                >
                  Playstyle.
                </span>
              </h2>

              <p
                className={`mt-8 text-xl md:text-2xl leading-relaxed max-w-xl ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Engineered for low latency and high precision. Our gaming pocket
                series brings the arcade power into your hands.
              </p>

              {/* Features */}
              <div className="mt-10 flex flex-wrap gap-10">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-xl ${isDark ? "bg-slate-800" : "bg-white"}`}
                  >
                    <Gauge
                      size={22}
                      className={isDark ? "text-blue-500" : "text-[#0071E3]"}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Ultra Low Latency</h4>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                    >
                      0.1ms response time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-xl ${isDark ? "bg-slate-800" : "bg-white"}`}
                  >
                    <Sparkles
                      size={22}
                      className={isDark ? "text-blue-500" : "text-[#0071E3]"}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Custom Ergonomics</h4>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                    >
                      Tailored for grip comfort.
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-12 rounded-full bg-[#0071E3] px-10 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(0,113,227,0.35)] transition-all hover:bg-[#005bb5]"
              >
                Shop Gaming Collection
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-end"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`overflow-hidden rounded-[2rem] flex items-center justify-center ${
                  isDark
                    ? "shadow-[0_20px_80px_rgba(0,113,227,0.18)]"
                    : "shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                }`}
              >
                <img
                  src="/Assets/Playstyle.png"
                  alt="Gaming Mouse"
                  className="w-full h-auto max-w-[560px] object-contain block"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playstyle;
