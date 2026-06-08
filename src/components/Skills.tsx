/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from "react";
import { Network, Server, KeyRound, Cloud, ShieldAlert, Code2, ShieldAlert as Guard } from "lucide-react";
import { portfolioData } from "../data";

// Map icon strings to Lucide icon components representing cybersecurity tasks
const iconMap: Record<string, ComponentType<any>> = {
  Network,
  Server,
  KeyRound,
  Cloud,
  ShieldAlert,
  Code2,
};

export default function Skills() {
  const { skillGroups, verifiedTools } = portfolioData;

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#050505] border-t border-slate-800 relative">
      {/* Cybersecurity matrix ambient elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center space-x-2 text-emerald-500 font-mono text-xs uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-emerald-500 inline-block" />
            <span>02 . Expertises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
            Compétences Techniques
          </h2>
          <p className="text-zinc-400 font-sans text-sm mt-2 max-w-2xl">
            Savoir-faire consolidés par des projets académiques rigoureux, des scénarios de test pratiques et des examens de certification reconnus.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group, index) => {
            const IconComponent = iconMap[group.lucideIconName] || Guard;
            return (
              <div
                id={`skill-card-${index}`}
                key={group.category}
                className="group relative rounded-3xl border border-slate-800 bg-[#0a0a0a] hover:bg-[#0a0a0a]/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/35 hover:shadow-lg hover:shadow-emerald-950/10 hover:-translate-y-1"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-tr-xl rounded-bl-full group-hover:bg-emerald-500/10 transition-colors duration-300" />

                <div>
                  {/* Category icon header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-emerald-400 transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm font-sans mb-5 leading-normal">
                    {group.description}
                  </p>

                  {/* Bullet sub-skills */}
                  <ul className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span className="text-zinc-300 text-xs font-sans leading-normal">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subsection: Technologies maîtrisées */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="mb-6">
            <h3 className="font-display text-white text-lg sm:text-xl font-bold tracking-tight">
              Technologies maîtrisées & outils de prédilection
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans mt-0.5">
              Outils d'infrastructure, de sécurité réseau et d'automatisation exploités régulièrement.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {verifiedTools.map((tool, idx) => (
              <span
                id={`tech-badge-${tool.toLowerCase()}`}
                key={tool}
                className="px-4 py-2 font-mono text-xs font-semibold text-zinc-300 hover:text-emerald-400 bg-[#0a0a0a] hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-500/30 rounded-lg transition-all duration-200 cursor-default select-none hover:shadow-md hover:shadow-emerald-950/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
