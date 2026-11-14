import { Link } from 'react-router-dom'
import { HomeIcon } from '../../components/Icons.jsx'
import ProjectImage from '../../components/ProjectImage.jsx'

// BizOps360 logo redesign page, rebuilt from the "BizOps Logo Redesign" PDF.
// Images live in public/projects/logo-design/.

const FILES = '/projects/logo-design'

// New logo: the animated circles from the animations project
const NEW_LOGO = '/projects/animations/svg-animation.svg'

// Small app-style window with an icon, a title and minimise / maximise / close buttons.
// tone: 'grey' (default), 'blue' or 'dark'
function AppWindow({ icon, title, tone = 'grey', className = '', children }) {
  return (
    <section className={`app-window app-${tone} ${className}`}>
      <header className="app-bar">
        <span className="app-icon" aria-hidden="true">{icon}</span>
        <h2>{title}</h2>
        <span className="app-buttons" aria-hidden="true">— ☐ ✕</span>
      </header>
      <div className="app-body">{children}</div>
    </section>
  )
}

// Dashed light blue line between sections.
function Dashes() {
  return <div className="dashes" aria-hidden="true" />
}

// "BizOps 360" word mark next to the new logo.
function NewLogo({ dark = false }) {
  return (
    <div className={dark ? 'bizops-logo bizops-dark' : 'bizops-logo'}>
      <img src={NEW_LOGO} alt="" />
      <span>BizOps <b>360</b></span>
    </div>
  )
}

// Mind map from the brainstorming session, drawn as SVG.
function MindMap() {
  return (
    <svg className="mind-map" viewBox="0 0 700 310" role="img" aria-label="Brainstorming mind map around BizOps360">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M1 1 9 5 1 9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </marker>
      </defs>

      {/* Words */}
      <text x="30" y="30" className="map-heading">Brand</text>
      <text x="30" y="52" className="map-heading">Identity</text>
      <text x="130" y="78">professional</text>
      <text x="130" y="93">but relaxed</text>
      <text x="297" y="150" className="map-centre">BizOps360</text>
      <text x="480" y="138">logo</text>
      <text x="480" y="153">shape</text>
      <text x="78" y="172">primary colours:</text>
      <text x="90" y="195">-simplicity</text>
      <text x="90" y="218">-ease of use</text>
      <text x="90" y="241">-day-to-day</text>
      <text x="410" y="205">circular</text>
      <text x="297" y="235">operations</text>
      <text x="580" y="235">rounded,</text>
      <text x="580" y="250">spaced out</text>
      <text x="580" y="265">elements</text>
      <text x="405" y="275">cyclic</text>
      <text x="413" y="292">(everyday)</text>

      {/* Lines above and below the centre word */}
      <path d="M297 130h70M318 158h50" className="map-line" />

      {/* Arrows */}
      <g className="map-line">
        <path d="M312 128C300 100 280 85 245 80" markerEnd="url(#arrow)" />
        <path d="M410 198C400 180 392 170 388 156" markerEnd="url(#arrow)" />
        <path d="M455 196C480 190 490 175 492 160" markerEnd="url(#arrow)" />
        <path d="M330 220C350 200 362 185 365 160" markerEnd="url(#arrow)" />
        <path d="M318 242C315 262 340 268 398 268" markerEnd="url(#arrow)" />
        <path d="M470 210C480 230 475 250 462 262" markerEnd="url(#arrow)" />
        <path d="M478 200L572 230" markerEnd="url(#arrow)" />
      </g>
    </svg>
  )
}

export default function LogoDesign() {
  return (
    <div className="logo-page">
      <nav className="logo-nav">
        <Link to="/projects" className="logo-back">← projects</Link>
        <Link to="/" className="home-link" aria-label="Home"><HomeIcon color="#2f5a7a" /></Link>
      </nav>

      {/* Page 1: overview and brainstorming */}
      <AppWindow icon="✎" title="Overview">
        <h1 className="logo-title">LOGO REDESIGN</h1>
        <p className="logo-subtitle">For a Customer Relations Management Website</p>
        <Dashes />
        <p>
          The idea was to keep the logo professional but relaxed as this platform would be used daily by all
          employees of the company. We wanted to keep the circularity and the idea of a constantly moving cycle
          that the original logo had, while making it more fresh and polished. The colours were kept simple:
          primary colours to remind of the simple day-to-day operations conducted.
        </p>

        <div className="brainstorm">
          {/* Speech bubble with the three brand colours */}
          <div className="colour-callout" aria-hidden="true">
            <span style={{ background: '#c1281e' }} />
            <span style={{ background: '#f5c000' }} />
            <span style={{ background: '#2e5f7f' }} />
          </div>
          <AppWindow icon="👥" title="Brainstorming" tone="blue">
            <MindMap />
          </AppWindow>
        </div>

        <Dashes />
        <p>This brainstorming, accompanied by feedback and a few revisions led to the following final design.</p>
      </AppWindow>

      {/* Page 2: before and after, and dark mode */}
      <AppWindow icon="✎" title="Overview">
        <div className="before-after">
          <AppWindow icon="⌕" title="Previous Logo" tone="blue" className="before">
            <ProjectImage src={`${FILES}/previous-logo.png`} alt="Previous BizOps 360 logo" />
          </AppWindow>
          <AppWindow icon="⌕" title="Redesign:" tone="blue" className="after">
            <NewLogo />
          </AppWindow>
        </div>

        <Dashes />
        <p>
          We also realized the limitations that the current logo presented, having no dark mode version, which
          hindered on accessibility.
          <br />
          With slight hue modifications, we altered the logo and font to adhere with dark mode.
        </p>

        <AppWindow icon="☾" title="Dark Mode" tone="dark">
          <div className="dark-row">
            <ProjectImage src={`${FILES}/previous-logo-dark.svg`} alt="Previous logo on a dark background" />
            <ul>
              <li>Too bright</li>
              <li>Lacking contrast</li>
            </ul>
          </div>
          <div className="dark-divider" aria-hidden="true" />
          <div className="dark-row">
            <ul>
              <li>Smoother colours</li>
              <li>De-saturated logo</li>
            </ul>
            <NewLogo dark />
          </div>
        </AppWindow>

        <p className="logo-credit">@Mathilde Barbier, January 2026</p>
      </AppWindow>
    </div>
  )
}
