import { Link } from 'react-router-dom'
import { useTranslation } from '../../../i18n/LanguageContext'
import './SobreMiSection.css'

const bio = `Mi camino profesional siempre ha estado impulsado por la curiosidad y la necesidad de entender cómo las personas interactúan con el mundo digital. Comencé construyendo bases sólidas como diseñadora gráfica y web, lo que me dio un profundo respeto por la comunicación visual y el detalle. Con el tiempo, esa vocación se extendió naturalmente hacia el diseño de experiencia de usuario y la docencia universitaria. Ser profesora me enseñó algo fundamental: a comunicar ideas complejas con claridad, a guiar a otros y a cultivar la empatía, habilidades que hoy son el corazón de mi trabajo al investigar y diseñar soluciones centradas en las personas.

Hoy, mi perfil ha evolucionado hacia un rol híbrido y altamente estratégico. Al integrar el análisis funcional y una fuerte visión de producto, logré posicionarme en el punto exacto donde convergen las necesidades del usuario, la viabilidad tecnológica y los objetivos comerciales. Desde un rol de liderazgo, mi mayor motivación es articular estos distintos lenguajes: disfruto desentrañar problemas complejos, traducir requerimientos duros en experiencias fluidas y guiar a los equipos para construir soluciones digitales viables que generen un verdadero impacto en el negocio.`

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
            {bio.split('\n\n').map((paragraph, i) => (
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
