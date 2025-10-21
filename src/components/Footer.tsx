import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/tastycrousty',
      icon: '📸',
      label: 'Suivez-nous sur Instagram'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@tastycrousty',
      icon: '🎵',
      label: 'Découvrez nos vidéos TikTok'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/tastycrousty',
      icon: '👥',
      label: 'Rejoignez notre communauté Facebook'
    },
  ]

  return (
    <footer 
      ref={ref}
      className="bg-gradient-to-b from-gray-50 to-white py-16 border-t border-gray-200/50"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* Logo simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-gray-900 mb-3">
              <span className="text-roseMiami">TASTY</span>{' '}
              <span className="text-gray-900">CROUSTY</span>
            </h2>
            <p className="text-gray-600 text-lg font-light">
              Street Food Miami Style 🌴
            </p>
          </motion.div>

          {/* Réseaux sociaux épurés */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:border-roseMiami hover:bg-roseMiami/5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-roseMiami/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Informations essentielles */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Localisation */}
            <div className="text-center space-y-2">
              <p className="text-2xl mb-2">📍</p>
              <h3 className="font-semibold text-gray-900">Localisation</h3>
              <div className="text-gray-600 space-y-1">
                <p>Miami Beach, Florida</p>
                <p>+1 (305) 123-TASTY</p>
              </div>
            </div>

            {/* Horaires */}
            <div className="text-center space-y-2">
              <p className="text-2xl mb-2">⏰</p>
              <h3 className="font-semibold text-gray-900">Horaires</h3>
              <div className="text-gray-600 space-y-1">
                <p className="text-turquoiseBeach font-medium">Ouvert 7j/7</p>
                <p>11h00 - 23h00</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center space-y-2">
              <p className="text-2xl mb-2">📧</p>
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <div className="text-gray-600 space-y-1">
                <p>hello@tastycrousty.com</p>
                <p>Support 7j/7</p>
              </div>
            </div>
          </motion.div>

          {/* Ligne de séparation */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          {/* Footer simple */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-gray-500">
              © 2024 Tasty Crousty • Tous droits réservés
            </p>
            
            <motion.a
              href="https://rboost.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-roseMiami transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-roseMiami/30 rounded"
              whileHover={{ scale: 1.02 }}
            >
              Développé avec ❤️ par <span className="font-medium">RBoost</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 