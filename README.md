# Los Altos — sitio nuevo

Sitio de una sola página para Los Altos, Clínica de Salud Mental y Adicciones (Hermosillo, Sonora).

En línea: https://jesusantonioaguilardev.github.io/LosAltos-nuevo/

## Diseño

Estructura de página clínica: banda oscura de portada con una tarjeta de datos clave superpuesta, franja de confianza, columna de lectura con fotos y recuadros destacados, tarjetas de ingreso, equipo clínico, preguntas frecuentes y formulario de admisiones. Usa los colores del logo de Los Altos y una sola tipografía (Manrope).

## Archivos

- `index.html`: contenido.
- `estilos.css`: diseño.
- `sitio.js`: menú para celular, sombra del encabezado y formulario de admisiones. El formulario no envía datos a ningún servidor: arma el mensaje y abre WhatsApp al (662) 468 4645.
- `idioma.js`: versión en inglés. El selector ES / EN cambia el idioma y se recuerda en el navegador; con `?lang=en` la página abre en inglés. Las traducciones están al inicio del archivo (texto en español → inglés).
- `img/`: fotos de la clínica y del equipo.

## Ver en local

```bash
python -m http.server 8000
```

Luego abre http://localhost:8000.
