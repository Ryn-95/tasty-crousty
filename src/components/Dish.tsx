import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Dish = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section 
      id="dish" 
      className="py-20 lg:py-32 bg-white"
      aria-labelledby="dish-title"
    >

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Titre simple et direct */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="dish-title" className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6">
              POULET CROUSTILLANT
            </h2>
            <p className="text-3xl md:text-4xl text-gray-700 font-bold">
              Mariné 24h • Grillé à la perfection 🔥
            </p>
          </motion.div>

          {/* Grid simple 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image grande et simple */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/hero-dish.webp.png"
                alt="Poulet croustillant"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>

            {/* 3 infos clés */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                { icon: '⏰', title: 'Mariné 24h', desc: 'Épices secrètes' },
                { icon: '🔥', title: '100% Frais', desc: 'Jamais congelé' },
                { icon: '⭐', title: 'Qualité Premium', desc: 'Poulet français' }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-6">
                  <div className="text-5xl">{item.icon}</div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-xl text-gray-600 font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Dish 