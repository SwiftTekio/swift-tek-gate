import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: t.about.stat1, label: t.about.stat1Label },
    { value: t.about.stat2, label: t.about.stat2Label },
    { value: t.about.stat3, label: t.about.stat3Label },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${isRTL ? 'lg:order-2' : ''}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl transform rotate-3" />
              <div className="relative bg-slate-900 rounded-3xl p-8 transform -rotate-1">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🛒', label: 'eCommerce' },
                    { icon: '🤖', label: 'Chatbot' },
                    { icon: '☁️', label: 'Hosting' },
                    { icon: '📊', label: 'Analytics' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-slate-800 rounded-2xl p-6 text-center"
                    >
                      <span className="text-4xl mb-3 block">{item.icon}</span>
                      <span className="text-white font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'lg:order-1 text-right' : ''}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              {t.about.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              {t.about.title}
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {t.about.description}
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 mb-8`}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-slate-50"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {['Trusted by 500+ businesses', 'Award-winning support', '99.9% uptime guarantee'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}