# Los Altos — sitio nuevo

Rediseño moderno de una sola página para Los Altos, Clínica de Salud Mental y Adicciones (Hermosillo, Sonora).

- `index.html`: contenido (portada, Nosotros, Servicios, Ingreso, Instalaciones, Ubicación, Equipo y Contacto).
- `estilos.css`: diseño con una sola tipografía (Manrope) y los colores del logo.
- `sitio.js`: menú para celular, sombra del encabezado y aparición suave de secciones.
- `idioma.js`: versión en inglés. El selector ES / EN del encabezado cambia el idioma, que se recuerda en el navegador; con `?lang=en` la página abre directo en inglés. Las traducciones están al inicio del archivo (texto en español → inglés).
- `img/`: fotos de la clínica y del equipo.

## Ver en local

```bash
python -m http.server 8000
```

Luego abre http://localhost:8000.
