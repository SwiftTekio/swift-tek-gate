import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';
import { ExternalLink, Filter, ChevronRight, Home } from 'lucide-react';
import Footer from '../components/home/Footer';
import portfolio1 from '@/assets/images/portfolio-1.jpg';
import portfolio2 from '@/assets/images/portfolio-2.jpg';
import portfolio3 from '@/assets/images/portfolio-3.jpg';
import portfolio4 from '@/assets/images/portfolio-4.jpg';

export default function Portfolio() {
  const { t, isRTL, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: language === 'ar' ? 'الكل' : 'All' },
    { id: 'ecommerce', label: language === 'ar' ? 'التجارة الإلكترونية' : 'E-commerce' },
    { id: 'sports', label: language === 'ar' ? 'رياضة ولياقة' : 'Sports & Fitness' },
    { id: 'automotive', label: language === 'ar' ? 'السيارات' : 'Automotive' },
    { id: 'fashion', label: language === 'ar' ? 'أزياء' : 'Fashion' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Sports Wear Store',
      titleAr: 'متجر الملابس الرياضية',
      category: 'sports',
      categoryLabel: 'Sports & Fitness',
      categoryLabelAr: 'رياضة ولياقة',
      image: portfolio1,
      gradient: 'from-orange-500 to-red-500',
      description: 'Complete e-commerce solution for sports apparel with inventory management',
      descriptionAr: 'حل متكامل للتجارة الإلكترونية للملابس الرياضية مع إدارة المخزون',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Outdoor Adventure',
      titleAr: 'مغامرات في الهواء الطلق',
      category: 'sports',
      categoryLabel: 'Sports & Lifestyle',
      categoryLabelAr: 'رياضة ونمط حياة',
      image: portfolio2,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Adventure gear e-commerce platform with booking system',
      descriptionAr: 'منصة تجارة إلكترونية لمعدات المغامرات مع نظام حجز',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Auto Parts Store',
      titleAr: 'متجر قطع غيار السيارات',
      category: 'automotive',
      categoryLabel: 'Automotive',
      categoryLabelAr: 'السيارات',
      image: portfolio3,
      gradient: 'from-blue-500 to-indigo-500',
      description: 'Professional automotive parts marketplace with VIN lookup',
      descriptionAr: 'سوق احترافي لقطع غيار السيارات مع البحث عن طريق رقم الهيكل',
      technologies: ['React', 'Express', 'MySQL'],
      link: '#'
    },
    {
      id: 4,
      title: 'Fashion Boutique',
      titleAr: 'متجر الأزياء',
      category: 'fashion',
      categoryLabel: 'Fashion & Apparel',
      categoryLabelAr: 'أزياء وملابس',
      image: portfolio4,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Luxury fashion store with AR try-on and style recommendations',
      descriptionAr: 'متجر أزياء فاخر مع خاصية التجربة الافتراضية وتوصيات الأنماط',
      technologies: ['Vue.js', 'Laravel', 'Redis'],
      link: '#'
    },
    {
      id: 5,
      title: 'Sports Nutrition',
      titleAr: 'التغذية الرياضية',
      category: 'sports',
      categoryLabel: 'Sports & Wellness',
      categoryLabelAr: 'رياضة وصحة',
      image: portfolio1,
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Supplements and nutrition e-commerce with meal planning',
      descriptionAr: 'متجر مكملات غذائية مع تخطيط الوجبات',
      technologies: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    },
    {
      id: 6,
      title: 'Luxury Fashion',
      titleAr: 'الأزياء الفاخرة',
      category: 'fashion',
      categoryLabel: 'Premium Fashion',
      categoryLabelAr: 'أزياء راقية',
      image: portfolio4,
      gradient: 'from-rose-500 to-pink-500',
      description: 'High-end fashion platform with personal styling service',
      descriptionAr: 'منصة أزياء راقية مع خدمة تنسيق شخصية',
      technologies: ['Next.js', 'Sanity', 'Vercel'],
      link: '#'
    },
    {
      id: 7,
      title: 'Car Dealership',
      titleAr: 'وكالة السيارات',
      category: 'automotive',
      categoryLabel: 'Automotive Sales',
      categoryLabelAr: 'بيع السيارات',
      image: portfolio3,
      gradient: 'from-slate-500 to-gray-500',
      description: 'Complete dealership management system with online showroom',
      descriptionAr: 'نظام إدارة وكالة متكامل مع صالة عرض إلكترونية',
      technologies: ['React', 'Django', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 8,
      title: 'Fitness Apparel',
      titleAr: 'ملابس اللياقة',
      category: 'sports',
      categoryLabel: 'Fitness & Activewear',
      categoryLabelAr: 'لياقة وملابس رياضية',
      image: portfolio2,
      gradient: 'from-teal-500 to-green-500',
      description: 'Activewear brand with subscription box service',
      descriptionAr: 'علامة ملابس رياضية مع خدمة الاشتراك الشهري',
      technologies: ['React', 'Shopify', 'GraphQL'],
      link: '#'
    },
    {
      id: 9,
      title: 'Designer Shoes',
      titleAr: 'أحذية مصممة',
      category: 'fashion',
      categoryLabel: 'Footwear',
      categoryLabelAr: 'أحذية',
      image: portfolio4,
      gradient: 'from-amber-500 to-orange-500',
      description: 'Premium shoe brand with 3D product visualization',
      descriptionAr: 'علامة أحذية راقية مع عرض المنتجات ثلاثي الأبعاد',
      technologies: ['Three.js', 'React', 'Node.js'],
      link: '#'
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumbs */}
      <section className="pt-24 pb-4 px-6">
        <div className="container mx-auto max-w-7xl">
          <nav className={`flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </a>
            <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-slate-900 font-medium">{language === 'ar' ? 'أعمالنا' : 'Portfolio'}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center ${isRTL ? 'text-right' : ''}`}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              {t.portfolio.label}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
              {language === 'ar' ? 'أعمالنا المميزة' : 'Our Featured Work'}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'استكشف مجموعة من مشاريعنا الناجحة التي ساعدت الشركات على النمو والازدهار'
                : 'Explore our collection of successful projects that have helped businesses grow and thrive'}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <div className={`flex items-center gap-2 text-slate-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'تصفية حسب:' : 'Filter by:'}
              </span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={isRTL ? project.titleAr : project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-slate-900 backdrop-blur-sm">
                      {isRTL ? project.categoryLabelAr : project.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
                    <motion.a
                      href={project.link}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <ExternalLink className="w-6 h-6 text-slate-900" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {isRTL ? project.titleAr : project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {isRTL ? project.descriptionAr : project.description}
                  </p>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-500 text-lg">
                {language === 'ar' ? 'لا توجد مشاريع في هذه الفئة' : 'No projects found in this category'}
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'هل لديك مشروع في ذهنك؟' : 'Have a Project in Mind?'}
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'دعنا نساعدك في تحويل فكرتك إلى واقع. تواصل معنا اليوم لمناقشة مشروعك'
                : "Let's help you turn your idea into reality. Contact us today to discuss your project"}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
