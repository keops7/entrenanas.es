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
        banner.style.display = "none";
      });
    }
  } catch (e) { /* localStorage no disponible: no mostramos banner persistente */ }
})();
