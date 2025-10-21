import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, type KeyboardEvent } from 'react'

const Order = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.8])

  const handleOrderClick = () => {
    // Lien vers Uber Eats à remplacer par le vrai lien
    window.open('https://www.ubereats.com/store/tasty-crousty', '_blank', 'noopener,noreferrer')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleOrderClick()
    }
  }

  return (
    <section 
      id="order" 
      className="relative py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden"
      aria-labelledby="order-title"
    >
      {/* Arrière-plan futuriste avec motifs géométriques */}
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Grille futuriste */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Éléments géométriques flottants */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            >
              <div 
                className="w-1 h-20 bg-gradient-to-b from-roseMiami/20 to-transparent rounded-full"
                style={{ 
                  transform: `rotate(${45 + i * 15}deg)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Aura lumineuse */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: `conic-gradient(from 0deg, 
              transparent, 
              #FF5EAA, 
              transparent, 
              #5EE9FF, 
              transparent, 
              #FF8B5E, 
              transparent)`,
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
        >
          {/* Header ultra-moderne */}
          <div className="text-center mb-20">
            {/* Ligne décorative animée */}
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-roseMiami to-transparent flex-1 max-w-32"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="mx-6 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <span className="text-sm font-medium text-white/90 tracking-wider uppercase">
                  Commande Express
                </span>
              </motion.div>
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-turquoiseBeach to-transparent flex-1 max-w-32"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </motion.div>

            {/* Titre principal avec effet néon */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.h2 
                id="order-title"
                className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-[0.9] tracking-tight"
                style={{
                  textShadow: '0 0 40px rgba(255,255,255,0.1)',
                }}
              >
                Commande
                <motion.span 
                  className="block font-medium mt-2"
                  style={{
                    background: 'linear-gradient(135deg, #FF5EAA 0%, #5EE9FF 50%, #FF8B5E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(255,94,170,0.3))',
                  }}
                  animate={{
                    filter: [
                      'drop-shadow(0 0 20px rgba(255,94,170,0.3))',
                      'drop-shadow(0 0 30px rgba(94,233,255,0.4))',
                      'drop-shadow(0 0 20px rgba(255,139,94,0.3))',
                      'drop-shadow(0 0 20px rgba(255,94,170,0.3))',
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ton assiette
                </motion.span>
              </motion.h2>

              {/* Effet de lueur derrière le titre */}
              <motion.div
                className="absolute inset-0 -z-10 opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'radial-gradient(ellipse, #FF5EAA40 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />
            </motion.div>

            {/* Sous-titre élégant */}
            <motion.div
              className="max-w-3xl mx-auto space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                Prêt à goûter au{' '}
                <span className="text-white font-light relative">
                  meilleur street food de Miami
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-roseMiami to-turquoiseBeach"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </span>
                {' '}?
              </p>
              <p className="text-lg md:text-xl text-gray-400">
                Commande maintenant et récupère ton plat en{' '}
                <span className="text-turquoiseBeach font-medium">15 minutes</span>.
              </p>
            </motion.div>
          </div>

          {/* Layout principal innovant */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
            
            {/* Section commande ultra-moderne */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Container principal avec glassmorphism avancé */}
              <motion.div
                className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 overflow-hidden"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Effet de vague animée */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent 0%, rgba(255,94,170,0.1) 25%, transparent 50%, rgba(94,233,255,0.1) 75%, transparent 100%)',
                      'linear-gradient(45deg, transparent 25%, rgba(94,233,255,0.1) 50%, transparent 75%, rgba(255,139,94,0.1) 100%, transparent 125%)',
                      'linear-gradient(45deg, transparent 50%, rgba(255,139,94,0.1) 75%, transparent 100%, rgba(255,94,170,0.1) 125%, transparent 150%)',
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Header Uber Eats modernisé */}
                <motion.div
                  className="flex items-center justify-between mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex items-center gap-6">
                    <motion.div 
                      className="flex items-center gap-4 px-6 py-4 bg-black/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.9)' }}
                    >
                      <motion.span 
                        className="text-3xl"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        🛵
                      </motion.span>
                      <span className="text-white font-semibold text-xl tracking-wide">Uber Eats</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(16, 185, 129, 0)',
                          '0 0 0 4px rgba(16, 185, 129, 0.1)',
                          '0 0 0 0 rgba(16, 185, 129, 0)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.span 
                        className="w-3 h-3 bg-emerald-400 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-emerald-400 text-sm font-medium">Disponible</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Contenu principal */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div>
                    <h3 className="text-4xl font-light text-white mb-4 tracking-wide">
                      Livraison Express
                    </h3>
                    <div className="space-y-3">
                      <p className="text-xl text-gray-300 leading-relaxed">
                        Disponible maintenant sur Uber Eats
                      </p>
                      <p className="text-lg">
                        <span className="text-turquoiseBeach font-medium">Livraison en 15-25 minutes</span>
                        <span className="text-gray-400 ml-2">• Garantie fraîcheur</span>
                      </p>
                    </div>
                  </div>

                  {/* Bouton CTA révolutionnaire */}
                  <motion.button
                    onClick={handleOrderClick}
                    onKeyDown={handleKeyDown}
                    className="group relative w-full h-20 rounded-3xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-roseMiami/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    {/* Arrière-plan dynamique */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, #FF5EAA 0%, #5EE9FF 50%, #FF8B5E 100%)',
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Effet de brillance */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 3
                      }}
                      style={{ transform: 'skewX(-20deg)' }}
                    />

                    {/* Contenu du bouton */}
                    <div className="relative z-10 flex items-center justify-center h-full text-white">
                      <motion.span 
                        className="text-2xl mr-4"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        🚀
                      </motion.span>
                      <span className="text-xl font-semibold tracking-wide">
                        Commander maintenant
                      </span>
                    </div>

                    {/* Particules au survol */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 12}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.button>

                  {/* Informations détaillées */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    {[
                      { icon: '📍', text: 'Miami Beach & Downtown', color: 'text-orange-400' },
                      { icon: '⏰', text: '11h - 23h tous les jours', color: 'text-cyan-400' },
                      { icon: '💳', text: 'Paiement sécurisé', color: 'text-emerald-400' }
                    ].map((info, index) => (
                      <motion.div
                        key={info.text}
                        className="group flex items-center gap-3 p-4 bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm"
                        whileHover={{ 
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          borderColor: 'rgba(255,255,255,0.2)',
                          scale: 1.02
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                      >
                        <span className={`text-xl ${info.color} group-hover:scale-110 transition-transform duration-200`}>
                          {info.icon}
                        </span>
                        <span className="text-gray-300 text-sm font-medium leading-tight">
                          {info.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section image lifestyle ultra-moderne */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {/* Container avec effet holographique */}
              <motion.div
                className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 overflow-hidden"
                whileHover={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
              >
                {/* Badge lifestyle futuriste */}
                <motion.div
                  className="absolute top-6 left-6 z-20 px-6 py-3 rounded-2xl backdrop-blur-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,94,170,0.9) 0%, rgba(94,233,255,0.9) 100%)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white font-semibold text-sm tracking-wide flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      ✨
                    </motion.span>
                    Lifestyle Premium
                  </span>
                </motion.div>

                {/* Image avec effets avancés */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <motion.img
                    src="/src/assets/dish-angle.webp.png"
                    alt="Vue d'angle du plat Tasty Crousty"
                    className="w-full h-auto object-contain relative z-10"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: 'easeInOut' 
                    }}
                    loading="lazy"
                  />

                  {/* Reflets holographiques */}
                  <motion.div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    animate={{
                      background: [
                        'linear-gradient(45deg, transparent 0%, rgba(255,94,170,0.1) 25%, transparent 50%)',
                        'linear-gradient(45deg, transparent 25%, rgba(94,233,255,0.1) 50%, transparent 75%)',
                        'linear-gradient(45deg, transparent 50%, rgba(255,139,94,0.1) 75%, transparent 100%)',
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Section confiance révolutionnaire */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Header section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                Commande en toute confiance
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Service client premium 7j/7 et livraison garantie avec suivi en temps réel
              </p>
            </motion.div>

            {/* Badges de confiance ultra-modernes */}
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { 
                  icon: '✓', 
                  text: 'Paiement sécurisé', 
                  color: 'text-emerald-400',
                  gradient: 'from-emerald-500/20 to-green-600/20',
                  border: 'border-emerald-400/30'
                },
                { 
                  icon: '✓', 
                  text: 'Livraison trackée', 
                  color: 'text-cyan-400',
                  gradient: 'from-cyan-500/20 to-blue-600/20',
                  border: 'border-cyan-400/30'
                },
                { 
                  icon: '✓', 
                  text: 'Support 7j/7', 
                  color: 'text-rose-400',
                  gradient: 'from-rose-500/20 to-pink-600/20',
                  border: 'border-rose-400/30'
                }
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className={`group flex items-center gap-4 px-8 py-4 bg-gradient-to-br ${badge.gradient} border ${badge.border} rounded-2xl backdrop-blur-xl transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                    boxShadow: `0 20px 40px ${badge.color.replace('text-', '').replace('-400', '')}20`,
                  }}
                >
                  <motion.span 
                    className={`${badge.color} text-2xl font-bold`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {badge.icon}
                  </motion.span>
                  <span className="text-white font-medium text-lg">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Note finale avec animation */}
            <motion.div
              className="mt-16 relative"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              <motion.p
                className="text-gray-400 text-lg relative z-10"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Plus de{' '}
                <motion.span
                  className="text-white font-semibold text-xl"
                  animate={{
                    color: ['#ffffff', '#FF5EAA', '#5EE9FF', '#ffffff'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  10,000 commandes
                </motion.span>
                {' '}livrées avec succès sur Miami Beach
              </motion.p>

              {/* Ligne décorative finale */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ width: 0 }}
                animate={inView ? { width: '300px' } : { width: 0 }}
                transition={{ duration: 1.5, delay: 2 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Order 