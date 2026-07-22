# Implementación en GitHub Pages

## Sustitución completa

1. Haz una copia de seguridad del repositorio actual.
2. Sube a la raíz del repositorio:
   - `index.html`
   - `style.css`
   - `app.js`
   - la carpeta `assets`
3. En GitHub abre `Settings → Pages`.
4. En `Build and deployment` selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Guarda.
6. Espera a que GitHub Pages termine el despliegue.
7. Recarga la web con caché limpia.

## Prueba antes de sustituir la web

Puedes crear una rama de prueba:

1. Crea una rama llamada `redesign-neomedieval`.
2. Sube estos archivos a esa rama.
3. Usa GitHub Codespaces, una previsualización local o un servicio de preview.
4. Cuando la revisión esté aprobada, combina la rama con `main`.

## Publicación directa

El paquete no requiere compilación, npm ni servidor. Es HTML, CSS y JavaScript estático.


## Actualización V2 — Página independiente «Quiénes somos»

Subir también a la carpeta `minimoto-gallery/`:

- `quienes-somos.html`
- `quienes-somos.css`

Además, sustituir los archivos actualizados:

- `index.html`
- `style.css`


## Actualización V3 — versión bilingüe

Añadir también:

- `index-en.html`
- `app-en.js`
- `quienes-somos-en.html`

Sustituir los archivos actualizados:

- `index.html`
- `quienes-somos.html`
- `style.css`

La navegación incluye ahora selectores ES / EN.
