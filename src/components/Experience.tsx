import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

const FOCUS_ITEMS = [
  { index: '01', label: 'Deep Learning' },
  { index: '02', label: 'Machine Learning' },
  { index: '03', label: 'Building Applied AI Systems' },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-[1] bg-neutral-950 px-8 pb-28 pt-4 max-[900px]:px-[18px] max-[900px]:pb-20"
    >
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-20 max-[900px]:pt-14">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Experience
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-8 max-w-3xl font-extrabold uppercase text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
            style={{
              fontSize: 'clamp(30px, 4vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Current status{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              &amp; focus.
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2} y={24}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl max-[900px]:p-6"
          >
            {/* Ambient glow inside the card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
            />

            <div className="relative">
              {/* Pulsating OPEN TO WORK badge */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(74,222,128,0.2)',
                    '0 0 35px rgba(74,222,128,0.5)',
                    '0 0 15px rgba(74,222,128,0.2)',
                  ],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-flex items-center gap-3 rounded-full border border-green-400/40 bg-green-400/10 px-6 py-3"
              >
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-green-300 max-[900px]:text-xs">
                  Open to Work
                </span>
              </motion.div>

              <p
                className="mt-8 max-w-2xl font-bold text-white"
                style={{
                  fontSize: 'clamp(24px, 2.8vw, 40px)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                Actively seeking my{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  first industry role.
                </span>
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 max-[900px]:text-sm">
                Ready to bring applied AI skills to a team shipping real
                products.
              </p>

              {/* Current focus tiles */}
              <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Current Focus
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                {FOCUS_ITEMS.map((item) => (
                  <motion.div
                    key={item.index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="cursor-default rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  >
                    <p className="text-xs font-bold tracking-widest text-cyan-300/70">
                      {item.index}
                    </p>
                    <p className="mt-3 text-xl font-bold leading-snug text-white max-[900px]:text-lg">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}
