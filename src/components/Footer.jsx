import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Clock,
  ArrowUp,
  Heart,
  Instagram,
  MessageCircle,
  Linkedin,
  Facebook,
  Twitter
} from 'lucide-react'
import navigationData from '../data/navigation.json'
import contactsData from '../data/contacts.json'
import companyData from '../data/company.json'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { quickLinks: navLinks, servicesList } = navigationData.navigation
  const { phone, phoneSecondary, address, socialLinks } = contactsData.contacts
  const { name, description } = companyData.company

  // Маппинг иконок для социальных сетей
  const socialIconMap = {
    Facebook,
    Instagram,
    Linkedin,
    Twitter
  }




  return (
    <footer className="relative bg-gradient-to-b from-gray-200 to-gray-300 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bronze-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-full flex items-center justify-center shadow-2xl shadow-bronze-500/20">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 heading-bold">nerja.kz</h3>
                  <p className="text-gray-700 text-base font-normal">Premium Steel Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed font-normal">
                Качественные решения в области проката нержавеющей стали.
                Создаем долгосрочные партнерские отношения, основанные на качестве и доверии.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = socialIconMap[social.icon]
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gray-200 hover:text-bronze-300 transition-all duration-300 hover:bg-bronze-500/20"
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-2xl font-black text-gray-900 mb-8 heading-bold">Навигация</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-bronze-600 transition-colors duration-300 font-light flex items-center group"
                    >
                      <span className="w-2 h-2 bg-bronze-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-2xl font-black text-gray-900 mb-8 heading-bold">Наши услуги</h4>
              <ul className="space-y-4">
                {servicesList.map((service) => (
                  <li key={service}>
                    <span className="text-gray-600 hover:text-bronze-600 transition-colors duration-300 font-light cursor-pointer flex items-center group">
                      <span className="w-2 h-2 bg-bronze-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-2xl font-black text-gray-900 mb-8 heading-bold">Контакты</h4>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-bronze-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-600 font-light">
                    <p>{address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-bronze-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-600 font-light">
                    <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="hover:text-bronze-600 transition-colors block">
                      {phone}
                    </a>
                    <a href={`tel:${phoneSecondary.replace(/[^+\d]/g, '')}`} className="hover:text-bronze-600 transition-colors block">
                      {phoneSecondary}
                    </a>
                  </div>
                </div>
                
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-bronze-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-600 font-light">
                    <p>Пн-Пт: 8:00 - 18:00</p>
                    <p>Сб: 9:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <p className="text-gray-500 text-sm font-light">
                  © 2024 nerja.kz. Все права защищены.
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors font-light">
                    Политика конфиденциальности
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors font-light">
                    Условия использования
                  </a>
                </div>
              </div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center py-4 border-t border-white/5"
        >
          <p className="text-gray-600 text-xs font-light flex items-center justify-center">
            Создано с 
            <Heart className="w-3 h-3 mx-1 text-pink-500" />
            для премиальных решений
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer