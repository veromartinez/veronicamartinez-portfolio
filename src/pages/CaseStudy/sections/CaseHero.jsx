import { useTranslation } from '../../../i18n/LanguageContext'
import './CaseHero.css'

export default function CaseHero({ title, subtitulo, role, anio, industria }) {
  const { t } = useTranslation()

  return (
    <div className="case-hero">
      <div className="container">
        <h1 className="case-hero__title">{title}</h1>
        {subtitulo && <p className="case-hero__subtitle">{subtitulo}</p>}
        <div className="case-hero__cells">
          <div className="case-hero__cell">
            <span className="case-hero__cell-label">{t('caseStudy.roleLabel')}</span>
            <span className="case-hero__cell-value">{role}</span>
          </div>
          <div className="case-hero__cell">
            <span className="case-hero__cell-label">{t('caseStudy.yearLabel')}</span>
            <span className="case-hero__cell-value">{anio}</span>
          </div>
          <div className="case-hero__cell">
            <span className="case-hero__cell-label">{t('caseStudy.industryLabel')}</span>
            <span className="case-hero__cell-value">{industria}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
