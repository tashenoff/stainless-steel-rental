import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send,
  CheckCircle,
  MessageCircle
} from 'lucide-react'
import contactsData from '../data/contacts.json'

const Contact = () => {
  const { phone: contactPhone, phoneSecondary, address, workingHours } = contactsData.contacts
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Формируем сообщение для WhatsApp
    const message = `Новая заявка с сайта nerja.kz:
    
Имя: ${formData.name}
Телефон: ${formData.phone}
${formData.message ? `Сообщение: ${formData.message}` : ''}

Дата: ${new Date().toLocaleDateString('ru-RU')} ${new Date().toLocaleTimeString('ru-RU')}`
    
    // Номер WhatsApp (используем первый номер из контактов)
    const whatsappNumber = '77717070011' // +7 (771) 707-00-11 без символов
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    // Открываем WhatsApp
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Наш адрес',
      details: [address],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Телефоны',
      details: [contactPhone, phoneSecondary],
      links: [`tel:${contactPhone.replace(/[^+\d]/g, '')}`, `tel:${phoneSecondary.replace(/[^+\d]/g, '')}`]
    },
    {
      icon: Clock,
      title: 'Режим работы',
      details: [workingHours.weekdays, workingHours.weekend],
      link: null
    }
  ]


  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 via-white/10 to-gray-50 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-bronze-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-6 py-3 glass-card rounded-full mb-8"
          >
            <MessageCircle className="w-5 h-5 text-bronze-300" />
            <span className="text-sm font-light text-bronze-300">Свяжитесь с нами</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight heading-bold heading-dark">
            Начнем
            <span className="block bg-gradient-to-r from-bronze-400 to-bronze-300 bg-clip-text text-transparent font-semibold">
              сотрудничество
            </span>
          </h2>
          
          <p className="text-2xl font-normal text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Готовы обсудить ваш проект и предложить оптимальные решения.
            Свяжитесь с нами любым удобным способом.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <div className="h-full">
              <h3 className="text-4xl font-black text-gray-900 mb-8 heading-dark">
                Контактная информация
              </h3>
              <div className="space-y-4 flex-1">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card p-6 h-full"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-bronze-500/20 to-bronze-600/20 rounded-xl flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-bronze-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white mb-3 text-lg">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-200 mb-1 font-light">
                            {info.links && info.links[idx] ? (
                              <a 
                                href={info.links[idx]} 
                                className="hover:text-bronze-400 transition-colors"
                                target={info.links[idx].startsWith('http') ? '_blank' : undefined}
                                rel={info.links[idx].startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {detail}
                              </a>
                            ) : info.link && idx === 0 ? (
                              <a 
                                href={info.link} 
                                className="hover:text-bronze-400 transition-colors"
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden flex flex-col h-full"
          >
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-bronze-500/5 to-bronze-600/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-semibold text-white mb-8">
                Отправить заявку
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-bronze-500 to-bronze-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-medium text-white mb-4">
                    Спасибо за заявку!
                  </h4>
                  <p className="text-gray-200 font-light">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-gray-300 mb-3">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-gray-300 mb-3">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
                        placeholder="+7 (777) 123-45-67"
                      />
                    </div>
                  </div>



                  <div>
                    <label className="block text-sm font-light text-gray-300 mb-3">
                      Сообщение
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/90 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none backdrop-blur-sm"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary group inline-flex items-center justify-center"
                  >
                    Отправить заявку
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center font-light">
                    * Обязательные поля для заполнения
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="w-full py-20 px-6 relative overflow-hidden bg-gray-800/95">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-bronze-500/20 via-transparent to-bronze-600/20"></div>
            
            <div className="container-custom relative z-10 space-y-8 text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 heading-bold">
                Нужна срочная консультация?
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto font-normal leading-relaxed">
                Позвоните нам прямо сейчас или напишите в WhatsApp — 
                мы ответим на все вопросы и поможем с выбором
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                     href={`tel:${contactPhone.replace(/[^+\d]/g, '')}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Позвонить сейчас
                </motion.a>
                <motion.a
                     href={`https://wa.me/${phoneSecondary.replace(/[^+\d]/g, '')}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact