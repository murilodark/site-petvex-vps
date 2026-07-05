import React, { useEffect } from "react";
import { updateDocumentSeo } from "../lib/seo";
import HeroSection from "../components/sections/HeroSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import AgendaDemoSection from "../components/sections/AgendaDemoSection";
import StartingBusinessSection from "../components/sections/StartingBusinessSection";
import PricingSection from "../components/sections/PricingSection";
import FaqSection from "../components/sections/FaqSection";
import FinalCtaSection from "../components/sections/FinalCtaSection";

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenSignup?: (plan: any) => void;
}

export default function HomePage({ onNavigate, onOpenSignup }: HomePageProps) {
  useEffect(() => {
    updateDocumentSeo();
  }, []);

  return (
    <div className="relative">
      {/* 1. Hero */}
      <HeroSection onNavigate={onNavigate} onOpenSignup={onOpenSignup} />

      {/* 2. Benefícios rápidos */}
      <BenefitsSection />

      {/* 3. Demonstração visual da agenda */}
      <AgendaDemoSection />

      {/* 4 & 5. Para quem é & Comece com CPF */}
      <StartingBusinessSection onOpenSignup={onOpenSignup} />

      {/* 6. Plano */}
      <PricingSection onOpenSignup={onOpenSignup} />

      {/* 7. FAQ */}
      <FaqSection />

      {/* 8. CTA final */}
      <FinalCtaSection onNavigate={onNavigate} onOpenSignup={onOpenSignup} />
    </div>
  );
}
