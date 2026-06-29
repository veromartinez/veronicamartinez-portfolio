import { Link } from 'react-router-dom'
import './CardLarge.css'

export default function CardLarge({ slug, category, year, title, description, image }) {
  return (
    <Link to={`/casos-de-estudio/${slug}`} className="card-large">
      <div className="card-large__image-wrap">
        {image ? (
          <img src={image} alt={title} className="card-large__image" />
        ) : (
          <div className="card-large__image-placeholder" />
        )}
      </div>
      <div className="card-large__content">
        <span className="card-large__meta">{category} / {year}</span>
        <h3 className="card-large__title">{title}</h3>
        <p className="card-large__desc">{description}</p>
      </div>
    </Link>
  )
}
