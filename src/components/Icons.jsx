// Small reusable icons drawn in SVG.

// House icon used for "back to home" links.
export function HomeIcon({ size = 52, color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3z" fill={color} />
    </svg>
  )
}

// Yellow anchor in a blue circle, used as "back to top" on project pages.
export function Anchor({ size = 68 }) {
  return (
    <svg viewBox="0 0 68 68" width={size} height={size} aria-hidden="true">
      <circle cx="34" cy="34" r="34" fill="#9bc9d3" />
      <g fill="none" stroke="#f5d24b" strokeWidth="5" strokeLinecap="round">
        <circle cx="34" cy="15" r="4" />
        <path d="M34 19v34M26 27h16M18 38c0 9 7 15 16 15s16-6 16-15" />
      </g>
    </svg>
  )
}

// Paper plane icon for the send button on the contact page.
export function SendIcon({ size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M3 11.5 21 3l-6.5 18-3-7.5z" fill="#fff" />
    </svg>
  )
}
