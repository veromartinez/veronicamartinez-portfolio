import { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from '../../../i18n/LanguageContext'
import './Header.css'

export default function Header() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const close = () => setIsOpen(false)

  const handleSobreMi = (e) => {
    e.preventDefault()
    close()
    const scrollToSection = () => {
      document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname === '/') {
      scrollToSection()
    } else {
      navigate('/')
      setTimeout(scrollToSection, 80)
    }
  }

  return (
    <header className="header">
      <div className="header__inner container">
        <NavLink to="/" className={() => 'header__logo'} onClick={close}>
          Verónica Martínez
        </NavLink>

        <nav className="header__nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/casos-de-estudio" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>
            {t('nav.caseStudies')}
          </NavLink>
          <NavLink to="/experiencia" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}>
            {t('nav.experience')}
          </NavLink>
          <a href="/#sobre-mi" className="header__link" onClick={handleSobreMi}>
            {t('nav.about')}
          </a>
        </nav>

        <button className="header__burger" onClick={() => setIsOpen(!isOpen)} aria-label="Menú" aria-expanded={isOpen}>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 8h18v1.5H3zm0 4.25h18v1.5H3zm0 4.25h18v1.5H3z"/>
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="header__mobile-menu">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'header__mobile-link header__mobile-link--active' : 'header__mobile-link'} onClick={close}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/casos-de-estudio" className={({ isActive }) => isActive ? 'header__mobile-link header__mobile-link--active' : 'header__mobile-link'} onClick={close}>
            {t('nav.caseStudies')}
          </NavLink>
          <NavLink to="/experiencia" className={({ isActive }) => isActive ? 'header__mobile-link header__mobile-link--active' : 'header__mobile-link'} onClick={close}>
            {t('nav.experience')}
          </NavLink>
          <a href="/#sobre-mi" className="header__mobile-link" onClick={handleSobreMi}>
            {t('nav.about')}
          </a>
        </nav>
      )}
    </header>
  )
}
