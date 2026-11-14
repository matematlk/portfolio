import { useState } from 'react'

// Box where visitors can type to try out the Subno-type font.
// The font itself is loaded with @font-face in index.css.
export default function FontTester() {
  const [size, setSize] = useState(48)

  return (
    <div className="font-tester">
      <h2>FONT TESTER</h2>
      <textarea
        defaultValue="Ab Cd Ef Gg Hh"
        style={{ fontSize: `${size}px` }}
        aria-label="Type to try the Subno-type font"
        spellCheck="false"
      />
      <label>
        size
        <input type="range" min="16" max="120" value={size} onChange={(e) => setSize(Number(e.target.value))} />
        {size}px
      </label>
    </div>
  )
}
