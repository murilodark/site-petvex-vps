import React, { useEffect } from "react";
import { updateDocumentSeo } from "../lib/seo";
import HeroSection from "../components/sections/HeroSection";
import StartingBusinessSection from "../components/sections/StartingBusinessSection";
import MetricsSection from "../components/sections/MetricsSection";
import ProductDemoSection from "../components/sections/ProductDemoSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import DifferentialsSection from "../components/sections/DifferentialsSection";
import PlansPage from "./planos/page";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FaqSection from "../components/sections/FaqSection";
import WhatsappSection from "../components/sections/WhatsappSection";
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
      {/* 1. HeroSection with product introduction */}
      <HeroSection onNavigate={onNavigate} />

      {/* 1b. Section for starting businesses with CPF */}
      <StartingBusinessSection />

      {/* 2. MetricsSection for social proof count */}
      <MetricsSection />

      {/* 3. ProductDemoSection showing interactive walkthroughs */}
      <ProductDemoSection />

      {/* 4. BenefitsSection showing core value propositions */}
      <BenefitsSection />

      {/* 5. FeaturesSection displaying primary tool columns */}
      <FeaturesSection onNavigate={onNavigate} />

      {/* 6. HowItWorksSection showing implementation timing */}
      <HowItWorksSection />

      {/* 7. DifferentialsSection showing our special edges */}
      <DifferentialsSection />

    

       <PlansPage onOpenSignup={onOpenSignup} />;

      {/* 9. TestimonialsSection detailing user results */}
      <TestimonialsSection />

      {/* 10. FaqSection showing answers to doubts */}
      <FaqSection />

      {/* 11. WhatsappSection providing quick channels */}
      <WhatsappSection />

      {/* 12. FinalCtaSection sealing the conversion */}
      <FinalCtaSection onNavigate={onNavigate} />
    </div>
  );
}
