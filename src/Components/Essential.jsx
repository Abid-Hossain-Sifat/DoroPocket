"use client";

import React from "react";
import { Gamepad2, Headphones, Mouse } from "lucide-react";
import { motion } from "framer-motion";

const essentials = [
  {
    icon: Gamepad2,
    title: "Pro Controllers",
    desc: "Zero-latency wireless response with haptic precision for competitive play.",
    features: ["Custom Mapping", "Hall Effect Sensors"],
    color: "border-cyan-400",
  },
  {
    icon: Headphones,
    title: "Spatial Audio",
    desc: "Immersive 3D soundscapes that let you hear every footstep in the digital realm.",
    features: ["ANC 2.0 Tech", "60hr Battery Life"],
    color: "border-blue-500",
  },
  {
    icon: Mouse,
    title: "Lightweight Peripherals",
    desc: "Optimized for speed and accuracy with military-grade optical sensors.",
    features: ["25K DPI Hero Sensor", "0.5ms Polling Rate"],
    color: "border-yellow-400",
  },
];

const EssentialCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={`p-8 rounded-3xl border-t-4 cursor-pointer transition-colors duration-300 bg-slate-50 hover:bg-white shadow-lg dark:bg-slate-900/50 dark:hover:bg-slate-900 dark:shadow-none border-opacity-60 ${item.color}`}
    >
      <item.icon
        size={32}
        className="mb-6 text-[#0071E3] dark:text-cyan-400"
      />
      <h3
        className="text-xl font-bold mb-4 text-slate-900 dark:text-white"
      >
        {item.title}
      </h3>
      <p
        className="text-sm mb-6 leading-relaxed text-slate-600 dark:text-slate-400"
      >
        {item.desc}
      </p>

      <div className="space-y-3">
        {item.features.map((feat, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xs font-semibold"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#0071E3] dark:bg-cyan-400"
            ></span>
            <span className="text-slate-700 dark:text-slate-300">
              {feat}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Essential = () => {
  return (
    <div
      className="w-full py-20 transition-colors duration-300 bg-white dark:bg-[#0B111E]"
    >
      <div className="max-w-[80%] mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl font-bold flex items-center gap-3 text-slate-900 dark:text-white"
          >
            <span className="w-1 h-8 bg-[#0071E3] block rounded-full"></span>
            Gaming Rig Essentials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {essentials.map((item, index) => (
            <EssentialCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Essential;
