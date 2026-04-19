"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play, Pause } from "lucide-react";

interface VideoTestimonial {
  name: string;
  role: string;
  videoSrc: string;
  quote: string;
  gradient: string;
}

interface TextTestimonial {
  name: string;
  role: string;
  quote: string;
  gradient: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    name: "Rodrigo",
    role: "Empresário",
    videoSrc: "/Rodrigo.mp4",
    quote: "Formação bem clara e prática. Comunidade WhatsApp muito forte — o suporte faz diferença real.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Lucas",
    role: "Consultor",
    videoSrc: "/Lucas.mp4",
    quote: "Melhor aquisição que poderia ter feito. Conteúdo direto ao ponto e suporte que realmente resolve.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Alice",
    role: "Empreendedora",
    videoSrc: "/Alice.mp4",
    quote: "IA como aliada estratégica — mudou a forma como eu enxergo meu negócio.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Bruno",
    role: "Gestor de Tráfego",
    videoSrc: "/Bruno.mp4",
    quote: "Processo que levava uma semana, hoje em 4-6 horas com automação.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Ricardo",
    role: "Analista de Dados",
    videoSrc: "/Ricardo.mp4",
    quote: "Metade do que eu achava impossível, hoje faço em casa e no trabalho.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "André",
    role: "Freelancer",
    videoSrc: "/Andre.mp4",
    quote: "Pouco tempo de curso, já vendi projetos com ticket médio considerável.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Rodrigo Eve",
    role: "Membro desde Jan/2026",
    videoSrc: "/RodrigoEve.mp4",
    quote: "Se eu consegui, você vai conseguir também. A comunidade te carrega quando você trava.",
    gradient: "from-brand-gold to-amber-600",
  },
  {
    name: "Ivan",
    role: "Empreendedor",
    videoSrc: "/Ivan.mp4",
    quote: "A comunidade entrega o que promete — e vai muito além.",
    gradient: "from-indigo-500 to-violet-600",
  },
];

const textTestimonials: TextTestimonial[] = [
  {
    name: "Fernanda",
    role: "CEO · E-commerce",
    quote: "Automatizei meu funil inteiro em 2 semanas. Hoje meu time de 3 faz o trabalho de 10 — tudo com os sistemas da comunidade.",
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "Carlos",
    role: "Dono de Agência",
    quote: "Comecei sem saber nada de IA. Hoje entrego projetos de automação com ticket médio de R$5k. A comunidade mudou meu negócio.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    name: "Mariana",
    role: "Consultora de Marketing",
    quote: "O conteúdo é atualizado toda semana — não tem como ficar pra trás. As lives são um diferencial absurdo.",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "Pedro",
    role: "Desenvolvedor",
    quote: "Os agentes prontos pra copiar e colar economizaram semanas de desenvolvimento. Qualidade de produção real.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Juliana",
    role: "Empreendedora Digital",
    quote: "O suporte é o que faz a diferença. Não é FAQ genérica — são especialistas que entendem o contexto do seu negócio.",
    gradient: "from-sky-500 to-blue-600",
  },
];

function VideoCard({ t }: { t: VideoTestimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="shrink-0 w-[280px] md:w-[300px] rounded-2xl overflow-hidden mx-2 border border-white/[0.06] bg-surface-2/60 backdrop-blur-sm group">
      <div className="relative aspect-[9/14] bg-surface-3 cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={t.videoSrc}
          poster={t.videoSrc.replace('.mp4', '-poster.jpg')}
          playsInline
          preload="metadata"
          muted
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          onPlay={() => { if (videoRef.current) videoRef.current.muted = false; }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-surface-0/90 via-surface-0/20 to-transparent transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${isPlaying ? "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100" : "scale-100 opacity-100"}`}>
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-xs leading-relaxed mb-2 line-clamp-2">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${t.gradient} shrink-0 opacity-80`} />
              <div>
                <p className="text-white text-xs font-medium">{t.name}</p>
                <p className="text-white/50 text-[10px]">{t.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextCard({ t }: { t: TextTestimonial }) {
  return (
    <div className="shrink-0 w-[280px] md:w-[300px] rounded-2xl p-5 mx-2 border border-white/[0.04] bg-surface-2/40 backdrop-blur-sm hover:border-white/[0.08] transition-all duration-500 group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-brand-gold/80 text-brand-gold/80" />
          ))}
        </div>
        <Quote className="w-3.5 h-3.5 text-white/[0.06] group-hover:text-white/[0.1] transition-colors duration-500" />
      </div>
      <p className="text-text-secondary text-[13px] leading-relaxed mb-4 line-clamp-4">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.04]">
        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${t.gradient} shrink-0 opacity-80`}>
          <div className="w-full h-full rounded-full bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div>
          <p className="text-text-primary text-sm font-medium">{t.name}</p>
          <p className="text-text-muted text-[10px]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const videoCards = [...videoTestimonials, ...videoTestimonials, ...videoTestimonials];
  const textCards = [...textTestimonials, ...textTestimonials, ...textTestimonials, ...textTestimonials];

  return (
    <section id="depoimentos" className="relative py-24 md:py-32 bg-surface-1 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-gold/80 mb-4"
          >
            Quem já faz parte
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-bold gradient-text-white tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
          >
            Resultados Reais de Membros Reais
          </motion.h2>
        </div>
      </div>

      {/* Video testimonials row — scrolls left */}
      <div className="relative mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface-1 via-surface-1/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface-1 via-surface-1/80 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: [0, -(videoTestimonials.length * 316)] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" } }}
        >
          {videoCards.map((t, i) => (
            <VideoCard key={`v-${i}`} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Text testimonials row — scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface-1 via-surface-1/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface-1 via-surface-1/80 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: [-(textTestimonials.length * 316), 0] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
        >
          {textCards.map((t, i) => (
            <TextCard key={`t-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
