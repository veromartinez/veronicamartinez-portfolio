# Catálogo de componentes

## Primitivos UI — `src/components/ui/`

### Button
```jsx
<Button variant="primary" href="/ruta">Texto</Button>
<Button variant="ghost" onClick={fn}>Texto</Button>
<Button variant="link">Texto →</Button>
```
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'ghost' \| 'link'` | `'primary'` | Estilo visual |
| `href` | string | — | Si se pasa, renderiza `<a>` en lugar de `<button>` |
| `onClick` | function | — | Handler para `<button>` |
| `className` | string | `''` | Clases extra |
| `children` | node | — | Contenido del botón |

---

### Tag
```jsx
<Tag>User Flows</Tag>
```
Solo recibe `children`. Se usa en `HabilidadesSection` para los pills de skills.

---

### CardLarge
```jsx
<CardLarge
  slug="sisne"
  category="SAAS"
  year="2022-23"
  title="SisNe"
  description="Descripción del proyecto."
  image="/images/case-studies/sisne-hero.jpg"
/>
```
Navega a `/casos-de-estudio/{slug}` al hacer click. Si no hay `image`, muestra placeholder gris.

---

### CardSmall
Mismas props que `CardLarge`. Visualmente más compacta, fondo `--color-gray-100`.

---

## Layout — `src/components/layout/`

### Header
Sin props. Lee las rutas via React Router `NavLink` y aplica `.header__link--active` a la ruta activa. Los textos vienen de `t('nav.*)`.

**Menú mobile (hamburger):** en pantallas ≤768px se oculta la nav horizontal y aparece un botón hamburger. Al presionar muestra un panel `.header__mobile-menu` desplegado debajo del header. El ícono cambia a X cuando el menú está abierto. Se cierra al hacer click en cualquier link del menú o en el logo. Usa `useState` internamente.

### Footer
Sin props. Textos desde `t('footer.*)`. Links a LinkedIn y Behance hardcodeados en el componente.

---

## Secciones compartidas — `src/components/sections/`

### HabilidadesSection
```jsx
<HabilidadesSection />
```
Sin props. Título y label vienen de `t('home.skillsTitle')` y `t('home.skillsLabel')`. Los datos de skills vienen de `src/data/habilidades.js`. Se usa en Home y Experiencia.

### ContactSection
Sin props. Todos los strings desde `t('home.contact*)`.

---

## Secciones de Case Study — `src/pages/CaseStudy/sections/`

### CaseHero
```jsx
<CaseHero
  title="Título del proyecto"
  subtitulo="Subtítulo opcional"
  role="UX/UI Designer"
  anio="2021-2022"
  industria="Consumo masivo"
/>
```
`subtitulo` es opcional. No hay props `category` ni `year` — fueron eliminadas porque el diseño no las muestra.

---

### CaseSection
```jsx
<CaseSection
  label="Contexto"
  title="Título opcional"
  body={`Párrafo de texto normal.
Otra línea del mismo párrafo.
- Bullet uno
- Bullet dos
Otro párrafo después de la lista.`}
/>
```
- `label` se muestra en color primario, uppercase — usar para el nombre de la sección (Contexto, Solución…)
- `title` es el h2 con estilo body medium — usar para el título descriptivo de la sección
- Ambos son opcionales; si los dos están vacíos el componente no renderiza
- `body` soporta texto libre y bullets: las líneas que empiezan con `- ` se agrupan automáticamente en un `<ul>` con bullets en color primario y gap de 4px (igual que CaseMiRol)

---

### CaseMiRol
```jsx
<CaseMiRol
  intro="Como única diseñadora en el proyecto propuse y ejecuté:"
  splitAt={4}
  bullets={[
    'Primer punto.',
    'Segundo punto.',
    'Tercer punto.',
  ]}
/>
```
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `intro` | string | — | Texto introductorio antes de la lista (columna izquierda) |
| `bullets` | string[] | — | Lista de tareas. Si está vacía, no renderiza nada |
| `splitAt` | number | `Math.ceil(bullets.length / 2)` | Índice donde partir la lista en dos columnas |

El título "Mi rol" viene de `t('caseStudy.miRolTitle')`. Los bullets se muestran en 2 columnas en desktop y en 1 columna en mobile (≤600px). Los markers son `var(--color-primary)`.

---

### CaseImageGrid
```jsx
<CaseImageGrid images={[
  '/images/case-studies/nombre-1.jpg',
  '/images/case-studies/nombre-2.jpg',
]} />
```
| Cantidad de imágenes | Layout |
|---------------------|--------|
| 0 o undefined | No renderiza nada |
| 1 | Una columna full width |
| 2 | Dos columnas iguales |
| 3 | Primera ocupa ancho completo, dos abajo |
| 4 | Grilla 2×2 |

Las imágenes van en `public/images/case-studies/` y se referencian sin `public/` en la ruta.

---

### CaseImpacto
```jsx
<CaseImpacto
  metrics={[
    { value: '-5min', label: 'El tiempo de carga se redujo de 45 min a 5 min.' },
  ]}
  quotes={[
    '"Quote del usuario"',
  ]}
/>
```
Si tanto `metrics` como `quotes` están vacíos, no renderiza nada.

---

### CaseAprendizajes
```jsx
<CaseAprendizajes text="Primer párrafo de aprendizajes.

Segundo párrafo." />
```
Si `text` está vacío, no renderiza nada. Separá párrafos con `\n\n` (línea en blanco).

---

### CaseNav
```jsx
<CaseNav
  prev={{ slug: 'sisne', title: 'SisNe' }}
  next={{ slug: 'crezco', title: 'Crezco' }}
/>

{/* Primer caso — sin prev */}
<CaseNav prev={null} next={{ slug: 'ccn-whastapp', title: 'CCN Whastapp' }} />

{/* Último caso — sin next */}
<CaseNav prev={{ slug: 'crezco', title: 'Crezco' }} next={null} />
```

---

## Clases de tipografía — `src/styles/typography.css`

| Clase | Fuente | Tamaño | Uso |
|-------|--------|--------|-----|
| `.display-xl` | Playfair | 48px | Títulos hero muy grandes |
| `.display-lg` | Playfair | 36px | Títulos de página |
| `.display-md` | Playfair | 30px | Títulos de sección |
| `.display-sm` | Playfair | 26px | Subtítulos |
| `.display-italic` | Playfair italic | — | Modificador, combinar con display-* |
| `.heading` | Manrope | 20px / 800 | Headings sans-serif |
| `.label` | Manrope | 12px / 500 | Labels uppercase en primary color |
| `.body-base` | Manrope | 16px | Párrafos principales |
| `.body-sm` | Manrope | 13px | Párrafos secundarios |
| `.caption` | Manrope | 12px | Texto terciario en gris |

---

## Variables de tokens — `src/styles/tokens.css`

### Colores
| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-primary` | `#4db6ac` | Acentos, labels, links activos |
| `--color-gray-900` | `#2e2e2e` | Texto principal |
| `--color-gray-800` | `#334155` | Texto oscuro secundario |
| `--color-gray-700` | `#434d52` | Texto de cuerpo |
| `--color-gray-400` | `#b4b1ad` | Texto secundario, bordes suaves |
| `--color-gray-100` | `#f5f5f5` | Fondos de cards, tags |
| `--color-white` | `#ffffff` | Fondo general |

### Tipografía
| Variable | Valor |
|----------|-------|
| `--font-display` | `'Playfair Display', serif` |
| `--font-body` | `'Manrope', sans-serif` |
| `--text-xs` | 12px |
| `--text-sm` | 13px |
| `--text-14` | 14px |
| `--text-base` | 16px |
| `--text-md` | 20px |
| `--text-lg` | 26px |
| `--text-xl` | 30px |
| `--text-2xl` | 36px |
| `--text-3xl` | 48px |
| `--text-4xl` | 72px (headline hero) |
| `--weight-regular` | 400 |
| `--weight-medium` | 500 |
| `--weight-extrabold` | 800 |
| `--lh-hero` | 90px (line-height del headline hero) |

### Espaciado
| Variable | Valor |
|----------|-------|
| `--space-xs` | 8px |
| `--space-sm` | 16px |
| `--space-md` | 24px |
| `--space-lg` | 48px |
| `--space-xl` | 80px |
| `--space-2xl` | 120px |
