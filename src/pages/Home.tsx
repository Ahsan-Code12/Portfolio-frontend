import { Link } from 'react-router-dom'
import { profile, projects } from '../data/profile'
import './pages.css'

export default function Home() {
  const featured = projects.slice(0, 2)

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">
          {profile.role}
          <br />
          based in {profile.location.split(',')[0]}.
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">See my work</Link>
          <Link to="/contact" className="btn-ghost">Get in touch</Link>
        </div>
      </section>

      <section className="section">
        <p className="body-text">{profile.about}</p>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Recent work</h2>
          <Link to="/projects" className="text-link">View all</Link>
        </div>
        <div className="featured-list">
          {featured.map((p) => (
            <div key={p.title} className="featured-item">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
