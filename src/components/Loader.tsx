import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoaderProps {
  onComplete: () => void
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 600)
          }, 400)
          return 100
        }
        return prev + 2
      })
    }, 60)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          <div className="text-center space-y-12">
            
            {/* Logo épuré */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <motion.h1 
                className="font-bebas text-7xl md:text-8xl tracking-wider text-gray-900"
                initial={{ letterSpacing: '0.5em', opacity: 0 }}
                animate={{ letterSpacing: '0.3em', opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <motion.span 
                  className="inline-block"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  TASTY
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="h-px bg-gray-300"
                  initial={{ width: 0 }}
                  animate={{ width: '60px' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                <motion.span 
                  className="font-bebas text-2xl text-roseMiami tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                >
                  CROUSTY
                </motion.span>
                <motion.div 
                  className="h-px bg-gray-300"
                  initial={{ width: 0 }}
                  animate={{ width: '60px' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </motion.div>
            </motion.div>

            {/* Barre de progression minimaliste */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="w-80 max-w-sm mx-auto space-y-3"
            >
              <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-roseMiami to-turquoiseBeach rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              <motion.p 
                className="text-gray-500 text-sm tracking-wide"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Préparation en cours...
              </motion.p>
            </motion.div>

            {/* Indicateur simple */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              className="flex justify-center items-center gap-2"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    backgroundColor: ['#9CA3AF', '#FF5EAA', '#9CA3AF'],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

            {/* Texte signature */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="text-gray-400 text-xs tracking-widest uppercase"
            >
              Miami Street Food
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader 