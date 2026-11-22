# Relatório — Landing Page Emergência Digital (Redesign + Ajuste Comercial)

**Data:** 22/11/2026
**Escopo:** redesign visual e de conteúdo da landing page, seguido do ajuste
comercial de pré-lançamento (preços dos planos, franquia de IA, Agência Premium
e seção de cliente fundador) e da substituição do núcleo orbital por CSS pela
imagem oficial da Bia. Nenhum módulo, backend, banco, Supabase, API, webhook ou
integração foi implementado ou alterado.

---

## 1. Direção entregue

- Tema escuro premium (azul-marinho quase preto), com verde institucional
  `#009445`, verde luminoso e ciano como acentos tecnológicos.
- Roxo restrito à **Agência Premium**.
- Tipografia **Poppins**, cards com transparência, bordas iluminadas,
  glassmorphism moderado e animações sutis.
- **Hero com a imagem oficial da Bia** (`assets/bia-hero.png`, 1199×1312),
  substituindo o diagrama orbital desenhado por CSS. A imagem usa
  `object-fit: contain`, preserva a proporção original, integra-se ao fundo
  escuro com um halo suave e é responsiva em desktop, tablet e celular. Não há
  nenhum diagrama, avatar ou texto desenhado por cima da imagem.
- Conteúdo em HTML real, responsivo, acessível e indexável.

## 2. Estrutura da página

1. **Hero** — nav completa, título e subtítulo, CTAs “Conhecer a Bia” e
   “Descobrir o ecossistema”, imagem oficial da Bia.
2. **Conheça a Bia** — 7 cards com status verdadeiro por recurso.
3. **O Ecossistema** — 6 módulos, com **Motor de Sites** em destaque próprio.
4. **Como o ecossistema trabalha** — fluxo
   ATRAIR → ATENDER → ORGANIZAR → AUTOMATIZAR → CONVERTER → CRESCER.
5. **Planos da Bia** — Essencial, Profissional (recomendado) e Escala, com
   preços de pré-lançamento (normal riscado + fundador em destaque),
   implantação como cobrança única parcelada, franquia mensal de IA incluída e
   nota de validade da condição de fundador (12 meses).
6. **Cliente fundador** — seção discreta “Seja um cliente fundador da
   Emergência Digital.” com CTA para contato.
7. **Módulos adicionais** — Motor de Sites, CRM, Automações adicionais e
   Integrações personalizadas (sem preço; CTA “Consultar módulo” / “Solicitar
   proposta”).
8. **Agência Premium** — planos com valores (Gestão de aquisição, Growth
   multicanal, Operação personalizada), nota de honorários × verba de anúncios,
   serviços e aviso de opcionalidade/serviços individuais.
9. **Demonstração** — conversa ilustrativa claramente rotulada como simulação.
10. **FAQ** — 12 perguntas, com respostas honestas (inclui condição de
    fundador, franquia de IA e implantação).
11. **CTA final + rodapé** — contato, Instagram, CNPJ, endereço e links legais
    preservados.

## 3. Arquivos modificados nesta etapa

- `site/index.html` — hero com a nova imagem, seção “Cliente fundador”, nota
  dos planos, painel de planos da agência.
- `site/css/styles.css` — estilos do hero image, cards de preço (normal riscado,
  fundador em destaque, selo, implantação, validade), franquia de IA, nota dos
  planos, seção fundador e tiers da agência; remoção do CSS do núcleo orbital.
- `site/js/config.js` — **fonte única dos valores comerciais**: `plansMeta`,
  `plans` (preços normal/fundador e implantação), `agency.tiers`/`agency.feeNote`
  e FAQ atualizado.
- `site/js/main.js` — renderização dos novos cards de plano, nota dos planos e
  tiers da agência.
- `site/assets/bia-hero.png` — **novo asset** (imagem oficial da Bia).
- `README.md` — instruções de edição comercial e descrição do hero.

## 4. Valores inseridos (política de pré-lançamento)

| Plano | Normal | Fundador | Implantação (única, parcelada) |
|---|---|---|---|
| Essencial | R$ 197/mês | R$ 147/mês | R$ 490 em 2× R$ 245 |
| Profissional (recomendado) | R$ 397/mês | R$ 297/mês | R$ 990 em 3× R$ 330 |
| Escala | R$ 797/mês | R$ 597/mês | R$ 1.990 em 4× R$ 497,50 |

**Agência Premium (honorários, opcional):**

- Gestão de aquisição — R$ 1.490/mês.
- Growth multicanal — R$ 2.490/mês.
- Operação personalizada — a partir de R$ 3.490/mês.

**Regras aplicadas:**

- Preço normal menor e **riscado**; preço fundador **em destaque**; periodicidade
  `/mês` sempre visível.
- Etiqueta **“Condição especial de pré-lançamento”** em cada plano.
- Profissional destacado como **recomendado**.
- **“Condição de fundador válida por 12 meses.”** em cada card e na nota.
- Implantação explicitamente **cobrança única**, parcelada, **fora da
  mensalidade recorrente**.
- Benefício **“Franquia mensal de IA incluída”** em todos os planos, com o texto
  de transparência sobre consumo variável, acompanhamento no painel e solicitação
  de créditos adicionais.
- Agência com aviso de **honorários de serviço** e de que a **verba de anúncios é
  paga separadamente pelo cliente**; opcional e não misturada à assinatura da Bia;
  possibilidade de **serviços individuais** (criativos, sites, projetos).
- **Motor de Sites** preservado como produto do ecossistema; **módulos adicionais
  sem preço** (CTA “Consultar módulo” / “Solicitar proposta”). Nenhum “sites
  ilimitados”.

## 5. Verificações realizadas (Chrome headless + CDP)

| Verificação | Resultado |
|---|---|
| Planos renderizados | 3 |
| Blocos de preço fundador | 3 |
| Etiqueta de pré-lançamento | 3 |
| “Franquia mensal de IA incluída” | 4 (3 cards + nota) |
| Parcelas de implantação | 2× R$ 245 · 3× R$ 330 · 4× R$ 497,50 |
| Tiers da agência | 3 (valores corretos) |
| Seção “cliente fundador” | presente |
| Imagem oficial da Bia | carregada (1199×1312 → proporção preservada) |
| Imagens quebradas | 0 (logo 708×195, bia-hero 1199×1312) |
| Âncoras internas sem destino | 0 |
| Links WhatsApp | 10 CTAs apontando para `https://wa.me/554797646987` |
| Link telefone | `tel:+554797646987` |
| Overflow horizontal 1440 px | Não |
| Overflow horizontal 768 px | Não |
| Overflow horizontal 390 px | Não |
| Overflow horizontal 360 px | Não |
| Dimensão do hero (desktop/tablet/mobile) | 460 px / 400 px / 320 px (sem corte) |

## 6. Publicação

- Deploy automático via GitHub Actions (`main` → GitHub Pages).
- **Commit do redesign:** `2190f5b` — `feat: redesign premium da landing com Bia
  como nucleo do ecossistema`.
- **Commit desta etapa (ajuste comercial):** ver `git log` — commit mais recente
  na branch `main`.
- **URL publicada:** `https://biaapp48-alt.github.io/emergencia-digital-site/`.

## 7. Pendências de validação comercial

1. Validar a **política de preços de pré-lançamento** (normal, fundador e
   implantação) e a manutenção da condição de fundador por 12 meses.
2. Confirmar os **honorários da Agência Premium** e a forma de contratação dos
   serviços individuais (criativos, sites, projetos).
3. Definir, quando houver validação técnica/econômica, as quantidades da
   **franquia de IA** (créditos, limites, modalidades) — hoje não divulgadas.
4. Confirmar o escopo e a disponibilidade dos **módulos adicionais** e das
   integrações (sem preço nesta etapa).
5. Validar os textos de “conforme disponibilidade” e a ausência de promessas de
   resultado.
6. Confirmar o número de WhatsApp, telefone e Instagram usados nos CTAs.
7. Definir se o logo atual (com o subtítulo “marketing odontológico”) continua
   adequado ao posicionamento amplo, ou se haverá versão institucional sem o
   subtítulo.
8. Validar a política de privacidade (razão social, DPO, e-mail oficial,
   retenção, suboperadores e segurança). **Não submeter à Meta antes disso.**
9. Confirmar domínio definitivo e atualizar `sitemap.xml`, `robots.txt` e metas
   Open Graph, se necessário.

## 8. Pendências técnicas

1. Rodar **Lighthouse** (performance, acessibilidade, SEO) na URL publicada.
2. Otimizar `bia-hero.png` (~2 MB) sem perda visual, se necessário, antes de
   tráfego real (o asset foi mantido em qualidade original para preservar a
   identidade visual).
3. Testar em **Firefox e Safari** e em dispositivos reais (iOS/Android).
4. Avaliar **self-hosting da Poppins** para eliminar dependência do Google Fonts.
5. Otimizar `og-image.png` (443 KB) se necessário para compartilhamento.
6. Confirmar se o ambiente continuará sendo GitHub Pages ou migrará para domínio
   próprio.

## 9. Observações

- O ajuste comercial não altera Supabase, banco, migrations, APIs, webhooks,
  integrações de WhatsApp, aplicativos Meta, Vercel, código da Bia Core,
  operação BC Odonto, credenciais ou variáveis de ambiente.
- `reference-original/` permanece intacto e fora da publicação.
- A landing continua 100% HTML/CSS/JS estático, sem backend novo.
- Os valores comerciais ficam centralizados em `site/js/config.js`, permitindo
  atualizar preços e condições sem editar vários componentes.
