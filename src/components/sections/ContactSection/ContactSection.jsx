import { useTranslation } from '../../../i18n/LanguageContext'
import './ContactSection.css'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section className="contact">
      <div className="contact__inner">
        <span className="contact__label">{t('home.contactLabel')}</span>
        <h2 className="contact__headline">{t('home.contactHeadline')}</h2>
        <a href={`mailto:${t('home.contactEmail')}`} className="contact__email">
          {t('home.contactEmail')}
        </a>
      </div>
    </section>
  )
}
