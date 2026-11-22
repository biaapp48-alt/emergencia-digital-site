/* ============================================================
   Emergência Digital — Bia Core
   Interações: menu mobile, reveal on scroll, FAQ, demo, render
   dinâmico de planos/recursos a partir de config.js
   ============================================================ */
(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};
  var contact = cfg.contact || {};
  var legal = cfg.legal || {};

  /* ---------- Aplica dados de contato ---------- */
  function applyHref(selector, url) {
    if (!url) return;
    document.querySelectorAll(selector).forEach(function (el) {
      el.setAttribute("href", url);
    });
  }
  applyHref("[data-contact='whatsapp']", contact.whatsappUrl);
  applyHref("[data-contact='phone']", contact.phoneUrl);
  applyHref("[data-contact='instagram']", contact.instagramUrl);

  function applyText(selector, text) {
    if (!text) return;
    document.querySelectorAll(selector).forEach(function (el) {
      el.textContent = text;
    });
  }
  applyText("[data-text='whatsapp']", contact.whatsappDisplay);
  applyText("[data-text='phone']", contact.phoneDisplay);
  applyText("[data-text='cnpj']", legal.cnpj);
  applyText("[data-text='address']", legal.address);

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector("[data-menu-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu de navegação");
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
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
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------- FAQ (accordion) ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-item__q");
    var a = item.querySelector(".faq-item__a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      // fecha os demais
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
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

  /* ---------- Render dinâmico: recursos da Bia ---------- */
  function biaIcon(status) {
    // ícone genérico de recurso (chat)
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 20l1-5.7a8.5 8.5 0 1 1 17-2.8Z"/></svg>'
    );
  }
  function renderBia() {
    var wrap = document.getElementById("bia-list");
    if (!wrap || !cfg.biaFeatures || !cfg.biaFeatures.length) return;
    wrap.innerHTML = cfg.biaFeatures
      .map(function (f) {
        var live = f.status === "implemented";
        var badge = live
          ? '<span class="status status--live">Disponível</span>'
          : '<span class="status status--planned">Em desenvolvimento</span>';
        return (
          '<div class="bia-item reveal">' +
          '<div class="bia-item__icon">' + biaIcon(f.status) + "</div>" +
          '<div><h3>' + escapeHtml(f.title) + " " + badge + "</h3>" +
          "<p>" + escapeHtml(f.text) + "</p></div></div>"
        );
      })
      .join("");
  }

  /* ---------- Render dinâmico: planos ---------- */
  var checkIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

  function formatPrice(plan) {
    if (plan.price == null) {
      return '<div class="plan__price--pending">' + escapeHtml(plan.priceNote || "Sob consulta") + "</div>";
    }
    var currency = "R$";
    var value = Number(plan.price).toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    var period = plan.pricePeriod ? "/ " + plan.pricePeriod : "";
    return (
      '<div class="plan__price"><span class="currency">' + currency + "</span>" +
      '<span class="value">' + value + "</span>" +
      '<span class="period">' + period + "</span></div>"
    );
  }

  function renderPlans() {
    var wrap = document.getElementById("plans-list");
    if (!wrap || !cfg.plans || !cfg.plans.length) return;
    wrap.innerHTML = cfg.plans
      .map(function (plan, i) {
        var featured = i === 2 ? " plan--featured" : "";
        var features = plan.features
          .map(function (f) { return "<li>" + checkIcon + "<span>" + escapeHtml(f) + "</span></li>"; })
          .join("");
        var includes = plan.includes
          .map(function (f) { return '<li class="muted-li">' + checkIcon + "<span>" + escapeHtml(f) + "</span></li>"; })
          .join("");
        var ctaLabel = plan.cta || "Solicitar apresentação";
        var ctaClass = featured ? "btn btn--primary btn--lg" : "btn btn--outline";
        return (
          '<div class="plan' + featured + ' reveal" data-delay="' + i + '">' +
          '<div class="plan__name">' + escapeHtml(plan.name) + "</div>" +
          '<div class="plan__desc">' + escapeHtml(plan.description || "") + "</div>" +
          formatPrice(plan) +
          '<div class="plan__divider"></div>' +
          '<div class="plan__label">Recursos</div><ul>' + features + "</ul>" +
          '<div class="plan__divider"></div>' +
          '<div class="plan__label">Inclui</div><ul>' + includes + "</ul>" +
          '<div class="plan__cta"><a class="' + ctaClass + '" data-contact="whatsapp" href="#">' +
          escapeHtml(ctaLabel) + "</a></div></div>"
        );
      })
      .join("");
    applyHref("[data-contact='whatsapp']", contact.whatsappUrl);
    observeReveal();
  }

  /* ---------- Demo de conversa (animação sequencial) ---------- */
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
        }, 350 * i);
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

  /* ---------- Util ---------- */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

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

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderBia();
    renderPlans();
    startChatDemo();
    observeReveal();
    // ano do rodapé
    applyText("[data-text='year']", String(new Date().getFullYear()));
  });
})();
