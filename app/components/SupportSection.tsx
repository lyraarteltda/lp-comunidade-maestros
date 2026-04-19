"use client";
import { motion } from "framer-motion";
import { MessageSquare, Clock, CheckCircle2, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function SupportSection() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-1">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 space-y-4">
              {/* Question */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0 flex items-center justify-center text-xs font-bold text-white">
                  M
                </div>
                <div className="bg-surface-3 rounded-xl rounded-tl-none px-4 py-3 max-w-xs">
                  <p className="text-text-primary text-sm">
                    Como faço pra conectar meu agente no WhatsApp com n8n? Está dando erro de webhook.
                  </p>
                  <p className="text-text-muted text-[10px] mt-1">14:32</p>
                </div>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-gold to-amber-600 shrink-0 flex items-center justify-center text-xs font-bold text-surface-0">
                  E
                </div>
                <div className="bg-brand-gold/[0.08] border border-brand-gold/20 rounded-xl rounded-tr-none px-4 py-3 max-w-sm">
                  <p className="text-text-primary text-sm">
                    Opa! Isso acontece quando o webhook não está registrado. Faz o seguinte:
                    1. Abre o n8n → Webhook node
                    2. Copia a URL de produção
                    3. Cola no Evolution API...
                  </p>
                  <p className="text-brand-gold text-[10px] mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Respondido em 2h
                  </p>
                </div>
              </div>

              {/* Resolved */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0 flex items-center justify-center text-xs font-bold text-white">
                  M
                </div>
                <div className="bg-surface-3 rounded-xl rounded-tl-none px-4 py-3">
                  <p className="text-text-primary text-sm">
                    Funcionou!! Obrigado, era exatamente isso 🚀
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <AnimatedSection>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-emerald-400 mb-4">
              Suporte diário
            </p>
            <h2
              className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Nunca Mais Fique Travado
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Você nunca está sozinho. Cada dúvida é respondida por quem já
              implementou — especialistas que vivem IA todos os dias. Sem robô,
              sem FAQ genérica, sem esperar semanas.
            </p>

            <div className="space-y-4">
              {[
                { icon: Clock, text: "Resposta em menos de 24 horas" },
                { icon: Shield, text: "Especialistas dedicados, não voluntários" },
                { icon: MessageSquare, text: "Todos os dias, inclusive finais de semana" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.1] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-text-primary text-sm font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
