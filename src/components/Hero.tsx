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

            {/* Badges premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              {[
                { icon: '⚡', text: 'Livraison 15min', color: 'from-yellow-400 to-orange-500' },
                { icon: '🔥', text: '100% Frais', color: 'from-red-400 to-pink-500' },
                { icon: '⭐', text: 'Note 4.9/5', color: 'from-cyan-400 to-blue-500' }
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${badge.color} rounded-full text-white font-semibold text-sm shadow-lg backdrop-blur-sm border border-white/20`}
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bouton Commander ultra-premium avec effets multiples */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative z-10"
            >
              <motion.button
                onClick={scrollToOrder}
                whileHover={{ scale: 1.08, rotate: [0, -1, 1, 0] }}
                whileTap={{ scale: 0.92 }}
                className="group relative bg-gradient-to-r from-white via-gray-50 to-white text-midnight px-14 py-6 rounded-full font-bebas text-2xl md:text-3xl tracking-widest font-black shadow-2xl border-2 border-white/30 overflow-hidden magnetic-hover wave-effect"
                style={{
                  boxShadow: '0 20px 60px rgba(255,94,170,0.3), 0 10px 30px rgba(94,233,255,0.2), inset 0 1px 1px rgba(255,255,255,0.8)'
                }}
                aria-label="Commander maintenant sur Uber Eats"
              >
                {/* Fond animé multicouche */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-roseMiami/10 via-turquoiseBeach/10 to-sunsetOrange/10"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                />
                
                {/* Effet de brillance qui traverse */}
                <motion.div
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12"
                />

                {/* Particules autour du bouton */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-roseMiami to-turquoiseBeach rounded-full"
                    style={{
                      left: `${i * 16}%`,
                      top: `${i % 2 === 0 ? '-4px' : 'calc(100% + 4px)'}`,
                    }}
                    animate={{
                      y: i % 2 === 0 ? [-10, 0, -10] : [10, 0, 10],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                <span className="relative z-10 flex items-center gap-3 font-black">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🚀
                  </motion.span>
                  COMMANDER
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>

                {/* Cercles concentriques au hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-roseMiami/0 group-hover:border-roseMiami/50"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
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

          {/* Colonne droite - Image lifestyle avec effets 3D premium */}
          <motion.div 
            className="relative order-1 lg:order-2 perspective-1000"
            style={{ y, opacity, scale, rotateX }}
          >
            {/* Particules flottantes autour de l'image */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-roseMiami to-turquoiseBeach rounded-full blur-sm"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${15 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}

            <motion.div
              initial={{ x: 120, opacity: 0, rotateY: 15 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 80, 
                damping: 14,
                delay: 0.4
              }}
              className="relative transform-gpu"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: -2,
                transition: { duration: 0.3 }
              }}
            >
              {/* Aura lumineuse animée */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-roseMiami/30 via-turquoiseBeach/30 to-sunsetOrange/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Image lifestyle flottante avec effet 3D */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                className="relative transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Ombre portée douce */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full" />
                
                <img
                  src="/assets/dish-lifestyle.webp.png"
                  alt="Style de vie avec Tasty Crousty - Street food Miami"
                  className="w-full h-auto object-contain drop-shadow-2xl scale-110 lg:scale-125 relative z-10"
                  style={{
                    filter: 'drop-shadow(0 20px 60px rgba(255,94,170,0.3)) drop-shadow(0 10px 30px rgba(94,233,255,0.2))',
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