/* Los Altos — menú móvil, sombra del encabezado y formulario que abre WhatsApp. */
(function () {
  'use strict';
  function idioma() { return window.LA_idioma ? window.LA_idioma() : 'es'; }

  /* Menú móvil */
  var boton = document.querySelector('.boton-menu');
  var menu = document.getElementById('menu');
  var ETIQUETAS = { es: ['Abrir menú', 'Cerrar menú'], en: ['Open menu', 'Close menu'] };
  function etiquetaMenu() { boton.setAttribute('aria-label', ETIQUETAS[idioma()][menu.classList.contains('abierto') ? 1 : 0]); }
  function cerrarMenu() { menu.classList.remove('abierto'); boton.setAttribute('aria-expanded', 'false'); etiquetaMenu(); }
  boton.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    etiquetaMenu();
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a, .idioma button')) cerrarMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrarMenu(); });
  document.addEventListener('la:idioma', etiquetaMenu);

  /* Sombra del encabezado al bajar */
  var encabezado = document.querySelector('.encabezado');
  function sombra() { encabezado.classList.toggle('con-sombra', window.scrollY > 8); }
  window.addEventListener('scroll', sombra, { passive: true });
  sombra();

  /* Formulario: arma el mensaje y abre WhatsApp. No envía datos a ningún servidor. */
  var form = document.getElementById('formulario');
  var error = document.getElementById('error-formulario');
  var TEXTO = {
    es: { saludo: 'Hola, quiero información sobre Los Altos.', nombre: 'Nombre', tel: 'Teléfono', para: 'Ayuda', sit: 'Situación' },
    en: { saludo: 'Hello, I would like information about Los Altos.', nombre: 'Name', tel: 'Phone', para: 'Help for', sit: 'Situation' }
  };
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var nombre = (d.get('nombre') || '').trim(), tel = (d.get('telefono') || '').trim(), msj = (d.get('mensaje') || '').trim();
    if (!nombre || !tel || !msj) {
      error.hidden = false;
      (!nombre ? form.nombre : !tel ? form.telefono : form.mensaje).focus();
      return;
    }
    error.hidden = true;
    var t = TEXTO[idioma()];
    var para = form.para.options[form.para.selectedIndex].text;
    var texto = t.saludo + '\n\n' + t.nombre + ': ' + nombre + '\n' + t.tel + ': ' + tel + '\n' + t.para + ': ' + para + '\n' + t.sit + ': ' + msj;
    window.open('https://wa.me/526624684645?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });

  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
})();
