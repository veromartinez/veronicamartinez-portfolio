/**
 * TEMPLATE DE CASE STUDY
 * ──────────────────────────────────────────────
 * Para crear un nuevo caso:
 *   1. Duplicá este archivo y renombralo  (ej: MiProyecto.jsx)
 *   2. Cambiá el nombre de la función     (ej: export default function MiProyecto)
 *   3. Reemplazá el contenido de cada prop
 *   4. Agregá la ruta en App.jsx
 * ──────────────────────────────────────────────
 */

import CaseHero from './sections/CaseHero'
import CaseSection from './sections/CaseSection'
import CaseMiRol from './sections/CaseMiRol'
import CaseImageGrid from './sections/CaseImageGrid'
import CaseImpacto from './sections/CaseImpacto'
import CaseAprendizajes from './sections/CaseAprendizajes'
import CaseNav from './sections/CaseNav'
import './CaseStudy.css'

export default function NombreDelCaso() {
  return (
    <div className="case-study">

      <CaseHero
        category="SAAS"
        year="2024"
        title="Título del proyecto"
        subtitulo="Subtítulo descriptivo del proyecto"
        role="UX/UI Designer"
        anio="2023-2024"
        industria="Industria"
      />

      {/* ── CONTEXTO ─────────────────────────────────────────────────── */}
      <CaseSection
        label="Contexto"
        title="Título para contexto"
        body="Descripción del contexto. Para múltiples párrafos, dejá una línea en blanco entre ellos."
      />

      {/* ── IMÁGENES bloque 1 ─────────────────────────────────────────
          Podés poner 1, 2, 3 o 4 rutas. El layout se adapta solo.
          Las imágenes van en la carpeta public/images/case-studies/     */}
      <CaseImageGrid images={[
        '/images/case-studies/nombre-1.jpg',
        '/images/case-studies/nombre-2.jpg',
      ]} />

      {/* ── MI ROL ───────────────────────────────────────────────────── */}
      <CaseMiRol bullets={[
        'Primer punto de lo que hiciste.',
        'Segundo punto.',
        'Tercer punto.',
      ]} />

      {/* ── SOLUCIÓN ─────────────────────────────────────────────────── */}
      <CaseSection
        label="Solución"
        title="Título para solución"
        body="Descripción de la solución."
      />

      {/* ── IMÁGENES bloque 2 ─────────────────────────────────────────
          Podés tener más o menos imágenes que el bloque 1              */}
      <CaseImageGrid images={[
        '/images/case-studies/nombre-3.jpg',
        '/images/case-studies/nombre-4.jpg',
      ]} />

      {/* ── IMPACTO ──────────────────────────────────────────────────── */}
      <CaseImpacto
        metrics={[
          { label: 'Descripción de la métrica', value: '99%' },
          { label: 'Otra métrica', value: '+30min' },
        ]}
        quotes={[
          '"Quote del usuario uno"',
          '"Quote del usuario dos"',
        ]}
      />

      {/* ── APRENDIZAJES ─────────────────────────────────────────────── */}
      <CaseAprendizajes text="Texto de aprendizajes." />

      {/* ── NAVEGACIÓN anterior / siguiente ──────────────────────────
          Usá null en prev si es el primer caso, null en next si es el último */}
      <CaseNav
        prev={{ slug: 'slug-caso-anterior', title: 'Caso anterior' }}
        next={{ slug: 'slug-caso-siguiente', title: 'Caso siguiente' }}
      />

    </div>
  )
}
