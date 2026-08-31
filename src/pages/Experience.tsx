import { experience } from '../data/profile'
import './pages.css'

export default function Experience() {
  return (
    <div>
      <h1 className="page-title">Experience</h1>
      <div className="timeline">
        {experience.map((job, i) => (
          <div key={job.company} className="timeline-item">
            <span className="eyebrow-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="timeline-body">
              <div className="timeline-head">
                <h3>{job.role} — {job.company}</h3>
                <span className="period">{job.period}</span>
              </div>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
