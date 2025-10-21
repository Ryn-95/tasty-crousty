import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  // Animations ultra-fluides avec spring physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  
  const opacity = useTransform(scrollY, [0, 50], [0.96, 1])
  const backdrop = useTransform(scrollY, [0, 100], [0.1, 0.9])
  const backdropReduced = useTransform(scrollY, [0, 100], [0.08, 0.72])
  const y = useTransform(scrollY, [0, 100], [-5, 0])
  const scale = useTransform(scrollY, [0, 100], [1.02, 1])

  useEffect(() => {
    const saved = localStorage.getItem('tasty-dark-mode')
    if (saved) setIsDarkMode(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasty-dark-mode', JSON.stringify(isDarkMode))
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  // Détection de scroll premium
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
      
      const sections = ['hero', 'dish', 'why', 'order']
      const scrollPos = scrollPosition + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tracking de souris premium
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.1)
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.1)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    setIsMobileMenuOpen(false)
  }

  const navigationLinks = [
    { label: 'Plat', id: 'dish', icon: '🍗' },
    { label: 'Pourquoi', id: 'why', icon: '✨' },
    { label: 'Commander', id: 'order', icon: '🎯' },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ 
          opacity, 
          y,
          scale,
          x: springX,
          rotateX: springY,
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0)
          mouseY.set(0)
        }}
      >
        {/* Fond premium avec plusieurs layers */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 backdrop-blur-2xl"
            style={{
              background: `linear-gradient(135deg, 
                rgba(15, 23, 42, ${backdrop}) 0%,
                rgba(30, 41, 59, ${backdropReduced}) 50%,
                rgba(15, 23, 42, ${backdrop}) 100%)`
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-roseMiami/5 via-transparent to-turquoiseBeach/5"
            animate={{
              opacity: isScrolled ? 0.6 : 0.3,
            }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            
            {/* Logo ultra-premium */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-roseMiami/40 rounded-lg px-2 py-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Aura background subtle */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-roseMiami/20 via-transparent to-turquoiseBeach/20 rounded-lg opacity-0 group-hover:opacity-100 blur-lg"
                transition={{ duration: 0.4 }}
              />
              
              {/* Logo container */}
              <motion.div 
                className="relative flex items-center space-x-2"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Logo icon subtle */}
                <motion.div
                  className="w-1.5 h-1.5 bg-gradient-to-br from-roseMiami to-turquoiseBeach rounded-full opacity-80"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <span className="font-bebas text-xl tracking-[0.15em] relative">
                  <motion.span 
                    className="text-white/95"
                    whileHover={{ 
                      textShadow: "0 0 8px rgba(255,255,255,0.4)" 
                    }}
                  >
                    TASTY
                  </motion.span>
                  <motion.span 
                    className="text-roseMiami/90 ml-1"
                    whileHover={{ 
                      textShadow: "0 0 8px rgba(255,94,170,0.4)" 
                    }}
                  >
                    CROUSTY
                  </motion.span>
                </span>
              </motion.div>
            </motion.button>

            {/* Navigation ultra-raffinée */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className={`group relative px-4 py-2 rounded-xl font-medium text-sm tracking-wide transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-roseMiami/40 ${
                      activeSection === link.id 
                        ? 'text-white' 
                        : 'text-white/70'
                    }`}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background actif ultra-subtil */}
                    {activeSection === link.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-roseMiami/15 via-roseMiami/10 to-turquoiseBeach/15 rounded-xl"
                        layoutId="navActiveBackground"
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30 
                        }}
                      />
                    )}
                    
                    {/* Effet hover ultra-délicat */}
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Bordure active */}
                    {activeSection === link.id && (
                      <motion.div
                        className="absolute inset-0 border border-white/10 rounded-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                    
                    {/* Contenu du bouton */}
                    <span className="relative flex items-center space-x-1.5">
                      <motion.span
                        className="text-xs opacity-60 group-hover:opacity-100"
                        animate={{
                          rotate: activeSection === link.id ? [0, 10, 0] : 0
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {link.icon}
                      </motion.span>
                      <span>{link.label}</span>
                    </span>
                    
                    {/* Indicateur minimaliste */}
                    {activeSection === link.id && (
                      <motion.div
                        className="absolute -bottom-0.5 left-1/2 w-1 h-1 bg-roseMiami rounded-full"
                        initial={{ scale: 0, x: '-50%' }}
                        animate={{ scale: 1, x: '-50%' }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 600, 
                          damping: 30,
                          delay: 0.2 
                        }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Section droite premium */}
            <div className="flex items-center space-x-3">
              
              {/* Toggle premium */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="group relative w-12 h-6 bg-white/10 hover:bg-white/15 rounded-full p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-roseMiami/40 transition-all duration-400 overflow-hidden"
                aria-label={`Mode ${isDarkMode ? 'clair' : 'sombre'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background animé */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-roseMiami/20 to-turquoiseBeach/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div
                  className="relative w-5 h-5 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm"
                  animate={{
                    x: isDarkMode ? 22 : 0,
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 25 
                  }}
                >
                  <motion.span 
                    className="text-xs"
                    animate={{ 
                      rotate: isDarkMode ? 360 : 0,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 0.5 },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    {isDarkMode ? '🌙' : '☀️'}
                  </motion.span>
                </motion.div>
              </motion.button>

              {/* Menu mobile ultra-élégant */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden group relative w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/15 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-roseMiami/40 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-roseMiami/20 to-turquoiseBeach/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative flex flex-col space-y-1">
                  {[0, 1, 2].map((index) => (
                    <motion.span
                      key={index}
                      className="w-4 h-0.5 bg-white/90 rounded-full"
                      animate={{
                        rotate: isMobileMenuOpen 
                          ? (index === 0 ? 45 : index === 2 ? -45 : 0) 
                          : 0,
                        y: isMobileMenuOpen 
                          ? (index === 0 ? 5 : index === 2 ? -5 : 0) 
                          : 0,
                        opacity: isMobileMenuOpen && index === 1 ? 0 : 1,
                        scaleX: isMobileMenuOpen && index !== 1 ? 1.2 : 1,
                      }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                    />
                  ))}
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile premium */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40 md:hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -30,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.23, 1, 0.32, 1] 
        }}
      >
        <motion.div 
          className="mt-24 mx-6 bg-midnight/96 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: isMobileMenuOpen ? 1 : 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <div className="p-8 space-y-2">
            {navigationLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group w-full text-left p-5 rounded-2xl transition-all duration-400 ${
                  activeSection === link.id 
                    ? 'bg-gradient-to-r from-roseMiami/20 via-roseMiami/10 to-turquoiseBeach/20 text-white border border-white/10' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -30
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.span 
                      className="text-lg"
                      animate={{
                        rotate: activeSection === link.id ? [0, 10, 0] : 0
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {link.icon}
                    </motion.span>
                    <span className="font-medium text-lg tracking-wide">{link.label}</span>
                  </div>
                  {activeSection === link.id && (
                    <motion.div
                      className="w-2 h-2 bg-roseMiami rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Overlay premium */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  )
}

export default Navbar 