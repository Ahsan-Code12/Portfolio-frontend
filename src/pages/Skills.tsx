import { skills } from '../data/profile'
import './pages.css'

export default function Skills() {
  return (
    <div>
      <h1 className="page-title">Skills</h1>
      <div className="skills-list">
        {skills.map((group) => (
          <div key={group.group} className="skill-group">
            <h3>{group.group}</h3>
            <div className="tag-row">
              {group.items.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
