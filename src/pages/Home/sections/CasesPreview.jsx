import { useTranslation } from '../../../i18n/LanguageContext'
import { caseStudies } from '../../../data/caseStudies'
import CardLarge from '../../../components/ui/CardLarge/CardLarge'
import CardSmall from '../../../components/ui/CardSmall/CardSmall'
import './CasesPreview.css'

export default function CasesPreview() {
  const { t } = useTranslation()

  if (caseStudies.length < 4) return null

  return (
    <section className="cases-preview">
      <div className="container cases-preview__inner">
        <div className="cases-preview__header">
          <h2 className="cases-preview__title">{t('home.casesTitle')}</h2>
          <span className="cases-preview__counter">{t('home.casesCounter')}</span>
        </div>

        <div className="cases-preview__grid">
          <div className="cases-preview__cell--r1-large">
            <CardLarge {...caseStudies[0]} />
          </div>
          <div className="cases-preview__cell--r1-small">
            <CardSmall {...caseStudies[1]} />
          </div>
          <div className="cases-preview__cell--r2-small">
            <CardSmall {...caseStudies[2]} />
          </div>
          <div className="cases-preview__cell--r2-large">
            <CardLarge {...caseStudies[3]} />
          </div>
          {caseStudies[4] && (
            <div className="cases-preview__cell--r3-large">
              <CardLarge {...caseStudies[4]} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
