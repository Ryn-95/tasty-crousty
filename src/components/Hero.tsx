import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

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
          
          {/* Colonne gauche - Contenu ultra-minimaliste */}
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-8">

            {/* Logo minimaliste */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-bebas leading-none">
                <div className="text-8xl md:text-9xl lg:text-[10rem] text-white font-black tracking-tight">
                  TASTY
                </div>
                <div className="text-8xl md:text-9xl lg:text-[10rem] text-white font-black tracking-tight -mt-4">
                  CROUSTY
                </div>
              </h1>
            </motion.div>

            {/* Tagline ultra-simple */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-3xl md:text-4xl text-white font-bold">
                Le poulet le plus croustillant de Miami 🔥
              </p>
            </motion.div>

            {/* Infos simples */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-white text-xl font-bold"
            >
              <span>⚡ Livraison 15min</span>
              <span>•</span>
              <span>🔥 100% Frais</span>
              <span>•</span>
              <span>⭐ 4.9/5</span>
            </motion.div>

            {/* Bouton ultra-minimaliste style McDo */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              onClick={scrollToOrder}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-16 py-6 rounded-full font-black text-3xl shadow-2xl transition-all"
            >
              COMMANDER 🍗
            </motion.button>
          </div>

          {/* Image XXL ultra-simple */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/dish-lifestyle.webp.png"
              alt="Poulet croustillant Tasty Crousty"
              className="w-full h-auto scale-125 lg:scale-150"
              style={{
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))',
              }}
              loading="eager"
            />
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