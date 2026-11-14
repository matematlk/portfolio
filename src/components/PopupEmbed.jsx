import {useEffect, useRef, useState} from "react";
import ProjectImage from "./ProjectImage.jsx";

export default function PopupEmbed({ block }) {
    const dialog = useRef(null)
    const [open, setOpen] = useState(false)

    const show = () => {
        setOpen(true)
        dialog.current.showModal()
    }
    const close = () => dialog.current.close()

    // Esc pressed inside the popup's page doesn't reach this page, so the
    // page sends a 'popup:close' message instead (see the walkthrough's index.html)
    useEffect(() => {
        if (!open) return
        const onMessage = (e) => { if (e.data === 'popup:close') close() }
        window.addEventListener('message', onMessage)
        return () => window.removeEventListener('message', onMessage)
    }, [open])

    return (
        <div className="block-popup">
            <button type="button" className="popup-preview" onClick={show}>
                <ProjectImage src={block.preview} alt="" />
                <span className="popup-open">{block.buttonText || 'open'}</span>
            </button>

            <dialog
                ref={dialog}
                className="popup-dialog"
                aria-label={block.title}
                onClose={() => setOpen(false)}
                // Clicking the dark background around the popup closes it
                onClick={(e) => { if (e.target === dialog.current) close() }}
            >
                <button type="button" className="popup-close" onClick={close} aria-label="Close">×</button>
                {open && <iframe src={block.src} title={block.title} />}
            </dialog>
        </div>
    )
}