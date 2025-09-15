import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, Eye, Heart, Share } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Все работы' },
    { id: 'sheets', name: 'Листовая сталь' },
    { id: 'pipes', name: 'Трубы' },
    { id: 'fittings', name: 'Фитинги' },
    { id: 'projects', name: 'Проекты' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'sheets',
      title: 'Премиум листы AISI 304',
      description: 'Зеркальная поверхность, толщина 2мм',
      image: 'https://images.unsplash.com/photo-1565731737503-3a9ccd7e4f3b?w=800&h=600&fit=crop',
      likes: 24,
      featured: true
    },
    {
      id: 2,
      category: 'pipes',
      title: 'Архитектурные трубы',
      description: 'Полированная поверхность, диаметр 50мм',
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&h=600&fit=crop',
      likes: 18,
      featured: false
    },
    {
      id: 3,
      category: 'fittings',
      title: 'Качественные фитинги',
      description: 'Премиальные соединительные элементы',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      likes: 31,
      featured: true
    },
    {
      id: 4,
      category: 'projects',
      title: 'Ресторан премиум-класса',
      description: 'Кухонное оборудование из нержавейки',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      likes: 42,
      featured: true
    },
    {
      id: 5,
      category: 'sheets',
      title: 'Перфорированные панели',
      description: 'Декоративные элементы интерьера',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      likes: 15,
      featured: false
    },
    {
      id: 6,
      category: 'pipes',
      title: 'Промышленные трубы',
      description: 'Большой диаметр для сложных систем',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop',
      likes: 28,
      featured: false
    },
    {
      id: 7,
      category: 'projects',
      title: 'Современные ограждения',
      description: 'Лестничные конструкции премиум-класса',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      likes: 37,
      featured: true
    },
    {
      id: 8,
      category: 'fittings',
      title: 'Фланцевые соединения',
      description: 'Высокопрочные промышленные элементы',
      image: 'https://images.unsplash.com/photo-1609205807107-e6ec2120f9d2?w=800&h=600&fit=crop',
      likes: 22,
      featured: false
    },
    {
      id: 9,
      category: 'projects',
      title: 'Производственная линия',
      description: 'Комплексное оснащение предприятия',
      image: 'https://images.unsplash.com/photo-1565731737503-3a9ccd7e4f3b?w=800&h=600&fit=crop',
      likes: 35,
      featured: true
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-black via-gray-900/10 to-black relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
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
            <Eye className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-light text-purple-400">Наши работы</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight">
            Галерея
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-light">
              проектов
            </span>
          </h2>
          
          <p className="text-xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Коллекция наших лучших работ и реализованных проектов с использованием 
            премиальной нержавеющей стали
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-light transition-all duration-500 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25'
                  : 'glass-card text-gray-400 hover:text-white hover:bg-white/10'
              } rounded-full`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden glass-card hover:bg-white/5 transition-all duration-700 cursor-pointer ${
                item.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(item)}
            >
              
              {/* Image Container */}
              <div className={`relative overflow-hidden ${
                item.featured ? 'h-96 lg:h-full' : 'h-64'
              }`}>
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="text-xl font-light text-white mb-2"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-gray-300 text-sm font-light mb-4"
                    >
                      {item.description}
                    </motion.p>
                    
                    {/* Actions */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex items-center space-x-1 text-pink-400">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                      <button className="text-gray-300 hover:text-white transition-colors">
                        <Share className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full">
                      Рекомендуем
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full glass-card overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-light text-white mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-pink-400">
                      <Heart className="w-5 h-5" />
                      <span>{selectedImage.likes}</span>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-4xl font-light text-white mb-4">
                Хотите увидеть больше?
              </h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Посетите наш выставочный зал или закажите индивидуальную презентацию 
                материалов для вашего проекта
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Записаться на презентацию
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery