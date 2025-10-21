import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  badge?: string
  popular?: boolean
}

const MenuSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('Poulets')

  const categories = ['Poulets', 'Burgers', 'Frites', 'Boissons', 'Desserts']

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'CROUSTY SIGNATURE',
      description: 'Poulet mariné 24h, croustillant parfait, sauce secrète',
      price: '12,90€',
      image: '/assets/hero-dish.webp.png',
      badge: 'BEST SELLER',
      popular: true
    },
    {
      id: 2,
      name: 'CROUSTY XXL',
      description: 'Double portion de poulet, frites XXL, sauce au choix',
      price: '15,90€',
      image: '/assets/dish-angle.webp.png',
      badge: 'NOUVEAU'
    },
    {
      id: 3,
      name: 'CROUSTY COMBO',
      description: 'Poulet + Frites + Boisson + Dessert',
      price: '14,90€',
      image: '/assets/dish-lifestyle.webp.png',
      badge: 'PROMO'
    },
    {
      id: 4,
      name: 'CROUSTY KIDS',
      description: 'Menu enfant avec jouet + boisson',
      price: '8,90€',
      image: '/assets/hero-dish.webp.png'
    }
  ]

  return (
    <section 
      ref={ref}
      id="menu"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Titre géant type McDonald's */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="text-7xl md:text-8xl lg:text-9xl font-bebas font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #FF5EAA 0%, #FF8B5E 50%, #5EE9FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 20px rgba(255,94,170,0.3)'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            NOTRE MENU
          </motion.h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-bold">
            Des saveurs qui font vibrer Miami ! 🔥
          </p>
        </motion.div>
      </div>

      {/* Navigation catégories style fast-food */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 rounded-full font-bebas text-xl tracking-wider font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-roseMiami to-sunsetOrange text-white shadow-2xl scale-110'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
              whileHover={{ scale: selectedCategory === category ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grille de produits type McDonald's */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border-4 border-transparent hover:border-roseMiami"
            >
              {/* Badge */}
              {item.badge && (
                <div className={`absolute top-4 right-4 z-20 px-4 py-2 rounded-full font-bold text-sm ${
                  item.badge === 'BEST SELLER' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                  item.badge === 'NOUVEAU' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                  'bg-gradient-to-r from-red-500 to-pink-500'
                } text-white shadow-lg`}>
                  {item.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-roseMiami/5 to-turquoiseBeach/5">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: [0, -2, 2, 0] }}
                />
                
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Infos produit */}
              <div className="p-6">
                <h3 className="text-2xl font-bebas font-black mb-2 text-gray-900 group-hover:text-roseMiami transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Prix et bouton */}
                <div className="flex items-center justify-between">
                  <motion.span 
                    className="text-4xl font-bebas font-black text-roseMiami"
                    animate={{
                      scale: item.popular ? [1, 1.1, 1] : 1
                    }}
                    transition={{
                      duration: 2,
                      repeat: item.popular ? Infinity : 0
                    }}
                  >
                    {item.price}
                  </motion.span>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gradient-to-r from-roseMiami to-sunsetOrange text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    + AJOUTER
                  </motion.button>
                </div>
              </div>

              {/* Effet de lueur au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-roseMiami/20 to-turquoiseBeach/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255,94,170,0.2), rgba(94,233,255,0.2))',
                    'linear-gradient(135deg, rgba(94,233,255,0.2), rgba(255,139,94,0.2))',
                    'linear-gradient(45deg, rgba(255,94,170,0.2), rgba(94,233,255,0.2))',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bannière promotion géante */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-6 mt-20"
      >
        <div className="relative bg-gradient-to-r from-roseMiami via-sunsetOrange to-turquoiseBeach rounded-3xl p-12 overflow-hidden shadow-2xl">
          {/* Effet animé en arrière-plan */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
              backgroundSize: '200% 200%'
            }}
          />

          <div className="relative z-10 text-center text-white">
            <motion.h3 
              className="text-6xl md:text-7xl lg:text-8xl font-bebas font-black mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              OFFRE SPÉCIALE ! 🎉
            </motion.h3>
            <p className="text-3xl md:text-4xl font-bold mb-8">
              2 Menus achetés = 1 Dessert OFFERT
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-roseMiami px-12 py-6 rounded-full font-bebas text-3xl font-black shadow-2xl hover:shadow-3xl transition-all"
            >
              J'EN PROFITE ! →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MenuSection

