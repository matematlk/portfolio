import { Link } from 'react-router-dom'

// Mac style window that every inner page lives in. The red dot goes home.
// path: optional text shown in the title bar, like ">>> projects/"
// pathLink: page the path text links to, like "/projects"
export default function WindowFrame({ children, className = '', path, pathLink }) {
  return (
    <div className={`window ${className}`}>
      <div className="titlebar">
        <Link to="/" className="dot dot-red" aria-label="Back to home" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        {path && <Link to={pathLink} className="titlebar-path">{path}</Link>}
      </div>
      <div className="window-body">{children}</div>
    </div>
  )
}
