/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#050505] border-t border-slate-800 relative">
      {/* Soft abstract ambient light background detail */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-emerald-500 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-[1px] bg-emerald-500 inline-block" />
            <span>04 . Contact</span>
            <span className="w-6 h-[1px] bg-emerald-500 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-1">
            Me Contacter
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Pour toute proposition de collaboration ou opportunité professionnelle, n'hésitez pas à me joindre directement. Je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        {/* Centralized Email Banner Card */}
        <div className="max-w-2xl mx-auto bg-[#0a0a0a] rounded-3xl border border-slate-800 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center mb-6">
            <Mail className="w-6 h-6 text-emerald-400" />
          </div>

          <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-2">
            Par courriel direct
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mb-8">
            Cliquez ci-dessous pour ouvrir votre messagerie par défaut
          </p>

          <a
            id="contact-email-btn"
            href="mailto:kefyl29@gmail.com?subject=Prise%20de%20contact%20-%20Portfolio"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/5 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>kefyl29@gmail.com</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Social Links Subtitle */}
          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-[10px] text-zinc-550 uppercase tracking-widest">
              Autres Réseaux professionnels
            </span>
            <div className="flex space-x-3">
              <a
                id="social-link-linkedin"
                href="https://www.linkedin.com/in/" // Remplacer par un profil LinkedIn réel si désiré
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 px-4 rounded-lg bg-[#050505] hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/30 text-zinc-400 hover:text-emerald-400 font-mono text-[10px] tracking-wide inline-flex items-center space-x-1.5 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                id="social-link-github"
                href="https://github.com/" // Remplacer par un profil GitHub réel si désiré
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 px-4 rounded-lg bg-[#050505] hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/30 text-zinc-400 hover:text-emerald-400 font-mono text-[10px] tracking-wide inline-flex items-center space-x-1.5 transition-all"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
