import { projects } from '../data/profile'
import './pages.css'

export default function Projects() {
  return (
    <div>
      <h1 className="page-title">Projects</h1>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tag-row">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {p.url && <a href={p.url} target="_blank" rel="noreferrer">Live</a>}
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Code</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
