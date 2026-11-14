import { useEffect, useRef, useState } from 'react'

// Wavy divider with a submarine that sails across it as you scroll down the page.
export default function SubmarineWave({ image }) {
  const wave = useRef(null)
  // How far along the submarine is: 0 = left edge, 1 = right edge
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress goes from 0 when the wave enters the bottom of the screen
    // to 1 when it reaches the top.
    const update = () => {
      const top = wave.current.getBoundingClientRect().top
      const p = 1 - top / window.innerHeight
      setProgress(Math.min(1, Math.max(0, p)))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // --progress is used by .submarine in index.css to place it along the wave.
  return (
    <div className="block-wave has-submarine" ref={wave}>
      <img className="submarine" src={image} alt="" style={{ '--progress': progress }} />
    </div>
  )
}
