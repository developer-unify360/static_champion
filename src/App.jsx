import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Gallery from './components/Gallery'
import Industries from './components/Industries'
import Team from './components/Team'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Industries />
        <Team />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
