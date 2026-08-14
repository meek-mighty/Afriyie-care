import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Approach from './components/Approach'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <div className="min-h-screen">
      <div className="grain" />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Services />
      <Approach />
      <Gallery />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
