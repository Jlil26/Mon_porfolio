/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { FolderGit2, ArrowUpRight, ShieldCheck, Terminal, Server, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Project } from "../data";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterCategories = [
    { value: "all", label: "Tous les projets" },
    { value: "security", label: "Cybersécurité & PKI" },
    { value: "network", label: "Réseau & Supervision" },
    { value: "system-dev", label: "Systèmes & Code" },
  ];

  const getFilteredProjects = () => {
    if (selectedFilter === "all") return projects;
    if (selectedFilter === "security") {
      return projects.filter(p => p.category.toLowerCase().includes("cybersécurité") || p.category.toLowerCase().includes("cryptographie"));
    }
    if (selectedFilter === "network") {
      return projects.filter(p => p.category.toLowerCase().includes("réseau") || p.category.toLowerCase().includes("vidéosurveillance"));
    }
    if (selectedFilter === "system-dev") {
      return projects.filter(p => p.category.toLowerCase().includes("système") || p.category.toLowerCase().includes("développement"));
    }
    return projects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#050505] border-t border-slate-800 relative">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center space-x-2 text-emerald-500 font-mono text-xs uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-emerald-500 inline-block" />
            <span>03 . Travaux</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
            Projets Réalisés
          </h2>
          <p className="text-zinc-400 font-sans text-sm mt-2 max-w-2xl">
            Retours d'expérience concrets fondés sur des simulations d'infrastructure de niveau entreprise et le développement de solutions cyber-défensives innovantes.
          </p>
        </div>

        {/* Categories filters panel */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800 animate-fade-in">
          {filterCategories.map((cat) => (
            <button
              id={`filter-btn-${cat.value}`}
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-4 py-2 font-mono text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === cat.value
                  ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20"
                  : "bg-[#0a0a0a] hover:bg-slate-900 text-zinc-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          id="projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#0a0a0a] hover:bg-[#0a0a0a]/90 p-6 transition-all duration-300 hover:border-emerald-500/35 hover:shadow-lg hover:shadow-emerald-950/10 min-h-[340px]"
              >
                {/* Category small floating pill */}
                <div className="flex justify-between items-start mb-6 w-full">
                  <div className="p-2 rounded bg-[#050505] border border-slate-800 text-emerald-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Core description contents */}
                <div className="flex-grow space-y-3">
                  <h3 className="font-display font-extrabold text-white text-base sm:text-lg group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Badges and action button */}
                <div className="mt-6 pt-5 border-t border-slate-800">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 font-mono text-[10px] text-zinc-300 bg-[#050505] border border-slate-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button "Voir le rapport" with exact requested anchor layout */}
                  <a
                    id={`project-report-btn-${project.id}`}
                    href="#" /* Remplacez par le lien GitHub du projet ou le PDF du rapport */
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#050505] hover:bg-emerald-500 hover:text-zinc-950 text-white font-mono text-xs font-semibold border border-slate-800 hover:border-emerald-500 transition-all duration-200"
                    title={`Consulter le rapport de ${project.title}`}
                  >
                    <span>Consulter le rapport</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
