"use client";

import React from "react";
import Link from "next/link";
// Importing from react-icons
import { FaGlobe, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    collections: ["Gaming Gear", "Audio Solutions", "Mobile Devices", "Smart Living"],
    support: ["Shipping Policy", "Returns & Refunds", "Technical Support", "Track Order"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
  };

  // Mapping icons to their respective components
  const socialIcons = [FaGlobe, FaGithub, FaLinkedin, FaFacebook];

  return (
    <footer className="py-16 transition-colors duration-300 border-t bg-white border-slate-100 dark:bg-[#0B111E] dark:border-slate-800">
      <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0071E3] rounded-lg flex items-center justify-center text-white font-bold text-sm">
              DP
            </div>
            <span className="text-xl font-bold text-[#0052A3] dark:text-white">
              DoroPocket
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Curating the future of consumer technology with precision engineering and avant-garde style.
          </p>
          <div className="flex gap-3 pt-2">
            {socialIcons.map((Icon, i) => (
              <button 
                key={i} 
                className="p-2 rounded-full transition-colors bg-slate-100 text-slate-600 hover:text-[#0071E3] dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#0071E3] dark:text-cyan-400">
              {title}
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    className="text-sm transition-colors text-slate-600 hover:text-[#0071E3] dark:text-slate-400 dark:hover:text-white"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;