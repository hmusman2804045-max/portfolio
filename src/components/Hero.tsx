import { motion } from 'framer-motion'
import FadeUp, { FADE_UP_EASE } from './FadeUp'

// Name renders white with a soft glow; the role renders as a cyan→blue
// gradient clip. The em dash stays with the name.
const NAME_PART = 'HAFIZ MUHAMMAD USMAN —'
const ROLE_PART = 'AI & ML DEVELOPER.'

const WORDS = [
  ...NAME_PART.split(' ').map((word) => ({ word, accent: false })),
  ...ROLE_PART.split(' ').map((word) => ({ word, accent: true })),
]

const SUBTEXT =
  'Building intelligent, data-driven systems and practical machine learning applications — from idea to deployment.'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] flex h-screen flex-col justify-center px-8 pb-8 pt-[70px] max-[900px]:px-[18px] max-[900px]:pt-[90px]"
    >
      <h1
        className="flex flex-wrap gap-[0.25em] font-extrabold uppercase"
        style={{
          fontSize: 'clamp(26px, 3vw, 42px)',
          lineHeight: 1.08,
          letterSpacing: '-0.01em',
        }}
      >
        {WORDS.map(({ word, accent }, i) => (
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
            className={
              accent
                ? 'bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]'
                : 'text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55),0_0_44px_rgba(255,255,255,0.18)]'
            }
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <FadeUp
        as="p"
        delay={0.9}
        y={24}
        className="mt-6 max-w-[300px] text-[15px] font-medium leading-[1.65] text-gray-200 [text-shadow:0_1px_14px_rgba(0,0,0,0.65)]"
      >
        {SUBTEXT}
      </FadeUp>
    </section>
  )
}
