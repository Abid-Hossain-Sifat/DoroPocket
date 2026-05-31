"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ExploreCard = ({ image, title, category, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-3xl cursor-pointer group ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">
          {category}
        </p>
        <h3 className="text-white text-2xl font-bold mt-1">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </motion.div>
  );
};

const Explore = () => {
  return (
    <div
      className="py-20 transition-colors duration-300 bg-white dark:bg-[#0B111E]"
    >
      <div className="max-w-[80%] mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2
              className="text-4xl font-bold text-slate-900 dark:text-white"
            >
              Explore the Ecosystem
            </h2>
            <p
              className="mt-2 text-slate-600 dark:text-slate-400"
            >
              Our curated gadgets are grouped into high-performance pockets.
            </p>
          </div>
          <button className="text-[#0071E3] font-medium hover:underline">
            View All Categories →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px]">
          <ExploreCard
            className="md:col-span-2 md:row-span-2"
            image="./Assets/explore1.png"
            category="Immersive Gear"
            title="Gaming & AR/VR"
          />
          <ExploreCard
            className="md:col-span-2"
            image="./Assets/explore2.png"
            category="Productivity"
            title="Smart Work"
          />
          <ExploreCard
            image="./Assets/explore3.png"
            category="Audio"
            title="Hi-Fi Sound"
          />
          <ExploreCard
            image="./Assets/explore4.png"
            category="Wearables"
            title="Health & Fitness"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
