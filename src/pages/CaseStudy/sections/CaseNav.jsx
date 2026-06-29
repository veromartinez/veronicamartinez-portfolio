import { Link } from 'react-router-dom'
import { useTranslation } from '../../../i18n/LanguageContext'
import './CaseNav.css'

export default function CaseNav({ prev, next }) {
  const { t } = useTranslation()

  return (
    <nav className="case-nav">
      <div className="container case-nav__inner">
        {prev ? (
          <Link to={`/casos-de-estudio/${prev.slug}`} className="case-nav__link">
            {t('caseStudy.prev')}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/casos-de-estudio/${next.slug}`} className="case-nav__link">
            {t('caseStudy.next')}
          </Link>
        ) : <span />}
      </div>
    </nav>
  )
}
