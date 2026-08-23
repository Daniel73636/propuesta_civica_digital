'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Menu, X, Zap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio',           href: '#inicio' },
  { label: 'Problema',         href: '#problema' },
  { label: 'Propuesta',        href: '#propuesta' },
  { label: 'Auto-enrolamiento',href: '#auto-enrolamiento' },
  { label: 'Arquitectura',     href: '#arquitectura' },
  { label: 'Seguridad',        href: '#seguridad' },
  { label: 'Impacto',          href: '#impacto' },
  { label: 'Roadmap',          href: '#roadmap' },
  { label: 'Documento',        href: '#documento' },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [progress,       setProgress]       = useState(0);
  const [activeSection,  setActiveSection]  = useState('#inicio');

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 40);

    const docH = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docH > 0 ? (y / docH) * 100 : 0);

    const sections = NAV_LINKS.map(l => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(`#${sections[i]}`);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full bg-gradient-to-r from-metro-700 via-metro-500 to-metro-300"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.08 }}
        />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-xl border-b border-metro-500/10 shadow-ink'
          : 'bg-transparent'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#inicio')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-metro-500/10 border border-metro-500/30 group-hover:border-metro-400/60 transition-colors">
                <Smartphone className="h-4 w-4 text-metro-400" />
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-metro-500 animate-spark" />
              </div>
              <span className="text-sm font-bold tracking-widest text-white">
                CÍVICA <span className="text-metro-500">DIGITAL</span>
              </span>
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-2 text-[12px] font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href
                      ? 'text-metro-400 bg-metro-500/10'
                      : 'text-ink-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#documento')}
                className="ml-3 flex items-center gap-1.5 px-4 py-2 text-[12px] font-bold rounded-lg bg-metro-500 text-black hover:bg-metro-400 transition-colors shadow-metro"
              >
                <Zap className="h-3.5 w-3.5" />
                Ver propuesta
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-ink-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-ink-950/98 backdrop-blur-xl pt-20 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                    activeSection === link.href
                      ? 'text-metro-400 bg-metro-500/10 border border-metro-500/20'
                      : 'text-ink-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollTo('#documento')}
                className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3.5 text-base font-bold rounded-xl bg-metro-500 text-black"
              >
                <Zap className="h-4 w-4" />
                Ver propuesta
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
