import { useState } from 'react'
import hugLaugh from 'data-url:../assets/images/hug-laugh.jpg'
import Magnetic from './Magnetic'
import Spotlight from './Spotlight'

// Replace this with your real Formspree form ID (formspree.io/f/YOUR_ID)
const FORMSPREE_ID = 'myegpdpl'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

const SERVICE_OPTIONS = ['Home & Companion Care', 'Home / Office Cleaning', 'Both']

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [service, setService] = useState(SERVICE_OPTIONS[0])
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
        setService(SERVICE_OPTIONS[0])
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[var(--gold-500)]/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div className="reveal">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gold-600)]">
              Get in touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--pine-900)] mt-3 mb-6">
              Let&rsquo;s talk about your family
            </h2>
            <p className="text-[var(--ink-soft)] leading-relaxed max-w-md mb-10">
              Reach out for a free consultation. We typically respond within
              one business day.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              <a href="tel:5859572279" className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full bg-[var(--pine-800)] flex items-center justify-center shrink-0 group-hover:bg-[var(--gold-600)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 2h2.5l1 3.5-1.75 1.25a9 9 0 0 0 4.5 4.5L11.5 9.5 15 10.5V13a2 2 0 0 1-2 2C7.5 15 3 10.5 3 4a2 2 0 0 1 1-2z" stroke="var(--sand-50)" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)]">Phone</span>
                  <span className="font-display text-lg text-[var(--pine-900)] group-hover:text-[var(--gold-600)] transition-colors">585-957-2279</span>
                </span>
              </a>

              <a href="mailto:afriyiecarellc@gmail.com" className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full bg-[var(--pine-800)] flex items-center justify-center shrink-0 group-hover:bg-[var(--gold-600)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="var(--sand-50)" strokeWidth="1.3" />
                    <path d="M2.5 5l6.5 5 6.5-5" stroke="var(--sand-50)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)]">Email</span>
                  <span className="font-display text-lg text-[var(--pine-900)] group-hover:text-[var(--gold-600)] transition-colors break-all">afriyiecarellc@gmail.com</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-[var(--pine-800)] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 16s6-5.2 6-9.4A6 6 0 0 0 3 6.6C3 10.8 9 16 9 16z" stroke="var(--sand-50)" strokeWidth="1.3" strokeLinejoin="round" />
                    <circle cx="9" cy="6.6" r="2" stroke="var(--sand-50)" strokeWidth="1.3" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)]">Location</span>
                  <span className="font-display text-lg text-[var(--pine-900)]">Rochester, New York</span>
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/10] max-w-md">
              <img src={hugLaugh} alt="Caregiver and client sharing a laugh" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="reveal reveal-delay-2 bg-[var(--cream)] border border-[var(--line)] rounded-[2rem] p-8 md:p-10">
            <Spotlight className="rounded-[2rem]">
            {status === 'sent' ? (
              <div className="py-16 text-center">
                <p className="font-display text-2xl text-[var(--pine-900)] mb-2">Thank you!</p>
                <p className="text-[var(--ink-soft)] text-sm">We&rsquo;ll be in touch shortly. For anything urgent, call 585-957-2279.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)] mb-2">Name</label>
                  <input required name="name" type="text" placeholder="Your full name" className="w-full bg-transparent border-b border-[var(--line)] focus:border-[var(--gold-600)] outline-none py-2.5 transition-colors placeholder:text-[var(--ink-soft)]/50" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)] mb-2">Phone</label>
                    <input required name="phone" type="tel" placeholder="(585) 000-0000" className="w-full bg-transparent border-b border-[var(--line)] focus:border-[var(--gold-600)] outline-none py-2.5 transition-colors placeholder:text-[var(--ink-soft)]/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)] mb-2">Email</label>
                    <input name="email" type="email" placeholder="you@email.com" className="w-full bg-transparent border-b border-[var(--line)] focus:border-[var(--gold-600)] outline-none py-2.5 transition-colors placeholder:text-[var(--ink-soft)]/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)] mb-3">Service needed</label>
                  <input type="hidden" name="service" value={service} />
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setService(opt)}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                          service === opt
                            ? 'bg-[var(--pine-800)] text-[var(--sand-50)] border-[var(--pine-800)]'
                            : 'border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--gold-600)]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)] mb-2">Message</label>
                  <textarea name="message" rows={3} placeholder="Tell us a bit about what you need..." className="w-full bg-transparent border-b border-[var(--line)] focus:border-[var(--gold-600)] outline-none py-2.5 transition-colors resize-none placeholder:text-[var(--ink-soft)]/50" />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-[var(--clay-500)]">
                    Something went wrong sending your request. Please call 585-957-2279 or email us directly.
                  </p>
                )}

                <Magnetic as="button" type="submit" strength={0.2} className="mt-3 self-start">
                  <span className={`cursor-hover btn-clay-shadow inline-flex items-center justify-center gap-2 rounded-full bg-[var(--pine-800)] text-[var(--sand-50)] px-7 py-3.5 font-medium ${status === 'sending' ? 'opacity-60 pointer-events-none' : ''}`}>
                    {status === 'sending' ? 'Sending…' : 'Send request'}
                  </span>
                </Magnetic>
              </form>
            )}
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  )
}
