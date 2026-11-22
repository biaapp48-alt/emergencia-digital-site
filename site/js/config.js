/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL — Emergência Digital / Bia Core
 * ============================================================
 *  Este arquivo concentra TODOS os dados comerciais, de contato
 *  e jurídicos da página. Edite aqui antes de publicar.
 *
 *  IMPORTANTE (regra de compliance):
 *  - Só inclua valores CONFIRMADOS. Não invente preços, franquias
 *    ou limites. Onde não houver dado confirmado, deixe `null` e o
 *    site exibirá automaticamente um estado "em definição".
 *  - Campos jurídicos/operacionais pendentes estão marcados com
 *    `pendente: true` e NÃO devem ser tratados como definitivos.
 * ============================================================
 */
window.SITE_CONFIG = {
  // ---- Marca ----
  brand: {
    name: "Emergência Digital",
    product: "Bia Core",
    assistant: "Bia",
    // Slogan / posicionamento (confirmado no site original)
    tagline: "De paciente e faturamento a gente entende!",
    logoAlt: "Emergência Digital — marketing e tecnologia para clínicas",
  },

  // ---- Contato (confirmado no site original) ----
  contact: {
    whatsappUrl: "https://wa.me/554797646987",
    whatsappDisplay: "(47) 9764-6987",
    phoneUrl: "tel:+554797646987",
    phoneDisplay: "+55 47 9764-6987",
    instagramUrl: "https://www.instagram.com/emergencia_digital/",
  },

  // ---- Dados jurídicos / operacionais (pendentes de validação final) ----
  legal: {
    cnpj: "42.170.579/0001-80", // confirmado no rodapé do site original
    address: "5ª Avenida, nº 640, Municipios, Balneario Camboriu/SC, CEP 88337-305",
    // PENDENTES — não confirmados na captura:
    razaoSocial: null, // razão social — pendente
    responsavelLegal: null, // responsável legal / DPO — pendente
    emailContato: null, // e-mail oficial de contato — pendente
  },

  // ---- Planos comerciais ----
  //
  //  Nomes e recursos CONFIRMADOS na captura do site original.
  //  PREÇOS: não localizados — mantidos como null (exibidos como
  //  "Sob consulta"). Preencha `price` quando houver valor validado.
  plans: [
    {
      id: "essencial",
      name: "Essencial",
      description:
        "Estrutura essencial de presença digital e campanhas para começar a captar e organizar oportunidades.",
      price: null, // ex.: 497
      pricePeriod: null, // ex.: "mês"
      priceNote: "Valor sob consulta",
      features: [
        "Estrutura de campanhas",
        "Landing page de captação",
        "Pixel e rastreamento de leads",
        "Criativos para campanhas",
        "Otimização mensal de anúncios",
        "Relatório de desempenho",
      ],
      includes: [
        "Compliance de parceiros",
        "Suporte por e-mail",
        "Onboarding assistido",
      ],
      cta: "Solicitar apresentação",
    },
    {
      id: "crescimento",
      name: "Crescimento",
      description:
        "Funil completo com qualificação, CRM e automações para transformar conversas em negócios com escala.",
      price: null,
      pricePeriod: null,
      priceNote: "Valor sob consulta",
      features: [
        "Landing page otimizada",
        "Quiz de qualificação",
        "CRM para leads",
        "Automação de WhatsApp",
        "Criativos profissionais",
        "Pixel + API de conversões",
        "Dashboard de métricas",
        "Otimização de campanhas",
      ],
      includes: [
        "Tudo do Essencial",
        "Compliance de parceiros",
        "Reuniões mensais",
      ],
      cta: "Solicitar apresentação",
    },
    {
      id: "autoridade",
      name: "Autoridade",
      description:
        "Operação completa com estratégia, automação avançada e consultoria para dominar o mercado da sua região.",
      price: null,
      pricePeriod: null,
      priceNote: "Valor sob consulta",
      features: [
        "Estratégia de captação",
        "Meta + Google",
        "Volume ampliado de criativos",
        "Automação avançada",
        "CRM avançado",
        "Dashboard de faturamento",
        "Testes A/B",
        "Consultoria mensal",
      ],
      includes: [
        "Tudo do Crescimento",
        "Compliance de parceiros",
        "Reuniões estratégicas",
      ],
      cta: "Solicitar apresentação",
    },
  ],

  // ---- Recursos da Bia (status: implemented | planned) ----
  //  Não anuncie como "pronto" o que ainda é planejado.
  biaFeatures: [
    {
      title: "Atendimento conversacional",
      status: "planned",
      text: "Conversas naturais e assistidas por IA para responder e encaminhar o contato.",
    },
    {
      title: "WhatsApp Business",
      status: "implemented",
      text: "Integração com o canal oficial de WhatsApp para centralizar o atendimento.",
    },
    {
      title: "Interpretação de mensagens",
      status: "planned",
      text: "Leitura de intenção e contexto para qualificar a conversa automaticamente.",
    },
    {
      title: "Arquitetura multimodal",
      status: "planned",
      text: "Preparada para texto, áudio e imagem em um mesmo fluxo de atendimento.",
    },
    {
      title: "Organização de contatos",
      status: "implemented",
      text: "Cadastro, segmentação e histórico centralizados dos contatos.",
    },
    {
      title: "Integração com CRM",
      status: "implemented",
      text: "Registro e avanço do contato dentro do funil comercial.",
    },
    {
      title: "Automação de processos",
      status: "implemented",
      text: "Gatilhos e regras para mover etapas, enviar mensagens e criar tarefas.",
    },
  ],
};
