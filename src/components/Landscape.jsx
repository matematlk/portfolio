import { cloudA, cloudB, hillBack, hillBackShade, hillFront, blades } from '../data/homeArt.js'

// Full screen sky, hills and clouds behind every page (from the Figma export, 1440 x 953).
// Drawn as two layers: sky and hills, then clouds.
// The hills use "slice" so they always cover the screen. They are pinned to the top,
// so when the tab gets shorter the hills slide down and off the bottom edge.
// The clouds use "meet" so they shrink to stay fully on screen at any size.
export default function Landscape() {
  // Hovering a grass blade makes it wiggle once.
  const startWiggle = (e) => e.target.classList.add('wiggle')
  const stopWiggle = (e) => e.target.classList.remove('wiggle')

  return (
    <div className="landscape" aria-hidden="true">
      {/* Layer 1: sky and hills */}
      <svg viewBox="0 0 1440 953" preserveAspectRatio="xMidYMin slice">
        <rect x="-2000" width="5440" height="953" fill="#C0E6EE" />
        <path d={hillBack} fill="#83AD65" />
        <path d={hillBackShade} fill="#769C5A" />
        <g className="hills">
          <path d={hillFront} fill="#98CB74" />
          {blades.map(([x, y], i) => (
            <rect
              key={i}
              className="blade"
              x={x}
              y={y}
              width="18"
              height="47"
              rx="9"
              fill="#83AD65"
              onMouseOver={startWiggle}
              onAnimationEnd={stopWiggle}
            />
          ))}
        </g>
      </svg>

      {/* Layer 2: clouds, on top so the hills never hide them. Only covers the top of the artboard.
          Each cloud drifts back and forth between --from and --to without leaving the screen.
          --dur is how long one trip takes */}
      <svg className="clouds" viewBox="0 80 1440 340" preserveAspectRatio="xMidYMin meet">
        <path className="cloud" d={cloudB} fill="#fff" style={{ '--from': '-720px', '--to': '98px', '--dur': '45s', '--delay': '-10s' }} />
        <path className="cloud" d={cloudA} fill="#fff" style={{ '--from': '-36px', '--to': '1004px', '--dur': '60s', '--delay': '-21s' }} />
      </svg>
    </div>
  )
}
