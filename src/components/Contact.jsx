import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Section, Card } from './Common'
import { contactLinks } from '../data'
import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'
import emailLogo from '../assets/email.svg'

const {
    VITE_EMAILJS_SERVICE_ID: SID,
    VITE_EMAILJS_TEMPLATE_ID: TID,
    VITE_EMAILJS_PUBLIC_KEY: PK
} = import.meta.env

const icons = {
    Email: emailLogo,
    GitHub: githubLogo,
    LinkedIn: linkedinLogo,
}

export default function Contact() {
    const formRef = useRef()
    const [status, setStatus] = useState('idle')

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        // send form w email.js
        emailjs.sendForm(SID, TID, formRef.current, PK)
            .then(() => {
                setStatus('success');
                formRef.current.reset()
            })
            .catch(() => setStatus('error'))
    }

    return (
        <Section title="Contact">
            <Card className="centered">
                <p>Did you like what you saw? Let's connect!</p>

                <form ref={formRef} onSubmit={handleSubmit} className="form">
                    <div className="row">
                        {/* name field */}
                        <div className="field">
                            <label htmlFor="from_name">Name</label>
                            <input id="from_name" name="from_name" type="text" required placeholder="Your name" />
                        </div>

                        {/* email field */}
                        <div className="field">
                            <label htmlFor="reply_to">Email</label>
                            <input id="reply_to" name="reply_to" type="email" required placeholder="your@email.com" />
                        </div>
                    </div>

                    {/* subject field */}
                    <div className="field">
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" name="subject" type="text" required placeholder="Add a subject" />
                    </div>

                    {/* message field */}
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required placeholder="Write your message" />
                    </div>

                    {/* render my other links (github, linkedin etc) */}
                    <div className="actions">
                        <div className="links">
                            {contactLinks.map(({ href, label }) => {
                                const isExternal = !href.startsWith('mailto');

                                return (
                                    <a
                                        key={label}
                                        href={href}
                                        className="icon-link"
                                        target={isExternal ? '_blank' : undefined}
                                        rel={isExternal ? 'noopener noreferrer' : undefined}
                                        aria-label={label}
                                        title={label}
                                    >
                                        <img src={icons[label]} alt={label} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* submit form button */}
                        <button type="submit" className="btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending…' : 'Send Message'}
                        </button>
                    </div>

                    {/* form feedback message */}
                    {status === 'success' && (
                        <p className="feedback ok">Message sent! I'll get back to you soon.</p>
                    )}
                    {status === 'error' && (
                        <p className="feedback err">Something went wrong. Please try again.</p>
                    )}
                </form>
            </Card>
        </Section>
    )
}