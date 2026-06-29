import { useTranslation } from '../../../i18n/LanguageContext'
import { habilidades } from '../../../data/habilidades'
import Tag from '../../ui/Tag/Tag'
import './HabilidadesSection.css'

export default function HabilidadesSection() {
  const { t } = useTranslation()

  return (
    <section className="habilidades">
      <div className="container">
        <div className="habilidades__header">
          <h2 className="habilidades__title">{t('home.skillsTitle')}</h2>
          <span className="habilidades__label">{t('home.skillsLabel')}</span>
        </div>
        <div className="habilidades__grid">
          {habilidades.map((col) => (
            <div key={col.categoria} className="habilidades__col">
              <span className="habilidades__cat">{col.categoria}</span>
              <div className="habilidades__tags">
                {col.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
