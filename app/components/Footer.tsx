"use client";

export default function Footer() {
  return (
    <footer className="bg-surface-0 border-t border-white/[0.04] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-[var(--font-display)] font-bold text-text-primary text-lg mb-0.5">
              Maestros<span className="text-brand-gold">.</span>
            </p>
            <p className="text-text-muted text-xs">
              Lyra Arte LTDA &mdash; CNPJ 48.028.646/0001-00
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/maestrosdaia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@maestrosdaia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="TikTok"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.21 8.21 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4 text-text-muted text-xs">
              <a href="/termos" className="hover:text-text-secondary transition-colors">
                Termos de Uso
              </a>
              <span className="text-white/[0.08]">|</span>
              <a href="https://politica.maestrosdaia.com/" className="hover:text-text-secondary transition-colors">
                Política de Privacidade
              </a>
              <span className="text-white/[0.08]">|</span>
              <a href="mailto:contato@lyraarte.com" className="hover:text-text-secondary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-text-muted text-[10px]">
            Todos os direitos reservados &copy; {new Date().getFullYear()} Lyra Arte LTDA. Este site
            não faz parte do Facebook, Google ou qualquer outra plataforma de anúncios. Os
            resultados apresentados são de membros reais e podem variar.
          </p>
        </div>
      </div>
    </footer>
  );
}
