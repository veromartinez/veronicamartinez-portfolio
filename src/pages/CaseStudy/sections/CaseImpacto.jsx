import { useTranslation } from '../../../i18n/LanguageContext'
import './CaseImpacto.css'

export default function CaseImpacto({ intro, metrics, quotes }) {
  const { t } = useTranslation()
  const hasContent = metrics?.length || quotes?.length
  if (!hasContent) return null

  return (
    <div className="case-impacto">
      <div className="container">
        <div className="case-impacto__inner">
          <h2 className="case-impacto__title">{t('caseStudy.impactoTitle')}</h2>

          {intro && <p className="case-impacto__intro">{intro}</p>}

          {metrics?.length > 0 && (
            <div className="case-impacto__metrics">
              {metrics.map((m, i) => (
                <div key={i} className="case-impacto__metric">
                  <span className="case-impacto__metric-value">{m.value}</span>
                  <span className="case-impacto__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {quotes?.length > 0 && (
            <div className="case-impacto__quotes">
              {quotes.map((q, i) => (
                <blockquote key={i} className="case-impacto__quote">
                  {q}
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
