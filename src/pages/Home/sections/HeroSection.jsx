import { useEffect, useRef } from 'react'
import { useTranslation } from '../../../i18n/LanguageContext'
import './HeroSection.css'

export default function HeroSection() {
  const { t } = useTranslation()
  const innerRef = useRef(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth < 768) return

    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.25}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero">
      <div className="container hero__inner" ref={innerRef}>
        <span className="hero__label">{t('home.heroLabel')}</span>
        <h1 className="hero__headline">
          Transformo <em>problemas complejos</em>{' '}
          en <em>soluciones digitales</em> viables{' '}
          con impacto en el negocio
        </h1>
        <div className="hero__body-row">
          <p className="hero__body">{t('home.heroBody')}</p>
          <a href="#sobre-mi" className="hero__link">
            {t('home.heroLink')} →
          </a>
        </div>
      </div>
    </section>
  )
}
