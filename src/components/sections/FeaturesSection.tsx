import React from "react";
import { siteConfig } from "../../config/site.config";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { FeatureIcon } from "../shared/FeatureIcon";
import { Button } from "../ui/Button";
import { motion } from "motion/react";
import { Landmark, ArrowRight } from "lucide-react";

interface FeaturesSectionProps {
  onNavigate: (path: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onNavigate }) => {
  // Display top 8 on Home, linking the rest to the dedicated pages
  const featuredList = siteConfig.features.slice(0, 8);

  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
      <Container size="lg">
        
        {/* Header content title */}
        <SectionTitle
          badge="Funcionalidades Premium"
          title="Tudo em um só lugar. Esqueça as anotações em papel."
          subtitle="Desenvolvemos telas intuitivas voltadas para a produtividade da recepção, dos cuidadores e dos veterinários."
        />

        {/* Feature widgets grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((feat, i) => {
            const isWide = i === 0 || i === 4 || i === 6 || i === 7;
            const colSpanClass = isWide ? "lg:col-span-2" : "lg:col-span-1";
            
            let cardBgClass = "bg-white border-slate-100 text-slate-800 hover:border-emerald-500/20";
            let textTitleClass = "text-slate-900";
            let textDescClass = "text-slate-600";
            let iconContainerBg = "bg-slate-50 border-slate-100 text-slate-800";
            let iconClass = "text-indigo-650";

            if (i === 4) {
              // Elegant Emerald card
              cardBgClass = "bg-linear-to-br from-emerald-600 to-emerald-700 text-white border-transparent hover:border-emerald-400/30 shadow-[0_10px_30px_rgba(5,150,105,0.15)]";
              textTitleClass = "text-white";
              textDescClass = "text-emerald-100";
              iconContainerBg = "bg-white/15 border-white/10 text-white";
              iconClass = "text-white";
            } else if (i === 6) {
              // Sleek Dark Slate card
              cardBgClass = "bg-slate-950 text-white border-slate-800/80 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-slate-950/45";
              textTitleClass = "text-white";
              textDescClass = "text-slate-400";
              iconContainerBg = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
              iconClass = "text-emerald-400";
            }

            return (
              <motion.div
                key={feat.id}
                className={colSpanClass}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card 
                  hoverEffect
                  className={`p-6.5 h-full flex flex-col justify-between ${cardBgClass}`}
                >
                  <div className={`flex ${isWide ? "sm:flex-row items-start gap-4 sm:gap-6" : "flex-col items-start gap-4"}`}>
                    {/* Micro Icon */}
                    <div className={`p-3 rounded-2xl border font-bold flex items-center justify-center shrink-0 ${iconContainerBg}`}>
                      <FeatureIcon name={feat.iconName} className={iconClass} size={22} />
                    </div>

                    <div className="flex flex-col gap-1.5 flex-1">
                      <h3 className={`font-display font-bold text-base sm:text-lg leading-snug ${textTitleClass}`}>
                        {feat.title}
                      </h3>
                      <p className={`text-xs sm:text-sm leading-relaxed ${textDescClass}`}>
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to Redirect to functionalities catalog */}
        <div className="mt-14 text-center">
          <Button
            variant="outline"
            onClick={() => {
              onNavigate("/funcionalidades");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group font-display font-semibold text-sm rounded-xl py-3 border-slate-300"
          >
            Ver catálogo completo de funcionalidades
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default FeaturesSection;
