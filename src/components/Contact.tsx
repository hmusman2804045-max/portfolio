import { useState } from 'react'
import type { FormEvent } from 'react'
import FadeUp from './FadeUp'

type Status = 'idle' | 'sending' | 'success' | 'error'

const INPUT_CLASSES =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-gray-200 placeholder:text-white/30 backdrop-blur-md transition-all duration-200 focus:border-cyan-400/60 focus:bg-white/[0.07] focus:shadow-[0_0_25px_rgba(34,211,238,0.15)] focus:outline-none'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // Honeypot: real users never see this field. If it's filled, silently
    // pretend everything worked and send nothing.
    if (typeof data['bot-field'] === 'string' && data['bot-field'] !== '') {
      setStatus('success')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.success) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative z-[1] bg-neutral-950 px-8 pb-28 pt-4 max-[900px]:px-[18px] max-[900px]:pb-20"
    >
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-20 max-[900px]:pt-14">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mt-8 max-w-3xl font-bold text-white"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 34px)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Have a project or role in mind?{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s talk.
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2} y={24}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl max-[900px]:p-5"
          >
            {/* Honeypot — hidden from humans, tempting to bots */}
            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="bot-field">Do not fill this field</label>
              <input
                id="bot-field"
                name="bot-field"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className={INPUT_CLASSES}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  placeholder="you@example.com"
                  className={INPUT_CLASSES}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                maxLength={200}
                placeholder="What's this about?"
                className={INPUT_CLASSES}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={5000}
                rows={6}
                placeholder="Tell me about it..."
                className={`${INPUT_CLASSES} resize-y`}
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-neutral-950 transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' && (
                  <span
                    aria-hidden
                    className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-950/30 border-t-neutral-950"
                  />
                )}
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="text-sm font-medium text-green-400">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-medium text-red-400">
                    Something went wrong. Email me directly at{' '}
                    <a
                      href="mailto:s2804045@gmail.com"
                      className="underline hover:text-red-300"
                    >
                      s2804045@gmail.com
                    </a>
                    .
                  </p>
                )}
              </div>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}
