/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL — Emergência Digital
 *  Ecossistema de Crescimento Empresarial / Bia
 * ============================================================
 *  Este arquivo concentra os dados comerciais, de contato e
 *  jurídicos da página. Edite aqui antes de publicar.
 *
 *  REGRAS DE VERACIDADE (importante):
 *  - Só inclua valores CONFIRMADOS. Não invente preços, limites
 *    de uso, volumes ou resultados. Onde não houver dado
 *    confirmado, mantenha `null` ou use um texto neutro
 *    (ex.: "Sob consulta").
 *  - O status de cada recurso da Bia deve refletir a realidade:
 *      "implemented"  -> disponível hoje na operação da Emergência Digital
 *      "planned"      -> em desenvolvimento / roadmap (NÃO disponível)
 *  - Campos jurídicos pendentes estão marcados como `null` e NÃO
 *    devem ser tratados como definitivos.
 * ============================================================
 */
window.SITE_CONFIG = {
  // ---- Marca ----
  brand: {
    name: "Emergência Digital",
    product: "Bia",
    assistant: "Bia",
    tagline: "Inteligência e estrutura para o crescimento da sua empresa.",
    logoAlt: "Emergência Digital",
  },

  // ---- Contato (confirmado no site original) ----
  contact: {
    whatsappUrl: "https://wa.me/554797646987",
    whatsappDisplay: "(47) 9764-6987",
    phoneUrl: "tel:+554797646987",
    phoneDisplay: "+55 47 9764-6987",
    instagramUrl: "https://www.instagram.com/emergencia_digital/",
  },

  // ---- Dados jurídicos / operacionais ----
  legal: {
    cnpj: "42.170.579/0001-80", // confirmado no rodapé do site original
    address: "5ª Avenida, nº 640, Municipios, Balneario Camboriu/SC, CEP 88337-305",
    // PENDENTES — não confirmados na captura:
    razaoSocial: null, // razão social — pendente
    responsavelLegal: null, // responsável legal / DPO — pendente
    emailContato: null, // e-mail oficial de contato — pendente
  },

  // ---- Planos da Bia (política comercial de pré-lançamento) ----
  //  Valores centralizados aqui. Condição de fundador válida por 12 meses.
  //  Implantação = cobrança única, parcelada conforme o plano, FORA da mensalidade.
  //  Não divulgar quantidades de créditos, limites de mensagens ou consumo ilimitado.
  plansMeta: {
    periodLabel: "/mês",
    normalLabel: "Preço normal",
    founderLabel: "Condição de fundador",
    founderBadge: "Condição especial de pré-lançamento",
    setupLabel: "Implantação · cobrança única",
    setupOr: "ou",
    founderValidity: "Condição de fundador válida por 12 meses.",
    aiFeature: "Franquia mensal de IA incluída",
    aiDisclaimer:
      "A Bia possui uma franquia mensal de processamento de inteligência artificial. O consumo varia conforme a modalidade e a complexidade das interações. O painel permite acompanhar o uso e solicitar créditos adicionais.",
    setupDisclaimer:
      "A implantação é uma cobrança única, parcelada conforme o plano, e não faz parte da mensalidade recorrente.",
  },
  plans: [
    {
      id: "essencial",
      name: "Essencial",
      tagline: "Comece a organizar seu atendimento.",
      description:
        "A base para centralizar contatos, dar estrutura ao atendimento e começar a acompanhar oportunidades.",
      normalPrice: 197,
      founderPrice: 147,
      period: "mês",
      setup: { total: "R$ 490", installments: "2× R$ 245" },
      aiIncluded: true,
      recommended: false,
      features: [
        "Bia e estrutura de atendimento",
        "Integração com WhatsApp, conforme disponibilidade",
        "Organização de contatos",
        "CRM básico",
        "Histórico de oportunidades",
        "Acompanhamento inicial",
        "Suporte e configuração inicial",
      ],
      cta: "Solicitar proposta",
    },
    {
      id: "profissional",
      name: "Profissional",
      tagline: "Conecte atendimento, CRM e automações.",
      description:
        "Para empresas que querem conectar o atendimento ao funil comercial e reduzir o trabalho manual.",
      normalPrice: 397,
      founderPrice: 297,
      period: "mês",
      setup: { total: "R$ 990", installments: "3× R$ 330" },
      aiIncluded: true,
      recommended: true,
      features: [
        "Tudo do Essencial",
        "CRM ampliado",
        "Funil comercial",
        "Automações de processos",
        "Integração com o Motor de Sites, conforme disponibilidade",
        "Agendamentos e acompanhamento",
        "Indicadores de desempenho",
        "Configuração personalizada",
      ],
      cta: "Solicitar proposta",
    },
    {
      id: "escala",
      name: "Escala",
      tagline: "Uma estrutura para operações mais complexas.",
      description:
        "Para operações com mais equipes, unidades ou necessidades específicas de integração e acompanhamento.",
      normalPrice: 797,
      founderPrice: 597,
      period: "mês",
      setup: { total: "R$ 1.990", installments: "4× R$ 497,50" },
      aiIncluded: true,
      recommended: false,
      features: [
        "Tudo do Profissional",
        "Estrutura para múltiplas unidades ou equipes",
        "Automações avançadas",
        "Integrações personalizadas",
        "Configurações ampliadas da Bia",
        "Indicadores avançados",
        "Estrutura de operação escalável",
        "Acompanhamento prioritário",
      ],
      cta: "Solicitar proposta",
    },
  ],

  // ---- Recursos da Bia (status: implemented | planned) ----
  //  NÃO anuncie como disponível o que ainda é planejado.
  biaFeatures: [
    {
      title: "Atendimento inteligente",
      icon: "spark",
      status: "planned",
      text: "Condução de conversas com apoio de IA para responder, qualificar e encaminhar contatos.",
    },
    {
      title: "WhatsApp Business",
      icon: "whatsapp",
      status: "implemented",
      text: "Atendimento centralizado no WhatsApp, com registro das conversas e automação de mensagens.",
    },
    {
      title: "Interpretação de mensagens",
      icon: "brain",
      status: "planned",
      text: "Leitura de intenção e contexto das mensagens para apoiar a qualificação do contato.",
    },
    {
      title: "Organização de contatos",
      icon: "users",
      status: "implemented",
      text: "Cadastro, segmentação e histórico dos contatos em um único lugar.",
    },
    {
      title: "CRM integrado",
      icon: "funnel",
      status: "implemented",
      text: "Contatos e oportunidades registrados no funil comercial, com acompanhamento por etapa.",
    },
    {
      title: "Automações",
      icon: "bolt",
      status: "implemented",
      text: "Regras que movem etapas, criam tarefas e disparam mensagens automaticamente.",
    },
    {
      title: "Agendamentos e encaminhamentos",
      icon: "calendar",
      status: "planned",
      text: "Apoio ao agendamento e ao direcionamento do contato para a pessoa certa da equipe.",
    },
  ],

  // ---- Ecossistema (6 módulos) ----
  ecosystem: [
    {
      title: "Bia IA",
      icon: "spark",
      text: "Atendimento inteligente e automação de conversas.",
      tag: "Núcleo do ecossistema",
    },
    {
      title: "Motor de Sites",
      icon: "globe",
      text: "Criação de sites profissionais e páginas de captação.",
      highlight: true,
      tag: "Produto do ecossistema",
    },
    {
      title: "CRM",
      icon: "funnel",
      text: "Organização de contatos, oportunidades e processos comerciais.",
    },
    {
      title: "Automações",
      icon: "bolt",
      text: "Fluxos inteligentes para conectar tarefas e etapas da operação.",
    },
    {
      title: "Tráfego e Criativos",
      icon: "target",
      text: "Aquisição de oportunidades através de campanhas e comunicação estratégica.",
    },
    {
      title: "Inteligência de Resultados",
      icon: "chart",
      text: "Acompanhamento de indicadores, oportunidades e desempenho.",
    },
  ],

  // ---- Módulos adicionais ----
  additionalModules: [
    {
      title: "Motor de Sites",
      icon: "globe",
      text: "Sites profissionais e páginas de captação para apresentar sua empresa e receber novos contatos.",
    },
    {
      title: "CRM",
      icon: "funnel",
      text: "Estrutura para organizar contatos, oportunidades e o processo comercial da sua equipe.",
    },
    {
      title: "Automações adicionais",
      icon: "bolt",
      text: "Fluxos extras para reduzir tarefas manuais e conectar etapas da operação.",
    },
    {
      title: "Integrações personalizadas",
      icon: "plug",
      text: "Conexões sob medida com as ferramentas e os processos que sua empresa já utiliza.",
    },
  ],

  // ---- Agência Premium (opcional) ----
  agency: {
    title: "Quer ir além? Conheça a Agência Premium.",
    subtitle:
      "A inteligência da Bia trabalhando junto com uma equipe especializada para acelerar o crescimento da sua empresa.",
    tiers: [
      { name: "Gestão de aquisição", price: "R$ 1.490/mês" },
      { name: "Growth multicanal", price: "R$ 2.490/mês" },
      { name: "Operação personalizada", price: "a partir de R$ 3.490/mês" },
    ],
    feeNote:
      "Os valores são honorários de serviço. A verba de anúncios é paga separadamente pelo cliente.",
    services: [
      "Estratégia de aquisição",
      "Gestão de campanhas Meta Ads",
      "Gestão de campanhas Google Ads",
      "Criação de criativos publicitários",
      "Planejamento de campanhas",
      "Otimização de resultados",
      "Estratégias de conversão",
      "Integração da operação de marketing com a Bia",
    ],
    note:
      "A Agência Premium é opcional. Você pode contratar a plataforma sem contratar a agência — ou contratar serviços individuais, como criação de criativos, sites e projetos específicos, conforme a necessidade e a disponibilidade.",
    differential:
      "Os anúncios e criativos atraem pessoas interessadas, e a Bia participa da etapa de atendimento e organização dessas oportunidades, reduzindo a dependência de trabalho manual.",
    cta: "Conhecer a Agência Premium",
  },

  // ---- Perguntas frequentes ----
  faq: [
    {
      q: "O que é a Bia?",
      a: "A Bia é a inteligência operacional da Emergência Digital. Ela apoia o atendimento, organiza contatos e oportunidades e automatiza etapas da operação comercial, trabalhando junto com a sua equipe.",
    },
    {
      q: "A Bia substitui minha equipe?",
      a: "Não. A Bia foi pensada para assumir a parte operacional e repetitiva, liberando sua equipe para o que exige atenção humana: relacionamento, negociação e decisões.",
    },
    {
      q: "Preciso ter um site para contratar?",
      a: "Não. A Bia pode ser contratada de forma independente. O Motor de Sites é um módulo adicional para quem também precisa de presença digital e páginas de captação.",
    },
    {
      q: "Posso contratar somente a Bia?",
      a: "Sim. A Bia é o eixo central da proposta e pode ser contratada sozinha. Os demais módulos são opcionais e podem ser adicionados conforme a necessidade da sua operação.",
    },
    {
      q: "Posso contratar o CRM separadamente?",
      a: "O CRM é um dos módulos do ecossistema e poderá ser contratado separadamente, conforme a disponibilidade comercial e a necessidade da sua operação. Fale com a equipe para avaliar o cenário.",
    },
    {
      q: "Posso contratar somente o Motor de Sites?",
      a: "Sim, o Motor de Sites é um produto do ecossistema e poderá ser contratado de forma independente. A contratação da Bia não é obrigatória para contratar o Motor de Sites.",
    },
    {
      q: "A Agência Premium é obrigatória?",
      a: "Não. A Agência Premium é opcional. Você pode contratar a plataforma e utilizar os módulos conforme sua necessidade, sem contratar a agência.",
    },
    {
      q: "Como funciona a contratação?",
      a: "O primeiro passo é falar com a nossa equipe. Entendemos a operação da sua empresa, apresentamos os planos e módulos disponíveis e definimos a configuração mais adequada. Os valores de pré-lançamento estão descritos nos planos.",
    },
    {
      q: "O que é a condição de cliente fundador?",
      a: "A condição de cliente fundador dá acesso aos valores especiais de pré-lançamento dos planos da Bia. Ela é válida por 12 meses. Fale com a equipe para entender como participar desta primeira etapa do ecossistema.",
    },
    {
      q: "Como funciona a franquia mensal de IA?",
      a: "Cada plano inclui uma franquia mensal de processamento de inteligência artificial. O consumo varia conforme a modalidade e a complexidade das interações, e o painel permite acompanhar o uso e solicitar créditos adicionais.",
    },
    {
      q: "A implantação faz parte da mensalidade?",
      a: "Não. A implantação é uma cobrança única, parcelada conforme o plano, e não integra a mensalidade recorrente.",
    },
    {
      q: "Quais funcionalidades já estão disponíveis?",
      a: "A página indica o status de cada recurso da Bia. Os itens marcados como “Disponível” têm base no sistema existente da Emergência Digital. Os marcados como “Em desenvolvimento” fazem parte da evolução da plataforma e ainda não estão disponíveis em produção.",
    },
  ],
};
