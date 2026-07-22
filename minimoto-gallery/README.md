# MiniMoto Gallery — Neomedieval Battle Ground

Web estática lista para implementar en GitHub Pages.

## Dirección visual

- Estructura general minimalista.
- Tablero de proyectos maximalista y superpuesto.
- Paleta limitada a gris, blanco, carbón, negro y rojo.
- Tipografía principal sans serif de alta legibilidad.
- Monoespaciada para metadatos y navegación.
- Intervenciones neomedievales puntuales mediante Grenze Gotisch, sigilos y terminología del archivo.
- Imágenes en blanco y negro dentro del tablero; color original dentro del expediente ampliado.

## Funciones

- Ampliación accesible de cada proyecto mediante `dialog`.
- Galería de imágenes con teclado y controles visibles.
- Movimiento de fichas solo desde el asa `⠿` en escritorio.
- Movimiento con flechas del teclado cuando el asa tiene el foco.
- Reordenación aleatoria y restauración.
- Índice completo.
- Apartado de artistas.
- Diseño móvil adaptado: collage apilado y táctil, sin arrastre accidental.
- Compatibilidad con `prefers-reduced-motion`.

## Estructura

- `index.html`
- `style.css`
- `app.js`
- `assets/`
- `DEPLOY.md`

## Editar proyectos

Los contenidos se encuentran al principio de `app.js`, dentro del array `projects`.

Cada proyecto admite:

- título y artista;
- año, tipo y estado;
- varias imágenes;
- texto HTML;
- etiquetas;
- posición, tamaño y rotación en escritorio;
- forma visual de la ficha;
- agrupación para proyectos relacionados.

## Tipografías

La web carga desde Google Fonts:

- Instrument Sans
- IBM Plex Mono
- Grenze Gotisch

Existen sustituciones de sistema para que la página siga funcionando si las fuentes externas no cargan.
