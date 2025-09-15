import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import navigationData from '../data/navigation.json'
import contactsData from '../data/contacts.json'
import companyData from '../data/company.json'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { menuItems } = navigationData.navigation
  const { phone, email } = contactsData.contacts
  const { name, tagline } = companyData.company

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center shadow-2xl shadow-white/20">
                <span className="text-black font-bold text-xl">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            
            <div>
              <h1 className="text-2xl font-light text-white tracking-wide">{name}</h1>
              <p className="text-xs text-gray-400 font-light">{tagline}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-white hover:text-gray-300 font-light text-sm transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden xl:flex items-center space-x-6 text-sm"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors relative z-10"
          >
            <div className="w-6 h-6 relative">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-0.5 bg-current transform transition-all duration-300 origin-center top-1"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-6 h-0.5 bg-current transform transition-all duration-300 top-3"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-0.5 bg-current transform transition-all duration-300 origin-center top-5"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-white/10"
        >
          <div className="py-8 space-y-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 text-white hover:text-gray-300 transition-colors duration-300 text-lg font-light"
              >
                {item.name}
              </motion.a>
            ))}
            
            <div className="px-6 pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+7 (777) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@steelrent.kz</span>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header