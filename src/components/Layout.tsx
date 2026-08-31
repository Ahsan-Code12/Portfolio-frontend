import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, type ReactNode } from 'react'
import { useTheme } from './useTheme'
import { profile } from '../data/profile'
import './layout.css'

const links = [
  { to: '/', label: 'Index' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout({ children }: { children: ReactNode }) {
  const { dark, toggle } = useTheme()
  const location = useLocation()
  const mainRef = useRef<HTMLDivElement>(null)

  // single orchestrated reveal on route change
  useEffect(() => {
    const el = mainRef.current
    if (!el) return
    el.classList.remove('page-enter')
    void el.offsetWidth
    el.classList.add('page-enter')
  }, [location.pathname])

  return (
    <div className="shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <NavLink to="/" className="wordmark">
            {profile.name}
          </NavLink>
          <nav className="nav">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span className={'toggle-dot' + (dark ? ' dark' : '')} />
          </button>
        </div>
      </header>

      <div ref={mainRef} className="page-enter">
        <main className="container main">{children}</main>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </div>
  )
}
