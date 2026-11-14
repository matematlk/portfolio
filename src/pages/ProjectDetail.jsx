import { Link, useParams } from 'react-router-dom'
import WindowFrame from '../components/WindowFrame.jsx'
import ProjectImage from '../components/ProjectImage.jsx'
import ProjectBlock from '../components/ProjectBlock.jsx'
import { HomeIcon, Anchor } from '../components/Icons.jsx'
import NotFound from './NotFound.jsx'
import LogoDesign from './projects/LogoDesign.jsx'
import { findProject } from '../data/projects.js'

// Projects with customPage: true use their own page file, listed here by slug.
const customPages = {
  'logo-design': LogoDesign,
}

// One project's page, built from its entry in src/data/projects.js.
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = findProject(slug)
  if (!project) return <NotFound />

  if (project.customPage) {
    const CustomPage = customPages[slug]
    return <CustomPage />
  }

  // Plain text title, used until a title image is added
  const textTitle = <h1 className="project-title-text">{project.title}</h1>

  return (
    <div className="project-page" id="top">
      {/* key resets the page when moving from one project to another */}
      <WindowFrame key={slug} className="window-project" path=">>> projects/" pathLink="/projects">
        <header className="project-header">
          <Link to="/projects" aria-label="Back to projects" className="project-title">
            <ProjectImage src={project.titleImage} alt={project.title} fallback={textTitle} />
          </Link>
          <Link to="/" className="home-link" aria-label="Home">
            <HomeIcon color="#f3eedc" />
          </Link>
        </header>

        <div className="project-body">
          {/* Big background shapes behind the text */}
          {(project.decorations || []).map((d) => (
            <img
              key={d.src}
              className="decoration"
              src={d.src}
              alt=""
              style={{ top: d.top, left: d.left, right: d.right, width: d.width }}
            />
          ))}

          {project.blocks.map((block, i) => (
            <ProjectBlock key={i} block={block} />
          ))}
        </div>

        {/* Anchor button scrolls back to the top */}
        <a href="#top" className="anchor-link" aria-label="Back to top">
          <Anchor />
        </a>
      </WindowFrame>
    </div>
  )
}
