// ===== entre nanas · interacciones =====
(function () {
  "use strict";

  // Año dinámico en el footer
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Menú móvil
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Aviso de cookies (solo técnicas -> recordamos el "entendido")
  try {
    var banner = document.getElementById("cookie-banner");
    var okBtn = document.getElementById("cookie-ok");
    if (banner && okBtn && localStorage.getItem("en_cookies_ok") !== "1") {
      banner.hidden = false;
      okBtn.addEventListener("click", function () {
        try { localStorage.setItem("en_cookies_ok", "1"); } catch (e) {}
        banner.hidden = true;
      });
    }
  } catch (e) { /* localStorage no disponible: no mostramos banner persistente */ }

  // Envío del formulario vía Web3Forms (sin recargar la página)
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var key = form.querySelector('[name="access_key"]');
      if (key && key.value.indexOf("REEMPLAZAR") === 0) {
        status.className = "form-status err";
        status.textContent = "El formulario aún no está configurado. Escríbeme por WhatsApp o email mientras tanto.";
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      var original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Enviando…";
      status.className = "form-status";
      status.textContent = "";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            status.className = "form-status ok";
            status.textContent = "¡Gracias! He recibido tu mensaje y te responderé lo antes posible.";
          } else {
            throw new Error(data.message || "error");
          }
        })
        .catch(function () {
          status.className = "form-status err";
          status.textContent = "No se ha podido enviar. Prueba por WhatsApp o escríbeme a entrenanas.es@gmail.com.";
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = original;
        });
    });
  }
})();
