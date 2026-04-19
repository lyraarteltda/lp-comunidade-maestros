import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

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
    "Acesso contínuo a lives semanais, +20h de conteúdo estruturado em blocos de conhecimento, suporte de especialistas e atualizações constantes. R$97/mês.",
  openGraph: {
    title: "Comunidade Maestros da IA — Vanguarda em Inteligência Artificial",
    description:
      "Lives semanais com especialistas, +20h de conteúdo estruturado, 100+ agentes prontos, suporte 7/7. Tudo por R$97/mês.",
    type: "website",
    locale: "pt_BR",
    url: "https://comunidade.maestrosdaia.com",
    siteName: "Maestros da IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comunidade Maestros da IA",
    description:
      "Lives semanais com especialistas, +20h de conteúdo, 100+ agentes. R$97/mês.",
  },
  robots: {
    index: true,
    follow: true,
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
        text: "Não! Nosso conteúdo é 100% prático e feito para não-programadores. Nossos próprios fundadores não sabiam programar quando começaram.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença da Comunidade para a Formação?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Comunidade é um acesso contínuo com lives semanais, suporte de especialistas e atualizações constantes. A Formação é um programa intensivo de 10 semanas.",
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
