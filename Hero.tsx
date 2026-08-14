import { useRef } from 'react'
import heroTablet from 'data-url:../assets/images/hero-tablet.jpg'
import caneHands from 'data-url:../assets/images/cane-hands.jpg'
import hugLaugh from 'data-url:../assets/images/hug-laugh.jpg'
import cleanMop from 'data-url:../assets/images/clean-mop.jpg'
import Magnetic from './Magnetic'
import CountUp from './CountUp'

export default function Hero() {
  const collageRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = collageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.querySelectorAll<HTMLElement>('[data-depth]').forEach((child) => {
      const depth = parseFloat(child.dataset.depth || '0')
      child.style.transform = `translate(${px * depth}px, ${py * depth}px)`
    })
  }

  const onMouseLeave = () => {
    const el = collageRef.current
    if (!el) return
    el.querySelectorAll<HTMLElement>('[data-depth]').forEach((child) => {
      child.style.transform = 'translate(0px, 0px)'
    })
  }

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* ambient drifting mesh */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[var(--sand-200)]/70 blur-3xl blob-drift-1" />
      <div className="pointer-events-none absolute top-40 right-[-120px] w-[360px] h-[360px] rounded-full bg-[var(--gold-500)]/10 blur-3xl blob-drift-2" />
      <div className="pointer-events-none absolute inset-0 dot-grid" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div className="reveal relative z-10">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-2 h-2 rounded-full bg-[var(--gold-500)] pulse-dot" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              Rochester, New York &middot; Caregiving &amp; Home Cleaning
            </span>
          </div>

          <h1 className="font-display text-[var(--pine-900)] text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl font-medium tracking-tight">
            Care that feels
            <br />
            like <span className="italic text-[var(--gold-600)]">family.</span>
          </h1>

          <p className="mt-7 max-w-md text-[var(--ink-soft)] text-lg leading-relaxed">
            Afriyie Care brings compassionate in-home caregiving and meticulous
            home cleaning to Rochester families &mdash; two kinds of care,
            one gentle standard.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic as="a" href="#contact" strength={0.3}>
              <span className="cursor-hover btn-clay-shadow inline-flex items-center gap-2 rounded-full bg-[var(--pine-800)] text-[var(--sand-50)] px-7 py-3.5 font-medium">
                Book a free consultation
              </span>
            </Magnetic>
            <a
              href="tel:5859572279"
              className="cursor-hover sweep-underline inline-flex items-center gap-2 font-medium text-[var(--pine-900)] pb-0.5"
            >
              585-957-2279
            </a>
          </div>

          <div className="mt-14 flex items-center gap-10">
            <div>
              <p className="font-display text-3xl text-[var(--pine-900)]">
                <CountUp to={100} suffix="%" />
              </p>
              <p className="text-xs text-[var(--ink-soft)] mt-1 max-w-[10rem]">Locally owned &amp; operated in Rochester</p>
            </div>
            <div className="w-px h-10 bg-[var(--line)]" />
            <div>
              <p className="font-display text-3xl text-[var(--pine-900)]">
                <CountUp to={2} />
              </p>
              <p className="text-xs text-[var(--ink-soft)] mt-1 max-w-[10rem]">Services, one trusted team</p>
            </div>
          </div>
        </div>

        {/* orbit collage — signature element, now with mouse parallax */}
        <div
          ref={collageRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative reveal reveal-delay-2 mx-auto w-full max-w-[420px] aspect-square"
        >
          <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full orbit-ring">
            <circle cx="200" cy="200" r="188" fill="none" stroke="var(--pine-800)" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="2 10" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full orbit-ring-rev">
            <circle cx="200" cy="200" r="152" fill="none" stroke="var(--gold-500)" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 8" strokeLinecap="round" />
          </svg>

          <img
            src={heroTablet}
            data-depth="14"
            alt="Caregiver reviewing a care plan with a client"
            className="halo-frame absolute top-0 left-1/2 -translate-x-1/2 w-[58%] aspect-square object-cover float transition-transform duration-300 ease-out"
          />
          <img
            src={caneHands}
            data-depth="24"
            alt="Caregiver helping a client stand"
            className="halo-frame absolute bottom-4 left-0 w-[42%] aspect-square object-cover float-slow float-delay transition-transform duration-300 ease-out"
          />
          <img
            src={hugLaugh}
            data-depth="20"
            alt="Caregiver and client sharing a laugh"
            className="halo-frame absolute bottom-14 right-0 w-[38%] aspect-square object-cover float transition-transform duration-300 ease-out"
          />
          <img
            src={cleanMop}
            data-depth="30"
            alt="Home cleaning specialist mopping a living room"
            className="halo-frame absolute top-8 right-1 w-[30%] aspect-square object-cover float-slow transition-transform duration-300 ease-out"
          />
        </div>
      </div>
    </section>
  )
}
