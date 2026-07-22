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
