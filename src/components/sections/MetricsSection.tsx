import React from "react";
import { siteConfig } from "../../config/site.config";
import { Container } from "../ui/Container";

export const MetricsSection: React.FC = () => {
  return (
    <section className="bg-slate-900 text-slate-100 py-12 relative overflow-hidden">
      {/* Underlying decorative borders */}
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {siteConfig.metrics.map((metric, i) => (
            <div 
              key={metric.id} 
              className={`flex flex-col items-center justify-center p-4 ${
                i > 1 ? "pt-8 lg:pt-4" : ""
              }`}
            >
              <div className="flex items-baseline justify-center text-emerald-400 font-display">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="text-2xl sm:text-3xl font-bold ml-0.5">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="mt-2 text-slate-400 text-xs sm:text-sm font-medium tracking-wide uppercase font-display max-w-[200px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MetricsSection;
