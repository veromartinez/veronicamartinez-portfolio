import { useTranslation } from '../../i18n/LanguageContext'
import { caseStudies } from '../../data/caseStudies'
import CardLarge from '../../components/ui/CardLarge/CardLarge'
import CardSmall from '../../components/ui/CardSmall/CardSmall'
import './CasosDeEstudio.css'

export default function CasosDeEstudio() {
  const { t } = useTranslation()

  const cs = caseStudies
  const pairs = cs.length >= 4
    ? [[cs[0], cs[1]], [cs[3], cs[2]]]
    : cs.length >= 2 ? [[cs[0], cs[1]]] : []

  return (
    <div className="casos">
      <div className="container">
        <div className="casos__header">
          <h1 className="display-xl casos__title">{t('caseStudies.title')}</h1>
          <span className="caption casos__counter">{t('caseStudies.counter')}</span>
        </div>

        <div className="casos__grid">
          {pairs.map(([large, small], i) => (
            <div key={i} className={`casos__row${i % 2 === 1 ? ' casos__row--odd' : ''}`}>
              <CardLarge {...large} />
              <div className={`casos__small-wrap casos__small-wrap--${i % 2 === 0 ? 'right' : 'left'}`}>
                <CardSmall {...small} />
              </div>
            </div>
          ))}

          {caseStudies.length > 4 && caseStudies.slice(4).map((cs) => (
            <div key={cs.slug} className="casos__row casos__row--single">
              <CardLarge {...cs} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
