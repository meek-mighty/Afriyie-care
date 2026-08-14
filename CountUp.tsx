import { useEffect, useRef, useState } from 'react'

export default function CountUp({
  to,
  suffix = '',
  duration = 1400,
}: {
  to: number
  suffix?: string
  duration?: number
}) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.round(eased * to))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
