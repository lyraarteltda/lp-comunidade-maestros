"use client";
import { motion } from "framer-motion";
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
import AnimatedSection from "./AnimatedSection";

interface Block {
  icon: LucideIcon;
  title: string;
  benefit: string;
  gradient: string;
  iconBg: string;
  iconColor: string;
}

const blocks: Block[] = [
  {
    icon: Sparkles,
    title: "Sistema de Predição de Conteúdo",
    benefit: "Produza conteúdo em escala com IA — posts, vídeos, roteiros, tudo automatizado.",
    gradient: "from-violet-500/30 via-purple-500/10 to-transparent",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: Target,
    title: "Sistema de Anúncios Inteligentes",
    benefit: "Campanhas que se otimizam sozinhas com inteligência artificial.",
    gradient: "from-rose-500/30 via-pink-500/10 to-transparent",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
  },
  {
    icon: ShoppingCart,
    title: "Ecossistema de Vendas Autônomas",
    benefit: "Agentes de vendas que trabalham 24/7 no WhatsApp, recuperando carrinhos e fechando negócios.",
    gradient: "from-emerald-500/30 via-green-500/10 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Wrench,
    title: "Arsenal de Ferramentas de IA",
    benefit: "Acesso a mais de 100 ferramentas, prompts e templates prontos para uso imediato.",
    gradient: "from-amber-500/30 via-yellow-500/10 to-transparent",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: BarChart3,
    title: "Dashboard CEO & Business Intelligence",
    benefit: "Tome decisões com dados em tempo real — dashboards inteligentes e análises preditivas.",
    gradient: "from-blue-500/30 via-cyan-500/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Cpu,
    title: "Agentes Inteligentes & Automação",
    benefit: "Construa e orquestre agentes de IA que executam tarefas complexas autonomamente.",
    gradient: "from-cyan-500/30 via-teal-500/10 to-transparent",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: Megaphone,
    title: "Marketing Automatizado",
    benefit: "Funis, redes sociais e captação de leads no piloto automático.",
    gradient: "from-orange-500/30 via-red-500/10 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
];

function BlockCard({ block, className, iconSize = "w-12 h-12", iconInner = "w-6 h-6" }: { block: Block; className?: string; iconSize?: string; iconInner?: string }) {
  const Icon = block.icon;
  return (
    <div className="relative z-10">
      <div className={`${iconSize} rounded-xl ${block.iconBg} flex items-center justify-center mb-4`}>
        <Icon className={`${iconInner} ${block.iconColor}`} />
      </div>
      <h3 className={`font-[var(--font-display)] font-semibold text-text-primary mb-2 ${className?.includes("large") ? "text-xl" : "text-lg"}`}>
        {block.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {block.benefit}
      </p>
    </div>
  );
}

export default function KnowledgeBlocks() {
  return (
    <section id="trilhas" className="relative py-24 md:py-32 bg-surface-1">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Trilhas de conhecimento
          </p>
          <h2
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Os Sistemas que Você Vai Dominar
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Mais de 20 horas de conteúdo organizado em blocos de conhecimento prático.
            Cada trilha é um sistema completo — não aulas soltas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured block - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group relative glass-card glass-card-hover rounded-2xl p-8 overflow-hidden transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${blocks[0].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <BlockCard block={blocks[0]} className="large" iconSize="w-14 h-14 rounded-2xl" iconInner="w-7 h-7" />
          </motion.div>

          {/* Second block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative glass-card glass-card-hover rounded-2xl p-7 overflow-hidden transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${blocks[1].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <BlockCard block={blocks[1]} />
          </motion.div>

          {/* Remaining blocks */}
          {blocks.slice(2).map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative glass-card glass-card-hover rounded-2xl p-7 overflow-hidden transition-all duration-300 ${
                i === 3 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${block.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <BlockCard block={block} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
