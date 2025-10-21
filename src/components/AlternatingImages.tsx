import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface SlideItem {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  direction: 'left' | 'right';
  color: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
    shadowGradient: string;
  };
  emoji: string;
}

const slideData: SlideItem[] = [
  {
    title: 'Découvre le crousty',
    subtitle: 'Une texture parfaite qui révèle tous les arômes',
    src: '/src/assets/right-slide.webp',
    alt: 'Plat croustillant aux textures dorées parfaites',
    direction: 'left',
    color: {
      primary: '#FF5EAA',
      secondary: '#FF8B5E',
      accent: '#FFD700',
      gradient: 'linear-gradient(135deg, #FF5EAA 0%, #FF8B5E 70%, #FFD700 100%)',
      shadowGradient: 'radial-gradient(ellipse, #FF5EAA40 0%, #FF8B5E30 50%, transparent 70%)'
    },
    emoji: '🔥'
  },
  {
    title: 'Toujours plus savoureux',
    subtitle: 'Des saveurs authentiques qui éveillent vos sens',
    src: '/src/assets/left-slide.webp',
    alt: 'Plat savoureux aux couleurs appétissantes',
    direction: 'right',
    color: {
      primary: '#5EE9FF',
      secondary: '#AE52FF',
      accent: '#00FF88',
      gradient: 'linear-gradient(135deg, #5EE9FF 0%, #AE52FF 70%, #00FF88 100%)',
      shadowGradient: 'radial-gradient(ellipse, #5EE9FF40 0%, #AE52FF30 50%, transparent 70%)'
    },
    emoji: '✨'
  }
];

function SlideSection({ item, index }: { item: SlideItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-20%"
  });

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
      aria-labelledby={`slide-title-${index}`}
    >
      {/* Arrière-plan statique */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: item.color.shadowGradient,
        }}
      />
      
      {/* Grille statique */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${item.color.primary} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-8 z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${item.direction === 'right' ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Section texte */}
          <motion.div 
            className={`space-y-8 ${item.direction === 'left' ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}
            initial={{ opacity: 0, x: item.direction === 'left' ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.direction === 'left' ? -30 : 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge simple */}
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{
                boxShadow: `0 4px 20px ${item.color.primary}20`,
              }}
            >
              <span className="text-2xl">
                {item.emoji}
              </span>
              <span className="text-sm font-medium text-white/80">Qualité Premium</span>
            </motion.div>

            <motion.h2 
              id={`slide-title-${index}`}
              className="text-6xl md:text-8xl lg:text-9xl font-bebas tracking-wider leading-none hover:scale-105 transition-transform duration-300"
              style={{
                background: item.color.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {item.title}
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {item.subtitle}
            </motion.p>
            
            {/* Ligne décorative statique */}
            <motion.div
              className="h-1 rounded-full max-w-md"
              style={{ background: item.color.gradient }}
              initial={{ width: 0 }}
              animate={isInView ? { width: '85%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Statistiques simples */}
            <motion.div 
              className="flex gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: '5⭐', label: 'Notation' },
                { icon: '100%', label: 'Naturel' },
                { icon: '🔥', label: 'Fraîcheur' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center group cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="text-lg font-bold text-white/90 mb-1">
                    {stat.icon}
                  </div>
                  <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Container image simple */}
          <motion.div
            className={`relative ${item.direction === 'left' ? 'lg:col-start-2' : 'lg:col-start-1'}`}
            initial={{ opacity: 0, x: item.direction === 'left' ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.direction === 'left' ? 30 : -30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Aura statique */}
            <div
              className="absolute -inset-8 rounded-3xl blur-3xl opacity-50"
              style={{
                background: item.color.shadowGradient,
              }}
            />

            {/* Container image principal */}
            <div
              className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/20 cursor-pointer shadow-2xl hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: `0 10px 30px ${item.color.primary}15, 0 0 40px ${item.color.secondary}10`
              }}
            >
              {/* Chargement simple */}
              {!isLoaded && (
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: item.color.shadowGradient }}
                >
                  <div
                    className="w-12 h-12 border-3 border-transparent rounded-full animate-spin"
                    style={{ 
                      borderTopColor: item.color.primary,
                      borderRightColor: item.color.secondary 
                    }}
                  />
                </div>
              )}
              
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto max-h-96 object-cover hover:scale-105 transition-transform duration-300"
                onLoad={() => setIsLoaded(true)}
              />
              
              {/* Overlay statique */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-40"
                style={{
                  background: `linear-gradient(135deg, ${item.color.primary}15 0%, transparent 40%, ${item.color.secondary}10 100%)`,
                  mixBlendMode: 'overlay',
                }}
              />
            </div>

            {/* Badge premium simple */}
            <motion.div
              className={`absolute -top-6 ${item.direction === 'left' ? '-right-6' : '-left-6'} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl z-10 hover:scale-110 transition-transform duration-200`}
              style={{
                background: item.color.gradient,
                boxShadow: `0 8px 32px ${item.color.primary}40, 0 0 60px ${item.color.secondary}30`
              }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <span>
                {item.emoji}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function AlternatingImages() {
  return (
    <div 
      className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-midnight dark:via-gray-900 dark:to-black overflow-hidden"
      role="region"
      aria-label="Sections alternées premium des plats"
    >
      {/* Arrière-plan statique */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(255,94,170,0.12) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(94,233,255,0.12) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,215,0,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Motif géométrique statique */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #FF5EAA 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, #5EE9FF 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 180px 180px',
        }}
      />

      {/* Sections */}
      {slideData.map((item, index) => (
        <SlideSection key={index} item={item} index={index} />
      ))}

      {/* Navigation simple */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4 p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
          {slideData.map((item, index) => (
            <button
              key={index}
              className="relative w-4 h-4 rounded-full bg-white/20 hover:bg-white/40 hover:scale-125 transition-all duration-300 overflow-hidden group"
              onClick={() => {
                const element = document.getElementById(`slide-title-${index}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label={`Aller à la section ${index + 1}: ${item.title}`}
            >
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: item.color.gradient }}
              />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
} 