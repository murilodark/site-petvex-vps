import React, { useState } from "react";
import { usePublicPlans } from "../../hooks/usePublicPlans";
import { PublicPlan, PublicPlanFeatures } from "../../types/site";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Check, Info, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const getPlanSpecs = (plan: PublicPlan) => {
  const specs: string[] = [];

  // 1. Core numeric limits (omit null/undefined)
  if (plan.max_users !== null && plan.max_users !== undefined) {
    specs.push(`Até ${plan.max_users} ${plan.max_users === 1 ? "usuário" : "usuários simultâneos"}`);
  }
  if (plan.max_clients !== null && plan.max_clients !== undefined) {
    specs.push(`Até ${plan.max_clients.toLocaleString("pt-BR")} clientes/tutores`);
  }
  if (plan.max_pets !== null && plan.max_pets !== undefined) {
    specs.push(`Até ${plan.max_pets.toLocaleString("pt-BR")} pets cadastrados`);
  }
  if (plan.max_appointments !== null && plan.max_appointments !== undefined) {
    specs.push(`Até ${plan.max_appointments.toLocaleString("pt-BR")} agendamentos/mês`);
  }
  if (plan.max_products !== null && plan.max_products !== undefined) {
    specs.push(`Até ${plan.max_products.toLocaleString("pt-BR")} produtos cadastrados`);
  }
  if (plan.max_services !== null && plan.max_services !== undefined) {
    specs.push(`Até ${plan.max_services.toLocaleString("pt-BR")} tipos de serviços`);
  }
  if (plan.max_stock_items !== null && plan.max_stock_items !== undefined) {
    specs.push(`Até ${plan.max_stock_items.toLocaleString("pt-BR")} itens de estoque`);
  }
  if (plan.max_documents !== null && plan.max_documents !== undefined) {
    specs.push(`Até ${plan.max_documents.toLocaleString("pt-BR")} documentos emitidos`);
  }

  // 2. Active boolean features
  const featuresMap: Record<keyof PublicPlanFeatures, string> = {
    appointments: "Agenda integrada de atendimentos",
    grooming: "Módulo de Banho e Tosa (Estética)",
    vaccination: "Controle de vacinas e vermífugos",
    inventory: "Controle de estoque",
    multi_user: "Acesso de equipe simultâneo",
    reports: "Relatórios de desempenho e métricas",
    financial: "Controle financeiro avançado + DRE",
    whatsapp: "Notificações e lembretes automáticos por WhatsApp",
    pdv: "Ponto de Venda (PDV) Integrado",
    boarding: "Módulo de Hotelaria / Hospedagem",
    surgeries: "Acompanhamento Cirúrgico",
    hospitalization: "Prontuário e Internação clínica",
    integrations: "Módulo de integrações avançadas",
    advanced_dashboard: "Painel / Dashboard gerencial completo",
    external_api: "Acesso total à API Petvex",
  };

  const featureEntries = Object.entries(plan.features || {}) as [keyof PublicPlanFeatures, boolean][];
  featureEntries.forEach(([key, value]) => {
    if (value && featuresMap[key]) {
      specs.push(featuresMap[key]);
    }
  });

  return specs;
};

interface PricingSectionProps {
  onOpenSignup?: (plan: PublicPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenSignup }) => {
  const { plans, loading, error, refetch } = usePublicPlans();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const whatsappMsg = "Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet.";

  // Loading skeleton state
  const renderLoading = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
      {[1, 2, 3].map((num) => (
        <Card key={num} className="p-8 border-slate-200/80 bg-white h-[500px] flex flex-col justify-between animate-pulse">
          <div className="space-y-4">
            <div className="h-6 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-4 w-full bg-slate-100 rounded"></div>
            <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
            <div className="h-10 w-1/2 bg-slate-200 rounded pt-4"></div>
            <div className="space-y-3 pt-6">
              {[1, 2, 3, 4, 5].map((idx) => (
                <div key={idx} className="flex gap-2.5 items-center">
                  <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                  <div className="h-3 bg-slate-100 rounded flex-1"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-11 bg-slate-200 rounded-xl mt-8"></div>
        </Card>
      ))}
    </div>
  );

  // Error state
  const renderError = () => (
    <div className="max-w-md mx-auto text-center py-12 px-6 bg-rose-50 border border-rose-200 rounded-2xl shadow-xs">
      <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertCircle size={24} />
      </div>
      <h3 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase mb-2">
        Não foi possível carregar os planos
      </h3>
      <p className="text-slate-650 text-xs sm:text-sm mb-6 leading-relaxed">
        {error || "Erro de conexão com o servidor da API corporativa do Petvex."}
      </p>
      <Button variant="outline" className="font-display text-xs px-6 py-2" onClick={refetch}>
        Tentar Novamente
      </Button>
    </div>
  );

  // Empty state
  const renderEmpty = () => (
    <div className="max-w-md mx-auto text-center py-12 px-6 bg-slate-50 border border-slate-200 rounded-2xl">
      <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
        🐾
      </div>
      <h3 className="font-display font-medium text-slate-800 text-base mb-2">
        Planos indisponíveis
      </h3>
      <p className="text-slate-500 text-xs leading-relaxed">
        Planos temporariamente indisponíveis. Por favor, tente novamente mais tarde ou fale com nossa equipe via WhatsApp.
      </p>
    </div>
  );

  return (
    <section className="py-24 bg-slate-50/50 border-t border-slate-100 relative overflow-hidden font-sans">
      {/* Visual gradients */}
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg" className="relative z-10">
        
        {/* Header content Titles */}
        <SectionTitle
          badge="Planos e Preços"
          title="Planos sob medida para o tamanho do seu sonho"
          subtitle="Escolha o melhor plano para estruturar sua recepção, estética ou clínicas. Cancele ou altere quando quiser."
        />

        {/* Dynamic Billing Cycle Toggle */}
        {!loading && !error && plans && plans.length > 0 && (
          <div className="flex items-center justify-center gap-3.5 mb-14">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`font-display text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-500 hover:text-slate-950 border border-slate-200"
              }`}
            >
              Faturamento Mensal
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`font-display text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                billingCycle === "yearly"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-500 hover:text-slate-950 border border-slate-200"
              }`}
            >
              Faturamento Anual
              <span className="bg-emerald-500 text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md tracking-wider">
                -10%
              </span>
            </button>
          </div>
        )}

        {/* Render states dynamically */}
        {loading ? (
          renderLoading()
        ) : error ? (
          renderError()
        ) : !plans || plans.length === 0 ? (
          renderEmpty()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
            {plans.map((plan, i) => {
              const isEnterprise = plan.monthly_price === 0 && plan.yearly_price === 0;
              const hasDiscount = plan.yearly_discount_percent > 0;
              const specs = getPlanSpecs(plan);

              // Extract price rendering parameters
              let priceText = "";
              let periodText = "";
              let monthlyEquivalent = 0;

              if (!isEnterprise) {
                if (billingCycle === "monthly") {
                  priceText = formatCurrency(plan.monthly_price).replace("R$", "").trim();
                  periodText = "mês";
                } else {
                  monthlyEquivalent = plan.yearly_price / 12;
                  priceText = formatCurrency(monthlyEquivalent).replace("R$", "").trim();
                  periodText = "mês";
                }
              }

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative h-full"
                >
                  {/* Highlight border / badges */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <Badge
                        style={{ backgroundColor: plan.color }}
                        className="font-extrabold text-[9px] tracking-widest px-4 py-1.5 uppercase shadow-md text-white border-none"
                      >
                        {plan.badge} {plan.is_featured ? "★" : ""}
                      </Badge>
                    </div>
                  )}

                  <Card
                    style={{
                      borderColor: plan.is_featured ? plan.color : undefined,
                    }}
                    className={`p-6 h-full flex flex-col justify-between relative transition-all duration-300 hover:shadow-lg ${
                      plan.is_featured
                        ? "shadow-xl shadow-slate-900/5 bg-white ring-2"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div>
                      {/* Name & Short Description */}
                      <div className="mb-4">
                        <h3 className="font-display font-black text-slate-900 text-lg">
                          {plan.name}
                        </h3>
                        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed min-h-[36px]">
                          {plan.short_description || plan.description}
                        </p>
                      </div>

                      {/* Pricing block */}
                      <div className="flex flex-col border-b border-slate-100 pb-5 mb-5 min-h-[85px] justify-center">
                        {isEnterprise ? (
                          <div className="flex flex-col gap-0.5">
                            <span className="text-2xl font-display font-black text-slate-800 leading-tight">
                              Consulte-nos
                            </span>
                            <span className="text-slate-450 font-mono text-[10px]">
                              Limites sob medida
                            </span>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-slate-450 font-display font-semibold text-xs mr-1">R$</span>
                              <span className="text-3xl font-display font-black text-slate-900 tracking-tight leading-none">
                                {priceText}
                              </span>
                              <span className="text-slate-400 font-display text-xs">
                                /{periodText}
                              </span>
                            </div>

                            {/* Yearly equivalent faturamento details */}
                            {billingCycle === "yearly" ? (
                              <p className="text-[10px] text-emerald-600 font-semibold mt-1.5">
                                Cobrado anualmente: {formatCurrency(plan.yearly_price)} ({plan.yearly_discount_percent}% de desc.)
                              </p>
                            ) : (
                              hasDiscount && (
                                <p className="text-[10px] text-slate-400 font-medium mt-1.5">
                                  Economize até {plan.yearly_discount_percent}% no plano anual!
                                </p>
                              )
                            )}
                          </>
                        )}
                      </div>

                      {/* Specs bullets */}
                      <ul className="space-y-2.5 mb-6 text-xs text-slate-650">
                        {specs.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={10} className="stroke-[3]" />
                            </div>
                            <span className="leading-tight text-slate-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer elements Actions */}
                    <div className="mt-auto">
                      <Button
                        variant={plan.is_featured ? "primary" : "outline"}
                        className="w-full font-display font-extrabold text-xs tracking-wider py-2.5 cursor-pointer"
                        style={{
                          backgroundColor: plan.is_featured ? plan.color : undefined,
                          borderColor: plan.is_featured ? plan.color : undefined,
                        }}
                        onClick={() => {
                          if (onOpenSignup) {
                            onOpenSignup(plan);
                          }
                        }}
                      >
                        Contrate Agora
                      </Button>

                      {/* Display Trial Info */}
                      {plan.has_trial && plan.trial_days > 0 && (
                        <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[9px] text-slate-400 font-medium">
                          <Info size={11} className="text-slate-450 shrink-0" />
                          <span>Ativação instantânea sem fidelidade</span>
                        </div>
                      )}
                    </div>

                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

      </Container>
    </section>
  );
};

export default PricingSection;
