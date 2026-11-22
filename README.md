# Emergência Digital — Bia Core (Landing Page)

Nova página institucional e comercial da **Emergência Digital**, apresentando a
**Bia**, a assistente inteligente de atendimento da plataforma (atendimento,
automação e CRM).

> Site estático publicado via GitHub Pages em
> `https://biaapp48-alt.github.io/emergencia-digital-site/`.

## Estrutura

```
site/                         # site estático (publicado)
  index.html                  # landing page completa
  politica-de-privacidade.html
  css/styles.css
  js/config.js                # dados comerciais/contato centralizados
  js/main.js
  assets/                     # identidade visual recuperada do site original
docs/                         # documentação do projeto
  REVERSE_ENGINEERING.md
  FINAL_REPORT.md
.github/workflows/deploy.yml  # deploy automático no GitHub Pages
```

## Tecnologia

- HTML + CSS + JavaScript puro (sem build, sem servidor).
- Identidade visual reconstruída a partir da captura do site original
  (verde `#009445`, Poppins, logo e ilustrações recuperadas).

## Como editar planos / contato / dados jurídicos

Tudo está centralizado em `site/js/config.js`. Preços, limites e dados
jurídicos pendentes ficam marcados como `null` / pendentes até validação.

## Deploy

Qualquer `push` na branch `main` dispara o workflow de GitHub Pages
(`.github/workflows/deploy.yml`), que publica a pasta `site/`.
