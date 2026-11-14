import { useState } from 'react'

// An image that shows a placeholder (or `fallback`) when the file is missing,
// so you can see which file still needs to be added. `style` is passed to both.
export default function ProjectImage({ src, alt = '', className = '', style, fallback }) {
  const [missing, setMissing] = useState(!src)

  if (missing) {
    if (fallback !== undefined) return fallback
    return <div className={`image-ph ${className}`} style={style}>[add public{src}]</div>
  }

  return <img id="project-image" className={className} style={style} src={src} alt={alt} onError={() => setMissing(true)} />
}


  const img = document.getElementById("project-image");

  function enlargeImg() {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
}

  // Function to reset image size
  function resetImg() {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}
if (img) {
  img.addEventListener("click", enlargeImg);
  img.addEventListener("focusout", resetImg);
}

// onclick of image: enlarge 
// onfocusout of image: reset