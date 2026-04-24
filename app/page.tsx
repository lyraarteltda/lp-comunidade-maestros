"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import PillarsSection from "./components/PillarsSection";

const KnowledgeBlocks = dynamic(() => import("./components/KnowledgeBlocks"));
const LivesSection = dynamic(() => import("./components/LivesSection"));
const SupportSection = dynamic(() => import("./components/SupportSection"));
const UpdatesSection = dynamic(() => import("./components/UpdatesSection"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const ForWhomSection = dynamic(() => import("./components/ForWhomSection"));
const Founders = dynamic(() => import("./components/Founders"));
const Pricing = dynamic(() => import("./components/Pricing"));
const FAQ = dynamic(() => import("./components/FAQ"));
const FinalCTA = dynamic(() => import("./components/FinalCTA"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <Suspense>
    <SmoothScroll>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand-gold focus:text-surface-0 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
        Pular para o conteúdo
      </a>

      <ScrollProgress />
      <Header />

      <main id="conteudo">
        <Hero />
        <ProblemSection />
        <PillarsSection />
        <KnowledgeBlocks />
        <LivesSection />
        <SupportSection />
        <UpdatesSection />
        <Testimonials />
        <ForWhomSection />
        <Founders />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

    </SmoothScroll>
    </Suspense>
  );
}
