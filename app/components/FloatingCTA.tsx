"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CHECKOUT_URL = "https://pay.onprofit.com.br/M5Ene7El?off=ZNpmS2";

export default function FloatingCTA() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.9, 0.95], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.08], [80, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      <div className="bg-surface-0/90 backdrop-blur-xl border-t border-white/[0.06] px-4 py-3 safe-area-bottom">
        <motion.a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          className="cta-shimmer flex items-center justify-center gap-2 bg-brand-gold text-surface-0 font-bold py-3.5 rounded-xl text-sm w-full"
        >
          Garantir Minha Vaga
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}
