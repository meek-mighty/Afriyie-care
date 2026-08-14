import caneHands from 'data-url:../assets/images/cane-hands.jpg'

const QUOTES = [
  {
    quote:
      'Our caregiver treats my mother like family, not a client. That is worth more than I can put into words.',
    name: 'A daughter in Rochester',
  },
  {
    quote:
      'The cleaning team is thorough and always on time. Our office has never looked better.',
    name: 'A local business owner',
  },
  {
    quote:
      'We changed the plan twice as Dad\u2019s needs grew, and the team adjusted without any fuss.',
    name: 'A family we support',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-[var(--sand-100)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-14 items-center">
          <div className="reveal relative">
            <img
              src={caneHands}
              alt="Caregiver supporting a client"
              className="halo-frame w-56 h-56 md:w-72 md:h-72 object-cover mx-auto"
            />
            <svg viewBox="0 0 300 300" className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 mx-auto orbit-ring">
              <circle cx="150" cy="150" r="142" fill="none" stroke="var(--gold-500)" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="1 9" strokeLinecap="round" />
            </svg>
          </div>

          <div className="grid gap-8">
            {QUOTES.map((q, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} lift-card border-l-2 border-[var(--gold-500)]/50 pl-6 py-1`}>
                <p className="font-display text-xl md:text-2xl text-[var(--pine-900)] leading-snug">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-soft)] mt-3">
                  {q.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
