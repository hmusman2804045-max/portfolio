import FadeUp from './FadeUp'

const PITCH =
  'I build intelligent systems, specializing in applied AI, machine learning, and bringing deep learning models into practical applications.'

const EDUCATION = 'BSCS — University of Management and Technology (UMT)'

export default function About() {
  return (
    <section
      id="about"
      className="relative z-[1] bg-neutral-950 px-8 py-28 max-[900px]:px-[18px] max-[900px]:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            About
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mt-8 max-w-4xl font-bold text-white"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 34px)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            {PITCH}
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Education
            </p>
            <p className="mt-3 text-[15px] font-medium text-gray-200">
              {EDUCATION}
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
