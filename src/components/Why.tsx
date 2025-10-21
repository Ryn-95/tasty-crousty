import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface FeatureProps {
  icon: string
  title: string
  description: string
  delay: number
  index: number
}

const Feature = ({ icon, title, description, delay, index }: FeatureProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  // Couleurs ultra-épurées
  const colors = [
    { bg: 'bg-gradient-to-br from-rose-50 to-pink-50', border: 'border-rose-200/50', accent: 'text-rose-600' },
    { bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', border: 'border-cyan-200/50', accent: 'text-cyan-600' },
    { bg: 'bg-gradient-to-br from-purple-50 to-violet-50', border: 'border-purple-200/50', accent: 'text-purple-600' },
    { bg: 'bg-gradient-to-br from-orange-50 to-amber-50', border: 'border-orange-200/50', accent: 'text-orange-600' },
    { bg: 'bg-gradient-to-br from-emerald-50 to-green-50', border: 'border-emerald-200/50', accent: 'text-emerald-600' },
    { bg: 'bg-gradient-to-br from-indigo-50 to-slate-50', border: 'border-indigo-200/50', accent: 'text-indigo-600' },
  ]

  const colorScheme = colors[index % colors.length]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`group relative p-8 rounded-2xl ${colorScheme.bg} border ${colorScheme.border} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/5`}
    >
      {/* Icône simple et élégante */}
      <motion.div
        className="mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
      >
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorScheme.accent} bg-white/80 text-2xl font-medium shadow-sm`}>
          {icon === 'TIME' && '⚡'}
          {icon === 'LOCATION' && '📍'}
          {icon === 'STAR' && '⭐'}
          {icon === '🍃' && '🍃'}
          {icon === '⏰' && '⏰'}
          {icon === '📍' && '📦'}
        </div>
      </motion.div>

      {/* Titre */}
      <motion.h3
        className="font-semibold text-lg text-gray-900 mb-3"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-600 text-sm leading-relaxed"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.3 }}
      >
        {description}
      </motion.p>

      {/* Indicateur subtil */}
      <motion.div
        className={`absolute top-4 right-4 w-2 h-2 rounded-full ${colorScheme.accent} opacity-60`}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.4 }}
      />
    </motion.div>
  )
}

const Why = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const features = [
    {
      icon: 'TIME',
      title: 'Ultra-Fast',
      description: 'Servi en 15 minutes maximum. Street food rapide sans compromis sur la qualité.',
    },
    {
      icon: 'LOCATION',
      title: 'Miami Beach',
      description: 'Localisé au cœur de Miami Beach pour une expérience authentique.',
    },
    {
      icon: 'STAR',
      title: 'Pré-Chicken',
      description: 'Poulet premium sélectionné et préparé selon notre recette secrète Miami.',
    },
    {
      icon: '🍃',
      title: 'Frais',
      description: 'Ingrédients frais du jour, aucun conservateur, que du naturel et du goût.',
    },
    {
      icon: '⏰',
      title: 'Marinade 24h',
      description: 'Notre marinade signature infuse pendant 24h pour un goût incomparable.',
    },
    {
      icon: '📍',
      title: 'À emporter',
      description: 'Commande facile, récupération rapide, saveurs transportées avec soin.',
    },
  ]

  return (
    <section 
      id="why" 
      className="relative py-24 bg-white overflow-hidden"
      aria-labelledby="why-title"
    >
      {/* Arrière-plan minimaliste */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent"
        style={{ y }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Header épuré */}
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge subtle */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200/60 rounded-full text-sm text-gray-600 font-medium mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-2 h-2 bg-roseMiami rounded-full"></span>
            Pourquoi nous choisir
          </motion.div>

          {/* Titre principal */}
          <motion.h2 
            id="why-title"
            className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pourquoi{' '}
            <span className="font-medium bg-gradient-to-r from-roseMiami to-turquoiseBeach bg-clip-text text-transparent">
              Tasty Crousty
            </span>
            {' '}?
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Six raisons qui font de nous le{' '}
            <span className="text-gray-900 font-medium">street food de référence</span>{' '}
            sur Miami Beach.
          </motion.p>
        </motion.div>

        {/* Grille des features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.05}
              index={index}
            />
          ))}
        </motion.div>

        {/* Section témoignage épurée */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 rounded-3xl p-12 shadow-sm">
            {/* Statistique principale */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                10,000+
              </div>
              <div className="text-lg text-gray-600">
                clients satisfaits sur Miami Beach
              </div>
            </motion.div>

            {/* Note */}
            <motion.div
              className="flex items-center justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    className="w-6 h-6 text-amber-400"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + star * 0.05 }}
                  >
                    ★
                  </motion.div>
                ))}
              </div>
              <div className="text-2xl font-medium text-gray-900">4.9/5</div>
              <div className="text-gray-600">sur Uber Eats</div>
            </motion.div>

            {/* Badges de confiance minimalistes */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: '🏆', text: 'Top Rated' },
                { icon: '⚡', text: 'Express' },
                { icon: '👨‍🍳', text: 'Premium' },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200/60 rounded-full text-sm text-gray-700 font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <span className="text-base">{badge.icon}</span>
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Why 