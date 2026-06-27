import React from "react";
import { siteConfig } from "../../config/site.config";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { Star } from "lucide-react";
import { motion } from "motion/react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <Container size="lg">
        
        {/* Header Titles */}
        <SectionTitle
          badge="Depoimentos Reais"
          title="Quem usa, recomenda e não troca por nada"
          subtitle="Veja histórias de sucesso de gestores de pet shops e clínicas veterinárias que transformaram suas rotinas com o Petvex."
        />

        {/* Testimonial block lists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.testimonials.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                hoverEffect
                className="p-8 h-full flex flex-col justify-between border border-slate-100 bg-white shadow-sm"
              >
                <div>
                  {/* Rating star clusters */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: test.rating }).map((_, idx) => (
                      <Star key={idx} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote Body text */}
                  <blockquote className="text-slate-700 text-sm leading-relaxed mb-6 font-medium italic">
                    "{test.text}"
                  </blockquote>
                </div>

                {/* Profile author footer */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-slate-50 mt-auto">
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-slate-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-slate-900 text-sm">
                      {test.name}
                    </span>
                    <span className="text-slate-500 text-[11px] font-medium uppercase tracking-wide">
                      {test.role} • {test.company}
                    </span>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default TestimonialsSection;
