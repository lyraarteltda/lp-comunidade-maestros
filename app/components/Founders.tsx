"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "Arthur Endo",
    role: "Co-founder & CEO",
    gradient: "from-brand-gold via-amber-500 to-orange-600",
    bio: "Doutor Honoris Causa, pioneiro em IA aplicada a negócios. Músico que virou empreendedor de IA — saiu de R$2.300/mês dando aula de violão para R$2.5 milhões em 15 meses orquestrando agentes de IA.",
    highlight: "R$2.300/mês → R$2.5M em 15 meses",
  },
  {
    name: "Lyria Zoccal",
    role: "Co-founder & COO",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    bio: "Consultora Enterprise, especialista em IA aplicada a processos corporativos e ERP/SAP. Transforma operações complexas em sistemas inteligentes que rodam no piloto automático.",
    highlight: "Enterprise → IA automatizada",
  },
];

export default function Founders() {
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!statsRef.current) return;
    const counters = statsRef.current.querySelectorAll(".founder-stat");
    counters.forEach((el) => {
      const target = Number(el.getAttribute("data-value"));
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          (el as HTMLElement).textContent = Math.round(obj.val).toLocaleString("pt-BR");
        },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });
  }, { scope: statsRef });

  return (
    <section className="relative py-28 md:py-40 bg-surface-2 noise-bg overflow-hidden">
      <div className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full bg-brand-gold/[0.025] blur-[160px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.02] blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Quem está por trás
          </p>
          <h2
            className="font-[var(--font-display)] font-bold tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            <span className="gradient-text-white">Dois Não-Programadores.</span>
            <br />
            <span className="gradient-text-gold">R$2.5 Milhões em 15 Meses.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Saíram de um curso de violão com R$2.300/mês para construir uma empresa de IA
            que fatura milhões — sem escrever uma linha de código.
          </p>
        </motion.div>

        {/* Stats bar */}
        <div ref={statsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-10 grid grid-cols-3 gap-6 divide-x divide-white/[0.06]"
          >
            <div className="text-center">
              <div className="font-[var(--font-display)] font-bold text-2xl md:text-3xl gradient-text-gold">
                <span className="founder-stat" data-value="2500000">2.500.000</span>
              </div>
              <div className="text-text-muted text-xs mt-1">Faturamento em R$</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-display)] font-bold text-2xl md:text-3xl text-text-primary">
                <span className="founder-stat" data-value="15">15</span>
              </div>
              <div className="text-text-muted text-xs mt-1">Meses até o resultado</div>
            </div>
            <div className="text-center">
              <div className="font-[var(--font-display)] font-bold text-2xl md:text-3xl text-text-primary">
                <span className="founder-stat" data-value="0">0</span>
              </div>
              <div className="text-text-muted text-xs mt-1">Linhas de código escritas</div>
            </div>
          </motion.div>
        </div>

        {/* Founder cards — editorial style, alternating */}
        <div className="space-y-6">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 ${
                i === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Avatar */}
              <div className="shrink-0">
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${founder.gradient} shadow-lg shadow-brand-gold/10 flex items-center justify-center`}>
                  <div className="w-full h-full rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${i === 1 ? "md:text-right" : ""}`}>
                <h3 className="font-[var(--font-display)] font-bold text-xl text-text-primary">
                  {founder.name}
                </h3>
                <p className="text-brand-gold text-sm font-medium mb-3">{founder.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{founder.bio}</p>
                <div className={`inline-block glass-card-featured rounded-lg px-4 py-2`}>
                  <p className="text-brand-gold text-xs font-bold tracking-wide">{founder.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10 blur-sm" />
            <p className="relative glass-card rounded-xl px-8 py-4 text-sm text-text-secondary italic">
              &ldquo;Nenhum dos dois sabia programar. Provamos que IA é sobre
              estratégia, não sobre código.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
