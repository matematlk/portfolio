// Endless scrolling banner. The list is shown twice so the loop has no gap.
export default function Marquee({ items }) {
  const line = items.join(' • ') + ' • '

  return (
    <div className="marquee" aria-label={`Skills: ${items.join(', ')}`}>
      <div className="marquee-track" aria-hidden="true">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  )
}
