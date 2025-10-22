import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import Hero from '@/components/Hero'
import Dish from '@/components/Dish'
import Why from '@/components/Why'
import Order from '@/components/Order'
import Footer from '@/components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadComplete = () => {
    setIsLoaded(true)
  }

  if (!isLoaded) {
    return <Loader onComplete={handleLoadComplete} />
  }

  return (
    <div className="min-h-screen bg-white font-poppins dark:bg-midnight transition-colors duration-300">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link focus-visible:ring-4 focus-visible:ring-roseMiami"
      >
        Aller au contenu principal
      </a>
      
      {/* Navbar sticky */}
      <Navbar />
      
      <motion.main
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-hidden scroll-smooth"
        style={{
          scrollSnapType: 'y proximity',
        }}
      >
        <Hero />
        <Dish />
        <Why />
        <Order />
        <Footer />
      </motion.main>
      </div>
  )
}

export default App
