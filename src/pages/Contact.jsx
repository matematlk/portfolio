import { Link } from 'react-router-dom'
import WindowFrame from '../components/WindowFrame.jsx'
import Avatar from '../components/Avatar.jsx'
import { HomeIcon, SendIcon } from '../components/Icons.jsx'
import { site } from '../data/site.js'

// Chat messages, shown in order. me: true puts the bubble on the right in pink.
const messages = [
  { me: true, body: 'So how do I contact you?' },
  { body: <>Here is my <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn!</a></> },
  { body: <>Otherwise, my email is <a href={`mailto:${site.email}`}>{site.email}</a></> }, 
    { body: <>And if you need it, here is my <Link to="/resume">résumé</Link></> },
  { body: "Don't hesitate to contact me!" },
]

// Contact page styled like a chat conversation.
export default function Contact() {
  return (
    <WindowFrame className="window-chat">
      <header className="chat-header">
        <div className="chat-avatar"><Avatar size={80} /></div>
        <h1>{site.name}</h1>
        <Link to="/" className="home-link" aria-label="Home"><HomeIcon color="#f3eedc" /></Link>
      </header>
      <ol className="chat">
        {messages.map((m, i) => (
          // --delay makes each message fade in a little after the one before
          <li key={i} className={`msg ${m.me ? 'msg-me' : ''}`} style={{ '--delay': `${0.5 + i * 1.3}s` }}>
            {m.body}
          </li>
        ))}
      </ol>

      {/* Message box, just for looks (not a real input) */}
      <div className="chat-input" aria-hidden="true">
        <div className="chat-field">Type a message…</div>
        <div className="chat-send"><SendIcon /></div>
      </div>
    </WindowFrame>
  )
}
