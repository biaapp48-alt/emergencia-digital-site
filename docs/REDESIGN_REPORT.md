# Relatório de Redesign — Landing Page Emergência Digital

**Data:** 22/11/2026
**Escopo:** redesign visual e de conteúdo da landing page comercial. Nenhum
módulo, backend, banco, Supabase, API, webhook ou integração foi implementado
ou alterado.

---

## 1. Direção entregue

- Tema escuro premium (azul-marinho quase preto), com verde institucional
  `#009445`, verde luminoso e ciano como acentos tecnológicos.
- Roxo restrito à **Agência Premium**.
- Tipografia **Poppins**, cards com transparência, bordas iluminadas,
  glassmorphism moderado e animações sutis.
- **Bia como núcleo abstrato:** orbe luminoso, anéis orbitais, símbolo próprio,
  linhas de conexão e chips flutuantes (WhatsApp, CRM, Sites, Automações,
  Tráfego, Resultados). Nenhum rosto humano, avatar, personagem humanoide ou
  banco de imagens.
- Conteúdo em HTML real, responsivo, acessível e indexável.

## 2. Estrutura da página

1. **Hero** — nav completa, título e subtítulo solicitados, CTAs “Conhecer a
   Bia” e “Descobrir o ecossistema”, núcleo abstrato da Bia.
2. **Conheça a Bia** — 7 cards com status verdadeiro por recurso.
3. **O Ecossistema** — 6 módulos, com **Motor de Sites** em destaque próprio.
4. **Como o ecossistema trabalha** — fluxo
   ATRAIR → ATENDER → ORGANIZAR → AUTOMATIZAR → CONVERTER → CRESCER.
5. **Planos da Bia** — Essencial, Profissional (recomendado) e Escala, todos
   “Sob consulta”, CTA “Solicitar proposta”.
6. **Módulos adicionais** — Motor de Sites, CRM, Automações adicionais e
   Integrações personalizadas.
7. **Agência Premium** — painel roxo/verde, serviços, aviso de opcionalidade,
   diferencial e CTA “Conhecer a Agência Premium”.
8. **Demonstração** — conversa ilustrativa claramente rotulada como simulação.
9. **FAQ** — as 9 perguntas solicitadas, com respostas honestas.
10. **CTA final + rodapé** — contato, Instagram, CNPJ, endereço e links legais
    preservados.

## 3. Arquivos modificados / criados / removidos

### Criados

- `site/css/legal.css` — tema claro e independente para a página legal.
- `docs/REDESIGN_REPORT.md` — este relatório.

### Reescritos

- `site/index.html`
- `site/css/styles.css`
- `site/js/config.js`
- `site/js/main.js`
- `site/politica-de-privacidade.html` (conteúdo jurídico preservado; migrado
  para `css/legal.css`)
- `site/404.html`
- `README.md`
- `site/sitemap.xml` (inclui `lastmod`)

### Regenerado

- `site/assets/og-image.png` — 1200×630, tema escuro, com a Bia abstrata.

### Removidos de `site/assets/`

- `hero-character.png` (personagem humano — proibido pelo briefing)
- `hero-bg.png` (fundo verde antigo, sem uso no tema escuro)
- `elemento-01.png` e `elemento-02.png` (selos com números fixos — evitam
  métricas não validadas)
- `cash-back.svg` e `raio-x.svg` (peças do layout anterior, sem uso)

Os arquivos removidos continuam recuperáveis no histórico do Git. O site
publicado anteriormente permanece no ar até o deploy desta versão.

### Preservados

- `site/assets/logo.png`
- `site/assets/favicon.svg`
- `.github/workflows/deploy.yml` (publica `site/` via GitHub Pages)
- `site/robots.txt`
- `docs/REVERSE_ENGINEERING.md` e `docs/FINAL_REPORT.md` (histórico)

## 4. Veracidade e regras comerciais

- **Nenhum preço inventado.** Os três planos usam `price: null` e exibem
  “Sob consulta”.
- **Nenhum limite inventado** de mensagens, números, usuários, sites ou
  créditos.
- **Nenhuma métrica, depoimento ou resultado** de cliente foi criado.
- **Status honesto dos recursos da Bia:**

  | Recurso | Status |
  |---|---|
  | Atendimento inteligente | Em desenvolvimento |
  | WhatsApp Business | Disponível |
  | Interpretação de mensagens | Em desenvolvimento |
  | Organização de contatos | Disponível |
  | CRM integrado | Disponível |
  | Automações | Disponível |
  | Agendamentos e encaminhamentos | Em desenvolvimento |

- O site informa que a versão multiempresa do SaaS está em desenvolvimento.
- Integrações não operacionais são apresentadas com “conforme disponibilidade”.
- A Agência Premium é explicitamente opcional.
- A política de privacidade mantém os campos `[PENDENTE]` e o aviso de que o
  documento não está pronto para submissão à Meta.

## 5. Verificações realizadas

### Servidor local e Chrome headless

Servidor estático em `http://127.0.0.1:4173`, renderizado com Chrome headless
e DevTools Protocol.

| Verificação | Resultado |
|---|---|
| Seções na landing | 10 |
| Cards da Bia | 7 |
| Módulos do ecossistema | 6 |
| Planos | 3 |
| Módulos adicionais | 4 |
| Perguntas do FAQ | 9 |
| Serviços da Agência Premium | 8 |
| Imagens quebradas | 0 |
| Âncoras internas sem destino | 0 |
| Overflow horizontal (1440 px) | Não |
| Overflow horizontal (390 px) | Não |
| Erros de console | 0 |
| FAQ (accordion) | Abre, atualiza `aria-expanded` e altura |
| Menu mobile | Abre, atualiza `aria-expanded` e exibe `flex` |
| Política de privacidade (390 px e 1200 px) | Sem overflow, 8 campos `[PENDENTE]` |
| Página 404 | Sem overflow |
| `og-image.png` | 1200×630 |
| Links de contato | WhatsApp, telefone e Instagram aplicados via `config.js` |

### Conteúdo

- Nenhuma referência aos assets removidos em `site/`.
- Nenhum preço `R$ 97`, `R$ 197` ou `R$ 397`.
- Nenhuma menção a “mais vendido”, métricas antigas, depoimentos ou resultados
  garantidos.
- Nenhuma credencial, URL de Supabase ou chave sensível em `site/`.

### Responsividade

- Desktop 1440 px, mobile 390 px e página legal em 390/1200 px.
- Cards do ecossistema passam para 1 coluna em telas pequenas.
- Fluxo, planos, agência, demo e FAQ reorganizam-se verticalmente.
- `prefers-reduced-motion` desativa animações e transições.

## 6. Publicação

- Deploy automático via GitHub Actions (`main` → GitHub Pages).
- **Status:** aguardando commit/push e verificação da URL publicada.
- URL esperada: `https://biaapp48-alt.github.io/emergencia-digital-site/`.

## 7. Pendências de validação comercial

1. **Preços, limites e escopo** de Essencial, Profissional e Escala.
2. Confirmar se os recursos marcados como **Disponível** (WhatsApp Business,
   Organização de contatos, CRM integrado, Automações) refletem exatamente a
   operação atual e o que será oferecido no SaaS multiempresa.
3. Confirmar se **Agendamentos e encaminhamentos** deve permanecer como
   “Em desenvolvimento”.
4. Validar a lista e a disponibilidade dos **serviços da Agência Premium**.
5. Confirmar a possibilidade de contratação separada de **CRM**, **Motor de
   Sites**, **Automações adicionais** e **Integrações personalizadas**.
6. Validar os textos de “conforme disponibilidade” e a ausência de promessas de
   resultado.
7. Confirmar o número de WhatsApp, telefone e Instagram usados nos CTAs.
8. Definir se o logo atual (com o subtítulo “marketing odontológico”) continua
   adequado ao posicionamento mais amplo de “ecossistema de crescimento” ou se
   haverá uma versão institucional sem o subtítulo.
9. Validar a política de privacidade: razão social, DPO, e-mail oficial,
   retenção, suboperadores e segurança. **Não submeter à Meta antes disso.**
10. Confirmar domínio definitivo e, se houver, atualizar `sitemap.xml`,
    `robots.txt` e as metas Open Graph.

## 8. Pendências técnicas

1. Rodar **Lighthouse** (performance, acessibilidade, SEO) na URL publicada.
2. Testar em **Firefox e Safari** e em dispositivos reais (iOS/Android).
3. Avaliar **self-hosting da Poppins** para eliminar dependência do Google Fonts.
4. Otimizar `og-image.png` (443 KB) se necessário para compartilhamento.
5. Confirmar se o ambiente de publicação continuará sendo GitHub Pages ou se
   migrará para domínio próprio.
6. Validar o comportamento do menu mobile em navegadores com teclado virtual.
7. Revisar o texto jurídico com responsável legal antes de qualquer publicação
   oficial da política.

## 9. Observações

- O redesign não altera Supabase, banco, migrations, APIs, webhooks,
  integrações de WhatsApp, aplicativos Meta, Vercel, código da Bia Core,
  operação BC Odonto, credenciais ou variáveis de ambiente.
- `reference-original/` permanece intacto e fora da publicação.
- A landing continua 100% HTML/CSS/JS estático, sem backend novo.
