import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 5])

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={ref}
      id="hero" 
      className="relative min-h-screen bg-miami-gradient flex items-center justify-center px-4 overflow-hidden scroll-snap-start"
      aria-labelledby="hero-title"
    >
      {/* Invisible title for accessibility */}
      <h2 id="hero-title" className="sr-only">
        Accueil - Tasty Crousty Street Food
      </h2>

      {/* Palmiers decoratifs */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute left-4 top-1/4 w-24 h-32 md:w-32 md:h-40"
          viewBox="0 0 100 120"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M50 120 L48 90 Q45 85 40 80 Q35 75 30 65 Q25 55 20 40 Q15 25 10 10 L15 8 Q20 20 25 35 Q30 50 35 60 Q40 70 45 75 Q50 80 52 85 L52 90 Z" />
          <path d="M50 120 L52 90 Q55 85 60 80 Q65 75 70 65 Q75 55 80 40 Q85 25 90 10 L85 8 Q80 20 75 35 Q70 50 65 60 Q60 70 55 75 Q50 80 48 85 L48 90 Z" />
        </svg>
        <svg
          className="absolute right-4 bottom-1/4 w-20 h-28 md:w-28 md:h-36"
          viewBox="0 0 100 120"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M50 120 L48 90 Q45 85 40 80 Q35 75 30 65 Q25 55 20 40 Q15 25 10 10 L15 8 Q20 20 25 35 Q30 50 35 60 Q40 70 45 75 Q50 80 52 85 L52 90 Z" />
          <path d="M50 120 L52 90 Q55 85 60 80 Q65 75 70 65 Q75 55 80 40 Q85 25 90 10 L85 8 Q80 20 75 35 Q70 50 65 60 Q60 70 55 75 Q50 80 48 85 L48 90 Z" />
        </svg>
      </div>

      {/* Layout 2 colonnes */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,640px)] gap-8 lg:gap-16 items-center">
          
          {/* Colonne gauche - Contenu */}
          <div className="text-center lg:text-left order-2 lg:order-1 relative">
            {/* Effet de lumière subtil en arrière-plan */}
            <motion.div
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-10 bg-gradient-radial from-white/10 via-turquoiseBeach/5 to-transparent blur-2xl"
              aria-hidden="true"
            />

            {/* Logo principal */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 relative z-10"
            >
              <h1 className="font-bebas">
                {/* TASTY - Blanc sur fond sombre, bien visible */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                  className="text-7xl md:text-8xl lg:text-9xl tracking-wider text-white font-black mb-2"
                  style={{
                    textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(94,233,255,0.2)',
                    WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                  }}
                >
                  TASTY
                </motion.div>

                {/* CROUSTY - Design moderne et lisible */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative inline-block"
                >
                  {/* Fond propre */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-xl" />
                  
                  {/* Accent coloré */}
                  <div className="absolute inset-0 bg-gradient-to-r from-roseMiami/10 to-turquoiseBeach/10 rounded-2xl" />
                  
                  {/* Effet de brillance discret */}
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 rounded-2xl"
                  />
                  
                  <span className="relative text-5xl md:text-6xl lg:text-7xl font-black text-midnight tracking-wider px-6 py-3">
                    CROUSTY
                  </span>
                </motion.div>
              </h1>
            </motion.div>

            {/* Tagline clean et impactant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12 relative z-10"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-wide">
                STREET FOOD MIAMI STYLE
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 font-medium max-w-md mx-auto lg:mx-0">
                Le goût authentique qui fait vibrer tes papilles
              </p>
            </motion.div>

            {/* Proposition de valeur simple et claire - style McDonald's */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
            >
              {[
                { icon: '⚡', text: 'Livraison 15min' },
                { icon: '🔥', text: '100% Frais' },
                { icon: '⭐', text: 'Note 4.9/5' }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-white font-bold text-lg">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Offre spéciale visible - comme les promos McDo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl mb-8 inline-block shadow-2xl border-4 border-yellow-500"
            >
              <div className="font-black text-2xl md:text-3xl">
                🎉 OFFRE DE LANCEMENT : -20% 🎉
              </div>
              <div className="font-semibold text-lg mt-1">
                Code: TASTY20
              </div>
            </motion.div>

            {/* Bouton CTA style McDonald's - Simple, gros, visible */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-4 flex-wrap justify-center lg:justify-start"
            >
              {/* Bouton principal - énorme et visible */}
              <motion.button
                onClick={scrollToOrder}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-5 rounded-full font-black text-2xl shadow-2xl transition-all duration-200 border-4 border-yellow-500"
                style={{
                  boxShadow: '0 10px 40px rgba(255, 193, 7, 0.5)'
                }}
              >
                🍗 COMMANDER MAINTENANT
              </motion.button>

              {/* Bouton secondaire */}
              <motion.button
                onClick={() => document.getElementById('dish')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl transition-all duration-200 border-2 border-white/40"
              >
                Voir le Menu
              </motion.button>
            </motion.div>

            {/* Indicateur scroll discret */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/60 text-xs font-medium tracking-widest"
              >
                DÉCOUVRIR ↓
              </motion.div>
            </motion.div>
          </div>

          {/* Colonne droite - Image XXL style McDonald's/Burger King */}
          <motion.div 
            className="relative order-1 lg:order-2"
            style={{ y, opacity }}
          >
            <motion.div
              initial={{ x: 60, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 100, 
                damping: 20,
                delay: 0.3
              }}
              className="relative"
            >
              {/* Image énorme et centrale - comme les photos produits McDo */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                className="relative"
              >
                <img
                  src="/assets/dish-lifestyle.webp.png"
                  alt="Poulet croustillant Tasty Crousty Miami"
                  className="w-full h-auto object-contain scale-125 lg:scale-150"
                  style={{
                    filter: 'drop-shadow(0 30px 80px rgba(0,0,0,0.3))',
                  }}
                  loading="eager"
                />
                
                {/* Badge lifestyle */}
                <div className="absolute -top-2 -right-2 bg-sunsetOrange text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  LIFESTYLE
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 