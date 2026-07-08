import '../CaseStudy.css'
import './CaseSection.css'

export default function CaseGifRow({ label, title, body, image }) {
  return (
    <div className="case-section">
      <div className="container">
        <div className="case-gif-row__inner">
          <div className="case-section__inner">
            <div className="case-section__header">
              {label && <span className="case-section__label">{label}</span>}
              {title && <h2 className="case-section__title">{title}</h2>}
            </div>
            {body && (
              <div className="case-section__body">
                <p>{body}</p>
              </div>
            )}
          </div>
          <img src={image} alt="" className="case-gif-row__img" />
        </div>
      </div>
    </div>
  )
}
