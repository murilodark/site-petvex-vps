import React, { useEffect, useState } from "react";
import { updateDocumentSeo } from "../../../lib/seo";
import { usePublicPlans } from "../../../hooks/usePublicPlans";
import { PublicPlan } from "../../../types/site";
import { Container } from "../../../components/ui/Container";
import { Card } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { 
  Check, 
  Info, 
  AlertCircle, 
  Calendar, 
  Users, 
  ShoppingBag, 
  Sparkles, 
  TrendingUp, 
  CreditCard, 
  Heart, 
  Scissors, 
  Stethoscope, 
  Store, 
  ChevronDown, 
  HelpCircle,
  MessageSquare,
  ShieldAlert,
  Coins
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PlanoUnicoPageProps {
  onOpenSignup?: (plan: any) => void;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export default function PlanoUnicoPage({ onOpenSignup }: PlanoUnicoPageProps) {
  const { plans, loading, error, refetch } = usePublicPlans();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    updateDocumentSeo(
      "Plano Completo e Sem Complicações",
      "O assistente ideal para organizar a rotina do seu negócio pet. Conheça o plano tudo incluso do Petvex, sem taxas de adesão ou fidelidade."
    );
  }, []);

  // Find the featured active plan first, otherwise the first active plan
  const activePlan = plans?.find((p) => p.is_featured && p.is_active) || 
                     plans?.find((p) => p.is_active) || 
                     plans?.[0];

  // Render Skeletons for Loading State
  const renderLoading = () => (
    <div className="max-w-4xl mx-auto mb-20 animate-pulse">
      <div className="h-6 w-1/4 bg-slate-200 rounded mx-auto mb-4"></div>
      <div className="h-12 w-2/3 bg-slate-200 rounded mx-auto mb-8"></div>
      <Card className="p-8 border-slate-200 bg-white h-[450px] flex flex-col md:flex-row gap-8 justify-between">
        <div className="space-y-4 flex-1">
          <div className="h-8 w-1/3 bg-slate-200 rounded"></div>
          <div className="h-4 w-full bg-slate-100 rounded"></div>
          <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
          <div className="space-y-3 pt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                <div className="h-4 bg-slate-100 rounded flex-1"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center space-y-4 shrink-0">
          <div className="h-10 w-1/2 bg-slate-200 rounded mx-auto"></div>
          <div className="h-12 bg-slate-200 rounded-xl"></div>
          <div className="h-12 bg-slate-100 rounded-xl"></div>
        </div>
      </Card>
    </div>
  );

  // Render Error Block
  const renderError = () => (
    <div className="max-w-md mx-auto text-center py-12 px-6 bg-rose-50 border border-rose-250 rounded-2xl mb-20 shadow-xs">
      <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertCircle size={24} />
      </div>
      <h3 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase mb-2">
        Não foi possível obter a oferta especial
      </h3>
      <p className="text-slate-650 text-xs sm:text-sm mb-6 leading-relaxed">
        {error || "Erro de conexão temporário com a API de planos do Petvex."}
      </p>
      <Button variant="outline" className="font-display text-xs px-6 py-2" onClick={refetch}>
        Tentar Novamente
      </Button>
    </div>
  );

  // Render Empty State
  const renderEmpty = () => (
    <div className="max-w-md mx-auto text-center py-12 px-6 bg-slate-50 border border-slate-200 rounded-2xl mb-20">
      <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
        🐾
      </div>
      <h3 className="font-display font-medium text-slate-800 text-base mb-2">
        Nenhuma oferta disponível
      </h3>
      <p className="text-slate-500 text-xs leading-relaxed pb-4">
        As ofertas estão temporariamente indisponíveis. Por favor, tente novamente mais tarde.
      </p>
    </div>
  );

  // Pricing calculations
  const isEnterprise = activePlan ? (activePlan.monthly_price === 0 && activePlan.yearly_price === 0) : false;
  const hasDiscount = activePlan ? activePlan.yearly_discount_percent > 0 : false;

  let priceText = "";
  let periodText = "";
  let monthlyEquivalent = 0;

  if (activePlan && !isEnterprise) {
    if (billingCycle === "monthly") {
      priceText = formatCurrency(activePlan.monthly_price).replace("R$", "").trim();
      periodText = "mês";
    } else {
      monthlyEquivalent = activePlan.yearly_price / 12;
      priceText = formatCurrency(monthlyEquivalent).replace("R$", "").trim();
      periodText = "mês";
    }
  }

  // All benefits list
  const benefits = [
    { title: "Agenda de atendimentos", desc: "Organize seus horários, controle a frequência e diminua as faltas de clientes com lembretes inteligentes.", icon: Calendar },
    { title: "Cadastro de clientes e pets", desc: "Histórico completo de atendimentos, preferências, fotos e controle de vacinas em um só lugar.", icon: Users },
    { title: "Cadastro de produtos", desc: "Controle as vendas de rações, acessórios, medicamentos e itens de higiene com rapidez.", icon: ShoppingBag },
    { title: "Cadastro de serviços", desc: "Gerencie banho, tosa, consultas e pacotes com preços personalizados de forma simples.", icon: Scissors },
    { title: "PDV Integrado", desc: "Realize vendas de forma rápida, aplique descontos e emita recibos de pagamento sem complicações.", icon: CreditCard },
    { title: "Controle de estoque", desc: "Alertas de produtos com estoque baixo e controle automático de entradas e saídas de mercadorias.", icon: Store },
    { title: "Entradas e saídas do caixa", desc: "Controle financeiro diário e acompanhamento transparente do saldo e fluxo de caixa do seu negócio.", icon: Coins },
    { title: "Dashboard do negócio", desc: "Gráficos e indicadores fáceis de entender para acompanhar seu faturamento, despesas e lucratividade.", icon: TrendingUp },
    { title: "Atualizações incluídas", desc: "Novas funcionalidades, melhorias e recursos de segurança adicionados constantemente sem custo extra.", icon: Sparkles },
    { title: "Suporte humanizado", desc: "Uma equipe incrível pronta para tirar suas dúvidas e te ajudar a crescer em todos os momentos.", icon: Heart },
  ];

  // Who is it for list
  const targets = [
    { title: "Groomers & Esteticistas", desc: "Controle total da agenda de banho e tosa, controle de pacotes de atendimentos mensais e agilidade para avisar os tutores.", icon: Scissors },
    { title: "Veterinários Autônomos", desc: "Histórico clínico centralizado, receitas, controle de vacinação e agendamento de consultas flexível.", icon: Stethoscope },
    { title: "Pequenos Pet Shops", desc: "PDV rápido para o balcão, controle do estoque de rações/acessórios e serviços integrados para simplificar o dia a dia.", icon: Store },
    { title: "Clínicas & Consultórios", desc: "Facilidade na recepção dos pets, organização de prontuários clínicos e faturamento organizado por profissional.", icon: Heart },
  ];

  // Short FAQ items
  const faqItems = [
    { q: "Tem taxa de adesão?", a: "Não. Você não paga nenhuma taxa de adesão, instalação ou ativação para começar a usar o Petvex imediatamente." },
    { q: "Tem contrato de fidelidade?", a: "Não. O Petvex funciona com assinatura recorrente (mensal ou anual). Você pode cancelar ou alterar sua assinatura a qualquer momento, sem taxas ocultas ou multas." },
    { q: "Posso cancelar quando quiser?", a: "Sim. O cancelamento pode ser feito de forma simples e direta pelo sistema a qualquer momento, mantendo seu acesso ativo até o fim do período já pago." },
    { q: "O que realmente está incluso no plano?", a: "Tudo! Agenda de atendimentos, cadastro completo de clientes e pets, gestão de produtos e serviços, PDV, fluxo de caixa, estoque, relatórios e suporte humanizado estão inclusos sem taxas adicionais." },
  ];

  const handleCtaClick = () => {
    if (activePlan && onOpenSignup) {
      onOpenSignup(activePlan);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans overflow-hidden">
      
      {/* Visual glowing bubbles */}
      <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="lg">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-display text-xs font-bold tracking-widest uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-500/10 shadow-xs mb-6">
              <Sparkles size={12} className="text-emerald-600 animate-pulse" />
              Tudo incluso desde o primeiro dia
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-black text-slate-900 tracking-tight leading-tight"
          >
            Petvex completo para o seu negócio crescer
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            O assistente para groomers, veterinários autônomos e pequenos pet shops organizarem a rotina, atenderem melhor e crescerem com mais profissionalismo.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-4 text-xs font-semibold text-emerald-700/80 tracking-wide bg-emerald-50/50 py-1.5 px-4 rounded-full inline-block"
          >
            Sem planos complicados. Sem taxa de adesão. Sem contrato de fidelidade.
          </motion.div>
        </div>

        {/* MAIN BODY AREA */}
        {loading ? (
          renderLoading()
        ) : error ? (
          renderError()
        ) : !activePlan ? (
          renderEmpty()
        ) : (
          <div className="space-y-24">
            
            {/* CARD PRINCIPAL DE PREÇO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="relative overflow-hidden border-emerald-500/80 bg-white shadow-2xl shadow-slate-900/5 ring-4 ring-emerald-500/5 p-8 sm:p-12 flex flex-col md:flex-row gap-8 items-center justify-between rounded-3xl">
                {/* Featured Badge */}
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-extrabold uppercase py-1.5 px-6 rounded-bl-2xl tracking-widest shadow-sm">
                  Melhor Oferta
                </div>

                <div className="space-y-6 flex-1 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                      {activePlan.name === "Petvex Completo" ? activePlan.name : "Petvex Completo"}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-md">
                      Agenda, clientes, pets, produtos, serviços, PDV, estoque e caixa em um único lugar para simplificar sua rotina.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto md:mx-0 pt-2 text-left">
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald-600" />
                      </div>
                      <span>Todos os recursos</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald-600" />
                      </div>
                      <span>Suporte humanizado</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald-600" />
                      </div>
                      <span>Sem taxa de adesão</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald-600" />
                      </div>
                      <span>Cancele quando quiser</span>
                    </div>
                  </div>
                </div>

                {/* Pricing / CTA Section */}
                <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-10 flex flex-col justify-center space-y-5 shrink-0">
                  {/* Dynamic Billing Toggle */}
                  <div className="flex items-center justify-center bg-slate-100 p-1 rounded-full border border-slate-200/40">
                    <button
                      type="button"
                      onClick={() => setBillingCycle("monthly")}
                      className={`flex-1 text-center py-1.5 text-[11px] font-bold rounded-full transition-all duration-200 ${
                        billingCycle === "monthly"
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Mensal
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingCycle("yearly")}
                      className={`flex-1 text-center py-1.5 text-[11px] font-bold rounded-full transition-all duration-200 flex items-center justify-center gap-1 ${
                        billingCycle === "yearly"
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Anual
                      <span className="bg-emerald-500 text-white text-[8px] font-extrabold px-1 rounded-md">
                        -10%
                      </span>
                    </button>
                  </div>

                  {/* Price display */}
                  <div className="text-center md:text-left">
                    {isEnterprise ? (
                      <div className="flex flex-col">
                        <span className="text-3xl font-display font-black text-slate-900">
                          Consulte-nos
                        </span>
                        <span className="text-slate-400 text-xs font-medium">
                          Fale com nossos consultores
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex items-baseline justify-center md:justify-start">
                          <span className="text-slate-500 font-display text-sm font-semibold mr-1">R$</span>
                          <span className="text-4xl sm:text-5xl font-display font-black text-slate-950 leading-none">
                            {priceText}
                          </span>
                          <span className="text-slate-450 font-display text-sm">/{periodText}</span>
                        </div>
                        {billingCycle === "yearly" ? (
                          <p className="text-[10px] text-emerald-600 font-bold">
                            Cobrado anualmente: {formatCurrency(activePlan.yearly_price)} ({activePlan.yearly_discount_percent}% desc.)
                          </p>
                        ) : (
                          hasDiscount && (
                            <p className="text-[10px] text-slate-400 font-medium">
                              Economize {activePlan.yearly_discount_percent}% assinando o anual!
                            </p>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions CTAs */}
                  <div className="space-y-2">
                    <Button
                      onClick={handleCtaClick}
                      className="w-full font-display font-black text-xs sm:text-sm tracking-wider py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-lg shadow-emerald-500/15 cursor-pointer transform hover:-translate-y-0.5 transition"
                    >
                      Assine agora
                    </Button>
                    
                    {activePlan.has_trial && activePlan.trial_days > 0 && (
                      <button
                        onClick={handleCtaClick}
                        className="w-full text-center text-xs font-bold text-slate-600 hover:text-emerald-700 py-2.5 rounded-xl border border-dashed border-slate-300 hover:border-emerald-500/30 bg-slate-50 hover:bg-emerald-50/10 transition"
                      >
                        Testar grátis por {activePlan.trial_days} dias
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
                    <Info size={11} className="text-slate-400 shrink-0" />
                    <span>Ativação instantânea sem complicação</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* SEÇÃO TUDO INCLUSO */}
            <div className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight">
                  Tudo incluso e pronto para usar
                </h2>
                <p className="text-slate-500 text-sm sm:text-base">
                  Diferente de outros sistemas, não bloqueamos recursos vitais. Você tem acesso total a todas as ferramentas do Petvex.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {benefits.map((benefit, idx) => {
                  const IconComp = benefit.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <Card className="p-6 bg-white hover:shadow-xl hover:shadow-slate-200/40 border-slate-200 hover:border-emerald-500/20 transition-all duration-300 h-full flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                          <IconComp size={20} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-slate-900 text-sm leading-tight">
                            {benefit.title}
                          </h4>
                          <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                            {benefit.desc}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* SEÇÃO PARA QUEM É O PETVEX */}
            <div className="space-y-12 bg-slate-100/50 -mx-4 px-4 py-16 sm:-mx-12 sm:px-12 rounded-3xl border border-slate-200/30">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight">
                  O assistente ideal para a sua especialidade
                </h2>
                <p className="text-slate-500 text-sm sm:text-base">
                  Seja você um profissional independente ou dono de um pequeno estabelecimento, o Petvex se adapta perfeitamente à sua rotina.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {targets.map((target, idx) => {
                  const IconComp = target.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="h-full"
                    >
                      <Card className="p-6 bg-white border-slate-200 hover:border-emerald-500/20 shadow-xs hover:shadow-md transition-all h-full flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                            <IconComp size={22} />
                          </div>
                          <h4 className="font-display font-black text-slate-900 text-base">
                            {target.title}
                          </h4>
                          <p className="text-slate-500 text-xs leading-relaxed">
                            {target.desc}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* FAQ SECTION */}
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mx-auto mb-2">
                  <HelpCircle size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight">
                  Dúvidas frequentes
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Tudo o que você precisa saber sobre a contratação e funcionamento do Petvex.
                </p>
              </div>

              <div className="space-y-3.5">
                {faqItems.map((item, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm text-slate-800 hover:text-slate-950 focus:outline-none select-none"
                      >
                        <span>{item.q}</span>
                        <ChevronDown 
                          size={16} 
                          className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-600" : ""}`} 
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-50">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FOOTER CALL-OUT CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center bg-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <span className="bg-emerald-500 text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider select-none">
                Cresça com o Petvex
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black mt-4 leading-tight">
                Pronto para transformar a gestão do seu pet?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 max-w-md mx-auto leading-relaxed">
                Junte-se a dezenas de empreendedores pet que estão economizando tempo e encantando clientes todos os dias.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={handleCtaClick}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-display font-bold text-xs sm:text-sm py-3 px-8 rounded-xl shadow-md cursor-pointer transform hover:-translate-y-0.5 transition"
                >
                  Assine agora
                </Button>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/5 text-white font-display font-bold text-xs sm:text-sm py-3 px-8 rounded-xl border border-white/20 hover:border-white/40 transition inline-flex items-center justify-center gap-1.5"
                >
                  <MessageSquare size={14} /> Falar com consultor
                </a>
              </div>
            </motion.div>

          </div>
        )}

      </Container>
    </div>
  );
}
