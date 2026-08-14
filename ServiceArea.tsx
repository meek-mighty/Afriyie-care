const AREAS = [
  'Rochester',
  'Brighton',
  'Irondequoit',
  'Greece',
  'Pittsford',
  'Henrietta',
  'Webster',
  'Penfield',
]

export default function ServiceArea() {
  return (
    <section id="area" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal max-w-xl mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--gold-600)]">
            Where we work
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--pine-900)] mt-3">
            Proudly serving Rochester, NY
          </h2>
          <p className="text-[var(--ink-soft)] leading-relaxed mt-5">
            Afriyie Care is based in Rochester and serves families and
            businesses throughout the greater Rochester area.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
          <div className="reveal reveal-delay-1 rounded-[2rem] overflow-hidden border border-[var(--line)] aspect-[4/3] md:aspect-auto md:h-[420px]">
            <iframe
              title="Afriyie Care service area — Rochester, New York"
              src="https://www.google.com/maps?q=Rochester,New+York&output=embed"
              className="w-full h-full grayscale-[15%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="reveal reveal-delay-2 bg-[var(--pine-800)] text-[var(--sand-50)] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl mb-6">Neighborhoods we cover</h3>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {AREAS.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-[var(--sand-100)]/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-500)]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-[var(--sand-100)]/60 mt-10 font-mono">
              Don&rsquo;t see your neighborhood? Call us &mdash; we likely still cover it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
