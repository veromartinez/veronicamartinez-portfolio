import './Button.css'

export default function Button({ variant = 'primary', children, onClick, href, className = '' }) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
