import { Link } from 'react-router-dom'
import { title, bubble, bubbleText, labelProjects, labelAbout, labelContact } from '../data/homeArt.js'

// Home page: title, avatar, speech bubble and the three menu tiles.

// Areas of the Figma artboard (1440 x 953) that each group of art was cut from.
// Each group is pinned to its own corner of the screen in index.css.
const BOTTOM = { x: 22, y: 380, w: 903, h: 425 } // avatar + speech bubble
const NAV = { x: 1153, y: 85, w: 160, h: 699 } // the three tiles

// Places an item inside its group, using percentages so it scales with the group.
const inside = (group, x, y, w, h) => ({
  left: `${((x - group.x) / group.w) * 100}%`,
  top: `${((y - group.y) / group.h) * 100}%`,
  width: `${(w / group.w) * 100}%`,
  height: `${(h / group.h) * 100}%`,
})

// The three menu tiles. y = top edge on the artboard, icon = SVG shapes from Figma.
const tiles = [
  {
    to: '/projects', name: 'projects', y: 85, bg: '#F5A3B5', rx: 15, label: labelProjects,
    icon: (
      <>
        <path d="M1188 124.237C1188 121.345 1190.34 119 1193.24 119H1273.54C1276.43 119 1278.78 121.345 1278.78 124.237V167.881C1278.78 170.774 1276.43 173.119 1273.54 173.119H1193.24C1190.34 173.119 1188 170.774 1188 167.881V124.237Z" fill="#D65C77" />
        <path d="M1187.14 186.008C1187.71 183.657 1189.81 182 1192.23 182H1274.77C1277.19 182 1279.29 183.657 1279.86 186.008L1283.44 200.847C1284.23 204.142 1281.74 207.314 1278.35 207.314H1188.65C1185.26 207.314 1182.77 204.142 1183.56 200.847L1187.14 186.008Z" fill="#D65C77" />
      </>
    ),
  },
  {
    to: '/about', name: 'about', y: 337, bg: '#FFF09C', rx: 15, label: labelAbout,
    icon: (
      <>
        <path d="M1260 389.5C1260 404.688 1247.69 417 1232.5 417C1217.31 417 1205 404.688 1205 389.5C1205 374.312 1217.31 362 1232.5 362C1247.69 362 1260 374.312 1260 389.5Z" fill="#FFB848" />
        <path d="M1233.14 425C1259.71 425 1281.83 443.768 1286.63 468.597C1287.08 470.931 1285.21 473 1282.84 473H1183.45C1181.07 473 1179.21 470.931 1179.66 468.597C1184.46 443.768 1206.58 425 1233.14 425Z" fill="#FFB848" />
      </>
    ),
  },
  {
    to: '/contact', name: 'contact', y: 589, bg: '#9BC9D3', rx: 18, label: labelContact,
    icon: (
      <path d="M1235.5 628C1264.5 628 1288.01 644.432 1288.01 664.701C1288.01 684.971 1264.5 701.403 1235.5 701.403C1232.05 701.403 1228.66 701.166 1225.39 700.72C1214.61 710.259 1205.58 713.199 1192.22 715.543C1191.17 715.727 1190.56 714.336 1191.35 713.622C1195.87 709.565 1198.96 704.092 1198.61 690.813C1188.97 684.159 1183 674.919 1183 664.701C1183 644.432 1206.51 628 1235.5 628Z" fill="#678F9B" />
    ),
  },
]

export default function Home() {
  return (
    <section className="home">
      {/* Soft offset shadow used by the tile icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="tile-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-9" dy="5" stdDeviation="0" floodColor="#000" floodOpacity="0.1" />
        </filter>
      </svg>

      {/* Title: pinned to the top left */}
      <h1 className="home-title">
        <span className="sr-only">mathilde's portfolio</span>
        <svg viewBox="75 54 409 206" aria-hidden="true"><path d={title} fill="#314B53" /></svg>
      </h1>

      {/* Avatar and speech bubble: pinned to the bottom left */}
      <div className="home-bottom">
        <img className="art art-avatar" style={inside(BOTTOM, 22, 380, 275, 377)} src="/images/avatar.png" alt="" />

        <p className="art art-bubble" style={inside(BOTTOM, 228, 632, 697, 173)}>
          <span className="sr-only">welcome in, please do look around!</span>
          <svg viewBox="228 632 697 173" aria-hidden="true">
            <path d={bubble} fill="#fff" />
            <path d={bubbleText} fill="#D65C77" />
          </svg>
        </p>
      </div>

      {/* Menu tiles: pinned to the right */}
      <nav className="home-nav" aria-label="Main">
        {tiles.map((t) => (
          <Link key={t.to} to={t.to} className="art art-tile" style={inside(NAV, 1153, t.y, 160, 195)} aria-label={t.name}>
            <svg viewBox={`1153 ${t.y} 160 195`} aria-hidden="true">
              <rect x="1153" y={t.y} width="160" height="160" rx={t.rx} fill={t.bg} />
              <g filter="url(#tile-shadow)">{t.icon}</g>
              <path d={t.label} fill="#000" />
            </svg>
          </Link>
        ))}
      </nav>
    </section>
  )
}
