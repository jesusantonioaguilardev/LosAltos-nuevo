/* Los Altos — sitio nuevo: menú móvil, sombra del encabezado y aparición suave de secciones. */
(function () {
  'use strict';
  var boton = document.querySelector('.boton-menu');
  var menu = document.getElementById('menu');
  var encabezado = document.querySelector('.encabezado');

  var ETIQUETAS = { es: ['Abrir menú', 'Cerrar menú'], en: ['Open menu', 'Close menu'] };
  function etiquetaMenu() {
    var lang = window.LA_idioma ? window.LA_idioma() : 'es';
    boton.setAttribute('aria-label', ETIQUETAS[lang][menu.classList.contains('abierto') ? 1 : 0]);
  }
  function cerrarMenu() {
    menu.classList.remove('abierto');
    boton.setAttribute('aria-expanded', 'false');
    etiquetaMenu();
  }
  boton.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    etiquetaMenu();
  });
  document.addEventListener('la:idioma', etiquetaMenu);
  menu.addEventListener('click', function (e) { if (e.target.closest('a, .idioma button')) cerrarMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrarMenu(); });

  function sombra() { encabezado.classList.toggle('con-sombra', window.scrollY > 10); }
  window.addEventListener('scroll', sombra, { passive: true });
  sombra();

  var elementos = document.querySelectorAll('.aparece');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    elementos.forEach(function (el) { obs.observe(el); });
  } else {
    elementos.forEach(function (el) { el.classList.add('visible'); });
  }

  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
})();
