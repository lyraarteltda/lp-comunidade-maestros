"use client";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import PillarsSection from "./components/PillarsSection";
import KnowledgeBlocks from "./components/KnowledgeBlocks";
import LivesSection from "./components/LivesSection";
import SupportSection from "./components/SupportSection";
import UpdatesSection from "./components/UpdatesSection";
import Testimonials from "./components/Testimonials";
import Founders from "./components/Founders";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProgress />

      <main>
        <Hero />
        <ProblemSection />
        <PillarsSection />
        <KnowledgeBlocks />
        <LivesSection />
        <SupportSection />
        <UpdatesSection />
        <Testimonials />
        <Founders />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
