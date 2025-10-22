import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Why = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Titre ultra-simple */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6">
              POURQUOI TASTY ?
            </h2>
          </motion.div>

          {/* 3 raisons en grille */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '⚡', title: 'ULTRA RAPIDE', desc: 'Livré en 15min chrono' },
              { icon: '🔥', title: 'ULTRA FRAIS', desc: 'Jamais congelé, toujours frais' },
              { icon: '⭐', title: 'ULTRA BON', desc: 'Note 4.9/5 - 2000+ avis' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-7xl mb-6">{item.icon}</div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-xl text-gray-600 font-semibold">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Why
