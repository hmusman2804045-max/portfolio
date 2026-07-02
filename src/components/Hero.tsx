import { motion } from 'framer-motion'
import FadeUp, { FADE_UP_EASE } from './FadeUp'

const HEADING = 'HAFIZ MUHAMMAD USMAN — AI & ML DEVELOPER.'
const SUBTEXT =
  'Building intelligent, data-driven systems and practical machine learning applications — from idea to deployment.'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] flex h-screen flex-col justify-center px-8 pb-8 pt-[70px] max-[900px]:px-[18px] max-[900px]:pt-[90px]"
    >
      <h1
        className="flex flex-wrap gap-[0.25em] font-bold uppercase text-white"
        style={{
          fontSize: 'clamp(26px, 3vw, 42px)',
          lineHeight: 1.08,
          letterSpacing: '-0.01em',
        }}
      >
        {HEADING.split(' ').map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.15 + i * 0.08,
              duration: 0.7,
              ease: FADE_UP_EASE,
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <FadeUp
        as="p"
        delay={0.9}
        y={24}
        className="mt-6 max-w-[260px] text-sm leading-[1.65] text-white/85"
      >
        {SUBTEXT}
      </FadeUp>
    </section>
  )
}
