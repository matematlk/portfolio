export default function CustomButton({ block }) {
    if (!block?.src) return null

    const external = /^https?:\/\//.test(block.src)
    return (
        <a
            className="custom-button"
            href={block.src}
            {...(external && { target: '_blank', rel: 'noreferrer' })}
        >
            {block.text || 'open'}
        </a>
    )
}