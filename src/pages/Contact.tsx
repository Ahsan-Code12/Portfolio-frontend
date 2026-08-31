import { profile } from '../data/profile'
import './pages.css'

export default function Contact() {
  return (
    <div>
      <h1 className="page-title">Contact</h1>
      <p className="body-text">
        Want to work together, or just say hello? Reach me directly, or find me elsewhere below.
      </p>
      <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      <div className="social-row">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
        ))}
      </div>
    </div>
  )
}
