'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Playstyle = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`py-24 px-6 transition-colors duration-300 ${
        isDark ? 'bg-[#0B111E] text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 flex-1 min-w-0"
        >
          <span
            className={`font-semibold tracking-[0.2em] uppercase text-xs ${
              isDark ? 'text-blue-500' : 'text-[#0071E3]'
            }`}
          >
            For the pro players
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Elevate Your <br />
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDark
                  ? 'from-blue-400 to-cyan-300'
                  : 'from-[#0071E3] to-blue-500'
              }`}
            >
              Playstyle.
            </span>
          </h2>

          <p
            className={`text-lg max-w-md leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-slate-600'
            }`}
          >
            Engineered for low latency and high precision. Our gaming pocket
            series brings the arcade power into your hands.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-fit px-8 py-3 rounded-full font-semibold transition-all ${
              isDark
                ? 'bg-blue-600 text-white'
                : 'bg-[#0071E3] text-white'
            }`}
          >
            Shop Gaming Collection
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-end min-w-0"
        >
          <img
            src="/Assets/Playstyle.png"
            alt="Gaming Mouse"
            className={`w-full max-w-[420px] h-auto rounded-3xl shadow-2xl border ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Playstyle;