import { useTranslation } from '../../../i18n/LanguageContext'
import './CaseAprendizajes.css'

export default function CaseAprendizajes({ text }) {
  const { t } = useTranslation()
  if (!text) return null

  return (
    <div className="case-aprendizajes">
      <div className="container">
        <div className="case-aprendizajes__inner">
          <h2 className="case-aprendizajes__title">{t('caseStudy.aprendizajesTitle')}</h2>
          {text.split('\n\n').map((paragraph, i) => (
            <p key={i} className="case-aprendizajes__body">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
