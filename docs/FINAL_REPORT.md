# Relatório Final — Emergência Digital / Bia Core

> Projeto de engenharia reversa + reconstrução + deploy da landing page da
> Emergência Digital, a partir da captura WebToZip do site original.

---

## 1. Resultado da engenharia reversa

A captura revelou que o site original **não é uma landing estática**, e sim um
SPA React/Vite (Tailwind + shadcn/ui) que inclui a landing institucional **e** um
painel administrativo completo (CRM, automações, Kanban, templates, "Score de
Mercado") conectado a um backend Supabase.

Pontos-chave extraídos (detalhes em `docs/REVERSE_ENGINEERING.md`):

- **Identidade visual**: verde primário `#009445` (HSL `148 100% 29%`), fonte
  **Poppins** (400–700), logotipo e ilustrações vetoriais.
- **Posicionamento original**: "De paciente e faturamento a gente entende!"
  (foco em clínicas odontológicas).
- **Estrutura da landing**: Hero, "R.O.I garantido", indicadores, vídeo, cases,
  regiões, ferramenta de diagnóstico ("Raio-X"), planos, FAQ, rodapé.
- **Planos confirmados (sem preços)**: Essencial, Crescimento e Autoridade, com
  seus recursos (recuperados na íntegra).
- **Contato confirmado**: WhatsApp `554797646987`, telefone `+55 47 9764-6987`,
  Instagram `@emergencia_digital`, CNPJ `42.170.579/0001-80` e endereço em
  Balneário Camboriú/SC.
- **Problemas encontrados**: captura incompleta (assets `/assets/*` ausentes),
  link de menu quebrado (`#convite`), paleta de `og-image` desatualizada (teal),
  planos sem preço e Analytics ID embutido.

## 2. Recursos visuais reaproveitados

Todos os 8 assets ausentes na captura foram recuperados do site de origem
(GET read-only) e normalizados em `site/assets/`:

| Recurso | Uso na nova página |
|---|---|
| `logo.png` (708×195) | Logotipo no header e rodapé (invertido sobre verde) |
| `hero-bg.png` (1920×779) | Fundo do hero |
| `hero-character.png` (738×767) | Ilustração principal do hero |
| `elemento-01.png` / `elemento-02.png` | Selos flutuantes de métrica no hero |
| `raio-x.svg` (funil + moeda) | **Ilustração do Funil Inteligente** |
| `cash-back.svg` | Nota de confiança "Parceria por resultado" |
| `favicon.svg` | Favicon novo (funil verde) |
| `og-image.png` | Regenerado (1200×630) no verde da marca |

> `hero-mobile-banner.png` foi recuperado, mas removido do pacote final por não
> ser utilizado (727 KB de peso desnecessário).

## 3. Componentes reconstruídos

- Header fixo com menu, CTA de WhatsApp e menu mobile.
- Hero com headline/subtítulo definidos na missão, CTAs duplos e prova social.
- Seção "O problema" (6 dores).
- Seção "Conheça a Bia" com 7 recursos e **status explícito** (Disponível vs.
  Em desenvolvimento) — renderizada a partir de `config.js`.
- Seção "Funil Inteligente" (6 etapas + ilustração `raio-x.svg`).
- Seção "Funcionalidades" (8 módulos em cards).
- Seção "Planos" (3 cards, renderizados de `config.js`, sem preços inventados).
- Seção "Demonstração" (chat simulado, claramente rotulado como simulação).
- FAQ (8 perguntas, accordion acessível).
- CTA final + rodapé institucional (com dados confirmados).
- Página `politica-de-privacidade.html` (base para Meta, pendências marcadas).
- Página `404.html`, `robots.txt`, `sitemap.xml`.

## 4. Tecnologias utilizadas

- **HTML5 + CSS3 + JavaScript puro** — sem framework, sem build, sem servidor.
- CSS custom com variáveis (paleta verde da marca) e design responsivo.
- `config.js` como **arquivo único de configuração** para planos, contato e
  dados jurídicos.
- Google Fonts (Poppins) com fallback para `system-ui`.
- GitHub Pages + GitHub Actions (`actions/upload-pages-artifact` +
  `actions/deploy-pages`).

## 5. Estrutura final do projeto

```
(repo raiz)
├── .github/workflows/deploy.yml   # deploy automático (pasta site/)
├── .gitignore                     # exclui a captura original e temporários
├── README.md
├── docs/
│   ├── REVERSE_ENGINEERING.md
│   └── FINAL_REPORT.md
└── site/                          # site publicado
    ├── index.html
    ├── politica-de-privacidade.html
    ├── 404.html
    ├── robots.txt
    ├── sitemap.xml
    ├── css/styles.css
    ├── js/config.js
    ├── js/main.js
    └── assets/ (logo, hero, funil, selos, og-image, favicon)
```

Localmente, o workspace mantém ainda `reference-original/` (cópia intocada da
captura) — **não versionada e não publicada**, pois contém o bundle da aplicação
do cliente (com URL do Supabase).

## 6. Melhorias visuais

- Evolução do visual para padrão **SaaS premium**: gradientes verdes, glassmorphism
  no header, sombras suaves, animações de entrada (scroll) e micro-interações.
- Consistência da paleta verde (a `og-image` teal foi substituída por uma versão
  verde 1200×630 gerada programaticamente).
- Responsividade desktop/tablet/celular com breakpoints em 1024/860/560 px.
- Acessibilidade: skip-link, `aria-*`, foco visível, `prefers-reduced-motion`.

## 7. Testes realizados

- `node --check` em `config.js` e `main.js` (sem erros de sintaxe).
- Servidor local Node: todas as páginas e assets retornaram HTTP 200.
- Renderização headless (Chrome): 3 cards de planos, 7 itens da Bia, status,
  contato e CNPJ renderizados corretamente.
- Screenshots desktop (1280px) e mobile (390px) gerados.
- Verificação de caminhos: nenhum caminho absoluto (tudo relativo, compatível
  com subdiretório).
- Varredura de segredos em `/site`: limpa (apenas falso-positivo na palavra
  "anonimização"). Analytics ID original **não** foi herdado.

## 8. Situação do GitHub

- Git instalado: `2.54.0`.
- GitHub CLI autenticado como **`biaapp48-alt`** (scopes `repo` + `workflow`).
- Repositório criado de forma independente e pública (verificado que não existia).
- Identidade de commit configurada como `biaapp48-alt` (noreply).
- GitHub Pages habilitado com origem **GitHub Actions**.
- Workflow `Deploy para GitHub Pages` executado com sucesso (build ✓ / deploy ✓).

## 9. Endereço do repositório

`https://github.com/biaapp48-alt/emergencia-digital-site`

## 10. URL real do GitHub Pages

`https://biaapp48-alt.github.io/emergencia-digital-site/`

> Não foi configurado nenhum domínio customizado e nenhum DNS foi alterado.

## 11. Pendências comerciais e jurídicas

**Comerciais (centralizadas em `site/js/config.js`):**
- Preços, franquias e limites dos planos — não localizados no site original;
  exibidos como "Valor sob consulta" (`price: null`).

**Jurídicas (em `politica-de-privacidade.html`):**
- Razão social completa — pendente.
- Responsável legal / encarregado (DPO) — pendente.
- E-mail oficial de contato — pendente.
- Relação de suboperadores e prazos de retenção por categoria — pendente.
- Descrição auditável das medidas de segurança — pendente.
- Revisão jurídica final do texto — pendente.

A política está marcada como **"documento-base em validação"** e **não deve ser
submetida à Meta** enquanto esses itens não forem validados.

**Técnicas menores:**
- `og-image` gerada com fonte de sistema (Arial) — pode ser substituída por
  versão com Poppins quando desejado.
- Poppins carregada via Google Fonts (fallback `system-ui` já previsto).

## 12. Hash do commit publicado

`16c4155ddca8230688d8be260bddeb0992a8e9c3`
