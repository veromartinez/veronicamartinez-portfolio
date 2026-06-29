import './CaseImageGrid.css'

export default function CaseImageGrid({ images }) {
  if (!images?.length) return null

  return (
    <div className="case-image-grid">
      <div className="container">
        <div className={`case-image-grid__grid case-image-grid__grid--${images.length}`}>
          {images.map((src, i) => (
            <div key={i} className="case-image-grid__item">
              {src ? (
                <img src={src} alt="" className="case-image-grid__img" />
              ) : (
                <div className="case-image-grid__placeholder" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
