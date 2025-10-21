import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const Dish = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      id="dish" 
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="dish-title"
    >
      {/* Arrière-plan statique */}
      <div className="absolute inset-0">
        {/* Grille statique */}
        <div 
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,94,170,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94,233,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Aura statique */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-5"
          style={{
            background: 'radial-gradient(circle, #FF5EAA, #5EE9FF, transparent)',
            borderRadius: '50%',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Colonne gauche */}
          <motion.div
            ref={ref}
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Header avec badge simple */}
            <div className="space-y-6">
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-roseMiami/10 to-turquoiseBeach/10 border border-roseMiami/20 rounded-full hover:scale-105 transition-transform duration-200">
                  <span className="w-2 h-2 bg-roseMiami rounded-full"></span>
                  <span className="text-sm uppercase tracking-wider text-roseMiami font-semibold">
                    Notre spécialité
                  </span>
                  <span>⭐</span>
                </div>
              </motion.div>
              
              {/* Titre principal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 
                  id="dish-title"
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                >
                  <span className="block">
                    Poulet Croustillant
                  </span>
                  <motion.span 
                    className="block text-turquoiseBeach font-light text-4xl md:text-5xl lg:text-6xl mt-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Mariné 24 heures
                  </motion.span>
                </h2>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Notre pièce signature : un poulet{' '}
                <span className="text-roseMiami font-semibold">
                  tendre et juteux
                </span>
                , mariné pendant{' '}
                <span className="text-turquoiseBeach font-semibold">
                  24 heures
                </span>
                {' '}dans nos épices secrètes, grillé à la perfection et servi sur un lit de riz parfumé aux saveurs de Miami.
              </p>
              
              {/* Ligne décorative */}
              <div className="h-1 bg-gradient-to-r from-roseMiami via-turquoiseBeach to-sunsetOrange rounded-full w-32"></div>
            </motion.div>

            {/* Caractéristiques */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { 
                  value: '24h', 
                  label: 'Marinade', 
                  color: 'text-roseMiami',
                  bgColor: 'from-roseMiami/10 to-roseMiami/5',
                  borderColor: 'border-roseMiami/20',
                  icon: '⏰'
                },
                { 
                  value: '100%', 
                  label: 'Frais', 
                  color: 'text-turquoiseBeach',
                  bgColor: 'from-turquoiseBeach/10 to-turquoiseBeach/5',
                  borderColor: 'border-turquoiseBeach/20',
                  icon: '🍃'
                },
                { 
                  value: 'Premium', 
                  label: 'Qualité', 
                  color: 'text-sunsetOrange',
                  bgColor: 'from-sunsetOrange/10 to-sunsetOrange/5',
                  borderColor: 'border-sunsetOrange/20',
                  icon: '⭐'
                }
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`text-center p-6 rounded-2xl bg-gradient-to-br ${item.bgColor} border ${item.borderColor} backdrop-blur-sm cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-200`}
                >
                  {/* Icône */}
                  <div className="text-2xl mb-3">
                    {item.icon}
                  </div>

                  {/* Valeur principale */}
                  <div className={`text-3xl md:text-4xl font-bold ${item.color} mb-2`}>
                    {item.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-8"
            >
              <button 
                className="group relative bg-gradient-to-r from-gray-900 to-black text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-roseMiami/30 hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>🔍</span>
                  Découvrir
                </span>

                {/* Arrière-plan au hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-roseMiami via-turquoiseBeach to-sunsetOrange rounded-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            </motion.div>
          </motion.div>

          {/* Colonne droite - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Aura simple */}
            <div className="absolute inset-0 bg-gradient-to-br from-roseMiami/8 via-turquoiseBeach/8 to-sunsetOrange/8 rounded-3xl blur-xl scale-105 opacity-60" />
            
            {/* Container image */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 hover:scale-102 transition-transform duration-300">
              {/* Image */}
              <div className="relative">
                <img
                  src="/src/assets/hero-dish.webp.png"
                  alt="Poulet croustillant signature mariné 24h"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Badge signature */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-roseMiami to-turquoiseBeach text-white rounded-full w-20 h-20 flex items-center justify-center text-xs font-bold shadow-xl border-2 border-white cursor-pointer hover:scale-110 transition-transform duration-200"
              >
                SIGNATURE
              </motion.div>

              {/* Points d'accent */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-turquoiseBeach rounded-full shadow-lg opacity-50"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-sunsetOrange rounded-full shadow-lg opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Dish 