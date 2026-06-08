/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-slate-800 py-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
          {/* Logo / Brand signature */}
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="font-mono text-zinc-400 text-xs tracking-wider">
              RADJI Kefyl <span className="text-emerald-500 font-bold">//</span> SecOps Portfolio
            </span>
          </div>

          {/* Copy statement */}
          <div className="text-zinc-500 font-sans text-xs">
            &copy; 2026 RADJI Kefyl. Tous droits réservés.
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-4">
            <a
              id="footer-github-btn"
              href="https://github.com/" // Remplacez par votre profil réel
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
              aria-label="GitHub de RADJI Kefyl"
              title="Consulter les projets sur GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="footer-linkedin-btn"
              href="https://www.linkedin.com/in/" // Remplacez par votre profil réel
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
              aria-label="LinkedIn de RADJI Kefyl"
              title="Se connecter sur LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
