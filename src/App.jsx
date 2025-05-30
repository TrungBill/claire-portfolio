
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    {!isLoading && <LoadingScreen onComplete = {() => setIsLoading(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0' } bg-black text-white-100`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />

    </div>
    </>
  )
}

export default App