import { motion } from 'framer-motion'
import { 
  Square, 
  Circle, 
  Zap, 
  Wrench, 
  Truck, 
  Calculator,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react'
import servicesData from '../data/services.json'
import companyData from '../data/company.json'

const Services = () => {
  // Маппинг иконок
  const iconMap = {
    Square,
    Circle,
    Wrench,
    Truck,
    Calculator,
    Zap
  }

  // Получаем данные из JSON и добавляем иконки
  const services = servicesData.services.map(service => ({
    ...service,
    icon: iconMap[service.icon]
  }))

  const { cta } = companyData.company

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6">
            Наши <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Полный спектр решений по прокату и обработке нержавеющей стали для ваших проектов.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative glass-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-purple-500/30 custom-shadow"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-5">
                <h3 className="text-2xl font-light text-white group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-base text-gray-400 flex items-center font-light">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-xl font-semibold text-purple-400">
                    {service.price}
                  </span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Creative CTA - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-24"
      >
        <div className="w-full relative py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${cta.backgroundImage.useLocal ? cta.backgroundImage.localPath : cta.backgroundImage.externalUrl}')`
            }}
          ></div>
          
          {/* Dark Overlay */}
          <div 
            className="absolute inset-0 bg-black"
            style={{ opacity: cta.backgroundImage.overlay.darkOpacity / 100 }}
          ></div>
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"
            style={{ opacity: cta.backgroundImage.overlay.gradientOpacity / 100 }}
          ></div>

          <div className="container-custom text-center relative z-10">
            <div className="space-y-8">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-5xl md:text-6xl font-extralight text-white mb-6 leading-tight">
                  {cta.title}
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {cta.subtitle}
                  </span>
                </h3>
              </motion.div>
              
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                {cta.description}
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-xl py-6 px-12 min-w-[300px] relative overflow-hidden group inline-flex items-center justify-center"
                >
                  {cta.button}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-3"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </motion.div>
              
              <p className="text-sm text-gray-500 font-light">
                {cta.features}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Services