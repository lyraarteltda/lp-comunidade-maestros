import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Comunidade Maestros da IA — Vanguarda em Inteligência Artificial",
  description:
    "Acesso contínuo a lives semanais, +20h de conteúdo estruturado em blocos de conhecimento, suporte de especialistas e atualizações constantes.",
  openGraph: {
    title: "Comunidade Maestros da IA — Vanguarda em Inteligência Artificial",
    description:
      "Acesso contínuo a lives semanais, +20h de conteúdo estruturado em blocos de conhecimento, suporte de especialistas e atualizações constantes.",
    type: "website",
    locale: "pt_BR",
    url: "https://comunidade.maestrosdaia.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comunidade Maestros da IA",
    description:
      "Acesso contínuo a lives semanais, +20h de conteúdo estruturado, suporte de especialistas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
