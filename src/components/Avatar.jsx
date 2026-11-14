import { useState } from 'react'

// Mathilde's drawn avatar. Shows a grey placeholder if the image file is missing.
// image: file name inside public/images/
export default function Avatar({ size = 140, image = 'avatar_tongue.png' }) {
  const [missing, setMissing] = useState(false)

  return (
    <div
      className={`avatar ${missing ? 'avatar-ph' : ''}`}
      style={{ width: size, height: size * 1.5 }}
      aria-hidden="true"
    >
      {!missing && <img src={`/images/${image}`} alt="" onError={() => setMissing(true)} />}
    </div>
  )
}
