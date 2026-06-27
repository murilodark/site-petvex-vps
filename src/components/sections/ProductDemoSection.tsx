import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { MockupBrowser } from "../ui/MockupBrowser";
import { DashboardPreview } from "../shared/DashboardPreview";
import { Calendar, AlertTriangle, TrendingUp, Users } from "lucide-react";

export const ProductDemoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"agenda" | "financeiro" | "estoque">("agenda");

  return (
    <section className="py-24 bg-white relative">
      <Container size="lg">
        
        {/* Title details */}
        <SectionTitle
          badge="Demonstração do Produto"
          title="Conheça a interface por dentro e encante-se"
          subtitle="Explore nossa área de simulação interativa. Clique nos botões abaixo para ver como cada área do Petvex funciona na prática."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left panel: Active Explanations */}
          <div className="lg:col-span-4 space-y-4">
            
            <button
              onClick={() => setActiveTab("agenda")}
              className={`w-full p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                activeTab === "agenda"
                  ? "bg-slate-900 border-slate-905 text-white shadow-lg"
                  : "bg-slate-50 border-slate-100 hover:bg-slate-100/70 text-slate-800"
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${activeTab === "agenda" ? "bg-emerald-500/20 text-emerald-400" : "bg-white text-slate-700 border"}`}>
                <Calendar size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-sm">Agenda de Estética & Consultas</span>
                <span className={`text-xs ${activeTab === "agenda" ? "text-slate-350" : "text-slate-500"} leading-relaxed`}>
                  Tire o estresse dos agendamentos! Veja banhos, tosas e consultas organizados de forma clara e interativa.
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("financeiro")}
              className={`w-full p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                activeTab === "financeiro"
                  ? "bg-slate-900 border-slate-905 text-white shadow-lg"
                  : "bg-slate-50 border-slate-100 hover:bg-slate-100/70 text-slate-800"
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${activeTab === "financeiro" ? "bg-emerald-500/20 text-emerald-400" : "bg-white text-slate-700 border"}`}>
                <TrendingUp size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-sm">Controle de Faturamento Diário</span>
                <span className={`text-xs ${activeTab === "financeiro" ? "text-slate-350" : "text-slate-500"} leading-relaxed`}>
                  Relatórios financeiros detalhados, ticket médio por cliente, lucro líquido e split de taxas de forma transparente.
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("estoque")}
              className={`w-full p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                activeTab === "estoque"
                  ? "bg-slate-900 border-slate-905 text-white shadow-lg"
                  : "bg-slate-50 border-slate-100 hover:bg-slate-100/70 text-slate-800"
              }`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${activeTab === "estoque" ? "bg-emerald-500/20 text-emerald-400" : "bg-white text-slate-700 border"}`}>
                <AlertTriangle size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-sm">Avisos de Estoque Crítico</span>
                <span className={`text-xs ${activeTab === "estoque" ? "text-slate-350" : "text-slate-500"} leading-relaxed`}>
                  O Petvex sinaliza produtos em falta com quantidades mínimas configuráveis por categoria. Zero perdas de insumos!
                </span>
              </div>
            </button>

          </div>

          {/* Right panel: Static Browser Hosting Interactive Pre-fill Dashboard */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Context Callout Badge over preview based on tab */}
              <div className="absolute -top-7 left-6 z-20 bg-emerald-600 border border-emerald-500 text-white font-display text-xs font-semibold px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-bounce">
                <span>⚡</span>
                <span>
                  {activeTab === "agenda" && "Você pode clicar em 'Novo Pet' na simulação!"}
                  {activeTab === "financeiro" && "Faturamento consolidado: R$ 24.850,00"}
                  {activeTab === "estoque" && "Inspeção e alerta de remédios ativos."}
                </span>
              </div>

              <MockupBrowser url="app.petvex.com.br/dashboard">
                <DashboardPreview />
              </MockupBrowser>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default ProductDemoSection;
