import { SiteConfig, SeoMetadata } from "../types/site";

export const siteConfig: SiteConfig = {
  name: "Petvex",
  tagline: "O sistema mais completo e intuitivo para o seu negócio pet",
  description: "Petvex é uma plataforma SaaS para pet shops, clínicas veterinárias, banho e tosa e negócios pet organizarem clientes, pets, agenda, vacinas, estoque, vendas, financeiro, relatórios e operação diária em um sistema moderno, simples e escalável.",
  logo: "/src/assets/images/logo.png",
  whatsappNumber: "5511999998888", // Formato internacional
  email: "contato@petvex.com.br",
  phone: "(11) 99999-8888",
  hours: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
  socials: {
    instagram: "https://instagram.com/petvex",
    facebook: "https://facebook.com/petvex",
    youtube: "https://youtube.com/petvex"
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Funcionalidades", href: "/funcionalidades" },
    { label: "Planos", href: "/planos" },
    { label: "Contato", href: "/contato" },
    { label: "Solicitar Demonstração", href: "/demonstracao" }
  ],
  hero: {
    headline: "Controle total do seu pet shop ou clínica veterinária em um só lugar.",
    subheadline: "Organize sua agenda, simplifique o banho e tosa, gerencie planos vacinais, lance vendas e domine o seu financeiro com o sistema mais moderno do mercado brasileiro.",
    ctaPrimary: "Teste grátis",
    ctaSecondary: "Falar no WhatsApp"
  },
  metrics: [
    { id: "m1", value: "98", suffix: "%", label: "De Satisfação Clientes" },
    { id: "m2", value: "3.5", suffix: "M+", label: "Pets Cadastrados" },
    { id: "m3", value: "15", suffix: "k+", label: "Pet Shops & Clínicas Atendidas" },
    { id: "m4", value: "40", suffix: "%", label: "Aumento em Produtividade" }
  ],
  benefits: [
    {
      id: "b1",
      title: "Agilidade Incrível",
      description: "Agende serviços de banho, tosa e consultas veterinárias em menos de 10 segundos com nosso calendário inteligente.",
      iconName: "Calendar"
    },
    {
      id: "b2",
      title: "Prontuário e Receitas",
      description: "Acesse todo o histórico médico, vacinas e receituários de forma prática no perfil unificado de cada pet.",
      iconName: "ShieldAlert"
    },
    {
      id: "b3",
      title: "Organização Financeira",
      description: "Emissão de notas fiscais, controle de fluxo de caixa, split de pagamentos para profissionais e comissões automáticas.",
      iconName: "TrendingUp"
    },
    {
      id: "b4",
      title: "Zero Erros de Estoque",
      description: "Controle de insumos de estética, rações e medicamentos veterinários com alertas inteligentes de vencimento e reposição.",
      iconName: "Package"
    }
  ],
  features: [
    {
      id: "f1",
      title: "Gestão de Clientes (Tutores)",
      description: "Acesso rápido ao perfil do tutor: dados para contato, endereços, adiantamentos de pacotes de serviços e histórico financeiro completo.",
      iconName: "User"
    },
    {
      id: "f2",
      title: "Perfil do Pet & Prontuário",
      description: "Controle de foto, raça, idade, alergias, peso, e um histórico completo unificando banhos, tosas, consultas e procedimentos médicos.",
      iconName: "Heart"
    },
    {
      id: "f3",
      title: "Agenda Inteligente & Lembretes",
      description: "Grade de horários dinâmica e integrada. Envie notificações automáticas e lembretes de agendamento via WhatsApp.",
      iconName: "CalendarDays"
    },
    {
      id: "f4",
      title: "Controle de Vacinas & Vermífugos",
      description: "Cadastro de vacinas com calendário preventivo automático. Um painel exibe quais pets estão com as doses em atraso.",
      iconName: "Syringe"
    },
    {
      id: "f5",
      title: "Estoque com Giro Crítico",
      description: "Chega de perder produtos! Notificações de estoque mínimo e de produtos próximos ao vencimento.",
      iconName: "Lock"
    },
    {
      id: "f6",
      title: "Faturamento & Ponto de Vendas (PDV)",
      description: "Lançamento ágil de vendas de balcão e serviços através de um leitor de código de barras ou busca inteligente no teclado.",
      iconName: "ShoppingCart"
    },
    {
      id: "f7",
      title: "Gestão Financeira & DRE",
      description: "Contas a pagar e receber, fluxo de caixa real, conciliação bancária automática e relatórios estruturados de saúde corporativa.",
      iconName: "DollarSign"
    },
    {
      id: "f8",
      title: "Relatórios de Desempenho",
      description: "Análise de serviços mais vendidos, colaboradores mais produtivos, ticket médio e gráficos de taxa de retorno de clientes.",
      iconName: "BarChart3"
    },
    {
      id: "f9",
      title: "Controle de Banho & Tosa",
      description: "Gerenciamento de pacotes mensais, banhos avulsos, indicação de tosa específica da raça e anotações para o esteticista.",
      iconName: "Scissors"
    },
    {
      id: "f10",
      title: "Histórico Unificado do Pet",
      description: "Veja fotos de antes e depois dos procedimentos de tosa, vacinas aplicadas, laudos e exames laboratoriais em ordem cronológica.",
      iconName: "Activity"
    },
    {
      id: "f11",
      title: "Controle Veterinário Prático",
      description: "Prescrições digitais com bulário integrado, controle de internação com gráfico térmico e histórico de sinais vitais.",
      iconName: "PlusCircle"
    },
    {
      id: "f12",
      title: "Upload de Imagens & Exames",
      description: "Anexe imagens de laudos, radiografias, contratos assinados e fotos do pet no perfil corporativo instantaneamente do celular.",
      iconName: "UploadCloud"
    },
    {
      id: "f13",
      title: "Acesso Multiusuário",
      description: "Defina permissões personalizadas para veterinários, recepcionistas, gestores e tosadores acessarem apenas o que precisam.",
      iconName: "Users"
    },
    {
      id: "f14",
      title: "Dashboard em Tempo Real",
      description: "Espie seu negócio em tempo real nos seus dispositivos móveis, com dados de faturamento diário e frequência do atendimento.",
      iconName: "Tv"
    }
  ],
  differentials: [
    {
      id: "d1",
      title: "Lembretes Automáticos no WhatsApp",
      description: "Reduza o não Comparecimento (no-show) em até 85% enviando de forma automática avisos amigáveis para os tutores no WhatsApp.",
      iconName: "MessageCircle"
    },
    {
      id: "d2",
      title: "Split de Comissões Sem Complicações",
      description: "Calcule instantaneamente a comissão da tosa ou da consulta veterinária aplicando regras específicas por profissional ou serviço.",
      iconName: "Sparkles"
    },
    {
      id: "d3",
      title: "Suporte Técnico Humanizado",
      description: "Fale com pessoas reais que entendem seu negócio. Atendimento humanizado em menos de 5 minutos por chat ou WhatsApp.",
      iconName: "Headphones"
    }
  ],
  howItWorks: [
    {
      id: "h1",
      step: 1,
      title: "Faça seu cadastro rápido",
      description: "Crie sua conta em menos de 1 minuto sem requerer cartão de crédito. Ganhe 14 dias de teste gratuito."
    },
    {
      id: "h2",
      step: 2,
      title: "Importe seus dados anteriores",
      description: "Nossa equipe de migração cuida de toda a transição de arquivos do seu sistema antigo de forma 100% gratuita."
    },
    {
      id: "h3",
      step: 3,
      title: "Simplifique sua rotina diária",
      description: "Comece a realizar agendamentos, fazer prontuários e gerenciar vendas em uma interface rápida e amigável."
    }
  ],
  plans: [
    {
      id: "p1",
      name: "Starter",
      price: "129",
      period: "mês",
      description: "Ideal para profissionais autônomos ou pequenos pet shops em crescimento.",
      features: [
        "Até 250 Pets cadastrados",
        "Agenda integrada para Banho e Tosa",
        "Prontuário básico do Pet",
        "Ponto de Vendas (PDV) Simplificado",
        "Envio manual de lembretes via WhatsApp",
        "Suporte por e-mail e ajuda online"
      ],
      recommended: false,
      ctaText: "Teste grátis",
      whatsappMessage: "Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet."
    },
    {
      id: "p2",
      name: "Professional",
      price: "199",
      period: "mês",
      description: "A solução perfeita para pet shops, clínicas e hotéis pet consolidados.",
      features: [
        "Pets e Tutores ILIMITADOS",
        "Disparos de WhatsApp Automáticos",
        "Controle Financeiro Avançado + DRE",
        "Histórico de Banho, Tosa e Prontuários",
        "Gestão de Estoque Crítico de Medicamentos",
        "Suporte Prioritário via WhatsApp em 5min",
        "Até 5 usuários simultâneos"
      ],
      recommended: true,
      ctaText: "Teste grátis",
      whatsappMessage: "Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet."
    },
    {
      id: "p3",
      name: "Business",
      price: "349",
      period: "mês",
      description: "Para clínicas cirúrgicas, hospitais veterinários ou franquias de pet shop.",
      features: [
        "Tudo do plano Professional",
        "Multiunidades / Filiais integradas",
        "Módulo Cirúrgico e de Internação",
        "API aberta para integrações externas",
        "Split de pagamento e regras de comissão flexíveis",
        "Gerente de conta exclusivo",
        "Acesso multiusuário ilimitado"
      ],
      recommended: false,
      ctaText: "Solicitar demonstração",
      whatsappMessage: "Olá, quero conhecer o Petvex e entender como ele pode ajudar na gestão do meu negócio pet."
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Mariana Alencar",
      role: "Veterinária e Proprietária",
      company: "Clínica Vet & Cia",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "O Petvex mudou completamente nosso fluxo de internação. Os gráficos de temperatura e o acompanhamento de medicamentos economizam horas de prancheta todos os dias. O suporte é maravilhoso!"
    },
    {
      id: "t2",
      name: "Thiago dos Santos",
      role: "Diretor Operacional",
      company: "Rede Pet Estética",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Eu tinha uma no-show altíssima na minha estética pet. Depois de ativar os lembretes automáticos de agendamento por WhatsApp do Petvex, nossa taxa de faltas caiu para quase zero."
    },
    {
      id: "t3",
      name: "Beatriz Nogueira",
      role: "Gerente Financeira",
      company: "Mundo Animal Pet Center",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "O fechamento do financeiro agora leva 20 minutos, e antes levava o dia todo! O cálculo de comissões para tosadores e veterinários é automatizado e o DRE ajuda a ver o lucro real do mês."
    }
  ],
  faq: [
    {
      id: "f1",
      question: "Preciso cadastrar cartão de crédito para testar?",
      answer: "Não! O teste do Petvex é 100% gratuito por 14 dias sem compromisso. Você só preencherá os dados do cartão se decidir continuar após o período de teste."
    },
    {
      id: "f2",
      question: "Como funciona a importação de dados do meu sistema antigo?",
      answer: "Nós fazemos tudo de graça para você! Nossa equipe técnica importa sua lista de clientes, pets e histórico de vacinas a partir de planilhas Excel ou backups de outros sistemas sem cobrar nada a mais."
    },
    {
      id: "f3",
      question: "O envio de lembretes de WhatsApp tem custo adicional?",
      answer: "No plano Professional e Business, os lembretes automáticos de agendamento via WhatsApp já estão inclusos sem nenhum custo extra por mensagem enviada."
    },
    {
      id: "f4",
      question: "Posso cancelar ou mudar de plano quando quiser?",
      answer: "Sim! Não temos contrato de fidelidade. Você pode mudar de plano, migrar ou cancelar sua assinatura mensal a qualquer momento sem pagar multas de rescisão."
    },
    {
      id: "f5",
      question: "O sistema funciona em celular e tablet?",
      answer: "Perfeitamente! O Petvex é 100% responsivo e otimizado para navegadores de celulares, tablets e robôs de atendimento. Você ou sua equipe podem operar a agenda de qualquer lugar."
    }
  ],
  footer: {
    about: "Petvex é uma plataforma SaaS para pet shops, clínicas veterinárias, banho e tosa e negócios pet organizarem clientes, pets, agenda, vacinas, estoque, vendas, financeiro, relatórios e operação diária em um sistema moderno, simples e escalável. Desenhado para modernizar pet shops, consultórios, hotéis e clínicas veterinárias.",
    copyright: "© 2026 Petvex Tecnologia. Todos os direitos reservados."
  }
};

export const seoConfig: SeoMetadata = {
  title: "Petvex - Sistema para Pet Shop e Clínica Veterinária",
  description: "Petvex é uma plataforma SaaS para pet shops, clínicas veterinárias, banho e tosa e negócios pet organizarem clientes, pets, agenda, vacinas, estoque, vendas, financeiro, relatórios e operação diária em um sistema moderno, simples e escalável. Experimente grátis!",
  keywords: [
    "sistema para pet shop",
    "software para pet shop",
    "sistema veterinário",
    "software para clínica veterinária",
    "ERP para pet shop",
    "gestão de pet shop",
    "sistema para banho e tosa",
    "agenda para pet shop",
    "controle financeiro para pet shop",
    "sistema de gestão pet"
  ],
  ogImage: "/src/assets/images/dashboard-mockup.png",
  twitterCard: "summary_large_image",
  canonical: "https://petvex.com.br"
};
