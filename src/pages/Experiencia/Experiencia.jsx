import { useTranslation } from '../../i18n/LanguageContext'
import { experiencia } from '../../data/experiencia'
import HabilidadesSection from '../../components/sections/HabilidadesSection/HabilidadesSection'
import './Experiencia.css'

export default function Experiencia() {
  const { t } = useTranslation()

  return (
    <>
      <div className="experiencia">
        <div className="container">
          <div className="experiencia__header">
            <h1 className="display-xl experiencia__title">{t('experience.title')}</h1>
            <a
              href="https://www.linkedin.com/in/veronicamartinezdesanvicente/"
              target="_blank"
              rel="noopener noreferrer"
              className="experiencia__linkedin experiencia__linkedin--desktop"
              aria-label="LinkedIn"
            >
              <span className="experiencia__linkedin-circle">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.32195 4.79799C4.12755 4.79799 4.78061 4.14493 4.78061 3.33933C4.78061 2.53373 4.12755 1.88066 3.32195 1.88066C2.51635 1.88066 1.86328 2.53373 1.86328 3.33933C1.86328 4.14493 2.51635 4.79799 3.32195 4.79799Z" fill="currentColor"/>
                  <path d="M6.15795 5.90333V13.996H8.67061V9.99399C8.67061 8.93799 8.86928 7.91533 10.1786 7.91533C11.4699 7.91533 11.4859 9.12266 11.4859 10.0607V13.9967H13.9999V9.55866C13.9999 7.37866 13.5306 5.70333 10.9826 5.70333C9.75928 5.70333 8.93928 6.37466 8.60395 7.00999H8.56995V5.90333H6.15795ZM2.06328 5.90333H4.57995V13.996H2.06328V5.90333Z" fill="currentColor"/>
                </svg>
              </span>
            </a>
          </div>
          <p className="experiencia__subtitle">{t('experience.subtitle')}</p>
          <a
            href="https://www.linkedin.com/in/veronicamartinezdesanvicente/"
            target="_blank"
            rel="noopener noreferrer"
            className="experiencia__linkedin experiencia__linkedin--mobile"
            aria-label="LinkedIn"
          >
            <span className="experiencia__linkedin-circle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.32195 4.79799C4.12755 4.79799 4.78061 4.14493 4.78061 3.33933C4.78061 2.53373 4.12755 1.88066 3.32195 1.88066C2.51635 1.88066 1.86328 2.53373 1.86328 3.33933C1.86328 4.14493 2.51635 4.79799 3.32195 4.79799Z" fill="currentColor"/>
                <path d="M6.15795 5.90333V13.996H8.67061V9.99399C8.67061 8.93799 8.86928 7.91533 10.1786 7.91533C11.4699 7.91533 11.4859 9.12266 11.4859 10.0607V13.9967H13.9999V9.55866C13.9999 7.37866 13.5306 5.70333 10.9826 5.70333C9.75928 5.70333 8.93928 6.37466 8.60395 7.00999H8.56995V5.90333H6.15795ZM2.06328 5.90333H4.57995V13.996H2.06328V5.90333Z" fill="currentColor"/>
              </svg>
            </span>
          </a>

          <div className="experiencia__list">
            {experiencia.map((grupo) => (
              <div key={grupo.categoria} className="experiencia__grupo">
                <span className="experiencia__cat">{grupo.categoria}</span>
                <ul className="experiencia__items">
                  {grupo.items.map((item, i) => (
                    <li key={i} className="experiencia__item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HabilidadesSection />
    </>
  )
}
