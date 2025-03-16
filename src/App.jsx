
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css'
import { useState } from 'react'
import { Navbar } from './components/Navbar'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
    {!isLoading && <LoadingScreen onComplete = {() => setIsLoading(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0' } bg-black text-white-100`}>
      <Navbar />

    </div>
    </>
  )
}

export default App