import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import portfolio1 from '@/assets/images/portfolio-1.jpg';
import portfolio2 from '@/assets/images/portfolio-2.jpg';
import portfolio3 from '@/assets/images/portfolio-3.jpg';
import portfolio4 from '@/assets/images/portfolio-4.jpg';

export default function Portfolio() {
  const { t, isRTL } = useLanguage();

  const themes = [
    {
      title: 'Sports Wear',
      category: 'Sports & Fitness',
      image: portfolio1,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Outdoor Adventure',
      category: 'Sports & Lifestyle',
      image: portfolio2,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Auto Parts',
      category: 'Automotive',
      image: portfolio3,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Fashion Store',
      category: 'Fashion & Apparel',
      image: portfolio4,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMDQwNjAiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            {t.portfolio.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-slate-400 text-lg">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                {/* Image */}
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />

                {/* Content */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-end ${isRTL ? 'text-right' : ''}`}>
                  <span className="text-slate-300 text-sm mb-1 group-hover:text-white/80 transition-colors">
                    {theme.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {theme.title}
                  </h3>
                  
                  {/* View Button */}
                  <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Button
                        size="sm"
                        className="bg-white text-slate-900 hover:bg-slate-100"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/portfolio">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              {t.portfolio.viewAll}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}