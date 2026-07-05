import { SiteConfig, SeoMetadata } from "../types/site";

export const siteConfig: SiteConfig = {
  name: "Petvex",
  tagline: "Comece apenas com seu CPF • Ideal para iniciar sem CNPJ",
  description: "Você cuida dos animais. O Petvex cuida da gestão.",
  logo: "/src/assets/images/logo.png",
  whatsappNumber: "5511999998888", // Formato internacional
  email: "contato@petvex.com.br",
  phone: "(11) 99999-8888",
  hours: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",
  socials: {
    instagram: "https://instagram.com/petvex.app",
    facebook: "https://facebook.com/petvexapp",
    youtube: "https://youtube.com/petvex"
  },
  navigation: [
    { label: "Início", href: "/" },
    { label: "Benefícios", href: "/beneficios" },
    { label: "Demonstração", href: "/demonstracao" },
    { label: "Recursos", href: "/funcionalidades" },
    { label: "Preço Único", href: "/planos" },
    { label: "Fale Conosco", href: "/contato" },
  ],
  hero: {
    headline: "Você cuida dos animais. O Petvex cuida da gestão.",
    subheadline: "Organize seu negócio pet sem complicação, economize horas de burocracia e tenha mais tempo livre para fazer o que você ama.",
    ctaPrimary: "Começar agora gratuitamente",
    ctaSecondary: "Falar com Consultor"
  },
  metrics: [
    // This section is redesigned to be trust pillars
    { id: "m1", value: "Suporte", label: "Suporte humanizado pelo WhatsApp" },
    { id: "m2", value: "Migração", label: "100% Gratuita de dados" },
    { id: "m3", value: "Foco", label: "Exclusivo no mercado Pet" },
    { id: "m4", value: "Segurança", label: "Segurança e cuidado com seus dados" }
  ],
  benefits: [
    {
      id: "b1",
      title: "Nunca mais esqueça um atendimento.",
      description: "Esqueça a bagunça de papéis e planilhas. Organize toda a sua agenda de estética e consultas em segundos, reduza esquecimentos e otimize o tempo da sua equipe.",
      iconName: "Calendar"
    },
    {
      id: "b2",
      title: "Histórico do tutor e do pet em segundos.",
      description: "Tenha a ficha completa de cada animal, histórico de vacinas, alergias, receitas, observações e até fotos de antes e depois unificados em um só lugar.",
      iconName: "ShieldAlert"
    },
    {
      id: "b3",
      title: "Saiba exatamente quanto está lucrando.",
      description: "Tenha controle absoluto do seu fluxo de caixa. Saiba exatamente de onde vêm os seus ganhos, controle as despesas e calcule comissão de funcionários sem dor de cabeça.",
      iconName: "TrendingUp"
    },
    {
      id: "b4",
      title: "Evite perder dinheiro em estoque.",
      description: "Controle de estoque simples de produtos de banho e tosa, rações, medicamentos e acessórios com alertas automáticos de estoque mínimo e validade próxima.",
      iconName: "Package"
    }
  ],
  features: [
    {
      id: "f1",
      title: "Histórico do Tutor & Pet em Segundos",
      description: "Acesse instantaneamente fichas de cadastro, preferências dos animais, histórico financeiro e detalhes de pacotes ativos em poucos cliques.",
      iconName: "User"
    },
    {
      id: "f2",
      title: "Prontuário Clínico & Estético",
      description: "Controle alergias, peso, vacinas e procedimentos de estética de forma visual e segura, do celular ou computador.",
      iconName: "Heart"
    },
    {
      id: "f3",
      title: "Agenda Inteligente & Visual",
      description: "Grade de horários dinâmica e fácil de usar. Organize banhos, tosas e consultas rapidamente para evitar furos ou atrasos.",
      iconName: "CalendarDays"
    },
    {
      id: "f4",
      title: "Controle de Vacinas Preventivo",
      description: "Histórico completo com lembretes automáticos de próximas doses, garantindo a saúde do pet e o retorno garantido do tutor.",
      iconName: "Syringe"
    },
    {
      id: "f5",
      title: "Gestão de Estoque Crítico",
      description: "Evite perdas financeiras! O sistema avisa quando produtos importantes estão acabando ou próximos da data de vencimento.",
      iconName: "Lock"
    },
    {
      id: "f6",
      title: "Venda Rápida de Balcão (PDV)",
      description: "Venda rapidamente enquanto o cliente ainda está no balcão. Busque produtos pelo teclado ou código de barras de forma ágil.",
      iconName: "ShoppingCart"
    },
    {
      id: "f7",
      title: "Financeiro & Lucro Real",
      description: "Termine seu fechamento de caixa em minutos. Controle contas a pagar, receber, fluxo de caixa e entenda o lucro real do mês.",
      iconName: "DollarSign"
    },
    {
      id: "f8",
      title: "Relatórios de Desempenho",
      description: "Gráficos simples que mostram os serviços mais vendidos, colaboradores mais produtivos e ticket médio dos tutores.",
      iconName: "BarChart3"
    },
    {
      id: "f9",
      title: "Controle de Pacotes de Banho",
      description: "Gerencie mensalistas de estética pet de forma transparente, sabendo quantos banhos cada pet já utilizou e o saldo restante.",
      iconName: "Scissors"
    },
    {
      id: "f10",
      title: "Upload de Antes & Depois",
      description: "Tire fotos do celular e anexe diretamente no prontuário do pet para documentar os resultados incríveis de cada sessão.",
      iconName: "Activity"
    },
    {
      id: "f11",
      title: "Receituário & Prescrições Digitais",
      description: "Gere receitas com orientações claras para os tutores, laudos e atestados rápidos, economizando horas de caneta e papel.",
      iconName: "PlusCircle"
    },
    {
      id: "f12",
      title: "Controle de Acesso por Usuário",
      description: "Defina permissões personalizadas para que tosadores, veterinários e recepcionistas acessem apenas o necessário.",
      iconName: "Users"
    }
  ],
  differentials: [
    {
      id: "d1",
      title: "Confirmação Automática via WhatsApp",
      description: "Reduza as faltas (no-show) em até 85%. O Petvex envia lembretes amigáveis de forma automatizada pelo WhatsApp para que os clientes confirmem com 1 clique.",
      iconName: "MessageCircle"
    },
    {
      id: "d2",
      title: "Comece apenas com seu CPF",
      description: "Não precisa abrir empresa para começar de forma profissional. O Petvex é ideal para quem está iniciando autônomo. Quando você abrir seu CNPJ, basta atualizar o cadastro e nenhum dado será perdido.",
      iconName: "Sparkles"
    },
    {
      id: "d3",
      title: "Suporte VIP 100% Humanizado",
      description: "Fale com pessoas de verdade que entendem os desafios do seu negócio. Nosso suporte técnico responde por chat ou WhatsApp em menos de 5 minutos.",
      iconName: "Headphones"
    }
  ],
  howItWorks: [
    {
      id: "h1",
      step: 1,
      title: "Crie sua conta em segundos",
      description: "Ativação imediata e 100% gratuita por 14 dias. Sem contrato de fidelidade e não precisa de cartão de crédito para testar."
    },
    {
      id: "h2",
      step: 2,
      title: "Nossa equipe faz a migração de graça",
      description: "Tem dados em planilhas ou outro sistema? Nós migramos toda a sua lista de clientes, pets e vacinas gratuitamente para você."
    },
    {
      id: "h3",
      step: 3,
      title: "Organize seu negócio pet e cresça",
      description: "Abandone as planilhas e o caderno. Centralize tudo, economize tempo e foque naquilo que você mais ama: cuidar dos animais."
    }
  ],
  plans: [
    {
      id: "p1",
      name: "Plano Único Petvex",
      price: "149",
      period: "mês",
      description: "Acesso total e ilimitado a todos os recursos. Sem taxas ocultas, sem fidelidade e com suporte humanizado incluído.",
      features: [
        "Pets e Tutores ILIMITADOS",
        "Disparos e lembretes de WhatsApp incluídos",
        "Agenda integrada completa para Banho, Tosa e Consultas",
        "Histórico e prontuário completo de cada pet",
        "Gestão financeira simplificada + Fluxo de caixa",
        "Controle de estoque inteligente e PDV",
        "Suporte humanizado em menos de 5 minutos",
        "Atualizações constantes de segurança e novos recursos"
      ],
      recommended: true,
      ctaText: "Começar teste gratuito",
      whatsappMessage: "Olá! Quero conhecer o Petvex e iniciar meu teste gratuito de 14 dias."
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Dra. Mariana Alencar",
      role: "Veterinária e Proprietária",
      company: "Clínica Vet & Cia (Porto Alegre - RS)",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "O Petvex mudou completamente nossa rotina clínica. Prontuários e prescrições levam segundos para serem gerados no computador ou celular. O suporte humanizado é fantástico, respondem em minutos!"
    },
    {
      id: "t2",
      name: "Thiago dos Santos",
      role: "Esteticista Canino e Groomer",
      company: "Rede Pet Estética (São Paulo - SP)",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Minha taxa de faltas no banho e tosa caiu drasticamente depois que ativei as confirmações automáticas do Petvex via WhatsApp. Os clientes adoram os lembretes e eu parei de perder horários vagos!"
    },
    {
      id: "t3",
      name: "Beatriz Nogueira",
      role: "Administradora",
      company: "Mundo Animal Pet Center (Belo Horizonte - MG)",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Antes eu perdia o dia todo calculando comissões de banho e tosa dos tosadores e controlando o fluxo de caixa. Com o Petvex, resolvo o fechamento financeiro em minutos e vejo o lucro real do mês!"
    }
  ],
  faq: [
    {
      id: "f1",
      question: "Preciso de um CNPJ para começar a usar o Petvex?",
      answer: "De forma alguma! O Petvex foi feito sob medida para quem está começando. Você pode criar sua conta utilizando apenas seu CPF e cadastrar seus primeiros clientes sem burocracia. Se no futuro você abrir seu CNPJ, basta atualizar o cadastro no sistema. Nenhum dado será perdido e você continuará trabalhando normalmente."
    },
    {
      id: "f2",
      question: "Preciso cadastrar algum cartão de crédito para testar?",
      answer: "Não! O teste do Petvex é 100% gratuito por 14 dias, sem compromisso e sem necessidade de inserir dados de pagamento. Você só escolhe assinar após os 14 dias se comprovar que o sistema realmente transforma o seu dia a dia."
    },
    {
      id: "f3",
      question: "Como funciona a migração gratuita de dados?",
      answer: "Nós fazemos todo o trabalho pesado por você de forma gratuita! Se você tem sua lista de clientes, pets ou vacinas em planilhas do Excel ou em outro sistema de gestão, nossa equipe técnica faz a importação e organiza tudo para você começar a usar o Petvex imediatamente."
    },
    {
      id: "f4",
      question: "Existe contrato de fidelidade ou multa de cancelamento?",
      answer: "Não. Acreditamos na sua liberdade. Trabalhamos no modelo de assinatura mensal ou anual recorrente. Você pode cancelar ou alterar seu plano quando quiser, de forma simples e rápida pelo painel, sem taxas escondidas ou qualquer multa."
    },
    {
      id: "f5",
      question: "O sistema funciona no celular e tablet?",
      answer: "Sim, perfeitamente! O Petvex é 100% responsivo e otimizado para celulares, tablets e computadores. Você pode acompanhar a agenda do banho e tosa, consultar prontuários ou verificar o fluxo de caixa de onde estiver, em tempo real."
    }
  ],
  footer: {
    about: "O Petvex é um parceiro completo para groomers, veterinários autônomos e pequenos pet shops organizarem seu dia a dia, economizarem tempo e crescerem de forma profissional, sem burocracias ou planilhas complicadas.",
    copyright: "© 2026 Petvex Tecnologia. Todos os direitos reservados."
  }
};

export const seoConfig: SeoMetadata = {
  title: "Petvex - Sistema para Banho e Tosa, Consultório e Pequeno Pet Shop",
  description: "Organize seu negócio pet sem complicação. Agenda de banho e tosa, prontuário veterinário, caixa, controle de estoque e lembretes de WhatsApp automáticos. Teste grátis!",
  keywords: [
    "sistema para pet shop",
    "software para pet shop",
    "sistema veterinário",
    "software para clínica veterinária",
    "ERP para pet shop",
    "gestão de pet shop",
    "sistema para banho e tosa",
    "agenda para banho e tosa",
    "controle financeiro para pet shop",
    "sistema de gestão pet",
    "software para veterinários",
    "sistema para groomers"
  ],
  ogImage: "/src/assets/images/dashboard-mockup.png",
  twitterCard: "summary_large_image",
  canonical: "https://petvex.com.br"
};
