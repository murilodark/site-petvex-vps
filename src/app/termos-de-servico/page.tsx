import React, { useEffect } from "react";
import { updateDocumentSeo } from "../../lib/seo";
import { Container } from "../../components/ui/Container";
import { FileText, BookOpen, AlertTriangle, ShieldAlert, Scale, Info } from "lucide-react";
import { motion } from "motion/react";

export default function TermsOfServicePage() {
  useEffect(() => {
    updateDocumentSeo(
      "Termos de Serviço",
      "Leia os Termos de Serviço da Petvex. Conheça as regras de uso, cobrança, cancelamento e responsabilidades ao utilizar nossa plataforma SaaS."
    );
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans">
      {/* Decorative gradient background blur */}
      <div className="absolute top-[15%] left-[-10%] w-[400px] h-[400px] bg-emerald-550/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-100 shadow-xl shadow-slate-900/5"
        >
          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="flex items-center gap-2.5 text-emerald-600 mb-4">
              <FileText size={24} className="stroke-[2.5]" />
              <span className="font-display font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
                Regras de Uso & Condições
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Termos de Serviço
            </h1>
            <p className="mt-3 text-slate-500 text-sm flex items-center gap-2">
              <Info size={14} />
              <span>Última atualização: 26 de junho de 2026</span>
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
            <p className="font-medium text-slate-800">
              Seja bem-vindo ao Petvex! Ao acessar ou utilizar nossa plataforma SaaS, nossos sites ou qualquer serviço relacionado fornecido pela Petvex Tecnologia, você declara estar de acordo com estes Termos de Serviço e com nossa Política de Privacidade.
            </p>
            <p>
              Por favor, leia atentamente as cláusulas a seguir. Elas regulamentam a relação jurídica entre você (Pessoa Física ou Pessoa Jurídica contratante, denominada "Usuário" ou "Estabelecimento") e a Petvex, estabelecendo os limites e deveres de ambas as partes.
            </p>

            {/* Section 1 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">1.</span> Descrição da Plataforma Petvex
              </h2>
              <p>
                O Petvex é uma plataforma proprietária de software como serviço (SaaS) destinada à automação, gestão administrativa, controle financeiro, faturamento em ponto de venda (PDV), registro de prontuários veterinários e procedimentos estéticos, agendamento de banhos e tosas, controle de estoque de insumos e envio automatizado de lembretes aos tutores de animais domésticos.
              </p>
            </div>

            {/* Section 2 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">2.</span> Aceitação dos Termos e Capacidade Civil
              </h2>
              <p>
                Ao realizar seu cadastro na plataforma, você garante possuir plena capacidade civil ou representação societária legal para contratar os planos do Petvex em nome de sua empresa. Caso não concorde com qualquer uma das disposições aqui descritas, você deve abster-se imediatamente de utilizar os serviços.
              </p>
            </div>

            {/* Section 3 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">3.</span> Responsabilidades do Usuário (Estabelecimento/Tenant)
              </h2>
              <p className="mb-3">
                Ao utilizar o Petvex, você e seus colaboradores cadastrados comprometem-se a:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px]">
                <li>Manter a confidencialidade absoluta das credenciais de acesso (e-mail e senhas) de todas as contas vinculadas ao seu estabelecimento.</li>
                <li>Garantir a veracidade de todas as informações de cadastro comercial fornecidas (tais como CPF, CNPJ, Razão Social e telefone).</li>
                <li>Utilizar a plataforma em estrita conformidade com a legislação aplicável, abstendo-se de praticar fraudes, spamming de WhatsApp ou atividades ilícitas.</li>
                <li>Obter o consentimento prévio dos seus clientes (tutores) para o cadastro de seus dados de contato e prontuários na plataforma, respeitando as boas práticas de privacidade da LGPD.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">4.</span> Planos, Assinaturas, Faturamento e Pagamento
              </h2>
              <p>
                O Petvex é disponibilizado mediante planos de assinatura mensal ou anual com faturamento recorrente.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px]">
                <li><strong className="text-slate-850">Preços:</strong> Os valores cobrados são transparentes e encontram-se definidos na página oficial de planos do site institucional.</li>
                <li><strong className="text-slate-850">Período de Testes:</strong> Eventuais períodos de teste gratuito (ex: 14 dias) são oferecidos de forma exclusiva no momento do cadastro inicial e não geram obrigação de pagamento caso cancelados antes do encerrado o prazo.</li>
                <li><strong className="text-slate-850">Recorrência:</strong> Ao contratar um plano recorrente, você autoriza o débito do valor da assinatura conforme o ciclo de faturamento escolhido (cartão de crédito ou boleto bancário).</li>
                <li><strong className="text-slate-850">Atrasos:</strong> O atraso superior a 5 (cinco) dias úteis no pagamento poderá ensejar a suspensão temporária do acesso à plataforma, mediante aviso prévio por e-mail ou WhatsApp, até a regularização do débito.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">5.</span> Política de Cancelamento e Suspensão de Conta
              </h2>
              <p>
                O cancelamento da sua assinatura do Petvex pode ser solicitado a qualquer momento diretamente pelo painel administrativo do cliente ou através dos canais de suporte, sem multas contratuais ou cláusula de fidelidade de permanência.
              </p>
              <div className="p-4 bg-amber-50/50 border border-amber-500/10 rounded-2xl flex gap-3 text-sm text-slate-700 mt-3">
                <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">Importante sobre o cancelamento:</strong>
                  Ao efetivar o cancelamento, seu acesso à inserção de novos dados será suspenso ao final do ciclo de cobrança corrente já pago. Seus dados cadastrados permanecerão salvos e disponíveis para exportação em planilhas por até 60 dias antes de serem permanentemente eliminados de nossos bancos de dados, salvo se solicitado o descarte imediato.
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">6.</span> Limitações de Responsabilidade
              </h2>
              <p>
                A Petvex Tecnologia envida seus melhores esforços comerciais para garantir a disponibilidade constante e ininterrupta da plataforma. No entanto:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px]">
                <li>Não nos responsabilizamos por falhas decorrentes de conexões instáveis de internet do usuário, problemas operacionais exclusivos do aplicativo oficial WhatsApp ou instabilidade geral de rede de terceiros.</li>
                <li>Não nos responsabilizamos pela conduta ou tratativa comercial direta realizada entre o estabelecimento e seus clientes (tutores), incluindo falhas de execução de serviços veterinários ou procedimentos estéticos agendados.</li>
                <li>A responsabilidade total máxima da Petvex por eventuais perdas e danos comprovados judicialmente é limitada ao valor equivalente à soma das últimas 3 (três) mensalidades pagas pelo usuário.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">7.</span> Propriedade Intelectual
              </h2>
              <p>
                Todos os direitos autorais, patentes, marcas comerciais, códigos-fonte, designs visuais, logotipos, ilustrações, e interfaces construídas na plataforma são e permanecerão de propriedade exclusiva da Petvex Tecnologia. É terminantemente proibida a engenharia reversa, cópia ou distribuição comercial de partes da plataforma sem autorização prévia por escrito.
              </p>
            </div>

            {/* Section 8 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">8.</span> Disponibilidade do Serviço (SLA)
              </h2>
              <p>
                Buscamos assegurar um índice de uptime (disponibilidade de sistema) anual de no mínimo 99,5%, excluindo manutenções preventivas de infraestrutura agendadas e comunicadas com antecedência nos finais de semana ou fora do horário comercial regular.
              </p>
            </div>

            {/* Section 9 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">9.</span> Alterações nestes Termos de Serviço
              </h2>
              <p>
                Podemos modificar estes termos periodicamente para refletir alterações em novos módulos, atualizações legislativas ou melhorias organizacionais. Notificaremos você sobre quaisquer mudanças estruturais publicando a versão atualizada neste endereço e enviando alertas no painel do sistema com antecedência adequada.
              </p>
            </div>

            {/* Section 10 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">10.</span> Legislação Aplicável e Foro Eleito
              </h2>
              <p>
                Estes Termos de Serviço são regidos pelas leis vigentes na República Federativa do Brasil. Para a resolução de eventuais controvérsias decorrentes deste contrato, as partes elegem o Foro da Comarca de São Paulo/SP, com renúncia expressa a qualquer outro por mais privilegiado que seja.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
