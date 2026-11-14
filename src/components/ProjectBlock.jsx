import ProjectImage from './ProjectImage.jsx'
import SubmarineWave from './SubmarineWave.jsx'
import FontTester from './FontTester.jsx'
import PopupEmbed from './PopupEmbed.jsx'
import CustomButton from './CustomButton.jsx'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Draws one block of a project page. Block types are listed in src/data/projects.js.
export default function ProjectBlock({ block }) {
  // Paragraph, optionally with a big first letter
  if (block.type === 'text') {
    return <p className={block.dropCap ? 'block-text drop-cap' : 'block-text'}>{block.text}</p>
  }

  // Image, full width unless a width is given (like '50%' or '320px')
  if (block.type === 'image') {
    const style = block.width ? { width: block.width, maxWidth: '100%', display: 'block', margin: '0 auto' } : undefined
    return <ProjectImage className="block-image" src={block.src} alt={block.alt} style={style} />
  }

  // Image beside a paragraph
  if (block.type === 'imageText') {
    return (
        <div className={`block-image-text image-${block.imageSide || 'left'}`}>
          <ProjectImage src={block.src} alt={block.alt} />
          <p className="block-text">{block.text}</p>
        </div>
    )
  }

  // Wavy divider, with a submarine that moves on scroll if one is given
  if (block.type === 'wave') {
    if (block.submarine) return <SubmarineWave image={block.submarine} />
    return <div className="block-wave" />
  }

  // Box to try out the Subno-type font
  if (block.type === 'fontTester') {
    return <FontTester />
  }

  // PDF shown in the browser's own viewer
  if (block.type === 'pdf') {
    return (
        <div className="block-pdf">
          <iframe src={block.src} title={block.title} />
          <a href={block.src} target="_blank" rel="noreferrer">open the PDF in a new tab</a>
        </div>
    )
  }

  // Video player, or a placeholder until the video is added
  if (block.type === 'video') {
    if (!block.src) return <div className="image-ph block-video">[video coming soon]</div>
    return <video className="block-video" src={block.src} controls muted loop playsInline />
  }

  // Another web page, like an HTML animation
  if (block.type === 'embed') {
    const style = {}
    if (block.aspectRatio) Object.assign(style, { width: '100%', aspectRatio: block.aspectRatio, height: 'auto' })
    if (block.width) Object.assign(style, { width: block.width, maxWidth: '100%', display: 'block', margin: '0 auto' })
    return <iframe className="block-embed" src={block.src} title={block.title} style={style} />
  }

  // Preview picture with a button that opens another web page in a big popup
  if (block.type === 'popup') {
    return <PopupEmbed block={block} />
  }

  // Button that opens whatever link is given to it
  if (block.type === 'button') {
    return <CustomButton block={block} />
  }

  return null
}
