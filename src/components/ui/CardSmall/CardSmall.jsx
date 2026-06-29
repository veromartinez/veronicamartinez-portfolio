import { Link } from 'react-router-dom'
import './CardSmall.css'

export default function CardSmall({ slug, category, year, title, description, image }) {
  return (
    <Link to={`/casos-de-estudio/${slug}`} className="card-small">
      <div className="card-small__image-wrap">
        {image ? (
          <img src={image} alt={title} className="card-small__image" />
        ) : (
          <div className="card-small__image-placeholder" />
        )}
      </div>
      <div className="card-small__content">
        <span className="card-small__meta">{category} / {year}</span>
        <h3 className="card-small__title">{title}</h3>
        <p className="card-small__desc">{description}</p>
      </div>
    </Link>
  )
}
