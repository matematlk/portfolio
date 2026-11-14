import WindowFrame from '../components/WindowFrame.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Marquee from '../components/Marquee.jsx'
import ProjectImage from '../components/ProjectImage.jsx'
import { site } from '../data/site.js'

// Photo of Mathilde inside a phone frame. Add the photo as public/images/me.jpg.
function Photo() {
  return (
    <div className="phone">
      <div className="phone-screen">
        <ProjectImage src="/images/me.JPEG" alt="Mathilde" fallback={<span>PHOTO</span>} />
      </div>
    </div>
  )
}

// About page: speech bubbles on both sides of the photo, skills banner below.
export default function About() {
  return (
    <WindowFrame>
      <PageHeader title="about" />
      <div className="about-grid">
        <div className="about-col">
          <p className="bubble bubble-yellow">
            I have been known to work with many-a languages and frameworks: C++, INUX, JS, C#, ASP.NET, SQL to name a few, and I would love to learn many new ones!
          </p>
          <p className="bubble bubble-yellow bubble-indent">
            If any of this sounds interesting, send me a pigeon or email me at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> if that’s easier
          </p>
        </div>

        <Photo />

        <div className="about-col">
          <p className="bubble bubble-yellow">Hello, I’m Mathilde! I’m an aspiring web developer and UI/UX designer studying CS at Waterloo</p>
          <p className="bubble bubble-yellow">I love dabbling in everything at once: design, prototypes, front-end, back-end; you name it, I’ll do it</p>
          <img className="bird" src="/images/birdletter.svg" alt="" />
        </div>
      </div>
      <Marquee items={site.skills} />
    </WindowFrame>
  )
}
