import React, { useEffect, useState } from "react";
import { updateDocumentSeo } from "../../lib/seo";
import { usePublicPlans } from "../../hooks/usePublicPlans";
import { PublicPlan, PublicPlanFeatures } from "../../types/site";
import { getWhatsappLink } from "../../lib/whatsapp";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
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

  // Limits
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

  // Primary features mapping
  const featuresMap: Record<keyof PublicPlanFeatures, string> = {
    appointments: "Agenda integrada de atendimentos",
    grooming: "Módulo de Banho e Tosa (Estética)",
    vaccination: "Controle de vacinas e vermífugos",
    inventory: "Controle de estoque",
    multi_user: "Acesso de equipe simultâneo",
    reports: "Relatórios de desempenho e métricas",
    financial: "Controle financeiro avançado + DRE",
    whatsapp: "Notificações automáticas por WhatsApp",
    pdv: "Ponto de Venda (PDV) Integrado",
    boarding: "Módulo de Hotelaria / Hospedagem",
    surgeries: "Acompanhamento Cirúrgico",
    hospitalization: "Prontuário e Internação clínica",
    integrations: "Módulo de integrações avançadas",
    advanced_dashboard: "Painel gerencial completo",
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

interface PlansPageProps {
  onOpenSignup?: (plan: any) => void;
}

export default function PlansPage({ onOpenSignup }: PlansPageProps) {
  const { plans, loading, error, refetch } = usePublicPlans();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const whatsappMsg = "Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet.";

  useEffect(() => {
    updateDocumentSeo("Planos e Preços", "Confira e compare os planos do Petvex. Escolha a melhor opção para acelerar sua gestão.");
  }, []);

  // Loading Skeletons
  const renderLoading = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-20 animate-pulse">
      {[1, 2, 3].map((num) => (
        <Card key={num} className="p-8 border-slate-205 bg-white h-[480px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="h-6 w-1/3 bg-slate-200 rounded"></div>
            <div className="h-4 w-full bg-slate-100 rounded"></div>
            <div className="h-10 w-1/2 bg-slate-200 rounded"></div>
            <div className="space-y-3 pt-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-2 items-center">
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

  // Error block
  const renderError = () => (
    <div className="max-w-md mx-auto text-center py-12 px-6 bg-rose-50 border border-rose-250 rounded-2xl mb-20 shadow-xs">
      <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertCircle size={24} />
      </div>
      <h3 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase mb-2">
        Não foi possível obter os planos comparativos
      </h3>
      <p className="text-slate-650 text-xs sm:text-sm mb-6 leading-relaxed">
        {error || "Erro de conexão temporário com a API corporativa do Petvex."}
      </p>
      <Button variant="outline" className="font-display text-xs px-6 py-2" onClick={refetch}>
        Tentar Novamente
      </Button>
    </div>
  );

  // Empty list UI
  const renderEmpty = () => (
    <div className="max-w-md mx-auto text-center py-12 px-6 bg-slate-50 border border-slate-200 rounded-2xl mb-20">
      <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
        🐾
      </div>
      <h3 className="font-display font-medium text-slate-800 text-base mb-2">
        Planos indisponíveis
      </h3>
      <p className="text-slate-500 text-xs leading-relaxed pb-4">
        Planos temporariamente indisponíveis.
      </p>
    </div>
  );

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans">
      
      {/* Visual glowing bubbles */}
      <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg">
        
        {/* Banner Details */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 font-display text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Valores Transparentes
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 mt-4 tracking-tight leading-tight">
  Crie sua conta gratuita e experimente o Petvex sem compromisso
</h1>

<p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
  Escolha o plano ideal para o seu negócio e aproveite o período de teste gratuito definido para cada plano. Seu ambiente é criado automaticamente em poucos segundos, sem cobrança durante a avaliação, para que você conheça a plataforma antes de contratar.
</p>
        </div>

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

        {/* Render Cards area */}
        {loading ? (
          renderLoading()
        ) : error ? (
          renderError()
        ) : !plans || plans.length === 0 ? (
          renderEmpty()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto mb-20">
            {plans.map((plan, i) => {
              const isEnterprise = plan.monthly_price === 0 && plan.yearly_price === 0;
              const hasDiscount = plan.yearly_discount_percent > 0;
              const specs = getPlanSpecs(plan);

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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative h-full"
                >
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
                    className={`p-6 h-full flex flex-col justify-between transition-all duration-305 ${
                      plan.is_featured
                        ? "border-emerald-500/85 bg-white shadow-xl shadow-slate-900/5 ring-2 ring-emerald-500/10"
                        : "border-slate-205 bg-white"
                    }`}
                  >
                    <div>
                      {/* Name Header */}
                      <div className="mb-4">
                        <h3 className="font-display font-black text-slate-900 text-lg">{plan.name}</h3>
                        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed min-h-[36px]">{plan.short_description || plan.description}</p>
                      </div>

                      {/* Pricing block */}
                      <div className="flex flex-col border-b border-slate-100 pb-5 mb-5 min-h-[85px] justify-center">
                        {isEnterprise ? (
                          <div className="flex flex-col gap-0.5">
                            <span className="text-2xl font-display font-black text-slate-800 leading-tight">
                              Consulte-nos
                            </span>
                            <span className="text-slate-450 font-mono text-[10px]">
                              Limites personalizados
                            </span>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-slate-500 font-display text-xs font-semibold mr-1">R$</span>
                              <span className="text-3xl font-display font-black text-slate-900 leading-none">{priceText}</span>
                              <span className="text-slate-450 font-display text-xs">/{periodText}</span>
                            </div>

                            {billingCycle === "yearly" ? (
                              <p className="text-[10px] text-emerald-600 font-semibold mt-1.5">
                                Cobrado anualmente: {formatCurrency(plan.yearly_price)} ({plan.yearly_discount_percent}% desc.)
                              </p>
                            ) : (
                              hasDiscount && (
                                <p className="text-[10px] text-slate-400 font-medium mt-1.5">
                                  Economize {plan.yearly_discount_percent}% no plano anual!
                                </p>
                              )
                            )}
                          </>
                        )}
                      </div>

                      {/* Specs bullets */}
                      <ul className="space-y-2.5 mb-6 text-xs text-slate-600">
                        {specs.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700 leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action CTA */}
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
                      
                      {plan.has_trial && plan.trial_days > 0 && (
                        <div className="flex items-center justify-center gap-1.5 mt-2 text-[9px] text-slate-400 font-medium">
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

        {/* COMPARATIVE TABLE (Tabela Comparativa Simples) */}
        {!loading && !error && plans && plans.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 text-center mb-8">
              Estudo comparativo detalhado de limites
            </h2>

            <Card className="overflow-hidden border-slate-200 shadow-xs bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-display">
                      <th className="p-4 sm:p-5 font-bold">Limite / Recurso</th>
                      {plans.map((p) => (
                        <th
                          key={p.id}
                          className={`p-4 sm:p-5 text-center font-bold ${p.is_featured ? "text-emerald-400" : ""}`}
                        >
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 font-semibold">Preço Mensal sugerido</td>
                      {plans.map((p) => (
                        <td key={p.id} className="p-4 text-center">
                          {p.monthly_price === 0 ? "Sob consulta" : formatCurrency(p.monthly_price)}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 font-semibold">Acesso simultâneo de Usuários</td>
                      {plans.map((p) => (
                        <td key={p.id} className="p-4 text-center">
                          {p.max_users === null ? "Ilimitado" : `${p.max_users} usuários`}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 font-semibold">Limite de Clientes/Tutores</td>
                      {plans.map((p) => (
                        <td key={p.id} className="p-4 text-center">
                          {p.max_clients === null ? "Ilimitado" : p.max_clients.toLocaleString("pt-BR")}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 font-semibold">Limite de Pets</td>
                      {plans.map((p) => (
                        <td key={p.id} className="p-4 text-center">
                          {p.max_pets === null ? "Ilimitado" : p.max_pets.toLocaleString("pt-BR")}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 font-semibold">Lembretes por WhatsApp</td>
                      {plans.map((p) => (
                        <td key={p.id} className="p-4 text-center">
                          {p.features?.whatsapp ? (
                            <span className="text-emerald-600 font-bold">Automático ✔</span>
                          ) : (
                            <span className="text-slate-400">Não incluso 🗙</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-4 font-semibold">Controle Financeiro / DRE</td>
                      {plans.map((p) => (
                        <td key={p.id} className="p-4 text-center">
                          {p.features?.financial ? (
                            <span className="text-emerald-600 font-bold">Sim ✔</span>
                          ) : (
                            <span className="text-slate-400">Básico 🗙</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

      </Container>
    </div>
  );
}
