import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Menu = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const menuItems = [
    {
      name: 'Poulet Croustillant Classique',
      description: 'Notre signature : mariné 24h, croustillant à souhait',
      price: '12.90€',
      image: '/assets/hero-dish.webp.png',
      badge: 'BEST-SELLER',
      badgeColor: 'bg-red-500'
    },
    {
      name: 'Menu Complet Miami',
      description: 'Poulet + Frites + Boisson',
      price: '16.90€',
      image: '/assets/dish-angle.webp.png',
      badge: 'PROMO -20%',
      badgeColor: 'bg-yellow-500'
    },
    {
      name: 'Poulet Épicé Deluxe',
      description: 'Pour les amateurs de sensations fortes',
      price: '14.90€',
      image: '/assets/dish-lifestyle.webp.png',
      badge: 'NOUVEAU',
      badgeColor: 'bg-green-500'
    }
  ]

  return (
    <section 
      ref={ref}
      id="menu" 
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Header section */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            NOTRE MENU
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des saveurs authentiques qui feront vibrer vos papilles
          </p>
        </motion.div>
      </div>

      {/* Menu grid - style McDonald's */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-100 hover:border-yellow-400 transition-all duration-300"
            >
              {/* Badge */}
              <div className="relative">
                <div className={`absolute top-4 right-4 ${item.badgeColor} text-white text-xs font-black px-4 py-2 rounded-full shadow-lg z-10`}>
                  {item.badge}
                </div>

                {/* Image XXL */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center h-80">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain scale-110"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Info produit */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>

                {/* Prix et CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-black text-yellow-500">
                    {item.price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-bold text-sm shadow-lg transition-colors duration-200"
                  >
                    COMMANDER
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA global */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <motion.button
          onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-roseMiami to-sunsetOrange text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          VOIR TOUTE LA CARTE
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Menu

