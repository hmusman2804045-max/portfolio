import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const TO_ADDRESS = 's2804045@gmail.com'
// Resend's shared onboarding sender — replace with an address on a verified
// custom domain (e.g. contact@hmuhammadusman.com) once DNS is set up.
const FROM_ADDRESS = 'Portfolio Contact <onboarding@resend.dev>'

const MAX_LENGTHS: Record<string, number> = {
  name: 100,
  email: 200,
  subject: 200,
  message: 5000,
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const body = (req.body ?? {}) as Record<string, unknown>

  // Honeypot: real users never see this field. If a bot filled it, claim
  // success so it doesn't learn anything, and send nothing.
  if (typeof body['bot-field'] === 'string' && body['bot-field'].trim() !== '') {
    return res.status(200).json({ success: true })
  }

  const fields: Record<string, string> = {}
  for (const key of ['name', 'email', 'subject', 'message']) {
    const value = body[key]
    if (typeof value !== 'string' || value.trim() === '') {
      return res
        .status(400)
        .json({ success: false, error: `Missing required field: ${key}` })
    }
    if (value.length > MAX_LENGTHS[key]) {
      return res
        .status(400)
        .json({ success: false, error: `Field too long: ${key}` })
    }
    fields[key] = value.trim()
  }

  if (!isValidEmail(fields.email)) {
    return res
      .status(400)
      .json({ success: false, error: 'Invalid email address' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return res
      .status(500)
      .json({ success: false, error: 'Email service not configured' })
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: fields.email,
      subject: `[Portfolio] ${fields.subject}`,
      text: [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        '',
        fields.message,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend error:', error)
      return res
        .status(502)
        .json({ success: false, error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Unexpected error sending email:', err)
    return res
      .status(500)
      .json({ success: false, error: 'Failed to send email' })
  }
}
