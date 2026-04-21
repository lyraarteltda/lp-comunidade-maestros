"use client";
import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Loader2,
  ShieldAlert,
  Eye,
  EyeOff,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

function formatLocalPhone(digits: string): string {
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isValidPhone(countryCode: string, localDigits: string): boolean {
  if (countryCode === "55") {
    return localDigits.length === 11;
  }
  return localDigits.length >= 8 && localDigits.length <= 12;
}


export default function EntrarPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("55");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const phoneDigits = phoneLocal.replace(/\D/g, "");
  const maxLocalDigits = countryCode === "55" ? 11 : 12;

  const isFormValid =
    name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    isValidPhone(countryCode, phoneDigits) &&
    senha.length >= 6;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    if (!isFormValid) return;

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch(
        "https://n8n.srv1055313.hstgr.cloud/webhook/circle-whatsapp-signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            whatsapp: countryCode + phoneDigits,
            senha: senha,
          }),
        }
      );
      if (!res.ok) throw new Error("Erro no servidor");
      setIsSuccess(true);
    } catch {
      setError(
        "Algo deu errado. Verifique sua conexão e tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen bg-surface-0 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] rounded-full bg-brand-gold/[0.05] blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.03] blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:py-24">
        {/* Logo / Back link */}
        <AnimatedSection className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-secondary transition-colors text-sm"
          >
            <span className="gradient-text-gold font-[var(--font-display)] font-bold text-lg tracking-tight">
              Maestros da IA
            </span>
          </a>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md"
            >
              {/* Hero text */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/[0.08] border border-brand-gold/15 mb-6">
                  <Users className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-[11px] font-bold text-brand-gold tracking-[0.1em] uppercase">
                    Acesso Gratuito
                  </span>
                </div>

                <h1
                  className="font-[var(--font-display)] font-extrabold tracking-[-0.03em] mb-4"
                  style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}
                >
                  <span className="gradient-text-white-strong">
                    Comunidade Aberta
                  </span>
                  <br />
                  <span className="gradient-text-gold">dos Maestros da IA</span>
                </h1>

                <p
                  className="text-text-secondary leading-relaxed max-w-sm mx-auto"
                  style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
                >
                  Conecte-se com empreendedores que estão usando IA para
                  transformar seus negócios. Sem custo, sem cartão.
                </p>
              </div>

              {/* Form card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 glow-gold-sm noise-bg">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-5"
                  noValidate
                >
                  {/* Honeypot */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Como podemos te chamar?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-1 border border-white/[0.06] rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-gold/40 focus:ring-1 focus:ring-brand-gold/20 transition-colors outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-1 border border-white/[0.06] rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-gold/40 focus:ring-1 focus:ring-brand-gold/20 transition-colors outline-none"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label
                      htmlFor="phone-local"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      WhatsApp
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-shrink-0 w-[5.5rem]">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm pointer-events-none">+</span>
                        <input
                          id="country-code"
                          type="tel"
                          autoComplete="tel-country-code"
                          value={countryCode}
                          onChange={(e) => {
                            const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
                            setCountryCode(digits);
                          }}
                          className="w-full bg-surface-1 border border-white/[0.06] rounded-xl pl-7 pr-2 py-3 text-text-primary text-center focus:border-brand-gold/40 focus:ring-1 focus:ring-brand-gold/20 transition-colors outline-none"
                        />
                      </div>
                      <div className="relative flex-1">
                        <input
                          id="phone-local"
                          type="tel"
                          required
                          autoComplete="tel-national"
                          placeholder={countryCode === "55" ? "(11) 99999-9999" : "Número"}
                          value={formatLocalPhone(phoneDigits.slice(0, maxLocalDigits))}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "").slice(0, maxLocalDigits);
                            setPhoneLocal(raw);
                          }}
                          className="w-full bg-surface-1 border border-white/[0.06] rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-gold/40 focus:ring-1 focus:ring-brand-gold/20 transition-colors outline-none"
                        />
                        {phoneDigits.length > 0 && (
                          <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium ${isValidPhone(countryCode, phoneDigits) ? "text-emerald-400" : "text-text-muted"}`}>
                            {phoneDigits.length}/{countryCode === "55" ? 11 : "8+"}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-text-muted text-xs mt-1.5">
                      Você receberá um botão para liberar seu acesso via WhatsApp
                    </p>
                  </div>

                  {/* Senha */}
                  <div>
                    <label
                      htmlFor="senha"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Senha
                    </label>
                    <div className="relative">
                      <input
                        id="senha"
                        type={showSenha ? "text" : "password"}
                        required
                        autoComplete="new-password"
                        placeholder="Mínimo 6 caracteres"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="w-full bg-surface-1 border border-white/[0.06] rounded-xl px-4 py-3 pr-12 text-text-primary placeholder:text-text-muted focus:border-brand-gold/40 focus:ring-1 focus:ring-brand-gold/20 transition-colors outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowSenha(!showSenha)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors"
                        aria-label={showSenha ? "Esconder senha" : "Mostrar senha"}
                      >
                        {showSenha ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center bg-red-500/[0.08] border border-red-500/15 rounded-lg px-4 py-2"
                    >
                      {error}
                    </motion.p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    whileHover={isFormValid && !isSubmitting ? { scale: 1.02, y: -1 } : {}}
                    whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="cta-shimmer w-full flex items-center justify-center gap-3 bg-brand-gold text-surface-0 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-brand-gold/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-opacity"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Entrando...
                      </>
                    ) : (
                      <>
                        Entrar na Comunidade Gratuita
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  {/* Verification warning */}
                  <div className="flex items-start gap-2.5 rounded-xl bg-amber-500/[0.06] border border-amber-500/15 px-4 py-3">
                    <ShieldAlert className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-amber-200/80 text-xs leading-relaxed">
                      Emails ou números de WhatsApp falsos serão identificados e
                      não terão acesso aprovado na comunidade.
                    </p>
                  </div>

                  <p className="text-text-muted text-xs text-center">
                    Seus dados estão seguros e não serão compartilhados
                  </p>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md text-center"
            >
              <div className="glass-card-featured rounded-2xl p-8 sm:p-10 noise-bg">
                <div className="relative z-10">
                  {/* WhatsApp icon with pulse */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className="w-20 h-20 rounded-full bg-emerald-500/[0.12] flex items-center justify-center"
                      style={{ animation: "pulse-gold 2.5s infinite" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-10 h-10 text-emerald-400"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                      className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  <h2
                    className="font-[var(--font-display)] font-bold tracking-tight mb-3 gradient-text-white-strong"
                    style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
                  >
                    Quase lá!
                  </h2>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    Clique no botão abaixo para liberar seu acesso à comunidade.
                  </p>

                  <a
                    href="https://wa.me/5511995631610?text=Ol%C3%A1!%20Gostaria%20de%20entrar%20na%20Comunidade%20Aberta%20dos%20Maestros%20da%20IA!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 flex-shrink-0"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Abrir WhatsApp e Liberar Acesso
                  </a>

                  <p className="text-text-muted text-sm mt-6 max-w-xs mx-auto leading-relaxed">
                    Ao clicar, o WhatsApp abrirá com uma mensagem pronta. É só
                    enviar para receber seu link de acesso!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer link */}
        <div className="mt-8 text-text-muted text-xs">
          <a
            href="/"
            className="hover:text-text-secondary transition-colors"
          >
            ← Voltar para a página principal
          </a>
        </div>
      </div>
    </main>
  );
}
