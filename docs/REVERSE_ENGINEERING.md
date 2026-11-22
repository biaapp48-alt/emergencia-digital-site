# Engenharia Reversa — Emergência Digital

> Documento de auditoria da captura WebToZip do site `https://emergenciadigitalsc.com.br/`.
> Gerado em 2026-11-22. Nenhuma informação foi inventada; tudo abaixo foi extraído
> diretamente dos arquivos da captura ou dos assets públicos do site de origem.

---

## 1. Inventário de arquivos

Caminho absoluto do projeto:

```
C:\Users\vinta\Desktop\emergencia site mdoelar\saveweb2zip-com-emergenciadigitalsc-com-br
```

Arquivos presentes na captura original:

| Arquivo | Tamanho | Papel |
|---|---|---|
| `index.html` | 2.455 B | Shell SPA (React/Vite), Google Tag `G-6TEJKC93T2`, meta Open Graph/Twitter, `<div id="root">` |
| `css/index-JsqIt8dc.css` | 178.237 B | Build CSS (Tailwind + shadcn/ui), minificado em 1 linha |
| `js/index-ChhuQKan.js` | 1.433.514 B | Bundle React principal (landing page + painel admin) |
| `js/SeuScoreMercadoBlock-CCgK6AB5.js` | 54.609 B | Bloco "Seu Score de Mercado" (lazy-load) |
| `images/og-image.png` | 1.424.441 B | Imagem de compartilhamento (1376×768) |

Não há `package.json`, `README`, `.git`, arquivos ocultos ou config de build na captura.
Não é um repositório Git (verificado: `fatal: not a git repository`).

### Assets referenciados mas NÃO capturados

O bundle faz referência a 8 assets servidos em `/assets/*` (caminho absoluto na raiz),
que o WebToZip não baixou. Todos foram **recuperados com sucesso** do site de origem
(GET read-only) e estão em `site/assets/`:

| Asset original | Destino em `/site/assets` | Tipo / dimensão |
|---|---|---|
| `header-logo2-DMQCbnoN.png` | `logo.png` | Logotipo, 708×195 |
| `hero-bg-Ehw1jRFA.png` | `hero-bg.png` | Fundo do hero, 1920×779 |
| `hero-character-CcU81G_q.png` | `hero-character.png` | Ilustração/personagem do hero, 738×767 |
| `hero-mobile-banner-DV0DYuIB.png` | `hero-mobile-banner.png` | Banner hero mobile, 1170×879 |
| `elemento-01-H4uvhXnn.png` | `elemento-01.png` | Selo "Pacientes Gerados +257", 178×105 |
| `elemento-02-BmKy05uT.png` | `elemento-02.png` | Selo "Consultas Agendadas +59", 152×88 |
| `raio-x-BUcYw0Pn.svg` | `raio-x.svg` | Ilustração "Raio-X" (funil + moeda + %), 576×275 |
| `cash-back-COEAtzyG.svg` | `cash-back.svg` | Ilustração "R.O.I garantido", 466×479 |

---

## 2. Tecnologias identificadas

| Camada | Tecnologia | Evidência |
|---|---|---|
| Framework | React (JSX `G.jsx`, hooks, `forwardRef`) | bundle `index-ChhuQKan.js` |
| Build | Vite (hash nos nomes, `modulepreload`) | `index.html` |
| Estilo | Tailwind CSS + shadcn/ui (variáveis HSL, classes utilitárias) | CSS |
| Fontes | Poppins (400/500/600/700) via Google Fonts | `@import` no CSS |
| Gráfico de fluxo | `react-flow` (@xyflow) | variáveis `--xy-*` no CSS |
| Backend | Supabase (Auth, banco, buckets, RPC) | strings no bundle |
| Vídeo | YouTube embed (`a9zhmzexEMk`) | função `dh` |
| Analytics | Google Tag Manager `G-6TEJKC93T2` | `index.html` |

**Natureza do site:** não é uma landing estática simples — é um SPA completo que inclui
landing page institucional **e** um painel administrativo (login, CRM, automações, Kanban,
templates, score de mercado). O público da landing é **clínicas odontológicas**.

---

## 3. Paleta de cores original (variáveis CSS)

Fonte: bloco `:root` do CSS (formato HSL do shadcn/ui). Conversão para HEX:

| Variável | HSL | HEX (aprox.) | Uso |
|---|---|---|---|
| `--primary` | `148 100% 29%` | `#009445` | Verde principal |
| `--primary-light` | `148 100% 33%` | `#00A84F` | Hover do verde |
| `--primary-dark` | `148 100% 24%` | `#007F38` | Fundo de seções escuras |
| `--primary-darker` | `148 100% 17%` | `#005729` | Verde mais profundo |
| `--brand` | `148 100% 25%` | `#00803B` | Marca |
| `--accent` | `148 100% 29%` | `#009445` | Idêntico ao primary |
| `--background` | `0 0% 100%` | `#FFFFFF` | Fundo claro |
| `--foreground` | `220 20% 10%` | `#141519` | Texto principal |
| `--secondary` | `210 20% 98%` | `#FAFBFC` | Fundo secundário |
| `--muted-foreground` | `220 9% 43%` | `#636A78` | Texto secundário |
| `--border` | `220 13% 91%` | `#E5E7EB` | Bordas |
| `--ring` | `148 100% 29%` | `#009445` | Foco |
| `--radius` | `.5rem` | — | Arredondamento base |

### Cores complementares (dentro dos SVGs recuperados)

- Verde claro: `#00bd51`, `#48d786`
- Verde escuro: `#008238`
- Rosa/magenta (destaque do "raio-x"): `#f22e62`, `#f55298`
- Roxo: `#a52566`, `#a83e85`

> Observação: `images/og-image.png` apresenta paleta dominante **teal/ciano**
> (`#40A0A0`, `#40C0C0`), inconsistente com o verde do CSS — provável asset antigo/desatualizado.
> Não é a melhor referência de cor; o verde do CSS é a fonte canônica.

---

## 4. Tipografia

- **Família:** Poppins (fallback `system-ui, sans-serif`)
- **Pesos:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Carregamento:** Google Fonts (`fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700`)

---

## 5. Estrutura e conteúdo da landing page original

Ordem das seções no `<main>` (extraída do bundle):

1. **Hero** (`#hero`) — H1 *"Mais pacientes. Mais faturamento. Sem achismo."*,
   subtítulo *"Atraia mais pacientes, aumente seu faturamento e tome decisões baseadas em dados reais"*,
   CTA *"Começar diagnóstico gratuito"* → `#diagnostico`.
2. **Dinheiro de volta** (`#dinheiro-de-volta`) — *"R.O.I garantido ou seu dinheiro de volta!"*.
3. **Números** (marquee) — 400+ pacientes gerados · 50+ implantes · 15+ parceiros · 200+ oportunidades · 30+ clínicas.
4. **Vídeo** (`#como-funciona`) — *"Descubra a estrutura que clínicas odontológicas estão usando…"*.
5. **Cases** (`#cases`).
6. **Regiões** (`#regioes`) — análise por cidade/score.
7. **Ferramenta Diagnóstico** (`#ferramentaDiagnostico` / `#diagnostico`) — "Raio-X da sua clínica".
8. **Planos** (`#planos`) — *"Conheça nossos planos…"*.
9. **FAQ** (`#duvidas`) — *"Perguntas Frequentes"*.
10. **Footer**.

### Navegação (menu)

- Início `#hero` · Convite `#convite` · Parceiros `#parceiros` · Dúvidas `#duvidas`
- CTA principal: WhatsApp `https://wa.me/554797646987`

### Planos (nomes e recursos confirmados; **sem preços**)

| | Essencial | Crescimento | Autoridade |
|---|---|---|---|
| Recursos | 📢 Estrutura de campanhas · 🌐 Landing Page · 📍 Pixel e rastreamento · 🎨 6 criativos/mês · ⚙️ Otimização mensal ADS · 📊 Relatório | 🌐 Landing Page Otimizada · 🧠 Quiz de qualificação · 📋 CRM para leads · 💬 Automação WhatsApp · 🎨 12 criativos/mês · 🔗 Pixel + API · 📈 Dashboard · 🚀 Otimização | 🎯 Estratégia · 📱 Meta + Google · 🎨 20 criativos/mês · 🤖 Automação Avançada · 🏥 CRM Avançado · 💰 Dashboard faturamento · 🧪 Testes A/B · 🧑💼 Consultoria mensal |
| Inclui | Compliance · Suporte e-mail · Onboarding | Tudo do Essencial · Reuniões mensais | Tudo do Crescimento · Reuniões estratégicas |

**Não há preços, franquias ou limites numéricos no original.** A nova página centraliza
esses dados em `site/js/config.js` para preenchimento posterior (ver §9).

### FAQ original (8 perguntas)

1. Diferença vs. agência de marketing comum → foco em Growth (esteira completa).
2. Leads qualificados ou curiosos? → segmentação + qualificação.
3. Prazo para primeiros pacientes → setup + ~15 dias.
4. Precisa de equipe grande? → não, integra à estrutura atual.
5. Preciso aparecer em vídeos? → não, sistema é estrutural.
6. Garantia de resultado/ROI → dados e performance.
7. Fidelidade/contrato longo → modelos flexíveis.
8. Minha clínica está pronta? → consultoria estratégica gratuita.

### Dados de contato e jurídicos (confirmados no rodapé)

- WhatsApp: `https://wa.me/554797646987` · Telefone: `+55 47 9764-6987`
- Instagram: `https://www.instagram.com/emergencia_digital/`
- Rodapé: `© Copyright 2026 – Emergência Digital – Todos os direitos reservados.`
- CNPJ: `42.170.579/0001-80`
- Endereço: `5ª Avenida, nº 640, Municipios, Balneario Camboriu/SC, CEP 88337-305`

---

## 6. Recursos visuais reaproveitáveis

| Recurso | Uso recomendado |
|---|---|
| `logo.png` | Logo no header e rodapé (invertido p/ fundo verde) |
| `raio-x.svg` | **Ícone/ilustração do funil** — reaproveitar na seção "Funil Inteligente" e hero |
| `hero-character.png` | Ilustração principal do hero |
| `hero-bg.png` / `hero-mobile-banner.png` | Fundos do hero |
| `elemento-01.png` / `elemento-02.png` | Selos flutuantes de métrica |
| `cash-back.svg` | Selo de confiança / garantia |
| `og-image.png` | Social share (paleta desatualizada; ver pendências) |

---

## 7. Funcionalidades identificadas (do bundle)

- Landing institucional com funil de diagnóstico ("Raio-X da clínica").
- Quiz de qualificação de leads (faturamento, ticket, capacidade, investimento).
- "Seu Score de Mercado" (análise de cidade: população, clínicas no Google, concorrência, GAP).
- CRM: leads, Kanban, etapas, tags, procedimentos, diagnósticos.
- Automações CRM (gatilhos por evento, condições, ações; motor na Edge `crm-workflow-tick`).
- Templates de e-mail/WhatsApp, WhatsApp Business, envio SMTP.
- Painel admin com papéis (admin, moderador, editor, usuário).
- Integração Supabase (Auth, banco, buckets, RPC).

> ⚠️ Boa parte disso é a **arquitetura existente** do produto (marketing/CRM odontológico),
> não necessariamente a nova plataforma "Bia Core". A nova landing NÃO deve anunciar
> funcionalidades de IA/multimodal como prontas sem evidência.

---

## 8. Problemas encontrados

1. **Captura incompleta** — só `images/og-image.png`; os 8 assets de `/assets/*` não vieram
   (recuperados do site de origem).
2. **Link interno quebrado** — o menu aponta para `#convite`, mas não existe seção com esse `id`.
3. **Paleta inconsistente** — `og-image.png` em teal, enquanto o tema é verde.
4. **Planos sem preço** — nenhum valor/franquia/limite no original.
5. **Analytics embutido** — `G-6TEJKC93T2` no HTML (não deve ser herdado sem decisão do cliente).
6. **Dependências externas** — Google Fonts, Supabase, YouTube; o site não é estático puro.
7. **Conteúdo específico de nicho** — o original é 100% focado em clínicas odontológicas
   ("paciente", "faturamento", "implantes"); a nova proposta é multiempresa/multinicho.

---

## 9. Recomendações de reaproveitamento (aplicadas)

- **Identidade:** manter verde `#009445`, Poppins, logo e ilustrações recuperadas.
- **Funil:** reaproveitar `raio-x.svg` e criar um funil de 6 etapas animado.
- **Planos:** reaproveitar os nomes *Essencial / Crescimento / Autoridade* e seus recursos
  (são os únicos dados confirmados); preços ficam em `site/js/config.js`.
- **Contato:** manter WhatsApp/telefone/Instagram/CNPJ confirmados no rodapé.
- **Não herdar:** Analytics ID, dependências Supabase, links `#convite` quebrados e qualquer
  dado de cliente do painel admin.
