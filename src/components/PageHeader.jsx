import { Link } from 'react-router-dom'
import { HomeIcon } from './Icons.jsx'

// Page title in a pill on the left, home button on the right.
export default function PageHeader({ title }) {
  return (
    <header className="page-header">
      <h1 className="pill">{title}</h1>
      <Link to="/" className="home-link" aria-label="Home">
        <HomeIcon />
      </Link>
    </header>
  )
}
