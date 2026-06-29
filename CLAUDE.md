# Contexto del proyecto — Portfolio Verónica Martínez

## Qué es este proyecto
Portfolio web personal de Verónica Martínez (Diseñadora UX/UI & Analista Funcional).
El diseño viene de Figma. Las variables de diseño originales están en `vero_variables.json`.

## Stack
- **React 18** + **Vite** (no Next.js, no CRA)
- **React Router DOM v6** — única librería externa permitida
- **CSS propio** con custom properties — sin Tailwind, sin Bootstrap, sin librerías de UI
- **i18n propio** basado en contexto React + archivos JSON (sin librería)
- **Tipografías**: Playfair Display (display/titulos) + Manrope (body) — cargadas desde Google Fonts en `index.html`

## Comandos
```bash
npm run dev      # servidor de desarrollo en localhost:5173
npm run build    # build de producción
npm run preview  # previsualizar el build
```

## Estructura de carpetas (resumen)
```
src/
├── components/
│   ├── layout/        # Header, Footer  (aparecen en TODAS las páginas vía App.jsx)
│   ├── ui/            # Button, Tag, CardSmall, CardLarge  (primitivos reutilizables)
│   └── sections/      # HabilidadesSection, ContactSection  (bloques que aparecen en múltiples páginas)
├── pages/
│   ├── Home/          # Home.jsx + sections/ propias
│   ├── Experiencia/
│   ├── CasosDeEstudio/
│   └── CaseStudy/     # Un .jsx por cada caso + _Template.jsx para crear nuevos
├── data/              # Archivos JS con el contenido editable del sitio
├── i18n/              # LanguageContext.jsx + es.json + en.json
└── styles/            # tokens.css, reset.css, typography.css, globals.css
```
Documentación detallada: `docs/ARCHITECTURE.md`

## Rutas
| URL | Componente |
|-----|-----------|
| `/` | `pages/Home/Home.jsx` |
| `/experiencia` | `pages/Experiencia/Experiencia.jsx` |
| `/casos-de-estudio` | `pages/CasosDeEstudio/CasosDeEstudio.jsx` |
| `/casos-de-estudio/sisne` | `pages/CaseStudy/SisNe.jsx` |
| `/casos-de-estudio/ccn-whastapp` | `pages/CaseStudy/CCNWhastapp.jsx` |
| `/casos-de-estudio/crezco` | `pages/CaseStudy/Crezco.jsx` |
| `/casos-de-estudio/ccn` | `pages/CaseStudy/CCN.jsx` |

Para agregar una ruta nueva: importar el componente y agregar `<Route>` en `src/App.jsx`.

## Tareas frecuentes

### Agregar un nuevo case study
1. Duplicar `src/pages/CaseStudy/_Template.jsx` → `MiProyecto.jsx`
2. Cambiar el nombre de la función (`export default function MiProyecto`)
3. Completar el contenido de cada prop en el archivo
4. Agregar las imágenes en `public/images/case-studies/`
5. Agregar una entrada en `src/data/caseStudies.js` (solo los campos de card)
6. Importar y agregar `<Route>` en `src/App.jsx`

### Editar contenido de un case study existente
Abrir directamente el archivo `.jsx` del caso en `src/pages/CaseStudy/`.
El contenido está escrito como props dentro del JSX — no hay archivo de datos separado para el detalle.

### Modificar imágenes de un caso
- Las imágenes van en `public/images/case-studies/`
- Se referencian como `/images/case-studies/nombre.jpg` (sin `public/` en la ruta)
- El componente `CaseImageGrid` acepta 1–4 imágenes y adapta el layout automáticamente
- Dentro de cada caso hay 2 bloques de imágenes separados por el contenido de solución

### Cambiar colores o tipografía
Todo en `src/styles/tokens.css`. Los componentes nunca usan valores hardcodeados — siempre variables CSS.

### Agregar o cambiar texto de la UI (nav, labels, etc.)
Editar `src/i18n/es.json`. Para ver la estructura de claves disponibles ver `docs/ARCHITECTURE.md`.

## Sistema de estilos
- `tokens.css` — variables CSS (colores, tipografía, espaciado). **Única fuente de verdad.**
- `reset.css` — reset mínimo
- `typography.css` — clases reutilizables: `.display-xl`, `.body-base`, `.label`, etc.
- `globals.css` — clase `.container` para el layout de ancho máximo
- Cada componente tiene su propio `.css` con estilos encapsulados

## i18n
- Idioma activo: **español** (`src/i18n/es.json`)
- Inglés preparado en estructura pero sin traducir (`src/i18n/en.json`)
- Para cambiar el idioma: `const { setLang } = useTranslation()` → `setLang('en')`
- Para agregar un string: agregar la clave en `es.json` Y en `en.json` con la misma estructura

## Animaciones implementadas

### Parallax en HeroSection
- Archivo: `src/pages/Home/sections/HeroSection.jsx`
- El `.hero__inner` se mueve a 25% de la velocidad de scroll (`scrollY * 0.25`)
- Desactivado en mobile (`< 768px`) y si `prefers-reduced-motion: reduce`
- CSS: `.hero { overflow: hidden }` y `.hero__inner { will-change: transform }`

### Hover en CardLarge y CardSmall
- Archivos: `src/components/ui/CardLarge/CardLarge.css`, `src/components/ui/CardSmall/CardSmall.css`
- Elevación: `translateY(-8px)` con `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Zoom de imagen: `scale(1.03)` (pre-existente)
- Título: cambia a `var(--color-primary)` con transición de 0.3s
- Aplica en Home y `/casos-de-estudio` (mismo componente compartido)

## Decisiones de arquitectura tomadas
- Sin librerías de UI externas (pedido explícito del proyecto)
- Cada case study es su propio `.jsx` (en lugar de un template dinámico) para poder personalizar cada uno independientemente
- `caseStudies.js` solo tiene los campos para las cards del listado; el contenido detallado vive en cada `.jsx`
- `HabilidadesSection` y `ContactSection` son componentes compartidos porque aparecen en Home y Experiencia
- Los section components de CaseStudy (`CaseHero`, `CaseSection`, etc.) son los bloques reutilizables entre casos
