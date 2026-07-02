import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import FadeUp, { FADE_UP_EASE } from './FadeUp'

const SKILLS = [
  'Python',
  'Machine Learning / Deep Learning',
  'NLP (Natural Language Processing)',
  'Computer Vision',
  'React',
  'Flask',
]

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const pill: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: FADE_UP_EASE },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-[1] bg-neutral-950 px-8 pb-28 pt-4 max-[900px]:px-[18px] max-[900px]:pb-20"
    >
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-20 max-[900px]:pt-14">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Skills
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mt-8 max-w-3xl font-bold text-white"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 34px)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            The tools I reach for to take models from notebook to production.
          </p>
        </FadeUp>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex flex-wrap gap-4 max-[900px]:gap-3"
        >
          {SKILLS.map((skill) => (
            <motion.li
              key={skill}
              variants={pill}
              whileHover={{ y: -5 }}
              className="cursor-default rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[15px] font-semibold text-gray-200 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] max-[900px]:px-5 max-[900px]:py-2.5 max-[900px]:text-sm"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
