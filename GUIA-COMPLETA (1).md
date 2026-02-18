# N Ideas - Guía Completa del Sitio Web

## 📋 TABLA DE CONTENIDOS
1. [Cómo abrir y ver el sitio](#1-cómo-abrir-y-ver-el-sitio)
2. [Dónde están los PLACEHOLDERS](#2-dónde-están-los-placeholders)
3. [Cómo editar el código](#3-cómo-editar-el-código)
4. [Configurar el formulario de contacto](#4-configurar-el-formulario-de-contacto)
5. [Cómo subir el sitio a internet](#5-cómo-subir-el-sitio-a-internet)
6. [Estructura del sitio](#6-estructura-del-sitio)
7. [Personalización avanzada](#7-personalización-avanzada)

---

## 1. CÓMO ABRIR Y VER EL SITIO

### Opción A: Abrir directo en el navegador
1. Descargá el archivo `nideas-website.html`
2. Hacé doble clic en el archivo
3. Se abre en tu navegador por defecto
4. ¡Listo! Ya podés ver el sitio funcionando

### Opción B: Usar un servidor local (más profesional)
1. Si tenés Python instalado:
   ```bash
   # En la carpeta donde está el HTML
   python -m http.server 8000
   ```
2. Abrí en el navegador: `http://localhost:8000`

### Opción C: Usar Visual Studio Code con Live Server
1. Abrí el archivo en VS Code
2. Instalá la extensión "Live Server"
3. Click derecho → "Open with Live Server"

---

## 2. DÓNDE ESTÁN LOS PLACEHOLDERS

### 🔴 PLACEHOLDERS CRÍTICOS (tenés que completar estos SÍ o SÍ)

#### A) SECCIÓN "SOBRE NOSOTROS" - Estadísticas
**Ubicación:** Líneas ~600-620

```html
<!-- PLACEHOLDER 1: Número de clientes -->
<div class="stat-number">20+</div>
<div class="stat-label">Clientes Satisfechos</div>

<!-- PLACEHOLDER 2: Años de experiencia -->
<div class="stat-number">10+</div>
<div class="stat-label">Años de Experiencia</div>

<!-- PLACEHOLDER 3: Certificaciones completadas -->
<div class="stat-number">15+</div>
<div class="stat-label">Certificaciones Completadas</div>
```

**Cómo editar:** Reemplazá los números (20+, 10+, 15+) con tus datos reales.

---

#### B) SECCIÓN "SOBRE NOSOTROS" - Información del Fundador
**Ubicación:** Líneas ~625-640

```html
<!-- PLACEHOLDER 4: Nombre del fundador -->
<h3 class="leader-name">[Nombre del Fundador]</h3>

<!-- PLACEHOLDER 5: Credenciales -->
<p>CISA | CISSP | ISO 27001 Lead Auditor</p>

<!-- PLACEHOLDER 6: Biografía -->
<p style="margin-top: 15px;">
    [Breve biografía del fundador - experiencia, pasión por la ciberseguridad, 
    visión de la empresa]
</p>
```

**Cómo editar:** 
- Reemplazá `[Nombre del Fundador]` con el nombre real
- Reemplazá las credenciales con las certificaciones reales
- Escribí una biografía de 2-3 oraciones

---

#### C) SECCIÓN CONTACTO - Información de contacto
**Ubicación:** Líneas ~655-705

```html
<!-- PLACEHOLDER 7: Email -->
<p><a href="mailto:contacto@nideas.com">contacto@nideas.com</a></p>

<!-- PLACEHOLDER 8: Teléfono -->
<p><a href="tel:+5491112345678">+54 9 11 1234-5678</a></p>

<!-- PLACEHOLDER 9: Ubicación -->
<p>Buenos Aires, Argentina<br>Trabajamos con clientes globalmente</p>

<!-- PLACEHOLDER 10: LinkedIn -->
<p><a href="https://linkedin.com/company/nideas" target="_blank">/company/nideas</a></p>
```

**Cómo editar:**
- Email: Cambiar `contacto@nideas.com` por tu email real
- Teléfono: Cambiar `+5491112345678` por tu número real
- LinkedIn: Cambiar la URL si tenés perfil de LinkedIn de la empresa
  - Si NO tenés LinkedIn, podés borrar toda esa sección (líneas ~695-705)

---

### 🟡 PLACEHOLDERS OPCIONALES (podés dejarlos así por ahora)

#### D) Formulario de Contacto
**Ubicación:** Línea ~712

```html
<form action="#" method="POST" id="contactForm">
```

**Estado actual:** El formulario NO funciona (solo muestra una alerta)

**Ver sección 4** para configurarlo con un servicio real.

---

## 3. CÓMO EDITAR EL CÓDIGO

### Paso 1: Abrí el archivo HTML
- Usá un editor de texto:
  - **Recomendado:** Visual Studio Code (gratis)
  - Alternativas: Notepad++, Sublime Text
  - **NO usar:** Word, Google Docs (rompen el código)

### Paso 2: Buscá los placeholders
- En VS Code: `Ctrl+F` (Windows) o `Cmd+F` (Mac)
- Buscá: `⚠️ PLACEHOLDER`
- Te va a mostrar todos los lugares que tenés que editar

### Paso 3: Editá el texto
- Reemplazá el texto entre `[corchetes]` o los valores de ejemplo
- Guardá el archivo: `Ctrl+S` o `Cmd+S`
- Refrescá el navegador para ver los cambios

### Ejemplo práctico:

**ANTES:**
```html
<h3 class="leader-name">[Nombre del Fundador]</h3>
```

**DESPUÉS:**
```html
<h3 class="leader-name">Juan Pérez</h3>
```

---

## 4. CONFIGURAR EL FORMULARIO DE CONTACTO

El formulario actual NO envía emails. Necesitás conectarlo con un servicio.

### OPCIÓN A: Formspree (RECOMENDADO - MÁS FÁCIL)

**Pros:** Gratis hasta 50 envíos/mes, súper fácil
**Contras:** Límite de envíos en plan gratis

**Pasos:**
1. Andá a https://formspree.io
2. Creá una cuenta gratis
3. Creá un nuevo form
4. Te dan un "endpoint" tipo: `https://formspree.io/f/xyzabc123`
5. En el código HTML, línea ~712, cambiá:

```html
<!-- ANTES -->
<form action="#" method="POST" id="contactForm">

<!-- DESPUÉS -->
<form action="https://formspree.io/f/TU_CODIGO_AQUI" method="POST" id="contactForm">
```

6. Eliminá o comentá las líneas 775-778 (el JavaScript que muestra la alerta)

```javascript
// COMENTAR O BORRAR ESTO:
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('⚠️ CONFIGURAR: Necesitas conectar este formulario...');
// });
```

---

### OPCIÓN B: EmailJS

**Pros:** Gratis hasta 200 emails/mes
**Contras:** Más complejo de configurar

**Pasos:**
1. Registrate en https://www.emailjs.com/
2. Configurá tu servicio de email
3. Creá un template
4. Agregá este código antes del `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("TU_PUBLIC_KEY");
    
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
            .then(function() {
                alert('¡Mensaje enviado correctamente!');
                document.getElementById('contactForm').reset();
            }, function(error) {
                alert('Error al enviar: ' + error);
            });
    });
</script>
```

---

### OPCIÓN C: Backend propio (Node.js, PHP)

Si tenés conocimientos técnicos, podés crear tu propio backend.
**No lo recomiendo** si no tenés experiencia en backend.

---

## 5. CÓMO SUBIR EL SITIO A INTERNET

### OPCIÓN A: Netlify (RECOMENDADO - GRATIS Y FÁCIL)

**Costo:** GRATIS
**Dificultad:** ⭐ (muy fácil)

**Pasos:**
1. Andá a https://www.netlify.com/
2. Creá una cuenta (podés usar GitHub, Google, o email)
3. Arrastrá el archivo `nideas-website.html` a Netlify Drop
4. Netlify te da una URL tipo: `https://nombre-aleatorio.netlify.app`
5. Podés cambiar el nombre o conectar tu propio dominio

**Nota:** Si querés usar el logo SVG, subí también los archivos `.svg` junto con el HTML.

---

### OPCIÓN B: Vercel (Similar a Netlify)

**Costo:** GRATIS
**Pasos:** Igual que Netlify
URL: https://vercel.com/

---

### OPCIÓN C: GitHub Pages (Gratis)

**Prerrequisitos:** Cuenta de GitHub

**Pasos:**
1. Creá un repositorio en GitHub
2. Subí el archivo `nideas-website.html` (renombralo a `index.html`)
3. En Settings → Pages → Activá GitHub Pages
4. Tu sitio estará en: `https://tuusuario.github.io/nombre-repo`

---

### OPCIÓN D: Hosting tradicional (pago)

Si querés un dominio propio (ej: `www.nideas.com`):

1. Comprá un dominio en: Namecheap, GoDaddy, etc.
2. Contratá hosting: Hostinger, SiteGround, etc. (~$3-5 USD/mes)
3. Subí el archivo HTML via FTP o cPanel

---

## 6. ESTRUCTURA DEL SITIO

### Secciones del sitio (en orden):

1. **Header (Navegación fija)**
   - Logo N ideas
   - Links: Servicios, Clientes, Nosotros, Contacto

2. **Hero (Inicio)**
   - Título principal
   - Subtítulo
   - 2 botones (CTA)

3. **Servicios**
   - 6 tarjetas con servicios
   - Iconos, títulos, descripciones

4. **Clientes**
   - 4 clientes destacados
   - Emoji, nombre, industria

5. **Sobre Nosotros**
   - Texto sobre la empresa
   - 4 estadísticas
   - Información del fundador

6. **Contacto**
   - Información de contacto (email, teléfono, ubicación, LinkedIn)
   - Formulario de contacto

7. **Footer**
   - Logo
   - Copyright

---

## 7. PERSONALIZACIÓN AVANZADA

### Cambiar colores

Los colores están en las líneas 13-20:

```css
:root {
    --navy: #0F172A;         /* Fondo oscuro principal */
    --navy-light: #1E293B;   /* Fondo oscuro secundario */
    --teal: #14B8A6;         /* Color acento (verde agua) */
    --gray: #64748B;         /* Gris medio */
    --white: #FFFFFF;        /* Blanco */
}
```

**Para cambiar un color:** Reemplazá el código hexadecimal (ej: `#14B8A6`)

Herramienta recomendada para elegir colores: https://coolors.co/

---

### Agregar más servicios

Copiá uno de los bloques `.service-card` y editá el contenido:

```html
<div class="service-card">
    <div class="service-icon">🆕</div>
    <h3>Nuevo Servicio</h3>
    <p>Descripción del nuevo servicio...</p>
</div>
```

---

### Agregar más clientes

Copiá uno de los bloques `.client-card`:

```html
<div class="client-card">
    <div class="client-logo">🏢</div>
    <div class="client-name">Empresa Nueva</div>
    <div class="client-industry">Industria / Sector</div>
</div>
```

---

### Cambiar fuentes

Las fuentes están definidas en la línea 6:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Para cambiar, buscá fuentes en https://fonts.google.com/

---

## 📞 RESUMEN RÁPIDO - CHECKLIST

Antes de publicar, asegurate de:

- [ ] Reemplazar nombre del fundador
- [ ] Agregar credenciales del fundador
- [ ] Escribir biografía del fundador
- [ ] Cambiar estadísticas (clientes, años, certificaciones)
- [ ] Poner email real
- [ ] Poner teléfono real
- [ ] Actualizar ubicación si es necesario
- [ ] Decidir si mostrar LinkedIn (o borrarlo)
- [ ] Configurar formulario de contacto (Formspree o EmailJS)
- [ ] Testear el sitio en mobile (abrilo en tu celular)
- [ ] Subir a Netlify/Vercel

---

## 🎨 CARACTERÍSTICAS DEL DISEÑO

✅ Responsive (funciona en mobile, tablet, desktop)
✅ Animaciones suaves al hacer scroll
✅ Efectos hover en todos los elementos interactivos
✅ Navegación smooth scroll
✅ Header que cambia al hacer scroll
✅ Paleta de colores de N Ideas aplicada
✅ Logo Network Node integrado
✅ Tipografía Space Mono (coherente con el branding)

---

## ❓ PROBLEMAS COMUNES

**P: El sitio se ve raro en mi navegador**
R: Asegurate de estar usando un navegador moderno (Chrome, Firefox, Edge, Safari)

**P: Las fuentes no se cargan**
R: Necesitás conexión a internet para que carguen las fuentes de Google

**P: El formulario no funciona**
R: Necesitás configurarlo con Formspree o EmailJS (ver sección 4)

**P: Quiero agregar un blog**
R: Eso requiere un CMS (WordPress, Ghost) o un generador estático (Hugo, Jekyll). Es más complejo.

---

## 📧 SIGUIENTE PASO RECOMENDADO

1. **Ahora:** Completá todos los placeholders
2. **Luego:** Configurá el formulario con Formspree
3. **Finalmente:** Subí el sitio a Netlify

**Tiempo estimado:** 30-60 minutos para tener el sitio online

---

¡Listo! Con esta guía tenés todo lo que necesitás para editar, configurar y publicar tu sitio web.
