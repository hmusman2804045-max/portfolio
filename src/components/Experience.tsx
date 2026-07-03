import FadeUp from './FadeUp'

/**
 * "Current Status & Focus" rendered as a live terminal window rather than a
 * corporate timeline — fits an early-career AI developer better.
 */
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
          <p
            className="mt-8 max-w-3xl font-bold text-white"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 34px)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Current status &amp; focus.
          </p>
        </FadeUp>

        <FadeUp delay={0.2} y={24}>
          <div className="mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_60px_rgba(34,211,238,0.06)] backdrop-blur-md">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-white/40">
                usman@portfolio: ~/status
              </span>
            </div>

            {/* Terminal body */}
            <div className="space-y-5 p-6 font-mono text-[13px] leading-relaxed max-[900px]:p-5 max-[900px]:text-xs">
              <div>
                <p className="text-white/40">
                  <span className="text-cyan-300">$</span> whoami
                </p>
                <p className="mt-1 text-gray-200">
                  Hafiz Muhammad Usman — AI &amp; ML Developer
                </p>
              </div>

              <div>
                <p className="text-white/40">
                  <span className="text-cyan-300">$</span> status
                </p>
                <p className="mt-1 flex items-center gap-2.5 text-gray-200">
                  {/* Pulsing "active" indicator */}
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                  </span>
                  <span>
                    <span className="font-semibold text-green-400">
                      OPEN TO WORK
                    </span>{' '}
                    — actively seeking my first industry role
                  </span>
                </p>
              </div>

              <div>
                <p className="text-white/40">
                  <span className="text-cyan-300">$</span> current_focus
                </p>
                <ul className="mt-1 space-y-1 text-gray-200">
                  <li>
                    <span className="text-cyan-300/70">›</span> Deep Learning
                  </li>
                  <li>
                    <span className="text-cyan-300/70">›</span> Machine
                    Learning
                  </li>
                  <li>
                    <span className="text-cyan-300/70">›</span> Building
                    applied AI systems
                  </li>
                </ul>
              </div>

              <p className="flex items-center gap-1 text-white/40">
                <span className="text-cyan-300">$</span>
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan-300/80" />
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
