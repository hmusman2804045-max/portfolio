// TEMPORARY: video is hosted on a third-party CloudFront bucket we don't
// control — replace with a self-hosted asset before launch.
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4'

export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      src={VIDEO_SRC}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        zIndex: 0,
      }}
    />
  )
}
