import { motion } from 'framer-motion'
import { useMemo } from 'react'
import type { CSSProperties, ElementType, ReactNode } from 'react'

export const FADE_UP_EASE = [0.22, 1, 0.36, 1] as const

interface FadeUpProps {
  children: ReactNode
  /** Seconds before the animation starts once in view. */
  delay?: number
  /** Starting vertical offset in px. */
  y?: number
  duration?: number
  as?: ElementType
  className?: string
  style?: CSSProperties
}

/**
 * Reusable fade-up-on-scroll wrapper. Animates once, when 20% of the
 * element enters the viewport.
 */
export default function FadeUp({
  children,
  delay = 0,
  y = 32,
  duration = 0.7,
  as = 'div',
  className,
  style,
}: FadeUpProps) {
  const MotionTag = useMemo(() => motion.create(as), [as])
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration, ease: FADE_UP_EASE }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  )
}
