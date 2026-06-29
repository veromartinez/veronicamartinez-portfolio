import './CaseSection.css'

export default function CaseSection({ label, title, body }) {
  if (!body && !title) return null

  return (
    <div className="case-section">
      <div className="container">
        <div className="case-section__inner">
          <div className="case-section__header">
            {label && <span className="case-section__label">{label}</span>}
            {title && <h2 className="case-section__title">{title}</h2>}
          </div>
          {body && (
            <div className="case-section__body">
              {(() => {
                const lines = body.split('\n')
                const elements = []
                let i = 0
                while (i < lines.length) {
                  const line = lines[i]
                  if (!line.trim()) { i++; continue }
                  if (line.startsWith('- ')) {
                    const items = []
                    while (i < lines.length && lines[i].startsWith('- ')) {
                      items.push(<li key={i}>{lines[i].slice(2)}</li>)
                      i++
                    }
                    elements.push(<ul key={`ul-${i}`}>{items}</ul>)
                  } else {
                    elements.push(<p key={i}>{line}</p>)
                    i++
                  }
                }
                return elements
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
