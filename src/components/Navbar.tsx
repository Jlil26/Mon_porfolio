/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, Shield, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "À Propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-lg shadow-[#050505]/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand / Terminal look */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2 font-display text-lg sm:text-xl font-bold tracking-tight text-white group"
          >
            <div className="p-1 px-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs flex items-center space-x-1">
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              <span>SEC</span>
            </div>
            <span className="font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">
              RADJI<span className="text-white font-sans font-bold">.K</span>
            </span>
          </a>

          {/* Desktop Navigation Link panel */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const active = activeSection === item.href.replace("#", "");
              return (
                <a
                  id={`nav-item-${item.href.replace("#", "")}`}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-medium tracking-wide transition-all ${
                    active
                      ? "text-emerald-400 bg-emerald-500/10 border-b border-emerald-500"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Indicator & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
              aria-label="Menu principal"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-800 bg-[#0a0a0a] px-4 pt-2 pb-6 space-y-1 shadow-2xl"
          >
            {navItems.map((item) => {
              const active = activeSection === item.href.replace("#", "");
              return (
                <a
                  id={`mobile-nav-item-${item.href.replace("#", "")}`}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-lg font-mono text-sm font-medium tracking-wide transition-all ${
                    active
                      ? "text-emerald-400 bg-emerald-500/10 border-l-2 border-emerald-500"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 px-4 flex items-center space-x-2 text-zinc-500 font-mono text-[10px]">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>Statut: Terminal Connecté</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
