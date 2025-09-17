import { motion } from 'framer-motion'
import { ArrowRight, Star, Sparkles, ChevronDown } from 'lucide-react'
import companyData from '../data/company.json'
import { useState, useEffect } from 'react'
import Modal from './Modal'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { hero } = companyData.company

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    { icon: Star, text: 'Премиум качество' },
    { icon: Sparkles, text: 'Быстрая доставка' },
    { icon: Star, text: 'Лучшие цены' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-200 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${hero.backgroundImage.useLocal ? hero.backgroundImage.localPath : hero.backgroundImage.externalUrl}')`
          }}
        ></div>
        
        {/* Silver Diagonal Mask for readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-tl from-gray-800/80 via-gray-600/50 to-transparent"
        ></div>
        
        {/* Additional Silver Diagonal Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(315deg, 
              rgba(156, 163, 175, 0.9) 0%, 
              rgba(107, 114, 128, 0.7) 30%, 
              rgba(75, 85, 99, 0.5) 50%, 
              rgba(55, 65, 81, 0.3) 70%, 
              transparent 100%)`
          }}
        ></div>
        
        {/* Top Left Silver Accent */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 500px 400px at 0% 0%, 
              rgba(156, 163, 175, 0.7) 0%, 
              rgba(107, 114, 128, 0.5) 30%, 
              rgba(75, 85, 99, 0.3) 50%, 
              transparent 70%)`
          }}
        ></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-300 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-300/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gray-400/50 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Mouse-following gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(156, 163, 175, 0.15), transparent 40%)`
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
              {hero.title}
              <span className="block font-medium bg-gradient-to-r from-bronze-300 via-bronze-200 to-bronze-400 bg-clip-text text-transparent">
                {hero.subtitle}
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-gray-100 max-w-4xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </motion.div>


          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center pt-8"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group min-w-[250px] inline-flex items-center justify-center"
            >
              {hero.ctaButton}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center space-y-2 text-gray-300 hover:text-bronze-300 transition-colors cursor-pointer"
        >
          <span className="text-xs font-light uppercase tracking-widest">Прокрутите вниз</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-bronze-400 rounded-full opacity-60"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-bronze-400 rounded-full opacity-40"
      />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Hero