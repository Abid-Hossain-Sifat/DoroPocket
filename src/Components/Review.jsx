"use client";

import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Julian Draxler",
    role: "VERIFIED COLLECTOR",
    initials: "JD",
    text: "The build quality of the Atmos Pro is unlike anything I've ever felt. It's not just a phone; it's a piece of technical art. Shipping was lightning fast.",
  },
  {
    name: "Aria Montgomery",
    role: "CREATIVE DIRECTOR",
    initials: "AM",
    text: "Ghost Keys MK-I completely changed my workflow. The typing experience is sublime. DoroPocket is now my only source for gear.",
  },
  {
    name: "Sarah Chen",
    role: "AUDIO ENGINEER",
    initials: "SC",
    text: "Precision at its finest. The customer support helped me pick the perfect audio setup for my home studio. Highly recommend!",
  },
];

const Review = () => {
  return (
    <section className="py-20 transition-colors duration-300 bg-white dark:bg-[#0B111E]">
      <div className="max-w-[80%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            The Pulse of the Community
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Trusted by the world's most demanding tech enthusiasts.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl flex flex-col justify-between border transition-colors duration-300 bg-slate-50 border-slate-100 dark:bg-[#141C2C] dark:border-slate-800"
            >
              <div>
                <div className="flex gap-1 mb-6 text-[#0071E3]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="stroke-none" />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed mb-8 text-slate-600 dark:text-slate-300">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0071E3] flex items-center justify-center text-white font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-[10px] tracking-widest font-bold uppercase text-slate-400 dark:text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;