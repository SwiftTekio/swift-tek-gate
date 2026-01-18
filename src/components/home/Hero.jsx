import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-[90vh] bg-white pt-32 pb-20 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Meshes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100 to-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'lg:order-2 text-right' : ''}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-semibold">{t.hero.tagline}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]"
            >
              {t.hero.title.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                {t.hero.title.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-base rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              >
                {t.hero.cta}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base rounded-2xl"
              >
                <Play className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className={`flex flex-wrap gap-8 mt-12 ${isRTL ? 'justify-end' : ''}`}
            >
              {[
                { value: '200+', label: 'Solutions' },
                { value: '500+', label: 'Clients' },
                { value: '9.5/10', label: 'Rating' },
              ].map((stat, i) => (
                <div key={stat.label} className={isRTL ? 'text-right' : ''}>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="relative aspect-square">
                {/* Animated Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-cyan-200"
                />

                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="relative"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 flex items-center justify-center shadow-2xl shadow-blue-500/50"
                    >
                      <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 blur-2xl opacity-40 animate-pulse" />
                  </motion.div>
                </div>

                {/* Floating Orbs */}
                {[
                  { delay: 0, x: '85%', y: '10%', color: 'from-green-400 to-emerald-500', size: 'w-20 h-20' },
                  { delay: 0.2, x: '80%', y: '75%', color: 'from-purple-400 to-pink-500', size: 'w-16 h-16' },
                  { delay: 0.4, x: '5%', y: '80%', color: 'from-orange-400 to-red-500', size: 'w-24 h-24' },
                ].map((orb, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -20, 0],
                    }}
                    transition={{ 
                      opacity: { delay: 0.8 + orb.delay },
                      scale: { delay: 0.8 + orb.delay, type: "spring" },
                      y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className={`absolute ${orb.size} rounded-full bg-gradient-to-br ${orb.color} shadow-xl blur-sm opacity-80`}
                    style={{ left: orb.x, top: orb.y }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}