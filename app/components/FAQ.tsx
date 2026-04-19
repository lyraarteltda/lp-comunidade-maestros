"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-text-primary text-sm md:text-base font-medium pr-4 group-hover:text-brand-gold transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-text-muted" />
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
            <p className="text-text-secondary text-sm leading-relaxed pb-5">
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
    <section id="faq" className="relative py-16 md:py-24 bg-surface-1">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-brand-gold mb-4">
            Dúvidas frequentes
          </p>
          <h2
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Perguntas Frequentes
          </h2>
        </AnimatedSection>

        <div className="glass-card rounded-2xl px-6 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
