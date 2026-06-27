import React, { useEffect } from "react";
import { updateDocumentSeo } from "../../lib/seo";
import { Container } from "../../components/ui/Container";
import { Shield, Lock, Eye, CheckCircle2, Mail, Info } from "lucide-react";
import { motion } from "motion/react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    updateDocumentSeo(
      "Política de Privacidade",
      "Leia a Política de Privacidade da Petvex. Entenda como coletamos, usamos, armazenamos e protegemos os seus dados conforme a LGPD."
    );
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-50/40 relative min-h-screen font-sans">
      {/* Decorative gradient background blur */}
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-emerald-550/5 rounded-full filter blur-3xl pointer-events-none"></div>

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
              <Shield size={24} className="stroke-[2.5]" />
              <span className="font-display font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
                Segurança & Transparência
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Política de Privacidade
            </h1>
            <p className="mt-3 text-slate-500 text-sm flex items-center gap-2">
              <Info size={14} />
              <span>Última atualização: 26 de junho de 2026</span>
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
            <p className="font-medium text-slate-800">
              A Petvex Tecnologia está empenhada em proteger a sua privacidade e em garantir que as suas informações pessoais sejam tratadas de forma segura e responsável, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
            </p>
            <p>
              Esta Política de Privacidade explica detalhadamente como coletamos, usamos, armazenamos, compartilhamos e protegemos as informações fornecidas por você, seus colaboradores e os clientes do seu estabelecimento ao utilizar a plataforma SaaS Petvex.
            </p>

            {/* Section 1 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">1.</span> Quais dados nós coletamos?
              </h2>
              <p className="mb-4">
                Para prover nossos serviços de gestão SaaS para pet shops, clínicas veterinárias, e estética pet, coletamos e processamos as seguintes categorias de dados:
              </p>
              <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-[15px]">
                <li>
                  <strong className="text-slate-850">Dados de Cadastro da Conta Corporativa:</strong> Nome completo do responsável, número do documento de identidade (CPF ou CNPJ), endereço comercial, telefone de contato (celular/WhatsApp), e-mail corporativo, e senha de acesso criptografada.
                </li>
                <li>
                  <strong className="text-slate-850">Dados dos Seus Clientes (Tutores):</strong> Nome, CPF, telefones, e-mail, histórico de compras, adiantamento de pacotes e endereços para fins de agendamento e prestação de contas.
                </li>
                <li>
                  <strong className="text-slate-850">Dados dos Pets:</strong> Nome, espécie, raça, idade, cor, alergias, peso, temperamento, prontuários de estética (tosa e banho), histórico de consultas e histórico vacinal.
                </li>
                <li>
                  <strong className="text-slate-850">Dados de Uso e Navegação:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência, data/hora dos acessos e registros de logs de auditoria de operações.
                </li>
                <li>
                  <strong className="text-slate-850">Dados Financeiros e de Transações:</strong> Histórico de pagamentos da assinatura Petvex, registros de faturamento diário, vendas em balcão (PDV), fluxo de caixa e comissões de colaboradores do estabelecimento.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">2.</span> Qual a finalidade do tratamento dos dados?
              </h2>
              <p className="mb-3">
                Os dados coletados são tratados exclusivamente para finalidades legítimas, específicas e informadas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-800 mb-1">Operação do Sistema</strong>
                    Garantir a execução das ferramentas de agenda, prontuários, PDV e controle financeiro contratados.
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-800 mb-1">Comunicação e Notificações</strong>
                    Envio automático de lembretes e confirmações de agendamento de banho/tosa via WhatsApp e e-mail.
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-800 mb-1">Suporte e Atendimento</strong>
                    Prestar atendimento técnico humanizado rápido e solucionar chamados de dúvidas.
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-800 mb-1">Cumprimento de Obrigações</strong>
                    Emissão de notas fiscais, guarda de registros financeiros e conformidade com obrigações fiscais e regulatórias.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">3.</span> Compartilhamento de dados com terceiros
              </h2>
              <p>
                A Petvex não comercializa dados sob nenhuma hipótese. Compartilhamos dados estritamente necessários com provedores de serviços parceiros, sob rígidos contratos de segurança e confidencialidade, para viabilizar o ecossistema:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px]">
                <li><strong className="text-slate-800">Infraestrutura e Hospedagem:</strong> Servidores em nuvem de alta confiabilidade (Google Cloud Platform) para armazenamento seguro dos dados.</li>
                <li><strong className="text-slate-800">Gateways de Pagamento:</strong> Processadores de transações bancárias para cobrança de assinaturas mensais ou trimestrais de forma criptografada.</li>
                <li><strong className="text-slate-850">Integração com Meta / WhatsApp:</strong> Provedores oficiais de API em nuvem para envio de alertas automáticos e lembretes configurados pelo usuário.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">4.</span> Uso de Cookies e Tecnologias Semelhantes
              </h2>
              <p>
                Utilizamos cookies e identificadores de sessão locais para personalizar sua experiência, manter sua sessão ativa com segurança, lembrar de suas preferências de visualização (filtros de agenda, etc.) e realizar análises agregadas e anônimas de performance do site institucional. Você pode desativar os cookies nas configurações de seu navegador a qualquer momento.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">5.</span> Segurança da Informação
              </h2>
              <p>
                Adotamos medidas técnicas, administrativas e organizacionais robustas para proteger seus dados pessoais contra acessos não autorizados, perdas acidentais, destruição, alteração ou difusão indesejada. O tráfego de rede é totalmente protegido por conexões criptografadas TLS/HTTPS, e nossas bases de dados contam com rígido controle de privilégio interno e backups recorrentes em cloud.
              </p>
            </div>

            {/* Section 6 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">6.</span> Seus Direitos conforme a LGPD
              </h2>
              <p className="mb-3">
                Como titular de dados pessoais, você possui amplos direitos garantidos pela legislação brasileira, incluindo:
              </p>
              <div className="space-y-2 border-l-2 border-emerald-500 pl-4 py-1 text-sm">
                <p>• Confirmação da existência de tratamento de dados.</p>
                <p>• Acesso aos seus dados de forma clara e legível.</p>
                <p>• Correção de dados incompletos, inexatos ou desatualizados.</p>
                <p>• Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.</p>
                <p>• Portabilidade dos dados a outro fornecedor de serviço.</p>
                <p>• Eliminação dos dados pessoais tratados com o seu consentimento (salvo obrigações legais de guarda).</p>
                <p>• Informação sobre as entidades públicas e privadas com as quais realizamos uso compartilhado de dados.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-emerald-500">7.</span> Canal de Contato
              </h2>
              <p>
                Para exercer qualquer um dos seus direitos listados acima, ou caso tenha dúvidas sobre esta Política de Privacidade, você pode entrar em contato diretamente com o nosso Encarregado de Proteção de Dados (DPO) através dos canais oficiais listados abaixo:
              </p>
              <div className="mt-4 p-5 bg-emerald-50/50 border border-emerald-500/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Dúvidas ou Requisições LGPD?</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Encarregado de Proteção de Dados (DPO)</p>
                  </div>
                </div>
                <a
                  href="mailto:lgpd@petvex.com.br"
                  className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition focus:outline-none"
                >
                  lgpd@petvex.com.br
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
