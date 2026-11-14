import { Link } from 'react-router-dom'
import WindowFrame from '../components/WindowFrame.jsx'
import PageHeader from '../components/PageHeader.jsx'

// Shown for any URL that doesn't match a page.
export default function NotFound() {
  return (
    <WindowFrame>
      <PageHeader title="lost?" />
      <p className="bubble bubble-yellow not-found">
        That page doesn't exist. <Link to="/">Go back home</Link>.
      </p>
    </WindowFrame>
  )
}
