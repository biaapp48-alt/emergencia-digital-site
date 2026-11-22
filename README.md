# Emergência Digital — Ecossistema de Crescimento (Landing Page)

Landing page institucional e comercial da **Emergência Digital**, apresentando a
**Bia** como núcleo operacional e o ecossistema de crescimento empresarial:

- Bia IA
- Motor de Sites
- CRM
- Automações
- Tráfego e Criativos
- Inteligência de Resultados
- Agência Premium (serviço opcional)

> Site estático publicado via **GitHub Pages** em
> `https://biaapp48-alt.github.io/emergencia-digital-site/`.

## Estrutura

```
site/                         # site estático (publicado)
  index.html                  # landing page completa (10 seções)
  politica-de-privacidade.html
  404.html
  css/
    styles.css                # tema escuro premium da landing
    legal.css                 # tema claro e independente da página legal
  js/
    config.js                 # planos, recursos, módulos, agência, FAQ e contato
    main.js                   # renderização e interações
  assets/
    logo.png
    favicon.svg
    og-image.png              # 1200×630, tema escuro
  robots.txt
  sitemap.xml
docs/
  REVERSE_ENGINEERING.md      # auditoria histórica do site original
  FINAL_REPORT.md             # relatório da entrega anterior
  REDESIGN_REPORT.md          # relatório deste redesign
.github/workflows/deploy.yml  # deploy automático no GitHub Pages
```

## Tecnologia

- HTML + CSS + JavaScript puro (sem build, sem servidor).
- Tipografia **Poppins** (Google Fonts), com fallback para fontes do sistema.
- Núcleo abstrato da Bia construído em **CSS/SVG** — sem personagem humano,
  avatar ou banco de imagens.
- Layout responsivo (desktop, tablet e celular), com foco em acessibilidade e
  `prefers-reduced-motion`.

## Conteúdo e veracidade

Tudo o que é comercial, de contato e jurídico fica centralizado em
`site/js/config.js`.

- **Preços:** nenhum valor inventado. Todos os planos usam `price: null` e são
  exibidos como **“Sob consulta”**.
- **Limites:** não há limites de mensagens, números, usuários, sites ou créditos
  declarados — serão definidos comercialmente.
- **Status dos recursos da Bia:** `implemented` (disponível na operação atual) ou
  `planned` (em desenvolvimento / roadmap). O site exibe os selos
  “Disponível” e “Em desenvolvimento” de acordo com esse campo.
- **Dados jurídicos pendentes:** a política de privacidade mantém os campos
  `[PENDENTE]` (razão social, DPO, e-mail oficial, retenção e segurança) e não
  deve ser submetida à Meta até validação.

## Como editar

1. Abra `site/js/config.js`.
2. Atualize planos, recursos, módulos, serviços da agência ou FAQ.
3. Para preços validados, troque `price: null` por um número e preencha
   `pricePeriod`. Enquanto forem `null`, o site mostra “Sob consulta”.
4. Para marcar um recurso como disponível, use `status: "implemented"`.
5. Contato e dados jurídicos confirmados ficam em `contact` e `legal`.

## Deploy

Qualquer `push` na branch `main` dispara
`.github/workflows/deploy.yml`, que publica a pasta `site/` no GitHub Pages.
Nenhuma configuração de Supabase, banco, API, webhook ou integração é alterada
por este projeto.
