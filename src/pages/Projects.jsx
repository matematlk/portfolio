import { useRef } from 'react'
import { Link } from 'react-router-dom'
import WindowFrame from '../components/WindowFrame.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ProjectImage from '../components/ProjectImage.jsx'
import { projects } from '../data/projects.js'

// Project tiles in a sideways scroller that shows 3 at a time. Tiles come from src/data/projects.js.
export default function Projects() {
  const scroller = useRef(null)

  // Moves the scroller by one tile. direction: -1 = left, 1 = right.
  const scrollByOne = (direction) => {
    const tile = scroller.current.querySelector('li')
    const gap = parseFloat(getComputedStyle(scroller.current).columnGap)
    scroller.current.scrollBy({ left: direction * (tile.offsetWidth + gap) })
  }

  return (
    <WindowFrame>
      <PageHeader title="projects" />
      <div className="project-shelf">
        <ul className="project-scroller" ref={scroller}>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link to={`/projects/${p.slug}`} className="project-card">
                {/* Plain coloured square until a thumbnail is added */}
                <span className="project-thumb">
                  <ProjectImage className="project-image" src={p.thumb} fallback={null} />
                </span>
                <span className="project-name">{p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button className="shelf-arrow shelf-prev" onClick={() => scrollByOne(-1)} aria-label="Previous projects">←</button>
        <button className="shelf-arrow shelf-next" onClick={() => scrollByOne(1)} aria-label="More projects">→</button>
      </div>
    </WindowFrame>
  )
}
