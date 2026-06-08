/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Sparkles, Heart, RefreshCw, Zap } from "lucide-react";
import { portfolioData } from "../data";

export default function About() {
  const { title, paragraphs, highlights, softSkills } = portfolioData.about;

  // Map icon decorations for each soft skill
  const getSoftSkillIcon = (skill: string) => {
    if (skill.toLowerCase().includes("équipe")) return <Heart className="w-4 h-4 text-emerald-400" />;
    if (skill.toLowerCase().includes("adapt")) return <RefreshCw className="w-4 h-4 text-emerald-400" />;
    if (skill.toLowerCase().includes("pression")) return <Zap className="w-4 h-4 text-emerald-400" />;
    return <Sparkles className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#050505] border-t border-slate-800 relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.02),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center space-x-2 text-emerald-500 font-mono text-xs uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-emerald-500 inline-block" />
            <span>01 . Présentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
            {title}
          </h2>
        </div>

        {/* Structured layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Paragraphs Panel */}
          <div className="lg:col-span-7 space-y-6">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-zinc-350 text-sm sm:text-base leading-relaxed font-sans">
                {para}
              </p>
            ))}

            {/* Quick Highlighting Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="px-4 py-3 rounded-xl bg-[#0a0a0a] border border-slate-800/80 transition-all">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                    {highlight.label}
                  </span>
                  <span className="text-zinc-350 font-sans text-sm font-semibold block mt-1">
                    {highlight.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills "Compétences Transversales" Section */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-[#0a0a0a] relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-12 translate-x-12" />
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Compétences Transversales
                </h3>
                <Shield className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Dynamic rendering of soft skills */}
              <div className="mt-6 space-y-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3.5 p-3 rounded-xl bg-[#050505] border border-slate-900 hover:border-emerald-500/20 transition-all group"
                  >
                    <div className="p-2 rounded bg-emerald-500/5 border border-emerald-500/15 group-hover:bg-emerald-500/10 transition-colors">
                      {getSoftSkillIcon(skill)}
                    </div>
                    <span className="text-zinc-300 font-sans text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}

                {/* Additional footer notification */}
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-zinc-400 font-sans text-xs leading-relaxed text-center italic">
                    « Prêt à collaborer pour relever vos défis d'infrastructure »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
