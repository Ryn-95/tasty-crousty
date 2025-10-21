import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxDish = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7])

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden scroll-snap-start"
      aria-label="Bannière Tasty Crousty"
    >
      {/* Overlay subtil pour améliorer l'immersion */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.3, 0.8]) }}
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10" 
      />
      
      {/* Image avec effet parallax amélioré */}
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/assets/tasty-banniere.png"
          alt="Bannière Tasty Crousty"
          className="w-full h-full object-cover object-center filter brightness-110 contrast-105"
          loading="lazy"
        />
      </motion.div>
      
      {/* Effet de profondeur avec dégradés */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
        }}
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/5 to-black/20 z-5"
        aria-hidden="true"
      />
      
      {/* Particules améliorées */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.sin(i * 0.5) * 80, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.3, 1.5, 0.3]
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          className={`absolute rounded-full z-15 ${
            i % 4 === 0 ? 'w-1 h-1 bg-white/40' : 
            i % 4 === 1 ? 'w-2 h-2 bg-roseMiami/60' : 
            i % 4 === 2 ? 'w-1.5 h-1.5 bg-turquoiseBeach/50' : 'w-1 h-1 bg-sunsetOrange/40'
          }`}
          style={{
            left: `${5 + i * 8}%`,
            top: `${15 + Math.sin(i) * 70}%`
          }}
          aria-hidden="true"
        />
      ))}
      
      {/* Effet de vignette dynamique */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 0.2, 0.2, 0.6])
        }}
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 z-5"
        aria-hidden="true"
      />
      
      {/* Reflets lumineux subtils */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  )
}

export default ParallaxDish 