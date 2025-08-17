import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    emailjs.sendForm(
      'service_lmwyl3k',     
      'template_rm2sz4t',    
      formRef.current,
      '_ciKLGu7QrxA73J4J'      
    )
    .then(() => setStatus('sent'))
    .catch(() => setStatus('error'))
  }

  return (
  <section className="grid contact-grid">
  <form
    ref={formRef}
    onSubmit={onSubmit}
    className="card"
    style={{ display: 'grid', gap: 12 }}
  >
    <h2>Contact</h2>
    <input
      name="name"
      placeholder="Your name"
      className="card"
      style={{ padding: 10 }}
      required
    />
    <input
      name="email"
      type="email"
      placeholder="Your email"
      className="card"
      style={{ padding: 10 }}
      required
    />
    <textarea
      name="message"
      placeholder="Message"
      rows={5}
      className="card"
      style={{ padding: 10 }}
      required
    />
    <button className="btn accent" disabled={status === 'sending'}>
      {status === 'sending' ? 'Sending…' : 'Send'}
    </button>
    {status === 'sent' && (
      <small style={{ color: 'green' }}>Message sent successfully ✅</small>
    )}
    {status === 'error' && (
      <small style={{ color: 'red' }}>Something went wrong ❌</small>
    )}
  </form>

  <div
    className="card"
    style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 20 }}
  >
    <h3>Contact Info</h3>
    <p>📞 <strong>0 110 033 1323</strong></p>
    <a href="https://github.com/Isco102345" target="_blank">💻 GitHub</a>
    <a href="mailto:miseesmall30@gmail.com" target="_blank">📧 Gmail</a>
    <a href="https://www.facebook.com/somaalashek.somaartest" target="_blank">📘 Facebook</a>
    <a href="https://wa.me/201100331323" target="_blank">💬 WhatsApp</a>
    <a href="https://www.linkedin.com/in/eslam-ashraf-4611202b0" target="_blank">🔗 LinkedIn</a>
  </div>
</section>

  )
}
