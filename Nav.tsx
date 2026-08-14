import { useEffect, useState } from 'react'
import Magnetic from './Magnetic'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#area', label: 'Service Area' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[var(--sand-50)]/80 backdrop-blur-xl shadow-[0_1px_0_0_var(--line)]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group cursor-hover">
          <span className="font-display text-2xl tracking-tight text-[var(--pine-900)] group-hover:text-[var(--gold-600)] transition-colors">
            Afriyie Care
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)] hidden sm:inline">
            /afriyiecarellc
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link cursor-hover font-medium text-sm text-[var(--pine-900)] ${
                active === l.href ? 'nav-active' : ''
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic as="a" href="tel:5859572279" strength={0.25} className="hidden md:inline-flex">
          <span className="cursor-hover inline-flex items-center gap-2 rounded-full bg-[var(--pine-800)] text-[var(--sand-50)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--gold-600)] transition-colors duration-300">
            585-957-2279
          </span>
        </Magnetic>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block w-6 h-[1.5px] bg-[var(--pine-900)] transition-transform duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[var(--pine-900)] transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[var(--pine-900)] transition-transform duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 bg-[var(--sand-50)] border-t border-[var(--line)] mt-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-medium text-[var(--pine-900)]">
              {l.label}
            </a>
          ))}
          <a href="tel:5859572279" className="font-medium text-[var(--gold-600)]">585-957-2279</a>
        </div>
      )}
    </header>
  )
}
