import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrollTop = h.scrollTop
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[var(--gold-500)] to-[var(--clay-500)] origin-left"
        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
      />
    </div>
  )
}
