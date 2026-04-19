"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Preciso saber programar?",
    answer: "Não! Nosso conteúdo é 100% prático e feito para não-programadores. Nossos próprios fundadores não sabiam programar quando começaram. Tudo é ensinado de forma que qualquer pessoa consiga implementar.",
  },
  {
    question: "Qual a diferença da Comunidade para a Formação?",
    answer: "A Comunidade é um acesso contínuo com lives semanais, suporte diário e atualizações constantes. A Formação é um programa intensivo de 10 semanas com mentoria individual. A Comunidade é ideal para quem quer se manter atualizado a longo prazo.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Enquanto sua assinatura estiver ativa, você tem acesso a tudo: conteúdo, lives, suporte e atualizações. É um acesso contínuo que evolui junto com o mercado.",
  },
  {
    question: "As lives ficam gravadas?",
    answer: "Sim! Todas as lives ficam gravadas e disponíveis na plataforma para você assistir quando quiser. Não precisa se preocupar se não puder assistir ao vivo.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Você envia sua dúvida na comunidade e nossa equipe de especialistas responde em até 24 horas. São profissionais que já implementaram tudo o que ensinam — não é suporte genérico.",
  },
  {
    question: "E se eu já fiz a Formação?",
    answer: "A Comunidade é o próximo passo perfeito. Você continua aprendendo com lives semanais, recebe atualizações de conteúdo que evolui, e mantém acesso ao suporte diário de especialistas.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, sem burocracia. Mas acreditamos que você não vai querer sair — o valor entregue toda semana faz você querer ficar.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Garantia incondicional de 7 dias. Se por qualquer motivo você sentir que não é pra você, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`border-b border-white/[0.05] last:border-0 ${open ? "bg-white/[0.01]" : ""} transition-colors duration-300`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className={`text-sm md:text-base font-medium pr-6 transition-colors duration-200 ${
          open ? "text-brand-gold" : "text-text-primary group-hover:text-brand-gold"
        }`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center"
        >
          <Plus className={`w-3.5 h-3.5 transition-colors ${open ? "text-brand-gold" : "text-text-muted"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-sm leading-relaxed pb-5 md:pb-6 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-surface-1">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold mb-4"
          >
            Dúvidas frequentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Perguntas Frequentes
          </motion.h2>
        </div>

        <div className="glass-card rounded-2xl px-6 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
