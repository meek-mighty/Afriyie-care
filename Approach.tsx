import Spotlight from './Spotlight'

const STEPS = [
  {
    n: '01',
    title: 'We listen first',
    desc: 'A free in-home consultation to understand the person, the space, and what "good care" actually looks like for your family.',
  },
  {
    n: '02',
    title: 'We build your plan',
    desc: 'A caregiving or cleaning schedule matched to your needs, budget, and the level of support you\u2019re comfortable with.',
  },
  {
    n: '03',
    title: 'We match your team',
    desc: 'You meet your caregiver or cleaning team before day one \u2014 continuity and trust matter more than convenience.',
  },
  {
    n: '04',
    title: 'We stay in touch',
    desc: 'Ongoing check-ins with your family to adjust the plan as needs change, no long-term contracts required.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="relative py-28 md:py-36 bg-[var(--pine-900)] text-[var(--sand-50)] overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--pine-800)] blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3 blob-drift-2" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.08]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="reveal max-w-xl mb-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gold-500)]">
            How it works
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">
            Getting started is simple
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-x-8 gap-y-14">
          {STEPS.map((s, i) => (
            <Spotlight
              key={s.n}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative rounded-2xl p-6 -m-6 border border-white/0 hover:border-white/10 transition-colors duration-500`}
            >
              <span className="font-display text-6xl text-[var(--sand-50)]/15 relative z-[1]">{s.n}</span>
              <h3 className="font-display text-xl mt-3 mb-2.5 relative z-[1]">{s.title}</h3>
              <p className="text-[var(--sand-100)]/70 text-sm leading-relaxed relative z-[1]">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <svg className="hidden md:block absolute top-6 -right-6 w-8 h-8 z-[1]" viewBox="0 0 32 32" fill="none">
                  <path d="M4 16H26M26 16L19 9M26 16L19 23" stroke="var(--gold-500)" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  )
}
