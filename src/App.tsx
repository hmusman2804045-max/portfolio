import VideoBackground from './components/VideoBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

export default function App() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}
