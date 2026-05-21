import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers/PostHogProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comunidade.maestrosdaia.com"),
  title: "Comunidade Maestros da IA — Vanguarda em Inteligência Artificial",
  description:
    "Acesso contínuo a lives semanais, +20h de conteúdo estruturado em blocos de conhecimento, suporte de especialistas e atualizações constantes. A partir de R$97/mês.",
  keywords: [
    "IA para negócios",
    "automação com IA",
    "curso inteligência artificial",
    "IA para empreendedores",
    "agentes de IA",
    "comunidade IA",
    "automação n8n",
    "inteligência artificial prática",
  ],
  authors: [{ name: "Maestria Academy" }],
  openGraph: {
    title: "Comunidade Maestros da IA — Vanguarda em Inteligência Artificial",
    description:
      "Lives semanais com especialistas, +20h de conteúdo estruturado, 100+ agentes prontos, suporte 7/7. A partir de R$97/mês.",
    type: "website",
    locale: "pt_BR",
    url: "https://comunidade.maestrosdaia.com",
    siteName: "Maestros da IA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Comunidade Maestros da IA — Lives semanais, sistemas prontos, suporte real",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comunidade Maestros da IA",
    description:
      "Lives semanais com especialistas, +20h de conteúdo, 100+ agentes. A partir de R$97/mês.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://comunidade.maestrosdaia.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Preciso saber programar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A Comunidade é feita para quem quer resultado rápido, não para desenvolvedores. Todo o conteúdo é focado em implementação prática. Temos membros com mais de 70 anos de idade implementando tudo sem dificuldades.",
      },
    },
    {
      "@type": "Question",
      name: "Precisarei comprar outros produtos depois?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Todo o conteúdo gravado — as 7 trilhas, o Curso de Claude Code, os 100+ agentes e templates, e todas as atualizações semanais — está incluído na sua assinatura. Não existe módulo travado ou curso extra pra desbloquear.",
      },
    },
    {
      "@type": "Question",
      name: "Por quanto tempo tenho acesso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enquanto sua assinatura estiver ativa, você tem acesso a tudo: conteúdo, lives, suporte e atualizações.",
      },
    },
    {
      "@type": "Question",
      name: "Tem garantia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Garantia incondicional de 7 dias. Se por qualquer motivo você sentir que não é pra você, devolvemos 100% do seu investimento.",
      },
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maestros da IA",
  url: "https://maestrosdaia.com",
  description: "Comunidade e formação em Inteligência Artificial para empreendedores brasileiros.",
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Comunidade Maestros da IA",
  description: "Acesso contínuo a lives semanais, +20h de conteúdo estruturado em blocos de conhecimento, suporte de especialistas e atualizações constantes.",
  provider: {
    "@type": "Organization",
    name: "Maestros da IA",
  },
  offers: {
    "@type": "Offer",
    price: "97",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
