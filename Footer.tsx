export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[var(--pine-800)] via-[var(--pine-700)] to-[#274436] text-[var(--sand-100)]/80 py-6">
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-[var(--gold-500)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 left-1/4 w-40 h-40 rounded-full bg-[var(--sand-50)]/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg text-[var(--sand-50)]">Afriyie Care</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--sand-100)]/50">
            /afriyiecarellc
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs">
          <a href="tel:5859572279" className="hover:text-[var(--gold-500)] transition-colors">585-957-2279</a>
          <a href="mailto:afriyiecarellc@gmail.com" className="hover:text-[var(--gold-500)] transition-colors">afriyiecarellc@gmail.com</a>
          <span className="text-[var(--sand-100)]/50">Rochester, NY</span>
          <span className="text-[var(--sand-100)]/40">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
