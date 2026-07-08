import CaseHero from './sections/CaseHero'
import CaseGifRow from './sections/CaseGifRow'
import CaseNav from './sections/CaseNav'
import './CaseStudy.css'

export default function PrototiposPreventas() {
  return (
    <div className="case-study">

      <CaseHero
        category="IA"
        year="2026"
        title="Prototipos interactivos para preventas"
        subtitulo="TODO: subtítulo descriptivo del proyecto"
        role="UX/UI Designer"
        anio="2026"
        industria="TODO: industria"
      />

      <CaseGifRow
        title="TODO: título del primer impacto"
        body="TODO: descripción del resultado o aprendizaje de este bloque."
        image="/images/case-studies/ia/email.gif"
      />

      <CaseGifRow
        title="TODO: título del segundo impacto"
        body="TODO: descripción del resultado o aprendizaje de este bloque."
        image="/images/case-studies/ia/michaels.gif"
      />

      <CaseGifRow
        title="TODO: título del tercer impacto"
        body="TODO: descripción del resultado o aprendizaje de este bloque."
        image="/images/case-studies/ia/nexo.gif"
      />

      <CaseGifRow
        title="TODO: título del cuarto impacto"
        body="TODO: descripción del resultado o aprendizaje de este bloque."
        image="/images/case-studies/ia/rialex.gif"
      />

      <CaseGifRow
        title="TODO: título del quinto impacto"
        body="TODO: descripción del resultado o aprendizaje de este bloque."
        image="/images/case-studies/ia/blog.gif"
      />

      <CaseNav
        prev={{ slug: 'ccn', title: 'Barajar y dar de nuevo' }}
        next={null}
      />

    </div>
  )
}
