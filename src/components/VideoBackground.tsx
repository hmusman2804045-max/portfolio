const VIDEO_SRC = '/bg-video.mp4'

export default function VideoBackground() {
  return (
    <>
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
      {/* Dark scrim so text stays readable over the video's bright areas.
          Heavier at the top (behind the nav) and bottom, lighter mid-frame
          so the video still shows through. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-black/65 via-black/40 to-black/55"
      />
    </>
  )
}
