import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Store, CreditCard, Tag, ShoppingBag, BarChart3, Smartphone } from 'lucide-react';

export default function Features() {
  const { t, isRTL } = useLanguage();

  const features = [
    { icon: Store, ...t.features.marketplace, color: 'text-purple-500', bg: 'bg-purple-50' },
    { icon: CreditCard, ...t.features.checkout, color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: Tag, ...t.features.pricing, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: ShoppingBag, ...t.features.recovery, color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: BarChart3, ...t.features.analytics, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { icon: Smartphone, ...t.features.mobile, color: 'text-pink-500', bg: 'bg-pink-50' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t.features.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
            {t.features.title}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className={`p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : ''}`}>
                <div className={`flex items-start gap-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}