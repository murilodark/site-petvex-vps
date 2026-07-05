import React, { useEffect } from "react";
import { updateDocumentSeo } from "../../lib/seo";
import { BenefitsSection } from "../../components/sections/BenefitsSection";

export default function BeneficiosPage() {
  useEffect(() => {
    updateDocumentSeo(
      "Benefícios",
      "Descubra o que muda na sua rotina com o Petvex. Menos papel, menos planilhas e mais controle."
    );
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans">
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <BenefitsSection />
    </div>
  );
}
