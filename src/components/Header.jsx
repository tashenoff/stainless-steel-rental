import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
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
  const { phone, phoneSecondary } = contactsData.contacts
  const { name, tagline } = companyData.company

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl border-b border-gray-300/30' 
          : 'bg-black/20 backdrop-blur-sm'
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
              <div className="w-12 h-12 bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-full flex items-center justify-center shadow-2xl shadow-bronze-500/20">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-bronze-500 to-bronze-300 rounded-full animate-pulse"></div>
            </div>
            
            <div>
              <h1 className={`text-2xl font-semibold tracking-wide ${ 
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>{name}</h1>
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
                className={`font-light text-sm transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-bronze-600' 
                    : 'text-white hover:text-bronze-300'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-gradient-to-r from-bronze-500 to-bronze-300 transition-all duration-300 group-hover:w-full"></span>
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
               <div className={`flex items-center space-x-4 ${
                 isScrolled ? 'text-gray-600' : 'text-gray-200'
               }`}>
                 <a 
                   href={`tel:${phone}`}
                   className="flex items-center space-x-2 hover:text-bronze-400 transition-colors"
                 >
                   <Phone className="w-4 h-4" />
                   <span>{phone}</span>
                 </a>
                 <a 
                   href={`tel:${phoneSecondary}`}
                   className="flex items-center space-x-2 hover:text-bronze-400 transition-colors"
                 >
                   <Phone className="w-4 h-4" />
                   <span>{phoneSecondary}</span>
                 </a>
                 <a
                  href={`https://wa.me/77003317744`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center space-x-2 hover:text-bronze-400 transition-colors bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg text-white"
                 >
                   <MessageCircle className="w-4 h-4" />
                   <span>WhatsApp</span>
                 </a>
               </div>
          </motion.div>

          {/* Mobile WhatsApp & Menu Buttons */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile WhatsApp Button */}
            <motion.a
              href={`https://wa.me/77003317744`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors relative z-10"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors relative z-10 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-bronze-600' 
                  : 'text-white hover:text-bronze-300'
              }`}
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
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-gray-300/30"
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
                className="block px-6 py-2 text-gray-700 hover:text-bronze-600 transition-colors duration-300 text-lg font-light"
              >
                {item.name}
              </motion.a>
            ))}
            
            <div className="px-6 pt-6 border-t border-gray-300/30 space-y-4">
              <div className="space-y-3">
                <a 
                  href={`tel:${phone}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-bronze-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phone}</span>
                </a>
                <a 
                  href={`tel:${phoneSecondary}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-bronze-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phoneSecondary}</span>
                </a>
                <a
                  href={`https://wa.me/77003317744`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
