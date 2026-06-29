import CaseHero from './sections/CaseHero'
import CaseNav from './sections/CaseNav'
import './CaseStudy.css'

export default function PrototiposPreventas() {
  return (
    <div className="case-study">

      <CaseHero
        category="IA"
        year="2026"
        title="Prototipos interactivos para preventas"
        subtitulo=""
        role=""
        anio="2026"
        industria=""
      />

      <CaseNav
        prev={{ slug: 'ccn', title: 'CCN' }}
        next={null}
      />

    </div>
  )
}
