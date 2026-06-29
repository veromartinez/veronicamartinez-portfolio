import { useTranslation } from '../../../i18n/LanguageContext'
import './CaseMiRol.css'

export default function CaseMiRol({ intro, bullets, splitAt }) {
  const { t } = useTranslation()
  if (!bullets?.length) return null

  const split = splitAt ?? Math.ceil(bullets.length / 2)
  const left = bullets.slice(0, split)
  const right = bullets.slice(split)

  return (
    <div className="case-mirol">
      <div className="container">
        <div className="case-mirol__inner">
          <h2 className="case-mirol__title">{t('caseStudy.miRolTitle')}</h2>
          <div className="case-mirol__cols">
            <div className="case-mirol__col">
              {intro && <p className="case-mirol__intro">{intro}</p>}
              <ul className="case-mirol__list">
                {left.map((item, i) => (
                  <li key={i} className="case-mirol__item">{item}</li>
                ))}
              </ul>
            </div>
            {right.length > 0 && (
              <ul className="case-mirol__col case-mirol__list">
                {right.map((item, i) => (
                  <li key={i} className="case-mirol__item">{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
