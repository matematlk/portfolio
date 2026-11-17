import WindowFrame from '../components/WindowFrame.jsx'
import PageHeader from '../components/PageHeader.jsx'

// The résumé file lives in public/resume/. To update it, replace the PDF
// (and preview.png, a picture of the page shown on phones) with the new version.
const pdf = '/resume/mathilde-barbier-resume.pdf'
const preview = '/resume/preview.png'

// Résumé page: the PDF shown inside the portfolio window, with buttons to download it
// or open it on its own. Phones can't show a PDF inside a page, so they get a picture of it instead.
export default function Resume() {
    return (
        <WindowFrame>
            <PageHeader title="résumé" />

            <div className="resume-actions">
                <a className="custom-button" href={pdf} download="Mathilde-Barbier-Resume.pdf">download</a>
                <a className="custom-button custom-button-outline" href={pdf} target="_blank" rel="noreferrer">open in a new tab</a>
            </div>

            <iframe className="resume-pdf" src={`${pdf}#view=FitH`} title="Mathilde Barbier's résumé" />

            <a className="resume-preview" href={pdf} target="_blank" rel="noreferrer">
                <img src={preview} alt="Mathilde Barbier's résumé. Tap to open the PDF." />
            </a>
        </WindowFrame>
    )
}
