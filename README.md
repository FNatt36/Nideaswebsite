# N ideas website

Sitio estático reestructurado a una carpeta clásica de desarrollo web (HTML, CSS y JS separados), listo para trabajar en la rama feature/cleanup y publicar.

## Estructura

- index.html
- assets/
  - css/
    - styles.css
  - js/
    - main.js
- archive/
  - nideas-website.html
- GUIA-COMPLETA (1).md

## Estado actual

- CSS extraído desde el HTML a assets/css/styles.css
- JS extraído desde el HTML a assets/js/main.js
- Página principal renombrada a index.html
- HTML original guardado en archive/nideas-website.html
- Rama de trabajo creada: feature/cleanup

## Cómo ver el sitio

Opción rápida:
1. Abrir index.html en el navegador.

Opción recomendada (servidor local):
1. Python: `python -m http.server 8000`
2. Navegar a http://localhost:8000/

## Próximos pasos

- Completar placeholders de contenidos en la sección “Nosotros” y “Contacto”
- Conectar el formulario de contacto (Formspree, EmailJS u otro)
- Agregar imágenes y favicon dentro de assets (si aplica)
- Configurar despliegue (GitHub Pages, Netlify, Vercel u hosting propio)

## Flujo Git

Se inicializó Git y se creó la rama feature/cleanup. No se realizaron commits automáticamente.

Para registrar y publicar tus cambios:
1. `git add -A`
2. `git commit -m "Estructura web clásica: HTML/CSS/JS y archivo original archivado"`
3. `git branch -M feature/cleanup`
4. `git remote add origin <TU_REPOSITORIO_GIT>`
5. `git push -u origin feature/cleanup`

## Notas

- La guía incluida en GUIA-COMPLETA (1).md detalla edición y personalización.
- La estructura es minimalista y estándar, apta para hosting estático.
