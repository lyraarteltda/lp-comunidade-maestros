"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Target,
  ShoppingCart,
  Wrench,
  BarChart3,
  Cpu,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Block {
  icon: LucideIcon;
  title: string;
  benefit: string;
  gradient: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

const blocks: Block[] = [
  {
    icon: Sparkles,
    title: "Sistema de Predição de Conteúdo",
    benefit: "O mesmo sistema que levou nossos canais de 0 a 4M+ views/mês. Produza posts, vídeos e roteiros em escala — com IA fazendo o trabalho pesado.",
    gradient: "from-violet-500/25 via-purple-500/5 to-transparent",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/15",
  },
  {
    icon: Target,
    title: "Anúncios Inteligentes",
    benefit: "Campanhas que se otimizam sozinhas. Criativos, segmentação e orçamento geridos por IA — o mesmo framework usado em operações de R$500k+/mês.",
    gradient: "from-rose-500/25 via-pink-500/5 to-transparent",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    borderColor: "border-rose-500/15",
  },
  {
    icon: ShoppingCart,
    title: "Vendas Autônomas",
    benefit: "Agentes de vendas no WhatsApp que prospectam, qualificam e fecham 24/7. Recuperação de carrinho, follow-up e atendimento — tudo no piloto automático.",
    gradient: "from-emerald-500/25 via-green-500/5 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/15",
  },
  {
    icon: Wrench,
    title: "Arsenal de Ferramentas",
    benefit: "100+ ferramentas, prompts e templates validados em operações reais. Copie, cole e adapte — cada um já foi testado e refinado por especialistas.",
    gradient: "from-amber-500/25 via-yellow-500/5 to-transparent",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/15",
  },
  {
    icon: BarChart3,
    title: "Dashboard CEO",
    benefit: "Visão 360° do seu negócio em tempo real. Dashboards inteligentes com análises preditivas que transformam dados em decisões de alto impacto.",
    gradient: "from-blue-500/25 via-cyan-500/5 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/15",
  },
  {
    icon: Cpu,
    title: "Agentes & Automação",
    benefit: "Construa agentes autônomos que executam operações complexas sem supervisão. O mesmo tipo de tecnologia por trás do Galaria AI Operational System.",
    gradient: "from-cyan-500/25 via-teal-500/5 to-transparent",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/15",
  },
  {
    icon: Megaphone,
    title: "Marketing Automatizado",
    benefit: "Funis completos, gestão de redes sociais e captação de leads — tudo orquestrado por IA. Da atração ao fechamento, sem gargalos manuais.",
    gradient: "from-orange-500/25 via-red-500/5 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/15",
  },
];

const gridPositions = [
  "md:col-span-2",
  "",
  "",
  "md:col-span-2",
  "",
  "",
  "md:col-span-3",
];

export default function KnowledgeBlocks() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.querySelectorAll(".kb-card"), {
      scale: 0.92,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 75%",
      },
    });
  }, { scope: gridRef });

  return (
    <section id="trilhas" className="relative py-16 md:py-24 bg-surface-1 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4"
          >
            Trilhas de conhecimento
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Os Sistemas que Você Vai Dominar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-text-secondary max-w-xl mx-auto"
          >
            +20 horas organizadas em blocos de conhecimento prático.
            Cada trilha é um sistema completo — não aulas soltas.
          </motion.p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            const isWide = gridPositions[i]?.includes("col-span-2") || gridPositions[i]?.includes("col-span-3");
            return (
              <div
                key={block.title}
                className={`kb-card group relative glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-300 ${gridPositions[i]} ${
                  isWide ? "p-7 md:p-8" : "p-6 md:p-7"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${block.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${block.iconBg} flex items-center justify-center shrink-0 border ${block.borderColor}`}>
                    <Icon className={`w-5 h-5 ${block.iconColor}`} />
                  </div>
                  <div>
                    <h3 className={`font-[var(--font-display)] font-semibold text-text-primary mb-1.5 ${
                      isWide ? "text-lg" : "text-base"
                    }`}>
                      {block.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {block.benefit}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-connector absolute bottom-0 left-0 right-0" />
    </section>
  );
}
