import { useTranslation } from '../../../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__left">
          <span className="footer__name">Verónica Martínez</span>
          <p className="footer__credit">{t('footer.credit')} © {new Date().getFullYear()}</p>
        </div>
        <nav className="footer__links">
          <a href="https://www.linkedin.com/in/veronicamartinezdesanvicente/" target="_blank" rel="noopener noreferrer" className="footer__link">
            {t('footer.linkedin')}
          </a>
          <a href="https://www.behance.net/martinezdiseno" target="_blank" rel="noopener noreferrer" className="footer__link">
            {t('footer.behance')}
          </a>
        </nav>
      </div>
    </footer>
  )
}
