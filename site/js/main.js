/* ============================================================
   Emergência Digital — Ecossistema de Crescimento
   Interações: menu mobile, reveal, FAQ, demo, render dinâmico
   de planos / recursos / módulos / agência a partir de config.js
   ============================================================ */
(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};
  var contact = cfg.contact || {};
  var legal = cfg.legal || {};

  /* ---------------- Ícones (SVG inline) ---------------- */
  var ICONS = {
    spark:
      '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="3"/>',
    whatsapp:
      '<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4.2.4.7 1.6.7 1.7.1.1.1.3 0 .5-.4.8-.9.9-.7 1.3.9 1.5 2 2.4 3.4 3.1.2.1.4.1.5-.1.1-.2.6-.7.8-.9.2-.2.3-.2.5-.1.2.1 1.2.6 1.4.7.2.1.4.2.4.3.1.1.1.5-.1 1.1Z"/>',
    brain:
      '<path d="M12 5a3 3 0 0 0-5.9-.7A3 3 0 0 0 4 9.5a3 3 0 0 0 1.2 5A3 3 0 0 0 9 19a3 3 0 0 0 3-1.5"/><path d="M12 5a3 3 0 0 1 5.9-.7A3 3 0 0 1 20 9.5a3 3 0 0 1-1.2 5A3 3 0 0 1 15 19a3 3 0 0 1-3-1.5"/><path d="M12 5v12.5"/>',
    users:
      '<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M21 20a5.2 5.2 0 0 0-4-4.8"/>',
    funnel:
      '<path d="M4 5h16l-6 7.2V19l-4 2v-8.8L4 5Z"/>',
    bolt:
      '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    calendar:
      '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
    globe:
      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z"/>',
    target:
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>',
    chart:
      '<path d="M4 4v16h16"/><path d="M8 16v-4M12 16V8M16 16v-6M20 16v-9"/>',
    plug:
      '<path d="M9 2v6M15 2v6M6 8h12v2a6 6 0 0 1-12 0V8ZM12 16v6"/>',
    check:
      '<path d="M20 6 9 17l-5-5"/>',
    chat:
      '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.6 8.6 0 0 1-3.8-.9L3 20l1-5.7A8.5 8.5 0 1 1 21 11.5Z"/>',
    shield:
      '<path d="M12 3 4 6v5c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-3Z"/>',
    arrow:
      '<path d="M5 12h14M13 6l6 6-6 6"/>',
  };

  function icon(name, cls) {
    var inner = ICONS[name] || ICONS.spark;
    return (
      '<svg class="' + (cls || "icon") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      inner +
      "</svg>"
    );
  }

  /* ---------------- Util ---------------- */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function applyHref(selector, url) {
    if (!url) return;
    document.querySelectorAll(selector).forEach(function (el) {
      el.setAttribute("href", url);
    });
  }

  function applyText(selector, text) {
    if (!text) return;
    document.querySelectorAll(selector).forEach(function (el) {
      el.textContent = text;
    });
  }

  /* ---------------- Contato / textos fixos ---------------- */
  applyHref("[data-contact='whatsapp']", contact.whatsappUrl);
  applyHref("[data-contact='phone']", contact.phoneUrl);
  applyHref("[data-contact='instagram']", contact.instagramUrl);
  applyText("[data-text='whatsapp']", contact.whatsappDisplay);
  applyText("[data-text='phone']", contact.phoneDisplay);
  applyText("[data-text='cnpj']", legal.cnpj);
  applyText("[data-text='address']", legal.address);
  applyText("[data-text='year']", String(new Date().getFullYear()));

  /* ---------------- Header: estado ao rolar ---------------- */
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Menu mobile ---------------- */
  var toggle = document.querySelector("[data-menu-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  if (toggle && mobileNav) {
    var closeMenu = function () {
      mobileNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu de navegação");
      document.body.classList.remove("nav-open");
    };
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu de navegação");
      document.body.classList.toggle("nav-open", open);
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  function observeReveal() {
    var els = document.querySelectorAll(".reveal:not(.in-view)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Render: recursos da Bia ---------------- */
  function renderBia() {
    var wrap = document.getElementById("bia-list");
    if (!wrap || !cfg.biaFeatures) return;
    wrap.innerHTML = cfg.biaFeatures
      .map(function (f, i) {
        var live = f.status === "implemented";
        var badge = live
          ? '<span class="status status--live"><span class="status__dot"></span>Disponível</span>'
          : '<span class="status status--planned"><span class="status__dot"></span>Em desenvolvimento</span>';
        return (
          '<article class="bia-card reveal" data-delay="' + (i % 3) + '">' +
          '<div class="bia-card__top">' +
          '<span class="bia-card__icon">' + icon(f.icon || "spark") + "</span>" +
          badge +
          "</div>" +
          "<h3>" + escapeHtml(f.title) + "</h3>" +
          "<p>" + escapeHtml(f.text) + "</p>" +
          "</article>"
        );
      })
      .join("");
    observeReveal();
  }

  /* ---------------- Render: ecossistema ---------------- */
  function renderEcosystem() {
    var wrap = document.getElementById("ecosystem-list");
    if (!wrap || !cfg.ecosystem) return;
    wrap.innerHTML = cfg.ecosystem
      .map(function (m, i) {
        var cls = "eco-card reveal" + (m.highlight ? " eco-card--highlight" : "");
        var tag = m.tag
          ? '<span class="eco-card__tag">' + escapeHtml(m.tag) + "</span>"
          : "";
        return (
          '<article class="' + cls + '" data-delay="' + (i % 3) + '">' +
          tag +
          '<span class="eco-card__icon">' + icon(m.icon || "spark") + "</span>" +
          "<h3>" + escapeHtml(m.title) + "</h3>" +
          "<p>" + escapeHtml(m.text) + "</p>" +
          "</article>"
        );
      })
      .join("");
    observeReveal();
  }

  /* ---------------- Render: módulos adicionais ---------------- */
  function renderModules() {
    var wrap = document.getElementById("modules-list");
    if (!wrap || !cfg.additionalModules) return;
    wrap.innerHTML = cfg.additionalModules
      .map(function (m, i) {
        return (
          '<article class="module-card reveal" data-delay="' + (i % 2) + '">' +
          '<span class="module-card__icon">' + icon(m.icon || "plug") + "</span>" +
          "<div><h3>" + escapeHtml(m.title) + "</h3><p>" + escapeHtml(m.text) + "</p></div>" +
          "</article>"
        );
      })
      .join("");
    observeReveal();
  }

  /* ---------------- Render: planos ---------------- */
  function formatPrice(plan) {
    if (plan.price == null) {
      return (
        '<div class="plan__price plan__price--consult">' +
        "<strong>" + escapeHtml(plan.priceNote || "Sob consulta") + "</strong>" +
        "<span>Valores e limites definidos com a equipe</span>" +
        "</div>"
      );
    }
    var value = Number(plan.price).toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    var period = plan.pricePeriod ? " / " + plan.pricePeriod : "";
    return (
      '<div class="plan__price"><strong><span class="currency">R$</span>' +
      value + "</strong><span>" + escapeHtml(period.replace(" / ", "")) + "</span></div>"
    );
  }

  function renderPlans() {
    var wrap = document.getElementById("plans-list");
    if (!wrap || !cfg.plans) return;
    wrap.innerHTML = cfg.plans
      .map(function (plan, i) {
        var featured = plan.recommended;
        var features = plan.features
          .map(function (f) {
            return "<li>" + icon("check") + "<span>" + escapeHtml(f) + "</span></li>";
          })
          .join("");
        return (
          '<article class="plan' + (featured ? " plan--recommended" : "") +
          ' reveal" data-delay="' + i + '">' +
          (featured ? '<span class="plan__badge">Recomendado</span>' : "") +
          '<div class="plan__head">' +
          '<span class="plan__kicker">Plano</span>' +
          '<h3 class="plan__name">' + escapeHtml(plan.name) + "</h3>" +
          '<p class="plan__tagline">' + escapeHtml(plan.tagline || "") + "</p>" +
          "</div>" +
          formatPrice(plan) +
          '<ul class="plan__features">' + features + "</ul>" +
          '<a class="btn ' + (featured ? "btn--primary" : "btn--outline") +
          ' btn--block" data-contact="whatsapp" href="#" target="_blank" rel="noopener">' +
          escapeHtml(plan.cta || "Solicitar proposta") + icon("arrow") + "</a>" +
          "</article>"
        );
      })
      .join("");
    applyHref("[data-contact='whatsapp']", contact.whatsappUrl);
    observeReveal();
  }

  /* ---------------- Render: Agência Premium ---------------- */
  function renderAgency() {
    var wrap = document.getElementById("agency-services");
    if (!wrap || !cfg.agency || !cfg.agency.services) return;
    wrap.innerHTML = cfg.agency.services
      .map(function (s) {
        return "<li>" + icon("check") + "<span>" + escapeHtml(s) + "</span></li>";
      })
      .join("");
  }

  /* ---------------- Render: FAQ ---------------- */
  function renderFaq() {
    var wrap = document.getElementById("faq-list");
    if (!wrap || !cfg.faq) return;
    wrap.innerHTML = cfg.faq
      .map(function (item, i) {
        var id = "faq-a-" + i;
        var qid = "faq-q-" + i;
        return (
          '<div class="faq-item reveal" data-delay="' + (i % 3) + '">' +
          '<button class="faq-item__q" type="button" id="' + qid + '" aria-expanded="false" aria-controls="' + id + '">' +
          "<span>" + escapeHtml(item.q) + "</span>" +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
          'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' +
          "</button>" +
          '<div class="faq-item__a" id="' + id + '" role="region" aria-labelledby="' + qid + '"><div class="faq-item__a-inner">' +
          escapeHtml(item.a) +
          "</div></div>" +
          "</div>"
        );
      })
      .join("");

    wrap.querySelectorAll(".faq-item").forEach(function (item) {
      var q = item.querySelector(".faq-item__q");
      var a = item.querySelector(".faq-item__a");
      q.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        wrap.querySelectorAll(".faq-item.open").forEach(function (o) {
          if (o !== item) {
            o.classList.remove("open");
            o.querySelector(".faq-item__a").style.maxHeight = null;
            o.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
          }
        });
        item.classList.toggle("open", !isOpen);
        a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
        q.setAttribute("aria-expanded", !isOpen ? "true" : "false");
      });
    });
    observeReveal();
  }

  /* ---------------- Demo de conversa (sequencial) ---------------- */
  function startChatDemo() {
    var chat = document.querySelector("[data-demo-chat]");
    if (!chat) return;
    var msgs = chat.querySelectorAll(".msg");
    if (!msgs.length) return;
    var started = false;
    function play() {
      if (started) return;
      started = true;
      msgs.forEach(function (m) {
        m.style.animation = "none";
        m.style.opacity = "0";
      });
      msgs.forEach(function (m, i) {
        setTimeout(function () {
          m.style.animation = "";
          m.style.opacity = "";
        }, 420 * i);
      });
    }
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(
        function (entries) {
          if (entries.some(function (e) { return e.isIntersecting; })) {
            play();
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(chat);
    } else {
      play();
    }
  }

  /* ---------------- Parallax sutil do núcleo da Bia ---------------- */
  function initCoreParallax() {
    var core = document.querySelector("[data-core]");
    if (!core) return;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hover = window.matchMedia("(hover: hover)").matches;
    if (reduce || !hover) return;
    var raf = null;
    var tx = 0, ty = 0;
    core.addEventListener("mousemove", function (e) {
      var r = core.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 14;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 14;
      if (!raf) {
        raf = requestAnimationFrame(function () {
          core.style.setProperty("--px", tx.toFixed(2) + "px");
          core.style.setProperty("--py", ty.toFixed(2) + "px");
          raf = null;
        });
      }
    });
    core.addEventListener("mouseleave", function () {
      core.style.setProperty("--px", "0px");
      core.style.setProperty("--py", "0px");
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderBia();
    renderEcosystem();
    renderModules();
    renderPlans();
    renderAgency();
    renderFaq();
    startChatDemo();
    observeReveal();
    initCoreParallax();
  });
})();
