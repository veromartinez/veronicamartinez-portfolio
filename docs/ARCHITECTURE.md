# Arquitectura del proyecto

## Árbol de carpetas completo

```
vero/
├── public/
│   └── images/
│       └── case-studies/        ← imágenes de los casos (.jpg/.png)
│
├── src/
│   ├── App.jsx                  ← router principal + providers
│   ├── main.jsx                 ← entry point, importa los CSS globales
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx   ← nav con NavLink activo según ruta
│   │   │   │   └── Header.css
│   │   │   └── Footer/
│   │   │       ├── Footer.jsx
│   │   │       └── Footer.css
│   │   │
│   │   ├── ui/                  ← primitivos reutilizables
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx   ← props: variant (primary|ghost|link), href, onClick, children
│   │   │   │   └── Button.css
│   │   │   ├── Tag/
│   │   │   │   ├── Tag.jsx      ← pill de habilidad, solo recibe children
│   │   │   │   └── Tag.css
│   │   │   ├── CardSmall/
│   │   │   │   ├── CardSmall.jsx ← props: slug, category, year, title, description, image
│   │   │   │   └── CardSmall.css
│   │   │   └── CardLarge/
│   │   │       ├── CardLarge.jsx ← mismas props que CardSmall
│   │   │       └── CardLarge.css
│   │   │
│   │   └── sections/            ← bloques de página reutilizados en múltiples páginas
│   │       ├── HabilidadesSection/
│   │       │   ├── HabilidadesSection.jsx  ← sin props, textos desde i18n (home.skillsTitle/Label)
│   │       │   └── HabilidadesSection.css  ← datos de src/data/habilidades.js
│   │       └── ContactSection/
│   │           ├── ContactSection.jsx       ← sin props, todo desde i18n
│   │           └── ContactSection.css
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx                     ← ensambla las 5 secciones
│   │   │   └── sections/
│   │   │       ├── HeroSection.jsx + .css
│   │   │       ├── CasesPreview.jsx + .css  ← grid staggered 2×2 con data/caseStudies.js
│   │   │       └── SobreMiSection.jsx + .css
│   │   │
│   │   ├── Experiencia/
│   │   │   ├── Experiencia.jsx + .css       ← datos de data/experiencia.js
│   │   │   └── (reutiliza HabilidadesSection y ContactSection)
│   │   │
│   │   ├── CasosDeEstudio/
│   │   │   ├── CasosDeEstudio.jsx + .css    ← grid con data/caseStudies.js
│   │   │
│   │   └── CaseStudy/
│   │       ├── _Template.jsx                ← DUPLICAR para crear un nuevo caso
│   │       ├── SisNe.jsx                    ← caso completo
│   │       ├── CCNWhastapp.jsx              ← estructura lista, contenido pendiente
│   │       ├── Crezco.jsx                   ← contenido completo, imágenes pendientes
│   │       ├── CCN.jsx                      ← contenido completo, títulos e imágenes pendientes
│   │       ├── CaseStudy.css                ← estilo del wrapper .case-study
│   │       └── sections/                   ← bloques reutilizados por todos los casos
│   │           ├── CaseHero.jsx + .css      ← props: title, subtitulo, role, anio, industria
│   │           ├── CaseSection.jsx + .css   ← props: label, title, body (\n separa líneas, "- " = bullet)
│   │           ├── CaseMiRol.jsx + .css     ← props: intro, bullets (array), splitAt (opcional)
│   │           ├── CaseImageGrid.jsx + .css ← props: images (array de rutas, 1–4 items)
│   │           ├── CaseImpacto.jsx + .css   ← props: metrics [{label, value}], quotes [strings]
│   │           ├── CaseAprendizajes.jsx + .css ← props: text (string, \n\n = nuevo párrafo)
│   │           └── CaseNav.jsx + .css       ← props: prev {slug, title} | null, next {slug, title} | null
│   │
│   ├── data/
│   │   ├── caseStudies.js       ← array con campos de card: slug, category, year, title, description, image
│   │   ├── experiencia.js       ← array de {categoria, items[]} para la página Experiencia
│   │   └── habilidades.js       ← array de {categoria, skills[]} para HabilidadesSection
│   │
│   ├── i18n/
│   │   ├── LanguageContext.jsx  ← Provider + hook useTranslation()
│   │   ├── es.json              ← strings en español (activo)
│   │   └── en.json              ← strings en inglés (estructura lista, sin traducir)
│   │
│   └── styles/
│       ├── tokens.css           ← variables CSS (colores, tipografía, espaciado, layout)
│       ├── reset.css            ← reset mínimo
│       ├── typography.css       ← clases base reutilizables
│       └── globals.css          ← clase .container
│
├── index.html                   ← Google Fonts cargadas aquí
├── vite.config.js
├── package.json
├── CLAUDE.md                    ← contexto principal para sesiones con Claude
└── docs/
    ├── ARCHITECTURE.md          ← este archivo
    └── COMPONENTS.md            ← catálogo de componentes con props
```

---

## Flujo de datos

```
src/data/caseStudies.js
  └── CasesPreview.jsx (Home)    ← campos de card para preview
  └── CasosDeEstudio.jsx         ← campos de card para listado completo

src/data/experiencia.js
  └── Experiencia.jsx

src/data/habilidades.js
  └── HabilidadesSection.jsx     ← usada en Home y Experiencia

src/pages/CaseStudy/SisNe.jsx   ← contenido detallado escrito directamente en el JSX
  └── usa CaseHero, CaseSection, CaseMiRol, CaseImageGrid, CaseImpacto, CaseAprendizajes, CaseNav
```

---

## Flujo de estilos

```
tokens.css          (variables :root)
    ↓
reset.css           (usa variables)
typography.css      (clases .display-xl, .body-base, .label, etc.)
globals.css         (clase .container)
    ↓
ComponentName.css   (usa variables de tokens.css, puede usar clases de typography.css)
```

**Regla:** los componentes nunca escriben colores ni tamaños directos — siempre `var(--color-primary)`, `var(--text-base)`, etc.

---

## Flujo i18n

```
src/i18n/es.json  ──┐
src/i18n/en.json  ──┤  LanguageContext.jsx
                    │    └── provee { lang, setLang, t }
                    │
cualquier comp.jsx  └── const { t } = useTranslation()
                         t('nav.home')  →  "Inicio" | "Home"
```

### Estructura de claves en los JSON

```json
{
  "nav":         { home, caseStudies, experience, about },
  "home":        { heroLabel, heroHeadline, heroBody, heroLink,
                   casesTitle, casesCounter,
                   skillsTitle, skillsLabel,
                   aboutTitle, aboutTitleItalic, aboutLink,
                   contactLabel, contactHeadline, contactEmail },
  "experience":  { title, subtitle, skillsTitle, skillsLabel },
  "caseStudies": { title, counter },
  "caseStudy":   { roleLabel, yearLabel, industryLabel, prev, next,
                   miRolTitle, miRolIntro,
                   impactoTitle, impactoIntro,
                   aprendizajesTitle },
  "footer":      { linkedin, behance, credit }
}
```

---

## Responsive: breakpoints

Definidos solo en CSS (no hay breakpoints en JS, excepto el Header y el parallax del Hero):

| Nombre | Valor | Uso |
|--------|-------|-----|
| Mobile | `max-width: 480px` | Layout de una columna, fuentes más chicas |
| Tablet | `max-width: 768px` | Grillas de 2 col → 1 col; Header muestra hamburger |
| Desktop | > 768px | Layout por defecto |

El gutter (padding lateral) se reduce automáticamente vía variable en `globals.css`:
- Desktop: `--gutter: 40px`
- Tablet: `--gutter: 24px`
- Mobile: `--gutter: 16px`

### Ajustes mobile aplicados (sesión junio 2026)

Los siguientes componentes recibieron media queries para corregir tamaños y line-heights en mobile:

| Archivo | Qué se corrigió |
|---------|----------------|
| `HeroSection.css` | `line-height` del titular: era `60px` con `font-size: 30px` (doble espacio). Corregido a `38px` en ≤480px y `44px` en ≤768px |
| `CasesPreview.css` | Título "Casos de estudio": sin reducción en mobile (48px). Ahora `text-xl` (30px) en ≤768px |
| `CardLarge.css` | Título de card: sin reducción en mobile (30px). Ahora `text-md` (20px) en ≤768px |
| `CardSmall.css` | Ídem |
| `HabilidadesSection.css` | Título (48px → 30px) y `margin-bottom` excesivo (80px → 48px) en ≤768px |
| `SobreMiSection.css` | Título "Sobre mí": sin reducción (48px → 30px) en ≤768px |

---

## Animaciones e interacciones

### Parallax en el Hero (`HeroSection.jsx`)

El contenido del hero se desplaza a **25% de la velocidad de scroll**, creando efecto de profundidad.

**Implementación:**
- `useEffect` con `window.addEventListener('scroll', fn, { passive: true })`
- Aplica `transform: translateY(scrollY * 0.25px)` al `.hero__inner` vía `ref`
- `overflow: hidden` en `.hero` evita que el contenido desborde
- `will-change: transform` en `.hero__inner` activa composición en GPU

**Condiciones de desactivación** (no se activa si):
- `window.matchMedia('(prefers-reduced-motion: reduce)').matches` → respeto de preferencia del sistema
- `window.innerWidth < 768` → desactivado en mobile (scroll táctil ya tiene momentum nativo)

### Hover en cards (`CardLarge.css`, `CardSmall.css`)

Las cards tienen **tres efectos combinados** al hacer hover:

| Efecto | Propiedad | Valor |
|--------|-----------|-------|
| Elevación de la card | `transform: translateY(-8px)` | `transition: 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Zoom en la imagen | `transform: scale(1.03)` | `transition: 0.4s ease` |
| Color del título | `color: var(--color-primary)` | `transition: 0.3s ease` |

Aplica en todas las páginas que usan `CardLarge` o `CardSmall`: Home (`CasesPreview`) y Casos de Estudio (`CasosDeEstudio`).

---

## Imágenes de case studies

Todas las imágenes van en `public/images/case-studies/` y se referencian como `/images/case-studies/nombre.jpg` (sin `public/`).

### Tamaños recomendados

El ancho de contenido disponible es **1120px** (contenedor 1200px − 40px de gutter a cada lado).

#### Imágenes dentro del detalle de un caso (`CaseImageGrid`)

El componente adapta el layout según la cantidad de imágenes pasadas en el prop `images`:

| Cantidad | Layout | Aspect ratio | Tamaño recomendado |
|----------|--------|--------------|--------------------|
| 1 imagen | ancho completo | libre (se respeta el original) | **1120 × alto libre** — mínimo 800px de ancho |
| 2 imágenes | 2 columnas iguales | 4 / 3 | **548 × 411 px** c/u |
| 3 imágenes | 1ª ancho completo + 2 en fila | 1ª: 16 / 10 · resto: 4 / 3 | 1ª: **1120 × 700 px** · resto: **548 × 411 px** |
| 4 imágenes | 2 × 2 | 4 / 3 | **548 × 411 px** c/u |

> En mobile (≤ 600px) los grids de 2 y 4 imágenes colapsan a una sola columna.

#### Imágenes de cards (`caseStudies.js`)

Las cards se usan en Home (`CardLarge`) y en Casos de Estudio (`CardSmall`).

| Componente | Aspect ratio | Tamaño recomendado |
|------------|--------------|--------------------|
| `CardLarge` (Home) | 16 / 10 | **800 × 500 px** |
| `CardSmall` (CasosDeEstudio) | 1 / 1 | **600 × 600 px** |

> Se recomienda exportar una sola imagen por caso en proporción 16:10 (sirve tanto para CardLarge como para la imagen de percepción en CaseImageGrid de 1 imagen).

### Estado de imágenes

| Archivo | Estado | Usado en |
|---------|--------|----------|
| `sisne.jpg` | ✅ presente | Card de SisNe |
| `sisne-precepcion.jpg` | ✅ presente | CaseImageGrid (1 img) en SisNe — ancho completo |
| `crezco.jpg` | ✅ presente | Card de Crezco |
| `veronica-martinez-uxui.jpg` | ✅ en `public/images/` | SobreMiSection |
| `ccn-whastapp-hero.jpg` | ⚠️ pendiente | Card CCNWhastapp |
| `ccn-hero.jpg` | ⚠️ pendiente | Card CCN |
| `sisne-1.jpg` … `sisne-4.jpg` | ⚠️ pendiente | CaseImageGrid (2 imgs c/bloque) en SisNe — 548 × 411 px c/u |

---

## Estado de contenido por case study

| Archivo | Estado | Pendiente |
|---------|--------|-----------|
| `SisNe.jsx` | ✅ completo | Imágenes `sisne-1/2/3/4.jpg` |
| `Crezco.jsx` | ✅ contenido completo | Títulos de Contexto/Solución · Imágenes |
| `CCN.jsx` | ✅ contenido completo | Títulos de Contexto/Solución · Imágenes |
| `CCNWhastapp.jsx` | ✅ contenido completo | Títulos de Contexto/Solución |
| `PrototiposPreventas.jsx` | ⚠️ sin crear | Todo el contenido |
