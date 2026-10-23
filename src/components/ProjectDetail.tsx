import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface ProjectDetailProps {
  onClose: () => void
}

const TAGS = [
  'Python',
  'PyTorch',
  'timm',
  'EfficientNet',
  'CoAtNet',
  'ConvNeXt',
  'Kaggle',
  'Medical Imaging',
]

const RESULTS_TABLE = [
  { submission: 'Public pipeline B', publicScore: '0.958', privateScore: '0.942', isFinal: false },
  { submission: 'Public pipeline A (final pick)', publicScore: '0.958', privateScore: '0.942', isFinal: true },
  { submission: 'Public pipeline Versia7 (final pick)', publicScore: '0.956', privateScore: '0.940', isFinal: true },
  { submission: 'My 5-model ensemble', publicScore: '0.922', privateScore: '0.905', isFinal: false },
  { submission: 'My 5 models with ResNet34', publicScore: '0.920', privateScore: '0.904', isFinal: false },
  { submission: 'My 4-model ensemble', publicScore: '0.921', privateScore: '0.905', isFinal: false },
]

function KaggleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M18.825 23.859c-.022.046-.054.084-.092.113a.355.355 0 0 1-.208.066h-3.41c-.244 0-.448-.106-.593-.306l-5.46-7.464l-2.022 1.944v5.44c0 .21-.078.39-.234.542a.747.747 0 0 1-.546.226H3.774a.75.75 0 0 1-.547-.226.745.745 0 0 1-.234-.542V.768c0-.21.078-.39.234-.543A.747.747 0 0 1 3.774 0h2.484c.21 0 .393.076.546.225c.156.153.234.333.234.543v13.68l7.155-7.234a.798.798 0 0 1 .593-.254h3.58c.18 0 .317.066.402.195c.088.13.088.272 0 .428l-6.726 6.703l7.02 9.278c.09.12.1.25.03.385l-.267.41z"/>
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function ProjectDetail({ onClose }: ProjectDetailProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-neutral-950 text-white"
    >
      {/* Sticky Top Header Bar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/85 px-6 py-4 backdrop-blur-md max-[900px]:px-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-200 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-200"
          >
            <ArrowLeftIcon />
            Back to Projects
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://www.kaggle.com/competitions/rsna-knee-abnormality-detection"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              <KaggleIcon />
              <span>Competition Page</span>
              <ExternalLinkIcon />
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="rounded-lg p-1.5 text-white/60 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-5xl px-6 py-12 max-[900px]:px-4 max-[900px]:py-8">
        {/* Title and Meta Header */}
        <section className="border-b border-white/10 pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Case Study • Kaggle Competition (Solo)
          </p>

          <h1
            className="mt-4 font-bold text-white"
            style={{
              fontSize: 'clamp(26px, 3.2vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
            }}
          >
            RSNA Knee Abnormality Detection (Kaggle, Solo)
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300">
            Detecting 12 knee abnormalities from MRI scans. Built my own EfficientNet ensemble, then evaluated top public pipelines. Final private score: 0.942 macro AUC.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Role</p>
              <p className="mt-1 text-sm font-bold text-cyan-300">Solo Competitor</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Evaluation Metric</p>
              <p className="mt-1 text-sm font-bold text-white">Macro AUC-ROC</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Final Private Score</p>
              <p className="mt-1 text-sm font-bold text-cyan-200">0.942 Macro AUC</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Hardware</p>
              <p className="mt-1 text-sm font-bold text-white">Kaggle T4 GPUs</p>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-200/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="mt-12 space-y-12">
          {/* Problem */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              01
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Problem
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              For each knee MRI study, predict 12 findings: ACL, MCL, medial meniscus, lateral meniscus, medial OA, lateral OA, PF OA, effusion, synovitis, Baker&apos;s cyst, contusion, fracture. The metric is macro AUC. It was a code competition with a 9-hour limit, no internet, images only at test time, and about 1,300 hidden test studies.
            </p>

            <ul className="mt-6 space-y-3.5">
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  <strong className="text-white">Input:</strong> Knee MRI studies. Each study has several scan series in different planes, with different numbers of slices.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  <strong className="text-white">Output:</strong> A probability for each of 12 findings (ACL, MCL, medial meniscus, lateral meniscus, medial OA, lateral OA, PF OA, effusion, synovitis, Baker&apos;s cyst, contusion, fracture).
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  <strong className="text-white">Evaluation:</strong> Macro AUC-ROC (average of the 12 individual AUCs).
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  <strong className="text-white">Competition Rules:</strong> 9-hour notebook limit, no internet at submission, images only at test time, ~1,300 hidden test studies, 5 submissions per day, 2 final picks. Public leaderboard evaluated ~30% of test data; private leaderboard (~70%) determined final results.
                </span>
              </li>
            </ul>
          </section>

          {/* Challenges */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              02
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Challenges
            </h2>

            <ul className="mt-6 space-y-3.5">
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Only 58 studies had trusted labels. The rest only had free-text reports, so labels had to be built from text and are noisy.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  58 studies is too few to judge models reliably.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  No local GPU (used Kaggle T4 GPUs).
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Very little time. This was my first solo competition.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Every MRI study has a different shape, so inputs had to be made a fixed size.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  No reports at test time, so the model had to predict from images alone.
                </span>
              </li>
            </ul>
          </section>

          {/* My own pipeline */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              03
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              My own pipeline
            </h2>

            <ul className="mt-6 space-y-3.5">
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Weak labels from reports, a 400-study pseudo-validation set, and the 58 gold studies as a sanity check.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  A 2.5D EfficientNet: slices max-pooled within each plane, then 3 planes combined.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  An ensemble of 5 EfficientNet models, with probabilities averaged.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Tested and dropped: 5-crop TTA, rank averaging, horizontal flip (it can swap medial and lateral), and ResNet34.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Score path: public 0.922, private 0.905.
                </span>
              </li>
            </ul>
          </section>

          {/* Public pipelines */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              04
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Public pipelines
            </h2>

            <div className="mt-4 rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-xs leading-relaxed text-cyan-200">
              <strong className="font-semibold text-white">Attribution:</strong> These pipelines come from public Kaggle notebooks by other participants and are not my own models.
            </div>

            <ul className="mt-6 space-y-3.5">
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  I studied the leaderboard and public notebooks, checked that the rules allowed public code, and ran three strong public pipelines (CoAtNet + ConvNeXt) within the rules, with Internet off.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  I also built and tested a blend of my own models into the stack, but did not submit it because the expected gain was about zero and it could have lowered the score.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Final picks: two different pipelines, to spread risk.
                </span>
              </li>
            </ul>
          </section>

          {/* Results (public / private) */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              05
            </p>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Results (public / private)
              </h2>
              <span className="text-xs text-white/50">
                (Private leaderboard is preliminary until Kaggle verifies)
              </span>
            </div>

            <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40">
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="border-b border-white/10 bg-white/[0.04] text-xs font-semibold uppercase tracking-wider text-white/70">
                  <tr>
                    <th scope="col" className="px-5 py-3.5">Submission</th>
                    <th scope="col" className="px-5 py-3.5">Public</th>
                    <th scope="col" className="px-5 py-3.5">Private</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {RESULTS_TABLE.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        row.isFinal
                          ? 'bg-cyan-500/10 font-medium text-white transition-colors'
                          : 'transition-colors hover:bg-white/[0.02]'
                      }
                    >
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <span>{row.submission}</span>
                          {row.isFinal && (
                            <span className="rounded border border-cyan-400/40 bg-cyan-400/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                              Final Pick
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3.5 font-mono text-xs">{row.publicScore}</td>
                      <td className="px-5 py-3.5 font-mono text-xs font-semibold text-cyan-200">{row.privateScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs sm:text-sm">
              <div>
                <span className="text-white/60">Final private score: </span>
                <span className="font-bold text-cyan-300">0.942 macro AUC</span>
              </div>
              <div>
                <span className="text-white/60">Top private score in the competition: </span>
                <span className="font-bold text-white">0.960</span>
              </div>
            </div>
          </section>

          {/* What I learned */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              06
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              What I learned
            </h2>

            <ul className="mt-6 space-y-3.5">
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Every submission dropped about 0.016 from public to private. The private test set was harder for everyone, including the top teams.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  The public leaderboard ranked my submissions in the correct order.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Extra small models added almost nothing on private (4 models 0.905, 5 models 0.905).
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  Reproducing a stronger public pipeline gave about +0.037 over my own pipeline on private.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                <span>
                  With only 58 trusted labels, I avoided tuning on them, which kept my choices safer.
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-200 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-200"
          >
            <ArrowLeftIcon />
            Back to Projects
          </button>

          <a
            href="https://www.kaggle.com/competitions/rsna-knee-abnormality-detection"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            <KaggleIcon />
            <span>Kaggle Competition</span>
            <ExternalLinkIcon />
          </a>
        </div>
      </main>
    </motion.div>
  )
}
