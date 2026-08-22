import { Link } from 'react-router-dom'
import { useTranslation } from '../../../i18n/LanguageContext'
import './SobreMiSection.css'

const highlighted = `¡Hola! Soy Vero, diseñadora UX/UI y analista funcional, especializada en transformar problemas complejos de negocio en experiencias digitales claras y viables.`

const bio = `Mi camino profesional siempre estuvo impulsado por la curiosidad y por la necesidad de entender cómo funcionan las cosas y cómo las personas interactúan con ellas.
Comencé mi carrera como diseñadora gráfica y web, construyendo una sólida base en comunicación visual, experiencia digital y atención al detalle. Durante 15 años también fui docente universitaria en FADU-UBA, una experiencia que me enseñó a comunicar ideas complejas con claridad, acompañar a otros y desarrollar una mirada profundamente empática.
Con el tiempo, ese recorrido me llevó naturalmente hacia el diseño de experiencia de usuario. Desde entonces, he trabajado para distintas industrias, participando en todo el proceso de diseño: desde la investigación y definición del problema hasta el diseño, la validación y el handoff con desarrollo.
Esa diversidad de proyectos me enseñó a adaptarme rápidamente a nuevos contextos, comprender procesos de negocio complejos e identificar oportunidades de mejora más allá de la interfaz.
Hoy mi perfil combina UX/UI, análisis funcional y visión de producto, una perspectiva que reforcé al certificarme como Certified Scrum Product Owner® (CSPO®). Trabajo en el punto de encuentro entre las necesidades de las personas, los objetivos del negocio y la viabilidad tecnológica. Disfruto especialmente desentrañar problemas complejos, transformar requerimientos en experiencias claras y acompañar a los equipos en la construcción de soluciones digitales útiles, viables y capaces de generar impacto real.`

export default function SobreMiSection() {
  const { t } = useTranslation()

  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="container sobre-mi__inner">
        <div className="sobre-mi__photo-col">
          <div className="sobre-mi__photo-wrap">
            <img src="/images/veronica-martinez-uxui.jpg" alt="Verónica Martínez" className="sobre-mi__photo" />
          </div>
        </div>
        <div className="sobre-mi__content">
          <h2 className="sobre-mi__title">
            {t('home.aboutTitle')} <em>{t('home.aboutTitleItalic')}</em>
          </h2>
          <div className="sobre-mi__body">
            <p className="sobre-mi__bio sobre-mi__bio--highlighted">{highlighted}</p>
            {bio.split('\n').map((paragraph, i) => (
              <p key={i} className="sobre-mi__bio">{paragraph}</p>
            ))}
            <Link to="/experiencia" className="sobre-mi__link">
              {t('home.aboutLink')} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
