"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const CHECKOUT_URL = "https://pay.onprofit.com.br/M5Ene7El?off=ZNpmS2";

const navLinks = [
  { label: "Pilares", href: "#pilares" },
  { label: "Conteúdo", href: "#trilhas" },
  { label: "Lives", href: "#lives" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface-0/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-[var(--font-display)] font-bold text-lg tracking-tight text-text-primary">
            Maestros<span className="text-brand-gold">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-text-tertiary hover:text-text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "bg-brand-gold text-surface-0 cta-shimmer"
                  : "bg-white/[0.06] text-text-primary hover:bg-white/[0.1] border border-white/[0.06]"
              }`}
            >
              Fazer Parte
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-text-primary p-2"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface-0/95 backdrop-blur-xl pt-20"
          >
            <nav className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center gap-2 bg-brand-gold text-surface-0 font-bold px-8 py-3 rounded-xl"
              >
                Quero Fazer Parte
                <ArrowRight className="w-5 h-5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
