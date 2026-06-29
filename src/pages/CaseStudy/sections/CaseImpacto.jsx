import { useTranslation } from '../../../i18n/LanguageContext'
import './CaseImpacto.css'

export default function CaseImpacto({ metrics, quotes }) {
  const { t } = useTranslation()
  const hasContent = metrics?.length || quotes?.length
  if (!hasContent) return null

  return (
    <div className="case-impacto">
      <div className="container">
        <div className="case-impacto__inner">
          <h2 className="case-impacto__title">{t('caseStudy.impactoTitle')}</h2>

          {metrics?.length > 0 && (
            <ul className="case-impacto__metrics">
              {metrics.map((m, i) => (
                <li key={i} className="case-impacto__metric">
                  <strong>{m.value}:</strong> {m.label}
                </li>
              ))}
            </ul>
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
