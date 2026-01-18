import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { ShoppingCart, Bot, Cloud, Monitor, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: ShoppingCart,
      title: t.services.ecommerce.title,
      description: t.services.ecommerce.description,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-500/10 to-indigo-500/10',
      link: '/services/ecommerce',
    },
    {
      icon: Bot,
      title: t.services.marketing.title,
      description: t.services.marketing.description,
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      link: '/services/marketing',
    },
    {
      icon: Cloud,
      title: t.services.hosting.title,
      description: t.services.hosting.description,
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      link: '/services/hosting',
    },
    {
      icon: Monitor,
      title: t.services.pos.title,
      description: t.services.pos.description,
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      link: '/services/pos',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center max-w-3xl mx-auto mb-16`}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t.services.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            {t.services.title}
          </h2>
          <p className="text-slate-600 text-lg">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <a href={service.link}>
                <div className={`bg-white rounded-3xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                    <service.icon className={`w-8 h-8 text-blue-600`} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold text-slate-900 mb-3 ${isRTL ? 'text-right' : ''}`}>
                    {service.title}
                  </h3>
                  <p className={`text-slate-600 leading-relaxed mb-6 ${isRTL ? 'text-right' : ''}`}>
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className={`flex items-center gap-2 text-blue-600 font-medium group-hover:gap-4 transition-all ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <span>Learn More</span>
                    <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-90' : ''}`} />
                  </div>

                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}