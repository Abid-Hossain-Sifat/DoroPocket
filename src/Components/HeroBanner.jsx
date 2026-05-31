"use client";

import React from "react";
import { ArrowRight, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const upDownDistance = -20;
  const animationDuration = 3;

  return (
    <section
      className="py-24 transition-colors duration-300 bg-white dark:bg-[#0B111E]"
    >
      <div className="max-w-[80%] mx-auto">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div>
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-[0.2em] uppercase bg-blue-50 text-[#0071E3] dark:bg-slate-800 dark:text-cyan-400"
            >
              ● Latest Gadgets
            </span>

            <h1
              className="mt-8 text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white"
            >
              Unbox the{" "}
              <span className="italic text-[#0071E3]">
                Future
              </span>
            </h1>

            <p
              className="mt-8 text-xl leading-relaxed max-w-2xl text-slate-600 dark:text-slate-400"
            >
              Experience the evolution of gadget-core. We bridge the
              gap between imagination and reality with sleek,
              high-fidelity technology that fits right in your pocket.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <button className="bg-[#0071E3] hover:bg-[#0052A3] text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all">
                All Products
                <ArrowRight size={20} />
              </button>

              <button
                className="px-10 py-4 rounded-full text-lg font-semibold transition-all bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                Contact Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-[550px]">
              <motion.div
                className="aspect-square rounded-[3rem] flex items-center justify-center bg-blue-50 dark:bg-slate-800/50"
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
                  className="w-[88%] h-auto object-contain"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-8 flex items-center gap-3 p-4 pr-6 rounded-2xl shadow-xl border bg-white border-slate-100 text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                style={{ rotate: 8 }}
                animate={{ y: [0, upDownDistance * 0.7, 0] }}
                transition={{
                  duration: animationDuration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.7,
                }}
              >
                <div className="w-12 h-12 bg-[#0071E3] rounded-xl flex items-center justify-center text-white">
                  <Wifi size={22} />
                </div>

                <div>
                  <p className="font-bold">
                    Pocket Link v2
                  </p>

                  <p
                    className="text-sm text-slate-500 dark:text-slate-400"
                  >
                    Available for pre-order
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;