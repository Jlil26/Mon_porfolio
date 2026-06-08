/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Mail, Shield } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function Hero() {
  const { name, title, subTitle } = portfolioData.hero;

  const scrollSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-4"
    >
      {/* Background ambient lighting and grid details */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.08)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 py-12">
        {/* Centered Typography Block */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white"
          >
            {name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-2xl font-mono text-emerald-400 font-medium tracking-wide max-w-2xl mx-auto"
          >
            {title}
          </motion.p>
        </div>

        {/* Catchphrase/Hook */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-400 sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans"
        >
          {subTitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6"
        >
          <button
            id="hero-cta-btn"
            onClick={() => scrollSection("#projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all duration-250 select-none shadow-lg shadow-emerald-500/10 cursor-pointer"
          >
            <span>Consulter mes projets</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="hero-sec-btn"
            href="mailto:kefyl29@gmail.com?subject=Prise%20de%20contact%20-%20Portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg bg-[#0a0a0a] hover:bg-slate-900 text-white border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Me Contacter</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </a>
        </motion.div>
      </div>

      {/* Elegant visual separation line at base */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />
    </section>
  );
}
