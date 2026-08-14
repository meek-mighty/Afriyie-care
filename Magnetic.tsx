import { useRef, type ReactNode, type ElementType } from 'react'

export default function Magnetic({
  children,
  className = '',
  as: Tag = 'div',
  strength = 0.35,
  ...rest
}: {
  children: ReactNode
  className?: string
  as?: ElementType
  strength?: number
  [key: string]: any
}) {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
