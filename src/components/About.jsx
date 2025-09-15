import { motion } from 'framer-motion'
import { Award, Users, Factory, Leaf } from 'lucide-react'
import companyData from '../data/company.json'

const About = () => {
  // Маппинг иконок
  const iconMap = {
    Award,
    Users,
    Factory,
    Leaf
  }

  // Получаем данные из JSON и добавляем иконки
  const stats = companyData.company.stats.map(stat => ({
    ...stat,
    icon: iconMap[stat.icon]
  }))

  const { about, testimonials } = companyData.company

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      {/* Background Gradient Orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 360, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-50 z-0"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6">
            {about.title.split(' ')[0]} <span className="gradient-text">{about.title.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Мы — ваш надежный партнер в мире нержавеющей стали. 
            Опыт, качество и индивидуальный подход к каждому клиенту.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 text-gray-300 font-light"
          >
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl text-center shadow-lg border border-white/10 hover:border-pink-500/30 transition-all duration-500 custom-shadow flex flex-col items-center justify-center min-h-[200px]"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-md shadow-purple-500/20">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 gradient-text leading-none">{stat.value}</h3>
                <p className="text-gray-400 text-base font-light text-center leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-4xl font-extralight text-white mb-12">
            {testimonials.title.split(' ').slice(0, 2).join(' ')} <span className="gradient-text">{testimonials.title.split(' ').slice(2).join(' ')}</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="glass-card p-8 rounded-2xl text-left shadow-lg border border-white/10 custom-shadow"
              >
                <p className="text-lg text-gray-300 italic mb-6 font-light">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About