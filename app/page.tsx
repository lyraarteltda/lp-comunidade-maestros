"use client";
import { Suspense } from "react";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";

import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import PillarsSection from "./components/PillarsSection";
import KnowledgeBlocks from "./components/KnowledgeBlocks";
import LivesSection from "./components/LivesSection";
import SupportSection from "./components/SupportSection";
import UpdatesSection from "./components/UpdatesSection";
import Testimonials from "./components/Testimonials";
import ForWhomSection from "./components/ForWhomSection";
import Founders from "./components/Founders";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Suspense>
    <SmoothScroll>
      <ScrollProgress />
      <Header />

      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand-gold focus:text-surface-0 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
        Pular para o conteúdo
      </a>

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
