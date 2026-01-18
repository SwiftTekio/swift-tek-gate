import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Heart, Shield, MessageCircle, Lightbulb, RefreshCw } from 'lucide-react';

export default function Values() {
  const { t, isRTL } = useLanguage();

  const values = [
    { icon: Heart, label: t.values.honesty, color: 'from-red-500 to-pink-500' },
    { icon: Shield, label: t.values.trust, color: 'from-blue-500 to-indigo-500' },
    { icon: MessageCircle, label: t.values.communication, color: 'from-green-500 to-emerald-500' },
    { icon: Lightbulb, label: t.values.innovation, color: 'from-yellow-500 to-orange-500' },
    { icon: RefreshCw, label: t.values.renewal, color: 'from-purple-500 to-violet-500' },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            {t.values.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {t.values.title}
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${value.color} p-[2px] rounded-2xl`}>
                <div className="bg-slate-900 rounded-2xl px-8 py-6 flex flex-col items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-white font-semibold text-lg">{value.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}